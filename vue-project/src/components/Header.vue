<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@\assets\icone2.png" alt="Logo de l'entreprise" class="logo" />
      </router-link>
      <div class="contacts">
        <img src="@/assets/phone.png" alt="" class="icone"/>
        <p>03 29 94 02 00 / 06 83 49 98 72</p>
      </div>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
      </ul>
      <div class="contacts">
        sarl.lefebreetfils@orange.fr
      </div>
      <div class="toggle">
        <ThemeToggle/>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import ThemeToggle from './ThemeToggle.vue';

export default {
  name: 'Header',
  components: {
    ThemeToggle
  }
};
</script>

<style scoped>
header {
  position: fixed;
  z-index: 1000;
  background-color: #333;
  color: white;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
}
nav ul li {
  margin: 0 15px;
} 
nav ul li a {
  color: white;
  text-decoration: none;
}

.contacts {
  justify-content:space-evenly;
  font-size:medium;
  display: flex;
}

.icone {
  justify-content: ;
  width: 17px;
}

body {
  padding-top: 60px;
}
</style>
