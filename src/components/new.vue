<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <editform :videoo="video" :savetype="createVideo()" :textbutton="'create'" />
      </v-col>

      <v-col cols="12" md="9">
        <v-card width="19vw" class="pa-3 ma-3">
          <videolist :video="video" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import videolist from "./videolistvideo";
import editform from './editform.vue'
export default {
  data() {
    return {
      video: {},
    };
  },
  methods: {
   async createVideo() {
     
     await this.$store.dispatch("createvid", this.video);
    
    },
  },
  components: {
    videolist,editform
  },
};
</script>

<style></style>
