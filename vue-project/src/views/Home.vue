<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/home/image.jpg">
    </div>
    <div class="hero-text">
      <div>
        <h1 id="titre">couverture zinguerie<br>fenêtre de toit<br>bardage isolation<br>plomberie sanitaire </h1>
        
      </div>
    </div>
    <div class="container">
      <div class="square" id="first-one">
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
        <SquareImage imageSrc="/src/assets/bard-isol/bardage2.jpg" link="services/bardage-isolation">
          <p>bardage isolation</p>
        </SquareImage>
        <Carousel :images="[
          '/src/assets/bard-isol/bardage_metallique.webp',
          '/src/assets/bard-isol/isolation1.webp',
          '/src/assets/bard-isol/isolation2.webp',
          '/src/assets/bard-isol/bardage1.jpg'
        ]" />
      </div>
      <div class="square" id="last-one">
        <SquareImage imageSrc="/src/assets/plom-sani/plomberie1.jpeg" link="services/plomberie-sanitaire">
          <p>plomberie sanitaire</p>
        </SquareImage>
        <Carousel :images="[
          '/src/assets/plom-sani/douche-pmr1-1.jpg',
          '/src/assets/plom-sani/sanitaire2.jpg',
          '/src/assets/plom-sani/sanitaire1.jpg',
          '/src/assets/plom-sani/douche-pmr1-3.jpg'
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
  background-color: #3c3c3c89;
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
  color: rgb(6, 6, 180);
  text-transform: uppercase;
}

.container {
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
}

.square {
  font-size: medium;
  display: flex;
  margin: 0 30px;
  margin-top: 40px;
}

#last-one {
  margin-bottom: 50px;
}
</style>
