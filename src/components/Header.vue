<template>
  <header class="main-header">
    <div class="container">
      <nav class="nav">
        <div class="brand">
          <router-link to="/">
            <img src="../assets/logo.png" alt="brand image" />
            <span class="brand__text">DoggoGram</span>
          </router-link>
        </div>
        <div class="menu">
          <ul>
            <li class="icon paw">
              <router-link to="/breeds" active-class="isActive">Breeds</router-link>
            </li>
            <li class="icon heart">
              <router-link to="/likes" active-class="isActive">Likes</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader"
};
</script>

<style>

.main-header {
  background-color: var(--nav-bg-color);
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.nav {
  display: flex;
}

.nav .brand a {
  display: flex;
  align-items: center;

  color: var(--light-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
}

.nav .brand span {
  margin-left: 0.8rem;
}

.nav .brand img {
  width: 5rem;
  height: 5rem;
}

.menu {
  margin-left: auto;
  display: flex;
}

.menu ul {
  list-style-type: none;
  display: flex;
}

.menu ul li:not(:last-child) {
  margin-right: 4.4rem;
}

.menu ul li {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
}

.menu ul li.icon::before {
  content: "";
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
  position: absolute;
  height: 1.5rem;
  left: -2.2rem;
  width: 1.5rem;
}

.menu ul li.icon.paw::before {
  background-image: url("../assets/paw-print-.png");
}

.menu ul li.icon.heart::before {
  background-image: url("../assets/heart.png");
}

.menu ul li a {
  color: var(--default-color);
  text-decoration: none;
  text-transform: uppercase;
}

.menu ul li a.isActive {
  font-style: italic;
}

</style>