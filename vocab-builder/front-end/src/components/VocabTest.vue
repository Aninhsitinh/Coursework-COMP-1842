<template>
  <div>
    <h2>Score: {{ score }} out of {{ questionCount }}</h2>

    <form @submit.prevent="onSubmit" v-if="currentQuestionIndex <= questionCount">
      
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> German
        </div>
        <input type="text" readonly :disabled="testOver" :value="currentWord.german"/>
      </div>
      
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" placeholder="Enter word..." v-model="userAnswer.english" :disabled="testOver" autocomplete="off" />
      </div>
      
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="vietnam flag"></i> Vietnamese
        </div>
        <input type="text" readonly :disabled="testOver" :value="currentWord.vietnamese"/>
      </div>
      
      <button class="positive ui button" type="submit" :disabled="testOver">Submit</button>
      
    </form>

    <div v-if="testOver">
        <h3>Test Completed!</h3>
        <p>Your final score is: {{ score }} / {{ questionCount }}</p>
        <button class="ui button" @click="resetTest()">Retry</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VocabTest',
  props: {
    words: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentWord: {},
      userAnswer: { english: '' },
      score: 0,
      questionCount: 5,
      currentQuestionIndex: 0,
      testOver: false
    };
  },
  mounted() {
    this.nextQuestion();
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex >= this.questionCount || this.words.length === 0) {
        this.testOver = true;
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * this.words.length);
      this.currentWord = this.words[randomIndex];
      
      this.userAnswer.english = '';
      this.currentQuestionIndex++;
    },

    onSubmit() {
      const correct = this.currentWord.english.toLowerCase().trim();
      const answer = this.userAnswer.english.toLowerCase().trim();

      if (answer === correct) {
        this.score++;
        alert('Correct!');
      } else {
        alert(`Incorrect. The correct answer is: ${this.currentWord.english}`);
      }
      
      // Move to the next question after a short delay
      setTimeout(() => {
        this.nextQuestion();
      }, 500);
    },

    resetTest() {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.testOver = false;
        this.nextQuestion();
    }
  }
};
</script>