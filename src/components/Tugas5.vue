<template>
  <div view="hHh lpR fFf" class="body">
    <div elevated class="bg-lime text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="Electronic Store Logo"
            />
          </q-avatar>
          <span>Toko Elektronik YA MULIA</span>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="shopping_cart"
          @click="toggleRightDrawer"
        />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Beranda" icon="home" />
        <q-route-tab to="/products" label="Produk" icon="shopping_bag" />
        <q-route-tab to="/contact" label="Kontak" icon="phone" />
      </q-tabs>
    </div>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header>Kategori</q-item-label>
        <q-item clickable v-ripple @click="goToCategory('smartphone')">
          <q-item-section avatar>
            <q-icon name="phone_iphone" />
          </q-item-section>
          <q-item-section>Smartphone</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToCategory('laptop')">
          <q-item-section avatar>
            <q-icon name="laptop" />
          </q-item-section>
          <q-item-section>Laptop</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToCategory('tv')">
          <q-item-section avatar>
            <q-icon name="tv" />
          </q-item-section>
          <q-item-section>TV</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="goToCategory('accessories')">
          <q-item-section avatar>
            <q-icon name="headset" />
          </q-item-section>
          <q-item-section>Aksesoris</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <q-item-label header>Keranjang</q-item-label>
        <!-- Item keranjang akan ditampilkan di sini -->
        <q-item>
          <q-item-section> Belum ada barang di keranjang </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            class="carousel-slide"
            img-src="https://i.pinimg.com/564x/7c/6b/87/7c6b8746fdfecd2dee3377677e886f72.jpg"
          />
          <q-carousel-slide
            :name="2"
            class="carousel-slide"
            img-src="https://i.pinimg.com/236x/49/e0/70/49e07022188c6613aa6db9f732c8d05a.jpg"
          />
          <q-carousel-slide
            :name="3"
            class="carousel-slide"
            img-src="https://i.pinimg.com/564x/a6/30/4b/a6304b9120ad514fa731255017351b8d.jpg"
          />
          <q-carousel-slide
            :name="4"
            class="carousel-slide"
            img-src="https://i.pinimg.com/564x/3d/07/8c/3d078c0f40aec900fb2e8d176001f899.jpg"
          />
        </q-carousel>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-lime text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="Electronic Store Logo"
            />
          </q-avatar>
          <div>Toko Elektronik</div>
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="facebook"
          @click="openSocialMedia('facebook')"
        />
        <q-btn
          flat
          round
          dense
          icon="instagram"
          @click="openSocialMedia('instagram')"
        />
        <q-btn
          flat
          round
          dense
          icon="twitter"
          @click="openSocialMedia('twitter')"
        />
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    };

    const goToCategory = (category) => {
      // Implementasi navigasi ke halaman kategori
      console.log("Navigasi ke kategori " + category);
    };

    const openSocialMedia = (platform) => {
      let url = "";
      switch (platform) {
        case "facebook":
          url = "https://facebook.com";
          break;
        case "instagram":
          url = "https://instagram.com";
          break;
        case "twitter":
          url = "https://twitter.com";
          break;
      }
      window.open(url, "_blank");
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      goToCategory,
      openSocialMedia,

      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style scoped>
.body {
  color: black;
}
.q-toolbar-title {
  display: flex;
  align-items: center;
}

.q-toolbar-title img {
  margin-right: 10px;
  height: 40px;
}

.q-tabs {
  margin-top: 10px;
}
</style>
