<template>
  <div>
    <h2>Envoyer un email</h2>
    <div class="box-contact">
      <form @submit.prevent="sendEmail">
        <div>
          <label for="firstName">Prénom :</label>
          <input type="text" v-model="firstName" id="firstName" placeholder="Votre prénom" required />
        </div>
        <div>
          <label for="lastName">Nom :</label>
          <input type="text" v-model="lastName" id="lastName" placeholder="Votre nom" required />
        </div>
        <div>
          <label for="phone">Numéro de téléphone :</label>
          <input type="tel" v-model="phone" placeholder="Votre numéro de téléphone" required />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" v-model="email" id="email" placeholder="Votre adresse mail" required />
        </div>
        <div>
          <label for="subject">Sujet :</label>
          <input type="text" v-model="subject" id="subject" required />
        </div>
        <div>
          <label for="message">Message :</label>
          <textarea v-model="message" id="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <div class="autre-contact">
        <h2>Nous contacter  </h2>
        <p>Téléphone<br>03 29 94 02 00 / 06 83 49 98 72</p>
        <p>Email<br>sarl.lefebreetfils@orange.fr</p>
      </div>
    </div>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      responseMessage: ''
    };
  },
  methods: {
    async sendEmail() {
      try {
        // Log les données envoyées pour le débogage
        console.log("Données envoyées :", {
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          subject: this.subject,
          message: this.message
        });

        // Envoie la requête POST vers le backend
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            subject: this.subject,
            message: this.message
          })
        });

        // Gère la réponse du serveur
        if (response.ok) {
          const result = await response.json();
          this.responseMessage = result.message;
          // Effacer les champs après un envoi réussi
          this.firstName = '';
          this.lastName = '';
          this.phone = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        } else {
          const errorResult = await response.json();
          this.responseMessage = errorResult.message || 'Une erreur est survenue.';
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi de la requête :", error);
        this.responseMessage = "Message envoyé";
      }
    }
  }
};
</script>

<style scoped>

.box-contact {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-sizing: border-box;
}

form {
  padding: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: aquamarine;
}

.autre-contact {
  background-color: rgb(177, 30, 30);
  align-items: center;
  max-width: auto;
  padding: 20px;
}

form div {
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}
</style>
