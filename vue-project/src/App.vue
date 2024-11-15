<template>
  <div id="app">
    <Header />
    <div class="space-stacking">
      <router-view />
      <Footer v-if="$route.name !== 'contact'"/>
    </div>
  </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ThemeToggle from './components/ThemeToggle.vue';

export default {
  components: {
    Header,
    Footer,
    ThemeToggle
  }
};

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

</style>
