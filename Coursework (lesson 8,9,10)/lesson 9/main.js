const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: true
    };
  },
  methods: {
    updateCart() {
      this.cart += 1;
    }
  }
});

app.component('product-details', ProductDetails);
app.component('product-display', ProductDisplay);
app.mount('#app');
