<template>
  <v-cntainer>
    <h1>usrs</h1>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
      <v-btn @click="login(user)" x-small>login </v-btn>
    </div>
  </v-cntainer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["users"]) },
  mounted() {
    this.$store.dispatch("loadusers");
  },
  methods: {
    login(user) {
      this.$store.dispatch("login", user);
    },
  },
};
</script>

<style></style>
