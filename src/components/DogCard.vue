<template>
  <article class="dog-card">
    <header class="dog-card__header">
      <div class="dog-card__title">
        American Bully
      </div>
      <div class="dog-card__menu">
        &nbsp;
      </div>
    </header>
  </article>
</template>

<script>
export default {
  name: "dogCard"
};
</script>

<style>
.dog-card {
  background-color: var(--dog-card-bg-default);
  margin: 2rem;
  border-radius: 3px;
  border: 1px solid var(--border-color);
}

.dog-card__header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding: 1.6rem 1.6rem 1.6rem 2rem;
}

.dog-card__title {
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
}

</style>