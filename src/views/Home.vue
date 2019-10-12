<template>
  <div class="home">
    <Header />
    <main>
      <div class="feed">
        <DogCard />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DogCard from "@/components/DogCard.vue";

export default {
  name: "home",
  components: {
    Header,
    DogCard
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
