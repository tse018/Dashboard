<template>
   <!-- 
      if task is done, then put it in task__done, 
      otherwise don´t do anything 
   -->
   <div :class="`task ${task.done ? 'task__done' : ''}`">
      <!-- 
         emit method gets triggered whenever user clicks on font-icon
      -->
      <button @click="eventDone" class="task__finish" aria-label="Done">
         <TodoIcons :font="'done'" /> 
      </button>

      <!-- 
         :ref is added so it can be used to register what task input user write,
         and returns as a object.
      -->
         <input class="task__input" :ref="task.id" type="text" v-model="task.text" placeholder="New Todo" v-on:keyup.enter="eventDone" aria-label="write what you want to do" />

      <!-- emit method gets triggered whenever user clicks on font-icon -->
      <button @click="eventRemove" class="task__remove" aria-label="Remove">
         <TodoIcons :font="'remove'" />
      </button>
   </div>
</template>

<script>
   import TodoIcons from '../components/TodoIcons.vue';

   export default {
      components: {
         TodoIcons,
      },

      // sending tasks as objects because of $refs - returns an object
      props: {
         task: { type: Object },
      },

      // $refs document.querySelector task.id input in HTML and focus highlights the input box
      mounted() {
         this.$refs[this.task.id].focus();
      },

      /*
         emmit allows you to pass custom made events up to different components.
         Mostly been used to notify the parent component that something have changed,
         in this case we want to update todolist tasks by removing, add or update the task.
      */

      methods: {
         // eventDone custom made event triggers when user click on done-button, which is specified in TodoIcons component
         eventDone() {
            this.$emit('done', this.task);
         },

         // event listener when clicking on add-button, which is specified in TodoIcons component
         eventAdd() {
            this.$emit('add', this.task);
         },

         // eventRemove custom made event trigger when user click on remove-button, which is specified in TodoIcons component
         eventRemove() {
            this.$emit('remove', this.task);
         },
      },
   };
</script>

<style>
   .task {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 10px;
   }

   .task__input {
      width: 350px;
      border-radius: 40px;
      padding-left: 15px;
   }

   .task__finish {
      text-decoration: line-through;
      color: rgb(124, 124, 124);
   }

   .task__done input {
      text-decoration: line-through;
      color: rgb(124, 124, 124);
   }
</style>