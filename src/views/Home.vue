<template>
  <div class="home">
    <section>
      <div
        class="feed"
        v-infinite-scroll="getDoggos"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <DogCard v-for="dog in doggos" :dog="dog" :key="dog.id" />
      </div>
    </section>
    <Loader v-if="busy" />
  </div>
</template>

<script>
import DogCard from "@/components/DogCard.vue";
import Loader from "@/components/Loader.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    DogCard,
    Loader
  },
  data() {
    return {
      doggos: [],
      busy: true,
      page: 1,
      limit: 8
    };
  },
  methods: {
    getDoggos() {
      this.busy = true;
      const apiKey = process.env.VUE_APP_API_KEY;
      const apiURL = "https://api.thedogapi.com/v1/images/search";
      this.page = this.page === 0 ? 1 : this.page + 1;
      axios
        .get(
          `${apiURL}?limit=${this.limit}&page=${this.page}&mime_types=jpg,png,gif`,
          {
            headers: {
              "x-api-key": apiKey
            }
          }
        )
        .then(res => res.data)
        .then(data => {
          // console.log(data);
          this.doggos.push(...data);
          this.busy = false;
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
