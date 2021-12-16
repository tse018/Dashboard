<template>
   <div class="quiz">
      <div class="quiz__container" v-if="!showScore">
         <button @click="startQuiz" v-if="!beginQuiz" class="quiz__start-button">
            Click to start the Quiz
         </button>

         <div v-else="beginQuiz" class="quiz__started">
            <h2 class="quiz__title">
               Quiz have started
            </h2>

            <div class="quiz__counting-quiz">
               Question Number {{ currentQuestion + 1 }} / {{ questions.length }}
            </div>

            <div class="quiz__countdown">
               {{ countDown }}
            </div>

            <div class="quiz__task">
               {{ questions[currentQuestion].questionText }}
            </div>

            <div class="quiz__options">
               <button @click="checkAnswers(answer.check)" v-for="(answer, index) in questions[currentQuestion].answerOptions" class="quiz__button">
                  {{ answer.option }}
               </button>
            </div>
         </div>
      </div>

      <!-- if showScore = true, this entire score result will show -->
      <div class="quiz__score" v-if="showScore">
         <div class="quiz__result">
            You scored {{ score }} of {{ questions.length }}
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
                  questionText: 'What does "FTP" stand for in the computer and internet world?',
                  answerOptions: [
                     { option: 'Free To Play',              check: false },
                     { option: 'File Transfer Protocol',    check: true },
                     { option: 'Free Transfer Protocol',    check: false },
                     { option: 'Free Training Program',     check: false },
                  ],
               },
               {
                  questionText: 'In what year was Google launched on the web?',
                  answerOptions: [
                     { option: '1990', check: false },
                     { option: '2005', check: false },
                     { option: '2001', check: false },
                     { option: '1998', check: true },
                  ],
               },
               {
                  questionText: 'Who painted the Mona Lisa',
                  answerOptions: [
                     { option: 'Leonardo Da Vinci',  check: true },
                     { option: 'Picasso',            check: false },
                     { option: 'Gustave Eiffel',     check: false },
                     { option: 'Bram Stocker',       check: false },
                  ],
               },
               {
                  questionText: 'What is the first element in the periodic table?',
                  answerOptions: [
                     { option: 'Li',   check: false },
                     { option: 'H',    check: true },
                     { option: 'Hs',   check: false },
                     { option: 'Ra',   check: false },
                  ],
               },
               {
                  questionText: 'How many eyes does a honeybee have?',
                  answerOptions: [
                     { option: 'Four',    check: false },
                     { option: 'Three',   check: false },
                     { option: 'Two',     check: false },
                     { option: 'Five',    check: true },
                  ],
               },
               {
                  questionText: 'Who was the dictator of Cuba?',
                  answerOptions: [
                     { option: 'Saddam Hussain',       check: true },
                     { option: 'Fidel Castro',         check: false },
                     { option: 'George Washington',    check: false },
                     { option: 'Muammar Gaddafi',      check: false },
                  ],
               },
               {
                  questionText: 'Who is the dictator of Cuba?',
                  answerOptions: [
                     { option: 'George Washington',     check: false },
                     { option: 'Muammar Gaddafi',       check: false },
                     { option: 'Fidel Castro',          check: true },
                     { option: 'Saddam Hussain',        check: false },
                  ],
               },
               {
                  questionText: 'Which vegetable can be sweet or bitter?',
                  answerOptions: [
                     { option: 'Potato',     check: false },
                     { option: 'Onion',      check: false },
                     { option: 'Lemons',     check: false },
                     { option: 'Pepper',     check: true },
                  ],
               },
               {
                  questionText: 'What is the largest vegetable?',
                  answerOptions: [
                     { option: 'Pumpkin',     check: true },
                     { option: 'Cabbage',     check: false },
                     { option: 'Cucumber',    check: false },
                     { option: 'Squash',      check: false },
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
   .quiz {
      position: relative;
      border: 2px solid red;
   }

   .quiz__container {
      width: 500px;
      height: 250px;
   }

   .quiz__start-button {
      font-size: 40px;
      font-weight: bold;
      margin: 60px;
   }

   .quiz__title {
      font-size: 20px;
      font-weight: bold;
   }

   .quiz__counting-quiz {
      position: absolute;
      bottom: 0;
      font-size: 20px;
   }

   .quiz__countdown {
      position: absolute;
      font-style: italic;
      right: 20;
      top: 0;
      font-size: 25px;
      color: red;
   }    

   .quiz__task {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
   }

   .quiz__options {
      display: flex;
      height: 100px;
   }

   .quiz__button {
      margin: auto;
      font-size: 25px;
      cursor: pointer;
   }

</style>