const ProductDetails = {
  props: ['details'],
  template: `
    <ul>
      <li v-for="detail in details" :key="detail">{{ detail }}</li>
    </ul>
  `
};
