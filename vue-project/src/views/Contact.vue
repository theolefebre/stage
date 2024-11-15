<template>
  <div class="main-contact">
    <div class="box-contact">
      <form @submit.prevent="sendEmail">
        <h2>Nous contacter</h2>
        <div>
          <label for="firstName">Votre prénom :</label>
          <input type="text" v-model="firstName" id="firstName" required />
        </div>
        <div>
          <label for="lastName">Votre nom :</label>
          <input type="text" v-model="lastName" id="lastName" required />
        </div>
        <div>
          <label for="phone">Votre numéro de téléphone :</label>
          <input type="tel" v-model="phone" id="phone" required />
        </div>
        <div>
          <label for="email">Votre email :</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="subject">Sujet :</label>
          <input type="text" v-model="subject" id="subject" placeholder="demande de devis, travaux..." required />
        </div>
        <div>
          <label for="message">Message :</label>
          <textarea v-model="message" id="message"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <div class="autre-contact">
        <h2>Téléphone </h2>
        <p>03 29 94 02 00 / 06 83 49 98 72</p>
        <h2>Email</h2>
        <p>sarl.lefebreetfils@orange.fr</p>
      </div>
    </div>
    <div class="cutom-footer">
      <Footer />
    </div>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
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
        console.log("Données envoyées :", {
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          subject: this.subject,
          message: this.message
        });

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

        if (response.ok) {
          const result = await response.json();
          this.responseMessage = result.message;
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

.main-contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h2 {
  padding-top: 5px;
}

p {
  padding-top: 8px;
}

.box-contact {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-sizing: border-box;
  border-radius: 5px;
}

form {
  padding: 20px 40px 40px 40px;
  display: flex;
  flex-direction: column;
  width: 64%;
  background-color: transparent;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: solid 2px #333;
}

input {
  padding: 10px 10px 10px 15px;
  border: 1px solid gray;
  border-radius: 5px;
}

input:focus {
  outline: solid;
  outline-color: green;
  outline-width: 1px;
}

.autre-contact {
  color: #f4f4f4;
  background-color: #333;
  align-items: center;
  max-width: auto;
  padding: 15px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border: solid 2px #333;
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
  padding: 10px 10px 10px 15px;
  border: 1px solid gray;
  border-radius: 5px;
}

textarea:focus { 
  outline: solid;
  outline-color: green;
  outline-width: 1px;
}

button:hover {
  background-color: #0056b3;
}

.custom-footer {
  position: relative;
  bottom: 0;
  left: 0;
}
</style>
