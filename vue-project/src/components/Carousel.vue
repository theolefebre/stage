<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <!-- Images défilantes -->
      <div class="carousel-slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="'Slide ' + index" class="carousel-image" />
        </div>
      </div>
      
      <!-- Flèches de navigation -->
      <button class="carousel-button prev" @click="handleManualNavigation('prev')">&#10094;</button>
      <button class="carousel-button next" @click="handleManualNavigation('next')">&#10095;</button>
    </div>
    
    <!-- Indicateurs (points en bas) -->
    <div class="carousel-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{'active': index === currentIndex}"
        @click="goToSlide(index)"
        class="indicator"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoScrollInterval: null  // Pour l'auto-défilement
    };
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    this.stopAutoScroll();
  },
  methods: {
    startAutoScroll() {
      // Démarre l'auto-défilement
      this.autoScrollInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change toutes les 3 secondes
    },
    stopAutoScroll() {
      // Arrête l'auto-défilement
      clearInterval(this.autoScrollInterval);
    },
    resetAutoScroll() {
      // Réinitialise l'auto-défilement (arrête puis redémarre)
      this.stopAutoScroll();
      this.startAutoScroll();
    },
    nextSlide() {
      // Passe à la slide suivante
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      // Revient à la slide précédente
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      // Passe à la slide spécifiée par l'indicateur
      this.currentIndex = index;
      this.resetAutoScroll(); // Réinitialise l'auto-défilement
    },
    handleManualNavigation(direction) {
      // Gère la navigation manuelle (précédent ou suivant)
      if (direction === 'next') {
        this.nextSlide();
      } else if (direction === 'prev') {
        this.prevSlide();
      }
      this.resetAutoScroll(); // Réinitialise l'auto-défilement après l'interaction manuelle
    }
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  margin-left: 35px;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  transition: transform 0.5s ease;
}

.carousel-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border: none;
  font-size: 24px;
  padding:0px 10px;
  border-radius: 30%;
  cursor: pointer;
  z-index: 1;
  opacity: 0.8; /* Opacité par défaut */
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.5); /* Change la couleur de fond au survol */
  opacity: 1; /* Augmente l'opacité au survol */
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.active {
  background-color: #717171;
}
</style>
