const products = [{
    id: 1,
    name: "Cheese Cloud Chocolate",
    price: 15000,
    originalPrice: 26000,
    category: "cheese",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-8/files/20241005-1910_51e92db28e6cd1bc711bd3100b0d9d51.jpg"
  },
  {
    id: 2,
    name: "Caramel Cheese Latte",
    price: 15000,
    originalPrice: 26000,
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
  },

  {
    id: 21,
    name: "Coconut Aren Frappe",
    price: 15000,
    originalPrice: 25000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rGW8.4-20241007-094141-0000.png"
  },
  {
    id: 22,
    name: "Oat Aren Frappe",
    price: 15000,
    originalPrice: 27000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rvyF.5-20241007-094141-0001.png"
  },
  {
    id: 23,
    name: "Coffee Frappe",
    price: 15000,
    originalPrice: 24000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0r4O9.6-20241007-094141-0002.png"
  },
  {
    id: 24,
    name: "Aren Latte Frappe",
    price: 15000,
    originalPrice: 25000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rBmX.7-20241007-094142-0003.png"
  },
  {
    id: 25,
    name: "Matcha Frappe",
    price: 15000,
    originalPrice: 27000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rJzK.8-20241007-094142-0004.png"
  },
  {
    id: 26,
    name: "Chocolate Frappe",
    price: 15000,
    originalPrice: 24000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rps6.9-20241007-094142-0005.png"
  },
  {
    id: 27,
    name: "Caffe Mocha Frappe",
    price: 15000,
    originalPrice: 25000,
    category: "frappe",
    image: "https://i.im.ge/2024/10/07/k0rps6.9-20241007-094142-0005.png"
  },

  {
    id: 28,
    name: "Coconut Choco",
    price: 15000,
    originalPrice: 22000,
    category: "noncoffee",
    image: "https://s3.ap-northeast-1-ntt.wasabisys.com/ak1520d-filenow-5/files/20241006-2215_d5fba1ad042c05da833c58e5ea595ecf.jpg"
  },
  {
    id: 29,
    name: "Matcha Oat Latte",
    price: 15000,
    originalPrice: 28000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki4ipJ.1-20241006-225418-0000.png"
  },
  {
    id: 30,
    name: "Choco Oat Latte",
    price: 15000,
    originalPrice: 28000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki4hCa.2-20241006-225418-0001.png"
  },
  {
    id: 31,
    name: "Pink Pop Lemonade",
    price: 15000,
    originalPrice: 14000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki4S2r.3-20241006-225418-0002.png"
  },
  {
    id: 32,
    name: "Pink Pop Lemon Tea",
    price: 15000,
    originalPrice: 17000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki41pm.4-20241006-225418-0003.png"
  },
  {
    id: 33,
    name: "Hojicha Oat Latte",
    price: 15000,
    originalPrice: 30000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki452y.5-20241006-225418-0004.png"
  },
  {
    id: 34,
    name: "Chocolate",
    price: 15000,
    originalPrice: 21000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki4dwW.6-20241006-225418-0005.png"
  },
  {
    id: 35,
    name: "Matcha Latte",
    price: 15000,
    originalPrice: 27000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/06/ki4qK0.7-20241006-225418-0006.png"
  },
  {
    id: 36,
    name: "Jasmine Green Tea",
    price: 15000,
    originalPrice: 17000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/07/k0raPK.1-20241007-093420-0000.png"
  },
  {
    id: 37,
    name: "Earl Grey Tea",
    price: 15000,
    originalPrice: 17000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/07/k0rIFX.2-20241007-093420-0001.png"
  },
  {
    id: 38,
    name: "Pure Chamomile",
    price: 15000,
    originalPrice: 17000,
    category: "noncoffee",
    image: "https://i.im.ge/2024/10/07/k0r7k9.3-20241007-093420-0002.png"
  },
  {
    id: 39,
    name: "Vanilla Espresso Shaken",
    price: 15000,
    originalPrice: 26000,
    category: "shaken",
    image: "https://i.im.ge/2024/10/07/k0UvA9.Screenshot-2024-10-07-17-48-31-885-com-tomoro-indonesia-android.png"
  },
  {
    id: 40,
    name: "Caramel Espresso Shaken",
    price: 15000,
    originalPrice: 26000,
    category: "shaken",
    image: "https://i.im.ge/2024/10/07/k0UvA9.Screenshot-2024-10-07-17-48-31-885-com-tomoro-indonesia-android.png"
  },
];
