<template>
  <v-container>
    <editform :videoo="videoo" :savetype="saveVideo" :textbutton="'save video'"></editform>

  </v-container>
</template>

<script>
import { mapState } from "vuex";
import editform from './editform.vue';

export default {
  components: { editform },
  data() {
    return {
     
       };
  },
  methods: {
    async saveVideo() {
       this.$store.dispatch("snackbar", {
      text:'edite shode',
      show:true});
      console.log(this.videoo.id)
      await this.$store.dispatch("savevideo", this.videoo);
     
      this.$router.push({ name: "admin" });
    },
  },
  computed: {
    ...mapState(["video",'snackbar']),
    videoo() {
      return this.video.find(vid => vid.id == this.$route.params.id);

    },
  },
};
</script>

<style></style>
