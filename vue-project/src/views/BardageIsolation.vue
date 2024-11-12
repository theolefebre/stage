<template>
  <div class="couvreur-page">
    <h1 class="main-title"><br>Bardage-Isolation</h1>
    <div class="main-image-container">
      <img src="@/assets/bard-isol/bardage_metallique.webp" alt="Couvreur Zingueur" class="main-image" />
      <p class="description">
        Le bardage est un revêtement extérieur qui protège les murs des intempéries tout en offrant une touche esthétique, avec des matériaux variés comme le bois, le PVC ou le métal. L'isolation, par l'intérieur ou l'extérieur, vise à améliorer l'efficacité énergétique et le confort thermique en réduisant les pertes de chaleur, souvent combinée avec un bardage pour une protection optimale et des économies d'énergie.
      </p>
    </div>
    <!-- Texte secondaire -->
    <h2 class="et-aussi">Et aussi</h2>

    <!-- Section avec 3 autres images et descriptions -->
    <div class="additional-services">
      <!-- Image 1 -->
      <div class="service-item">
        <img src="@/assets/bard-isol/isolation1.webp" alt="Service 1" class="service-image" />
        <p>Isolation des combles/Combles perdus</p>
      </div>

      <!-- Image 2 -->
      <div class="service-item">
        <img src="@/assets/bard-isol/bardage1.jpg" alt="Service 2" class="service-image" />
        <p>Isolation/Bardage</p>
      </div>

      <!-- Image 3 -->
      <div class="service-item">
        <img src="@/assets/bard-isol/isolation2.webp" alt="Service 3" class="service-image" />
        <p>Isolation sous-rampant</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouvreurZingueur',
};
</script>

<style scoped>
/* Style du titre principal */
.main-title {
  color: rgb(0, 0, 152);
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
}

/* Style de l'image principale */
.main-image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.main-image {
  background-color: #333;
  width: 400px;
  height: 300px;
  object-fit: cover;
  margin-left: 7%;
}

.description {
  text-align: center;
  font-size: 1.2rem;
  padding: 50px 30px;
}

/* Style du texte "Et aussi..." */
.et-aussi {
  font-size: 2rem;
  color: rgb(0, 0, 152);
  text-align: left;
  margin: 50px 110px;
}

/* Conteneur pour les services supplémentaires */
.additional-services {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
  padding: 0 20px;
}

/* Style pour chaque service */
.service-item {
  text-align: center;
  width: 300px;
}

.service-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
}

/* Style pour le texte sous chaque image */
.service-item p {
  font-size: 1rem;
  color: #333;
}
</style>
 
