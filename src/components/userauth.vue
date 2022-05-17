<template>
  <v-container>
    <v-form >
    <v-text-field v-model="user.username"  v-if='nameneed' label="name"
      :rules="[required('name'), minlenght('name', 2)]"></v-text-field>
      <v-text-field v-model="user.username" label="username"
      :rules="[required('username'), minlenght('username', 2)]"></v-text-field>
      <v-text-field
        v-model="user.email"
        :rules="[required('username'), minlenght('username', 15),emailevalidate()]"
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show3 ? 'text' : 'password'"
        @click:append="show3 = !show3"
        label="email"
        
      ></v-text-field>
      <v-btn @click="submitform(user)">submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import validate from '../duties/validation'
export default {
  data() {
    return {
      user: { username: "", email: "",name:"" },
      show3: false,
      ...validate
    };
  },
  props:['submitform', 'nameneed']
};
</script>

<style></style>
