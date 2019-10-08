<template>
  <div id="app" class="light">
    <router-view />
  </div>
</template>

<style>
:root {
  --light-bg-color: #f2f3f4;
  --dark-bg-color: #0f0f0f;
  --default-bg-color: var(--light-bg-color);
  --light-color: #555;
  --dark-color: #f5f5f5;
  --default-color: var(--light-color);
  --darker-bg-color : #000;
  --white-bg-color : #fff;
  --nav-bg-color : var(--white-bg-color);
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
}

#app {
  background-color: var(--default-bg-color);
  height: 100vh;
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
</style>
