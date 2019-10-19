<template>
  <section class="likes">
    <Loader v-if="gettingDogs && doggos.length != 0" />
    <div class="feed">
      <DogCard v-for="dog in doggos" :dog="dog" :isLiked="true" :key="dog.id" />
    </div>
    <div class="not-found" v-if="doggos.length === 0">
      <img src="../assets/not-found.png" alt="a picture of a corgi dog" />
      <div class="text italic">"Feels so empty..."</div>
      <div class="text">You have not liked any Doggos yet!</div>
    </div>
  </section>
</template>

<script>
import DogCard from "@/components/DogCard.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "likes",
  components: {
    DogCard,
    Loader
  },
  data() {
    return {
      doggos: [],
      gettingDogs: true
    };
  },
  methods: {
    getDoggos() {
      this.gettingDogs = true;
      const dogs = JSON.parse(localStorage.getItem("likes"));
      this.doggos = dogs;
      this.gettingDogs = false;
    }
  },
  mounted() {
    this.getDoggos();
  }
};
</script>

<style>
.not-found {
  max-width: 60rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.not-found img {
  height: 30rem;
  width: 30rem;
  margin: 0 auto;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.text {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  padding: 2rem 0;
}

.italic {
  font-style: italic;
  text-transform: lowercase;
  font-weight: 600;
  font-size: 2.5rem;
}
</style>