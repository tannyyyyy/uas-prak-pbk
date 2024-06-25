<script setup>
import { RouterLink, RouterView } from "vue-router";
import "../assets/base.css";
import HelloWorld from "../components/HelloWorld.vue";
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div class="app">
    <header>
      <div class="header-content">
        <img
          alt="Vue logo"
          class="logo"
          src="../../public/2.jpeg"
          width="125"
          height="125"
        />

        <div class="wrapper">
          <HelloWorld msg="Selamat Datang!" />

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/#">About</RouterLink>
          </nav>
        </div>
      </div>

      <TheWelcome />
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 100vh;
}

.header-content,
.welcome {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.app {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
