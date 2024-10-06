document.addEventListener("DOMContentLoaded", function () {

    let cart = [];

    // Fungsi untuk memformat angka ke dalam format Rupiah
    function formatRupiah(amount) {
        return amount.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        });
    }

    function displayProducts(filter = "*") {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";

        const categories = [...new Set(products.map(product => product.category))];

        categories.forEach(category => {
            const categoryHeader = document.createElement("h2");
            categoryHeader.innerText = category.charAt(0).toUpperCase() + category.slice(1);
            productList.appendChild(categoryHeader);

            const filteredProducts = products.filter(product => {
                return product.category === category && (filter === "*" || product.category === filter.replace(".", ""));
            });

            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("category-container");

            filteredProducts.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product", product.category);

                // Tentukan apakah harga asli dan harga diskon ditampilkan
                const priceDisplay = product.price !== product.originalPrice ?
                    `<p class="fs-6 text-danger"><span style="text-decoration: line-through; color: gray;">${formatRupiah(product.originalPrice)}</span> ${formatRupiah(product.price)}</p>` :
                    `<p class="fs-6 text-danger">${formatRupiah(product.price)}</p>`;

                productElement.innerHTML = `
                <div class="row align-items-center mb-3">
                    <div class="col-3 col-lg-2">
                        <img src="${product.image}" alt="${product.name}" class="product-image" style="width: 80px; height: 80px" />
                    </div>
                    <div class="col-7 col-lg-8">
                        <h5 class="fs-5 pt-2">${product.name}</h5>
                        ${priceDisplay}
                    </div>
                    <div class="col-2 d-flex justify-content-end align-items-end">
                        <button class="btn btn-primary rounded-pill btn-sm" data-id="${product.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
                categoryContainer.appendChild(productElement);
            });

            productList.appendChild(categoryContainer);
        });

        const buttons = document.querySelectorAll(".product button");
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const productId = parseInt(this.getAttribute("data-id"));
                addToCart(productId);
            });
        });
    }



    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCart();
    }

    function updateCart() {
        const cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = "";
        let total = 0;
        let totalQuantity = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            totalQuantity += item.quantity;
            cartDiv.innerHTML += `
                    <div class='row'>
                        <div class='col-7'>${item.name} </div>
                        <div class='col-1'>${item.quantity}x</div>
                        <div class='col-2'>${formatRupiah(itemTotal)}</div>
                        <div class='col-2 d-flex justify-content-end'>
                            <a class="remove-item text-danger rounded-pill btn-sm" data-index="${index}">
                                <i class="fas fa-times"></i>
                            </a>
                        </div>
                    </div>`;
        });

        document.getElementById("total").innerText = formatRupiah(total);

        // Update jumlah produk di bubble
        document.getElementById("cart-count").innerText = totalQuantity;

        // Tambahkan event listener untuk tombol hapus
        const removeButtons = document.querySelectorAll(".remove-item");
        removeButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = parseInt(this.getAttribute("data-index"));
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1); // Hapus item dari keranjang
        updateCart(); // Perbarui tampilan keranjang
    }

    document.getElementById("search").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const productList = document.querySelectorAll(".product");

        productList.forEach(product => {
            const isVisible = product.innerText.toLowerCase().includes(query);
            product.style.display = isVisible ? "block" : "none";
        });
    });

    const filterButtons = document.querySelectorAll(".filters button");
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");
            displayProducts(filterValue);
        });
    });

    function sendWhatsAppMessage(name, location) {
        const message = cart.map(item => `${item.name} - ${item.quantity}x`).join('%0A');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const finalMessage = `Nama: ${name}%0ALokasi Tomoro: ${location}%0A%0A${message}%0A%0ATotal: ${formatRupiah(total)}`;
        const phoneNumber = "6285156477250"; // Ganti dengan nomor WhatsApp yang dituju
        const url = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
        window.open(url, '_blank');
    }

    document.getElementById("order-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form
        const name = document.getElementById("name").value;
        const location = document.getElementById("location").value;

        // Mengirim pesan ke WhatsApp
        sendWhatsAppMessage(name, location);

        // Mengosongkan keranjang tetapi tidak mereset input name dan location
        cart = [];
        updateCart();

        // Reset form kecuali input name dan location
        document.querySelectorAll("#order-form input").forEach(input => {
            if (input.id !== "name" && input.id !== "location") {
                input.value = '';
            }
        });
    });


    // Menampilkan semua produk saat halaman dimuat
    displayProducts();
});
