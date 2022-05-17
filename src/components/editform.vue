<template>
  <v-container>
    <v-form >
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="videoo.name"
            label=" name"
            counter="30"
            :rules="[
              required('name'),
              minlenght('name', 10),
              maxlenght('name', 30),
            ]"
          ></v-text-field>

          <v-text-field
            v-model="videoo.address"
            label="describtion"
            :rules="[required('adress'), minlenght('address', 30)]"
          ></v-text-field>

          <v-text-field v-model="videoo.id" label="src"></v-text-field>
          <v-btn @click="savetype" >{{textbutton}}</v-btn>
        </v-col>

        
      </v-row>
    </v-form>

    <p>{{ videoo }}</p>
  </v-container>
</template>

<script>
import validate from './../duties/validation'
export default {
  data() {
    return {
      ...validate
    };
  },props:['videoo','savetype','textbutton']
};
</script>

<style></style>
