<template>
  <button
    :class="isDarkMode ? 'dark-mode' : 'light-mode'"
    @click="toggleTheme"
  >
    {{ isDarkMode ? 'Mode Clair' : 'Mode Sombre' }}
  </button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'ThemeToggle',
  setup() {
    const isDarkMode = ref(false);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    }

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value;

      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    return {
      isDarkMode,
      toggleTheme,
    };
  },
};
</script>

  <style scoped>


  
  button {
    width: 130px;
    height: 40px;
    justify-content: center;
    background-color: #201f1e;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #413e3e;
  }

  .light-mode {
    background-color: #333;
    color: white;
  }
  
  .light-mode:hover {
    background-color: #555;
  }
  
  .dark-mode {
    background-color: #333;
    color: white;
  }
  
  .dark-mode:hover {
    background-color: #555;
  }
  </style>
