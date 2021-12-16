<template>
   <div class="menu">
      <button @click="displayMenu" aria-label="open menu">
         <i class="fas fa-bars fa-2x"></i>
      </button>

      <nav class="menu__nav" v-if="this.menuVisible">
         <ul>
            <li>
               <RouterLink v-for="page in navigationPages" :to="{ name: page.title, params: { page_id: page.id }}" class="menu__links">
                  {{ page.title }}
               </RouterLink>
            </li>
         </ul>
      </nav>
   </div>
</template>

<script>
   export default {
      computed: {
         navigationPages() {
            return this.$store.getters.getPages;
         }
      },

      data() {
         return {
            menuVisible: false,
         }
      },

      methods: {
         displayMenu() {
            this.menuVisible = !this.menuVisible;
         }
      },
   }
</script>

<style>
   .fa-bars {
      position: absolute;
      top: 5;
      right: 5;
   }

   .menu__nav {
      position: absolute ;
      top: 50px;
      width: 550px;
      height: 250px;
      background-color: #E5E5E5;
      z-index: 100;
   }

   .menu__links {
      display: block;
      text-align: center;
      font-size: 20px;
      text-decoration: none;
      padding: 20px 0 0 0;
   }

</style>