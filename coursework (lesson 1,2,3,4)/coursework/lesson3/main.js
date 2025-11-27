// main.js
const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",  
      description: {
        Size: "Medium",
        Color: "Blue"
      },
      url: "assets/images/socks_green.jpg" 
    };
  }
});

app.mount("#app");  