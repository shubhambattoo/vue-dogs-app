<template>
  <div id="app" class="light">
    <router-view />
  </div>
</template>

<style>
:root {
  --light-bg-color: #f8f8f8;
  --dark-bg-color: #0f0f0f;
  --default-bg-color: var(--light-bg-color);
  --light-color: #555;
  --dark-color: #f5f5f5;
  --default-color: var(--light-color);
  --darker-bg-color: #000;
  --white-bg-color: #fff;
  --nav-bg-color: var(--white-bg-color);
  --dog-card-bg-default: var(--white-bg-color);
  --border-color: #e6e6e6;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  background-color: var(--default-bg-color);
}

#app {
  /* height: 100vh; */
  color: var(--default-color);
}

#app.light {
  --default-bg-color: var(--light-bg-color);
  --default-color: var(--light-color);
}

#app.dark {
  --default-bg-color: var(--dark-bg-color);
  --default-color: var(--dark-color);
}

.container {
  max-width: 90rem;
  margin: 0 auto;
}

.btn.btn-empty {
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-grow: 0;
  justify-content: center;
  padding: 0;
}

.btn.btn.btn-empty .icon {
  font-size: 3rem;
}

.btn {
  color: var(--default-color);
  font-family: "Raleway", sans-serif;
  font-size: 1.4rem;
  line-height: 18px;
}
</style>
