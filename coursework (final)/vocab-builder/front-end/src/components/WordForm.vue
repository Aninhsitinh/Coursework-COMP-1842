<template>
  <form @submit.prevent="onSubmit" class="ui form">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.german" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.english" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="vietnam flag"></i> Vietnamese
      </div>
      <input type="text" placeholder="Enter word..." v-model="word.vietnamese" />
    </div>

    <div class="ui segment">
      <button class="positive ui button" type="submit">Submit</button>
    </div>

  </form>
</template>

<script>
export default {
    name: 'word-form',
    props: {
        word: { 
            type: Object,
            required: true
        }
    },
    data() {
      return {
        errorsPresent: false
      };
    },
    methods: {
        onSubmit: function() {
            this.errorsPresent = false;
            this.$emit('createOrUpdate', this.word); 
        }
    }
};
</script>

<style scoped>
.error {
    color: red;
}
</style>