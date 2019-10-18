<template>
  <div class="home">
    <Header />
    <main>
      <div
        class="feed"
        v-infinite-scroll="getDoggos"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <DogCard v-for="dog in doggos" :dog="dog" :key="dog.id" />
      </div>
      <div v-if="busy" class="loading-controller">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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

.loading-controller {
  max-width: 60rem;
  margin: 1rem auto;

  display: flex;
  justify-content: center;
}

.lds-roller {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--light-color);
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
