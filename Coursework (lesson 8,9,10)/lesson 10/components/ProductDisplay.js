const ProductDisplay = {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" :alt="product" :class="{ 'out-of-stock-img': !inStock }">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>

        <product-details :details="details"></product-details>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }">
        </div>

        <ul>
          <li v-for="size in sizes" :key="size">{{ size }}</li>
        </ul>

        <!-- Add to cart -->
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart">
          Add to Cart
        </button>

        <!-- Remove from cart -->
        <button 
          class="button remove-btn"
          :disabled="cartIsEmpty"
          @click="removeFromCart">
          Remove from Cart
        </button>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      onSale: true,
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 }
      ],
      sizes: ["S", "M", "L", "XL"]
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return this.onSale
        ? `${this.brand} ${this.product} is on sale!`
        : `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    shipping() {
      return this.premium ? "Free" : "$2.99";
    },
    cartIsEmpty() {
      return this.$root.cart.length === 0;
    }
  }
};
