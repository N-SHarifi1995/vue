<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>
        <div class="d-flex align-center" v-if="currentuser.name">
          {{ currentuser.name }}
          <v-btn @click="logout()" text>
            <span class="mr-2">logout</span>
          </v-btn>
          <v-btn :to="{ name: 'videolistadmin' }" v-if="currentuser" text>
        <span class="mr-2">ADMIN</span>
      </v-btn>
        </div>
        <div v-else>
          <v-btn @click="login()" text>
            <span class="mr-2">login</span>
          </v-btn>
        </div>
        <v-snackbar
      v-model="snackbar.show"
    >
      {{ snackbar.text }}

      <template >
        <v-btn
          color="pink"
          text
         
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
       
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="$router.go(-1)" text>
        <span class="mr-2">HOME</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      
    </v-app-bar>
    <v-main>
  
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("loader"),
    this.$store.dispatch("loadcurrentuser")
  },

  computed: { ...mapState(["currentuser","snackbar"]),
  },
  methods: {
    logout() {
      console.log("hi"+this.currentuser);
      this.$store.dispatch("logout");
    },login() {
      this.$store.dispatch("login");
    },
  },
};
</script>
<style lang="css" scoped>
router-link {
  color: aliceblue;
}
</style>
