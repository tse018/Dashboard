<template>
   <!-- mounting font icons with attribue done, add and remove for emit/events -->
   <i class="fas fa-check-circle fa-2x" v-if="font === 'done'"></i>

   <i class="fas fa-plus fa-2x" v-else-if="font === 'add'"></i>

   <i class="fas fa-minus-circle fa-2x" v-else-if="font === 'remove'"></i>
</template>

<script>
   export default {
      // props - sending font values as String to TodoItem and TodoList components
      props: {
         font: { type: String },
      }
   }
</script>

<style>
   .fa-check-circle {
      cursor: pointer;
      color: rgba(44, 44, 44);
   }

   .fa-check-circle:hover {
      color: rgb(117, 117, 177);
   }

   .fa-plus {
      position: absolute;
      left: 5px;
      bottom: 15px;
      color: white;
   }

   .fa-minus-circle {
      cursor: pointer;
      color: rgb(51, 51, 51);
   }

   .fa-minus-circle:hover {
      color: rgb(117, 117, 117);
   }
</style>