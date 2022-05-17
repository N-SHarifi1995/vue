<template>
  <v-container>
  <userauth :submitform="register" :nameneed="true"></userauth>
  </v-container>
</template>

<script>

import userauth from './userauth.vue'
export default {
  data() {
   
  },
  components:{userauth},

  methods: {
    async register(userinfo) {
 
      let userr = await this.$store.dispatch("register", userinfo);    
       console.log(userr)
      if (userr.error) {
        alert('hi')
        alert(userr.error);
      } else {
        alert("welcome ");
      }
    },
  },
};
</script>

<style></style>
