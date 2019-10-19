<template>
  <section class="likes">
    <Loader v-if="gettingDogs" />
    <div class="feed">
      <DogCard v-for="dog in doggos" :dog="dog" :isLiked="true" :key="dog.id" />
    </div>
  </section> 
</template>

<script>
import DogCard from "@/components/DogCard.vue";
import Loader from "@/components/Loader.vue";

export default {
  name : "likes",
  components : {
    DogCard,
    Loader
  },
  data () {
    return {
      doggos : [],
      gettingDogs : true
    }
  },
  methods : {
    getDoggos () {
      this.gettingDogs = true;
      const dogs = JSON.parse(localStorage.getItem("likes"));
      this.doggos = dogs;
      this.gettingDogs = false;
    }
  },
  mounted () {
    this.getDoggos();
  }
};
</script>

<style>
</style>