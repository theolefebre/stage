<template>
  <div class="couvreur-page">
    <h1 class="main-title"><br>Plomberie-Sanitaire</h1>
    <div class="main-image-container">
      <img src="@/assets/plom-sani/douche1.jpg" alt="Couvreur Zingueur" class="main-image" />
      <!-- <p class="description">
        La plomberie concerne l'installation et l'entretien des conduites d'eau, ainsi que le réseau d'évacuation des eaux usées dans un bâtiment. Le sanitaire regroupe les équipements liés à l'hygiène et au confort, tels que les lavabos, toilettes, douches et baignoires, qui sont connectés aux réseaux de plomberie pour l'alimentation en eau et l'évacuation. 
      <br>- création/rénovation salle de bain
      <br>- création douche PMR
      <br>- emplacement appareil sanitaire
      <br>- chauffe-eau, lavabo, wc, baingoire, cabine de douche, évier
      </p> -->
      <p>
        Nous vous accompagnons dans tous vos projets de création, rénovation ou aménagement d'espaces sanitaires. Découvrez nos services : <br>
        Création et rénovation de salles de bain
      <br>
          Création complète de salles de bain personnalisées, adaptées à vos envies et à vos besoins. <br>
          Rénovation de salles de bain existantes pour leur redonner modernité, confort et fonctionnalité. <br>
      <br>
      Douches accessibles (PMR) <br>
      <br>
          Conception et installation de douches adaptées pour les personnes à mobilité réduite (PMR) : pratiques, sécurisées et esthétiques. <br>
      <br>
      Installation d’appareils sanitaires <br>
      <br>
          Pose et raccordement d’une large gamme d’équipements : <br>
              Chauffe-eau : pour un confort en eau chaude fiable et économique. <br>
              Lavabos, éviers, WC, baignoires, cabines de douche : des installations sur mesure et durables. <br> 
      <br>
      Que ce soit pour moderniser une pièce d'eau, créer un espace confortable ou adapter votre salle de bain à des besoins spécifiques, notre entreprise met son expertise au service de vos projets.
      </p>
    </div>
    <!-- Texte secondaire -->
    <h2 class="et-aussi">Et aussi</h2>

    <!-- Section avec 3 autres images et descriptions -->
    <div class="additional-services">
      <!-- Image 1 -->
      <div class="service-item">
        <img src="@/assets/plom-sani/plomberie1.jpeg" alt="Service 1" class="service-image" />
        <p>Plomberie/sanitaire</p>
      </div>

      <!-- Image 2 -->
      <div class="service-item">
        <img src="@/assets/plom-sani/sanitaire1.jpg" alt="Service 2" class="service-image" />
        <p>Amènagement de salle de bain</p>
      </div>

      <!-- Image 3 -->
      <div class="service-item">
        <img src="@/assets/plom-sani/douche-pmr1-1.jpg" alt="Service 3" class="service-image" />
        <p>Création de douche PMR</p>
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
 
