const ProductDetails = {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  `
};
