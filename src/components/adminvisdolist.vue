<template>
  <v-container>
    <h1>ADmin</h1>
    <v-btn :to="{name:'new'}">create  new video</v-btn>
    <div class="flextable">
      <h5>show</h5>
      <h5>edit</h5>
      <h5>delete</h5>
    </div>
    <div v-for="vid in video" :key="vid.id" class="flextable">
      <p>{{ vid.name }}</p>
      <p>{{ videodescrib(vid) | abbreviate }}</p>
      <div class="action">
        <router-link :to="{ name: 'detail', params: { id: vid.id } }"
          >show</router-link
        >
        <router-link :to="{ name: 'edit', params: { id: vid.id } }"
          >edite</router-link
        >

        <v-btn @click="delet(vid.id)" text>
          <span class="mr-2">DELETE</span>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["video"]),
  },
  methods: {
    videodescrib(vid) {
      let videodescribtion = JSON.stringify(vid.address);
      return videodescribtion;
    },
    delet(vidid) {
      if (confirm("Do you want delet this user?")) {
        this.$store.dispatch("deletvid", vidid);
      }
    },
  },
  filters: {
    abbreviate(text) {
      text = text.replace("{", "");
      text = text.replace("}", "");

      return text;
    },
  },
  components: {},
};
</script>
<style scoped>
.flextable {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  border-bottom: 1.5px solid rgb(47, 46, 46);
  padding: 10px;
}
.flextable:nth-child(2n) {
  background: rgb(225, 224, 224);
}
.action {
  display: flex;
  justify-content: space-evenly;
}
</style>
