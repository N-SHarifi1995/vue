<template>
  <v-container>
  <userauth :submitform="login" :nameneed="false"></userauth>
  </v-container>
</template>

<script>

import userauth from './userauth.vue'
export default {
  data() {
   
  },
  components:{userauth},

  methods: {
    async login(userinfo) {
 
      let userr = await this.$store.dispatch("login", userinfo);    
       console.log(userr)
      if (userr.error) {
        alert('hi')
        alert(userr.error);
      } else {
        alert("Thank you ");
      }
    },
  },
};
</script>

<style></style>
