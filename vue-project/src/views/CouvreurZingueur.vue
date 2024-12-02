<template>
  <div class="couvreur-page">
    <h1 class="main-title"><br>Couverture-Zinguerie</h1>
    <div class="main-image-container">
      <img src="@/assets/couv-zinc/image2.jpg" alt="Couvreur Zingueur" class="main-image" />
      <!-- <p class="description">
        Le couvreur-zingueur est un professionnel du bâtiment spécialisé dans la pose, l'entretien et la réparation de toitures.
        Il s'occupe également des systèmes d'évacuation des eaux pluviales (gouttières, noue, tuyau de descente) et des éléments métalliques
        qui protègent la toiture.<br>- tuile béton, tuile terre cuite, toiture zinc, ardoise, bac acier. <br>
        - démoussage, grattage, balayage, traitement préventif curatif par pulvérisation
        <br>- fenêtre de toit, remplacement et pose, volet roulant solaire, store occultation totale.
        <br>- caisson de toiture bois/pvc
        <br>- remplacement gouttières, tuyau de descente, noue, garniture de cheminée, rive et main courante.
        <br>- zinc/cuivre/taule prélaqué de couleur
      </p> -->
      <p class="description">Notre entreprise est spécialisée dans une large gamme de services pour répondre à tous vos besoins en matière de toiture et d’équipements associés. Voici ce que nous pouvons réaliser pour vous :
        Travaux de couverture
        <br>
            Pose et remplacement de tuiles en béton, tuiles en terre cuite, toitures en zinc, ardoises et bacs acier. <br>
            Installation de solutions adaptées à tous les styles et contraintes architecturales. <br>
        <br>
        Entretien et nettoyage de toiture
        <br>
            Démoussage, grattage, balayage : des solutions pour redonner à votre toiture tout son éclat. <br>
            Traitement préventif et curatif par pulvérisation pour protéger durablement votre toiture contre les intempéries, la mousse et les lichens. <br>
        <br>
        Fenêtres de toit et accessoires
        <br>
            Remplacement et pose de fenêtres de toit pour optimiser la luminosité et le confort de votre habitat. <br>
            Installation de volets roulants solaires pour une gestion pratique et écologique de l’occultation. <br>
            Pose de stores à occultation totale, parfaits pour créer des espaces sombres et apaisants. <br>
        <br>
        Habillage et éléments de finition
        <br>
            Création et remplacement de caissons de toiture en bois ou en PVC pour des finitions impeccables. <br>
            Travaux sur gouttières, tuyaux de descente, noues, garnitures de cheminée, rives et mains courantes, pour garantir une évacuation efficace des eaux et une protection durable. <br>
        <br>
        Zinguerie et tôlerie
        <br>
            Fabrication et pose d’éléments en zinc, cuivre ou tôle prélaquée de couleur pour des toitures esthétiques et résistantes.<br>
        <br>
        Nous mettons tout en œuvre pour offrir des solutions durables, esthétiques et adaptées à vos besoins. Faites-nous confiance pour valoriser et protéger votre patrimoine avec expertise et passion.</p>
    </div>
    <!-- Texte secondaire -->
    <h2 class="et-aussi">Et aussi</h2>

    <!-- Section avec 3 autres images et descriptions -->
    <div class="additional-services">
      <!-- Image 1 -->
      <div class="service-item">
        <img src="@/assets/couv-zinc/image1.jpg" alt="Service 1" class="service-image" />
        <p>remplacement de zinguerie/caisson de toiture pvc</p>
      </div>

      <!-- Image 2 -->
      <div class="service-item">
        <img src="@/assets/couv-zinc/démoussage.jpg" alt="Service 2" class="service-image" />
        <p>démoussage/traitement anti-mousse</p>
      </div>

      <!-- Image 3 -->
      <div class="service-item">
        <img src="@/assets/couv-zinc/image4.jpg" alt="Service 3" class="service-image" />
        <p>Rénovation de toiture/pose remplacement fenêtrede toit</p>
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
 
