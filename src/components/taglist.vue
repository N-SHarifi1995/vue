<template>
  <div class="container d-flex flex-wrap">
    <v-card
      elevation="2"
      v-for="(vid, index) in getlist"
      :key="index"
      width="19vw"
      class="pa-3 ma-3"
    >
      <videolistvideo :video="vid"></videolistvideo>
    </v-card>
    <h1>{{ getlist }}</h1>
  </div>
</template>

<script>
import videolistvideo from "./videolistvideo.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["video"]),
    getlist() {
      return this.video.filter((i) => i.tag.includes(this.$route.params.id));
    },
  },
  components:{
    videolistvideo
  }
};
</script>

<style></style>
