<script setup>
import "../assets/base.css";
import WelcomeItem from "../components/Welcomeitem.vue";
import DocumentationIcon from "../components/icons/IconDocumentation.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import CommunityIcon from "../components/icons/IconCommunity.vue";
import SupportIcon from "../components/icons/IconSupport.vue";
</script>

<template>
  <div class="app">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>PENDIDIKAN</template>

      Saya mahasiswa di salah satu Kampus swasta di Riau yaitu
      <a href="https://uir.ac.id/" target="_blank" rel="noopener"
        >Universitas Islam Riau</a
      >
      . Sebelumnya saya lulusan dari
      <a
        href="https://dapo.kemdikbud.go.id/sekolah/118758B509FC6FA96A7E"
        target="_blank"
        rel="noopener"
        >SMK PENERBANGAN SPAN PEKANBARU</a
      >
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tempat, Tanggal Lahir</template>

      Saya Lahir di kota
      <a
        href="https://maps.app.goo.gl/AuZBkQByxKyoxTkS7"
        target="_blank"
        rel="noopener"
        >Pulau Kecil</a
      >

      . Pada tanggal 20 April 2002
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Jurusan</template>

      Prodi atau Jurusan Kuliah Saya mengambil Program didik Teknik Informatika
      atau biasa disebut IT , saat ini saya berada di semester 4 Kelas 4A atau
      yang biasa disebut
      <a
        href="https://www.instagram.com/dobleh_a22/"
        target="_blank"
        rel="noopener"
        >Dobleh A22</a
      >
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Hobi</template>

      Hobi yang paling saya suka adalah : <br />
      1.
      <a
        href="https://www.viu.com/ott/id/id/category/549/Drama-Korea"
        target="_blank"
        rel="noopener"
        >NONTON DRAKOR</a
      >
      <br />
      2. JALAN SAMA AYANG <br />
      3. Makan <br />
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Social Media</template>

      Saya sering menggunakan soal media untuk berbagi aktivitas keseharian
      saya,ataupun mencari informasi<br />
      Instagram = @
      <a
        href="https://www.instagram.com/tnnyaprlni/"
        target="_blank"
        rel="noopener"
        >tanny_apriliani</a
      >
      <br />
    </WelcomeItem>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  padding: 1rem;
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
