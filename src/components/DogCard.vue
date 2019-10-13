<template>
  <article class="dog-card">
    <header class="dog-card__header">
      <div class="dog-card__title">{{getName}}</div>
      <div class="dog-card__menu">&nbsp;</div>
    </header>
    <div class="dog-card__content">
      <img :src="dog.url" alt="this image contains a picture of a dog" class="dog-card__img" />
    </div>
    <div class="dog-card__actions">
      <div class="dog-card__actions__btns">
        <span>
          <button class="btn btn-empty">
            <ion-icon name="heart-empty" class="icon"></ion-icon>
          </button>
        </span>
        <span>
          <button class="btn btn-empty">
            <ion-icon name="ios-share" class="icon"></ion-icon>
          </button>
        </span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "dogCard",
  props: ["dog"],
  computed: {
    getName() {
      if (this.dog.breeds.length > 0) {
        return this.dog.breeds[0].name;
      } else {
        return "Some doggo!";
      }
    }
  }
};
</script>

<style>
.dog-card {
  background-color: var(--dog-card-bg-default);
  margin: 2rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  border: 1px solid var(--border-color);
  --padding: 1.6rem 1.6rem 1.6rem 2rem;
}

.dog-card__header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  padding: var(--padding);
}

.dog-card__title {
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
}

.dog-card__content {
  height: auto;
  user-select: none;
  /* height: 100%; */
  width: 100%;

  cursor: pointer;
}

.dog-card__img {
  object-fit: contain;
  width: inherit;
}

.dog-card__actions {
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  background-color: var(--dog-card-bg-default);
  overflow: hidden;
}

.dog-card__actions .dog-card__actions__btns {
  display: flex;
}

.dog-card__actions__btns span {
  margin-right: 1rem;
}

@media screen and (max-width: 576px) {
  .btn.btn.btn-empty .icon {
    font-size: 2.4rem;
  }
}
</style>