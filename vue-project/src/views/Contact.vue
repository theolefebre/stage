<template>
  <div class="contact">
    <h1>Contactez-nous</h1>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="email">Email :</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>
      <div>
        <label for="subject">Sujet :</label>
        <input v-model="form.subject" type="text" id="subject" required />
      </div>
      <div>
        <label for="message">Message :</label>
        <textarea v-model="form.message" id="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          console.log('Email envoyé avec succès');
          // Optionnel : ajouter un message de confirmation pour l'utilisateur
        } else {
          console.error('Erreur lors de l\'envoi de l\'email');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
      }
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: auto;
  padding: 7em;
}

form div {
  margin-bottom: 1em;
}

button {
  padding: 0.5em 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
