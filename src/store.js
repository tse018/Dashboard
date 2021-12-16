export default {
   state() {
      return {
         pages: [
            { title: 'contactform',    id: 'contactform'},
            { title: 'quizapp',        id: 'Quizapp'},
            { title: 'slideshow',      id: 'slideshow'},
            { title: 'todolist',       id: 'todolist'},
            { title: 'sorttable',      id: 'sorttable'},
         ]
      }
   },

   getters: {
      getPages(state) {
         return state.pages;
      }
   },
};