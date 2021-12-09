<template>
   <div class="quiz">

      <!-- 
         if showScore = true, this entire div block will show -->
      <div class="quiz__score" v-if="showScore">

         <!-- which means the quiz is over and can reveal the score out of how many questions -->
         <div class="quiz__result">
            You score {{ score }} of {{ questions }}
         </div>

      </div>

      <div class="quiz__container">

         <button class="quiz__button" v-if="!beginQuiz" @click="startQuiz"> 
            Click to start the Quiz
         </button>

         <div v-else="beginQuiz">
            Quiz have started
         </div>

         <div class="quiz__number">
            Question Number {{ currentQuestion + 1 }} / {{ questions.length }}
         </div>

         <div class="quiz__countdown">
            {{ countDown }}
         </div>

         <div class="quiz__text">
            {{ questions[currentQuestion].questionText }}
         </div>

         <div class="quiz__options">

            <button class="quiz__button" :key="index" v-for="(answer, index) in questions[currentQuestion].answerOptions" @click="checkAnswers">
               {{ answer.option }}
            </button>

         </div>

      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            currentQuestion: 0,
            showScore: false,
            score: 0,
            countDown: 15,
            timer: null,
            beginQuiz: false,

            questions: [
               {
                  questionText: 'Hvilken av disse filmene vant Oscar for beste film??',
                  answerOptions: [
                     { option: '', answer: false },
                     { option: 'asdsa', answer: false },
                     { option: 'asda', answer: false },
                     { option: 'as', answer: true },
                  ],
               },

               {
                  questionText: 'rew?',
                  answerOptions: [
                     { option: 'ads', answer: false },
                     { option: 'asd', answer: false },
                     { option: 'asd', answer: false },
                     { option: 'sa', answer: true },
                  ],
               },

               {
                  questionText: 'werew?',
                  answerOptions: [
                     { option: 'ew', answer: false },
                     { option: 'ew', answer: false },
                     { option: 'sd', answer: false },
                     { option: 'sd', answer: true },
                  ],
               },

               {
                  questionText: 'bla bla?',
                  answerOptions: [
                     { option: '', answer: false },
                     { option: '', answer: false },
                     { option: '', answer: false },
                     { option: '', answer: true },
                  ],
               },

               {
                  questionText: 'bla bla?',
                  answerOptions: [
                     { option: '', answer: false },
                     { option: '', answer: false },
                     { option: '', answer: false },
                     { option: '', answer: true },
                  ],
               },

            ],
         };
      },

      methods: {
         startQuiz() {
            this.beginQuiz = true;
            this.countingDown();
         },

         checkAnswers(answer) {
            clearTimeout(this.timer);
            const nextQuestion = this.currentQuestion + 1;
            if (answer) {
               this.score = this.score + 1;
            }

            if (nextQuestion < this.questions.length) {
               this.currentQuestion = nextQuestion;
               this.countDown = 15;
               this.countingDown();
            } else {
               this.showScore = true;
            }
         },

         countingDown() {
            if (this.countDown > 0) {
               this.timer = setTimeout(() => {
                  this.countDown -= 1;
                  this.countingDown() }, 1000);
               } else {
                  this.checkAnswers(false);
               }
            }

         },
      };
</script>

<style>
</style>