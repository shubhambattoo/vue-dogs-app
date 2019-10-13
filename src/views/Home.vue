<template>
  <div class="home">
    <Header />
    <main>
      <div class="feed" v-if="!gettingDogs">
        <DogCard v-for="dog in doggos" :dog="dog" :key="dog.id"  />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DogCard from "@/components/DogCard.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    Header,
    DogCard
  },
  data () {
    return {
      doggos : [],
      gettingDogs : true
    }
  },
  methods: {
    getDoggos(limit = 8, page = 1) {
      const apiKey = process.env.VUE_APP_API_KEY;
      const apiURL = "https://api.thedogapi.com/v1/images/search";

      axios
        .get(`${apiURL}?limit=${limit}&page=${page}&mime_types=jpg,png,gif`, {
          headers: {
            "x-api-key": apiKey
          }
        })
        .then(res => res.data)
        .then(data => {
          // console.log(data);
          this.doggos = data;
          this.gettingDogs = false;
        });
    }
  },
  mounted() {
    this.getDoggos();
  }
};
</script>

<style>
.feed {
  max-width: 60rem;
  margin: 1rem auto;

  display: flex;
  flex-flow: column;
}
</style>
