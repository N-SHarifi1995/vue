<template>
  <v-container>
    <div class="box ">
      <video-player 
      @ended="addpalyed"
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
      >
      </video-player>
      <div class="content d-flex flex-column justify-center pt-10">
      <div v-if="isplayed" class="green--text"><font-awesome-icon icon="fa-check-to-slot" /> played</div>
      <div v-else><v-btn @click="addpalyed">marked as played</v-btn></div>
        <h5>name :{{ videoo.name }}</h5>
         <h5>id :{{ videoo.id }}</h5>
        <p>describtion:{{ videoo.address }}</p>
          <div v-for="tag in videoo.tag" :key='tag'><v-btn x-small>{{tag}}</v-btn></div>
      </div>
    </div>
  </v-container>
</template>

<script>
import "video.js/dist/video-js.css";

import { videoPlayer } from "vue-video-player";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['playedvid','video','tag']),
    videoo() {
      return this.video[this.$route.params.id];
    },
   
    playerOptions() {
      return {
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0, 2.5, 3],
        sources: [
          {
            type: "video/mp4",
            src: "https://media.istockphoto.com/videos/girl-running-in-the-meadow-at-sunset-video-id493319015",
          },
        ],
        poster: "../imgg/3.png",
      };
    },
    // videojs options
    isplayed(){
     
      return this.playedvid.includes(this.$route.params.id)
    },
   
  }, methods: {
    addpalyed(){
      this.$store.dispatch('markplayed',this.$route.params.id)
    }
  },
  components: {
    videoPlayer,
  },
  beforeCreate() {},
};
</script>

<style scoped>
.container {
  max-width: 80vw;
  margin: 0 auto;
}


.content {
  margin-left: 40px;
}
.video-player-box {
  max-width: 500px;
  max-height: 350px;
  border-radius: 15px;
  margin: 0 auto;
}
</style>