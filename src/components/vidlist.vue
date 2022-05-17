<template>
  <div class="container d-flex flex-wrap">
    <v-card
      elevation="2"
      v-for="(vid, index) in mylist"
      :key="index"
      width="19vw"
      class="pa-3 ma-3"
    >
     <videolistvideo :video='vid'></videolistvideo>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import videolistvideo from './videolistvideo.vue'
export default {
  computed: {
    ...mapState(["video"]),
    mylist() {
      return this.video;
    },
    isplayed() {
      return true;
    },
    
  },
  methods: {},

  mounted() {
    this.$store.dispatch("loader");
  },
  
  components:{
   videolistvideo
  }
};
</script>

<style scoped></style>
