<template>
  <div class="weather-app">
    <q-card class="weather-card q-pa-md">
      <h5 align="center">Weather</h5>
      <div class="input-button-wrapper">
        <q-input
          v-model="location"
          placeholder="Masukkan Lokasi"
          outlined
          dense
          class="input-field"
        />
        <q-btn @click="getWeather" color="primary" class="get-weather-button">
          Dapatkan Cuaca
        </q-btn>
      </div>

      <q-card v-if="weather" class="weather-info q-mt-md">
        <q-card-section>
          <q-card-title class="weather-title"
            >Cuaca di {{ weather.name }}:</q-card-title
          >
          <p class="weather-data">
            Suhu: {{ (weather.main.temp - 273.15).toFixed(2) }} °C
          </p>
          <p class="weather-data">
            Deskripsi: {{ weather.weather[0].description }}
          </p>
        </q-card-section>
      </q-card>
    </q-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  data() {
    return {
      location: "",
      weather: null,
    };
  },
  methods: {
    async getWeather() {
      const apiKey = "dd256840354442bed526bb3f2bbf43b7";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        this.weather = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
h5 {
  color: black;
}
.weather-app {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  margin-top: 20px;
}

.weather-card {
  max-width: 400px;
  width: 100%;
  background-color: #f0f0f0; /* Warna latar belakang kartu */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bayangan kartu */
}

.input-button-wrapper {
  display: flex;
  gap: 10px; /* Jarak antara input dan tombol */
  margin-bottom: 16px; /* Jarak antara input-button-wrapper dan elemen di bawahnya */
}

.input-field {
  flex: 1;
}

.get-weather-button {
  flex-shrink: 0;
}

.weather-info {
  background-color: #fff; /* Warna latar belakang info cuaca */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Bayangan info cuaca */
  color: #000;
}

.weather-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.weather-data {
  margin-bottom: 8px;
}
/* Style untuk tombol "Dapatkan Cuaca" */
.get-weather-button {
  flex-shrink: 0;
  transition: background-color 0.3s ease, color 0.3s ease; /* Efek transisi hover */
}

.get-weather-button:hover {
  background-color: #0056b3; /* Warna latar belakang saat dihover */
  color: #fff; /* Warna teks saat dihover */
}

/* Style untuk judul "Weather" */
.weather-title {
  font-size: 1.4rem; /* Ubah ukuran font */
  font-weight: bold;
  margin-bottom: 12px;
  color: #333; /* Warna teks */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Efek bayangan teks */
}
</style>
