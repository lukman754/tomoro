@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    font-family: "Poppins",
        sans-serif;
}

body {
    background-color: wheat;
}

.col-12 a {
    background-color: #ff6347;
    color: white;
}

.col-12 a:hover {
    color: #ff6347;
}

.category {
    border: 0;
    width: 100%;
    background: transparent;
    margin-bottom: 5px;
    color: white;
}

.cart-bubble {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #2b2b2b;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.cart-bubble:hover {
    background-color: #ff4500;
}

.arrow-up {
    position: fixed;
    left: 20px;
    bottom: 20px;
    background-color: #2b2b2b;
    color: white;
    padding: 10px 10px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}


.product-list .row .col-2 .btn {
    background-color: #ff6347;
    border: 0;
}

.product-list .row .col-2 .btn:hover {
    background-color: #333333;
}

h2 {
    display: none;
}

.filters li {
    text-align: left;
}

.filters .category {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background: none;
    border: none;
    color: rgb(195, 195, 195);
    background-color: #7f7f7f;
    padding: 5px 10px;
}

.filters .category::after {
    background-color: #2b2b2b;
}

.filters .category span {
    display: flex;
    align-items: center;
}

.filters .category span::before {
    margin-right: 10px;
}


.tags {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    /* Mengizinkan scroll horizontal */
    white-space: nowrap;
}

.tag {
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

header .tags .matcha {
    background-color: #658147;
    color: white;
}

header .tags .oat {
    background-color: #F6DCAC;
    color: #603F26;
}

header .tags .latte {
    background-color: #914F1E;
    color: white;
}

header .tags .aren {
    background-color: #91371e;
    color: white;
}

header .tags .choco {
    background-color: #603F26;
    color: white;
}

header .tags .americano {
    background-color: #8D493A;
    color: white;
}

.categories-wrapper {
    white-space: nowrap;
}

.btn-pill {
    padding: 0.5rem 1.25rem;
    white-space: nowrap;
    text-align: center;
}


@media (max-width: 576px) {
    .product-image {
        width: 80px;
        height: 80px;
    }

    h3 {
        font-size: 1.25rem;
        /* Responsif ukuran h3 */
    }

    p {
        font-size: 1rem;
        /* Responsif ukuran p */
    }
}
