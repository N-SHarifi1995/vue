<template>
  <div>
    <v-img
      src="https://images.pexels.com/photos/1000498/pexels-photo-1000498.jpeg?cs=srgb&dl=pexels-lewis-burrows-1000498.jpg&fm=jpg"
      alt="hjhg"
    />
    <h5>
      name :
      <router-link :to="{ name: 'detail', params: { id:video.id  } }">
        {{video.name}}
      </router-link>
    </h5>
    <v-card-text
      ><div v-if="isplayed" class="green--text">
        <font-awesome-icon icon="fa-check-to-slot" /> played
      </div>
      <p>describtion:{{ video.address }}</p>
      <v-btn
        :to="{ name: 'detail', params: { id: video.id } }"
        color="green accent-3 my-5"
        elevation="2"
        >watch</v-btn
      >
      <div v-for="tag in video.tag" :key="tag">
        <v-btn x-small :to="{ name: 'tag', params: { id: tag } }">{{
          tag
        }}</v-btn>
      </div>
    </v-card-text>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["tag"]),
    tag() {
      return this.tag;
    },
    isplayed(){return true}
  },
  props:['video']
};
</script>

<style></style>
