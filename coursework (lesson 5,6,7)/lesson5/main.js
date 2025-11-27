const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "assets/images/socks_blue.jpg",
      instock: true,
      inventory: 12,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
});

const mountedApp = app.mount("#app");
