<template>
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="navbar">
        <q-toolbar class="toolbar">
          <div class="navlink">
            <q-toolbar-title>My App</q-toolbar-title>

            <q-btn flat round @click="goto('')">Weather</q-btn>

            <div class="dropdown">
              <button class="dropbtn">Tugas</button>
              <div class="dropdown-content">
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas1')">Tugas 1</a>
                  <div class="dropdown-content left">
                    <a href="https://tanny-project-cv.netlify.app/"
                      >Link Web Tugas 1</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas2')">Tugas 2</a>
                  <div class="dropdown-content left">
                    <a href="https://tugas-prakpbk.netlify.app/"
                      >Link Web Tugas 2</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas3')">Tugas 4</a>
                  <div class="dropdown-content left">
                    <a href="https://pratikum-tugas3-pbk.netlify.app/"
                      >Link Web Tugas 3</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas4')">Tugas 4</a>
                  <div class="dropdown-content left">
                    <a href="https://tannytgs4pbkprak.netlify.app/"
                      >Link Web Tugas 4</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas5')">Tugas 5</a>
                  <div class="dropdown-content left">
                    <a href="https://tugas5pratikumpbk.netlify.app/"
                      >Link Web Tugas 5</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas6')">Tugas 6</a>
                  <div class="dropdown-content left">
                    <a href="https://tgsss6prakpbk.netlify.app"
                      >Link Web Tugas 6</a
                    >
                  </div>
                </div>
                <div class="dropdown">
                  <a href="" @click.prevent="goto('tugas7')">Tugas 7</a>
                  <div class="dropdown-content left">
                    <a href="https://tgss7prakkpbk.netlify.app/"
                      >Link Web Tugas 7</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goto(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style>
/* Style khusus untuk App.vue */
body {
  background-image: url(../../public/cb.jpeg);
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
}
.navbar {
  padding: 1rem 4rem;
}
.toolbar {
  justify-content: space-between;
  padding: 0 16px;
}
.navlink {
  display: flex;
  justify-content: flex-end;
}
.q-btn {
  margin-right: 1rem;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #007bff; /* Sesuaikan dengan warna tombol */
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #0056b3; /* Sesuaikan dengan warna tombol saat hover */
}

.dropdown-content.left {
  right: 100%;
  top: 0;
  left: auto;
}

.dropdown-content.left a {
  padding: 12px 16px;
}

.dropdown:hover .dropdown-content.left {
  display: block;
}
</style>
