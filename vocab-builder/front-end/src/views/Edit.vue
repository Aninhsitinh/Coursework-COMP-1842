<template>
  <div>
    <h1>Edit Word</h1>
    <word-form :word="this.word" @createOrUpdate="createOrUpdate"></word-form>
  </div>

</template>

<script>
import { api } from '../helpers/helpers';
import WordForm from '../components/WordForm.vue';

export default {
  name: 'edit',
  components: {
    'word-form': WordForm
  },
  data() {
    return {
      word: {}
    };
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  },
  methods: {
    createOrUpdate: async function(word) {
      const res = await api.updateWord(word); 
      this.$router.push(`/words/${res._id}`); 
    }
  }
};
</script>