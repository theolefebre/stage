<template>
  <header>
    <nav>
      <router-link to="/">
        <img src="@\assets\icone4.png" alt="Logo de l'entreprise" class="logo" />
      </router-link>
      <div class="contacts">
        <img src="@/assets/phone.png" alt="" class="icone"/>
        <p>03 29 94 02 00 / 06 83 49 98 72</p> 
      </div>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li @click="goToCarousel" class="service">Services</li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
      </ul>
      <div class="contacts" id="mail">
        <img src="@/assets/mail.png" alt="" class="icone"/>
        <p>sarl.lefebreetfils@orange.fr</p>
      </div>
      <div class="toggle">
        <ThemeToggle/>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import ThemeToggle from './ThemeToggle.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Header',
  components: {
    ThemeToggle
  },
  setup() {
    const router = useRouter();

    const goToCarousel = () => {
      router.push('/').then(() => {
        // Une fois redirigé sur la page d'accueil, scroll vers le premier carrousel
        const section = document.getElementById('first-one');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    };

    return { goToCarousel };
  }
};
</script>

<style scoped>
header {
  width: 100%;
  max-width: 100%;
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
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin: 0 17px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

.contacts {
  font-size: medium;
  display: flex;
  margin: 0 30px;
}

.icone {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}

body {
  padding-top: 60px;
}

.toggle {
  padding-left: 85px;
}

#mail {
  margin: 0 35px;
}

.service {
  cursor: pointer;
}
</style>
