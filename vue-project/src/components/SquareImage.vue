<template>
  <router-link :to="link" class="square-image-container">
    <img :src="imageSrc" alt="square image" class="square-image" />
    <div class="overlay">
      <slot>Default Text</slot> <!-- Le texte à afficher sur l'image -->
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "SquareImage",
  props: {
    imageSrc: {
      type: String,
      required: true, // URL de l'image
    },
    link: {
      type: String,
      required: true, // La route vers laquelle l'image redirige
    },
  },
};
</script>

<style scoped>
.square-image-container {
  position: relative;
  width: 100%;
  height: 250px;
  max-width: 250px; /* Taille fixe ou ajustez selon vos besoins */
  aspect-ratio: 1/1;
  overflow: hidden;
  display: block;
}

.square-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* S'assure que l'image couvre tout l'espace disponible */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
}

.square-image-container:hover .overlay {
  opacity: 1; /* Affiche le texte quand on survole l'image */
}
</style>
