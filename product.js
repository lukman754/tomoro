const products = [{
    id: 1,
    name: "Cheese Cloud Chocolate",
    price: 15000,
    originalPrice: 26000, // Harga asli yang dicoret
    category: "cheese",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-8/files/20241005-1910_51e92db28e6cd1bc711bd3100b0d9d51.jpg"
  },
  {
    id: 2,
    name: "Caramel Cheese Latte",
    price: 15000,
    originalPrice: 26000, // Harga asli sama, tidak dicoret
    category: "cheese",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-2/files/20241006-1646_c0dc53da26a601b442b409626fc3b841.jpg"
  },
  {
    id: 3,
    name: "Cheese Cloud Latte",
    price: 15000,
    originalPrice: 26000,
    category: "cheese",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-2/files/20241006-1646_c0dc53da26a601b442b409626fc3b841.jpg"
  },
  {
    id: 4,
    name: "Coconut Choco",
    price: 15000,
    originalPrice: 22000,
    category: "coconut",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-5/files/20241006-2215_d5fba1ad042c05da833c58e5ea595ecf.jpg"
  },
  {
    id: 5,
    name: "Coconut Aren Frappe",
    price: 15000,
    originalPrice: 25000,
    category: "coconut",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-5/files/20241006-2217_400bbcd2bc80c56ca5fe048f01ee0f84.jpg"
  },
  {
    id: 6,
    name: "TOMORO Coconut Latte",
    price: 15000,
    originalPrice: 22000,
    category: "coconut",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-11/files/20241006-2218_59eb8eeb7fb00e272c83146607c2cdfd.jpg"
  },
  {
    id: 7,
    name: "Coconut Aren Latte",
    price: 15000,
    originalPrice: 24000,
    category: "coconut",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-2/files/20241006-2218_13740ce222dd520a1cda40117865c814.jpg"
  },
  {
    id: 8,
    name: "Sea Salt Cloud Matcha Latte",
    price: 15000,
    originalPrice: 28000,
    category: "cloud",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-10/files/20241006-2219_ca4d38ae352128b63b11107a6479dae0.jpg"
  },
  {
    id: 9,
    name: "Sea Salt Cloud Caramel Latte",
    price: 15000,
    originalPrice: 28000,
    category: "cloud",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-6/files/20241006-2219_a24fb935743ee515d849e9798e79a1f0.jpg"
  },
  {
    id: 10,
    name: "Sea Salt Cloud Chocolate",
    price: 15000,
    originalPrice: 25000,
    category: "cloud",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-11/files/20241006-2220_e58e87f82fe774c51bc3121e9e08979d.png"
  },
  {
    id: 11,
    name: "TOMORO Aren Latte",
    price: 15000,
    originalPrice: 20000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-2/files/20241006-2141_4ca51dee850052cf0d3a46476dd4bc90.jpg"
  },
  {
    id: 12,
    name: "TOMORO Oat Latte",
    price: 15000,
    originalPrice: 24000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-9/files/20241006-2144_15565673d25e432514f5b133e67f390f.jpg"
  },
  {
    id: 13,
    name: "Manuka Oat Latte",
    price: 15000,
    originalPrice: 30000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-5/files/20241006-2145_f95c87d0e66f3e6b381a0641c480a415.jpg"
  },
  {
    id: 14,
    name: "Caffe Latte",
    price: 15000,
    originalPrice: 24000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-12/files/20241006-2146_b84dcc85bc77e3f1cb758132fb248301.jpg"
  },
  {
    id: 15,
    name: "Caffe Americano",
    price: 15000,
    originalPrice: 18000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-5/files/20241006-2146_ae1034d261991c097e67851c0d7a033d.jpg"
  },
  {
    id: 16,
    name: "Breve Latte",
    price: 15000,
    originalPrice: 30000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-3/files/20241006-2147_9d554c9aa0a1e175ed26bde8e5744f4d.jpg"
  },
  {
    id: 17,
    name: "Cappuccino",
    price: 15000,
    originalPrice: 24000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-12/files/20241006-2149_c0002dc6437ac38c8d53141874c3ca2f.jpg"
  },
  {
    id: 18,
    name: "Caffe Mocha",
    price: 15000,
    originalPrice: 25000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-3/files/20241006-2150_68065c067154100d4dae87db2a816a81.jpg"
  },
  {
    id: 19,
    name: "Flat White",
    price: 15000,
    originalPrice: 24000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-3/files/20241006-2147_9d554c9aa0a1e175ed26bde8e5744f4d.jpg"
  },
  {
    id: 20,
    name: "Caramel Macchiato",
    price: 15000,
    originalPrice: 25000,
    category: "coffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-11/files/20241006-2150_d8f4c19159b2192145a0b17c42411de5.jpg"
  }

];
