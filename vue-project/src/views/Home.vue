<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/home/image.jpg" alt="caca">
    </div>
    <div class="hero-text">
      <h1 id="titre">couverture zinguerie fenêtre de toit <br>bardage isolation <br>plomberie sanitaire </h1>

    </div>
    <div class="container">
      <div class="square">
        <SquareImage imageSrc="/src/assets/couv-zinc/image1.jpg" link="services/couvreur-zingueur">
          <p>couverture zinguerie</p>
        </SquareImage>
        <Carousel :images="[
          '/src/assets/couv-zinc/image1.jpg',
          '/src/assets/couv-zinc/image2.jpg',
          '/src/assets/couv-zinc/image3.webp',
          '/src/assets/couv-zinc/image4.jpg'
        ]" />
      </div>
      <div class="square">
        <SquareImage imageSrc="/src/assets/square2.jpg" link="services/bardage-isolation">
          <p>bardage isolation</p>
        </SquareImage>
        <Carousel :images="[
          '/src/assets/couv-zinc/image1.jpg',
          '/src/assets/couv-zinc/image2.jpg',
          '/src/assets/couv-zinc/image3.webp',
          '/src/assets/couv-zinc/image4.jpg'
        ]" />
      </div>
      <div class="square">
        <SquareImage imageSrc="/src/assets/square3.jpg" link="services/plomberie-sanitaire">
          <p>plomberie sanitaire</p>
        </SquareImage>
        <Carousel :images="[
          '/src/assets/couv-zinc/image1.jpg',
          '/src/assets/couv-zinc/image2.jpg',
          '/src/assets/couv-zinc/image3.webp',
          '/src/assets/couv-zinc/image4.jpg'
        ]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SquareImage from '@/components/SquareImage.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Home',
  components: {
    SquareImage,
    Carousel,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding-top: 4em;
}

.hero {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text {
  position: absolute;
  top: 200px;
  left: 20px;
  width: 43%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
  background-color: #55555589;
  padding: 20px;
  border-radius: 10px;
}

.hero-text h1 {
  font-weight:700;
  font-size: 3em;
  margin: 0;
}

.hero-text p {
  font-size: 1.5em;
}

#titre {
  color: rgb(0, 0, 180);
  text-transform: uppercase;
}

.container {
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
}

.square {
  display: flex;
  margin: 20px 20px;
}
</style>
