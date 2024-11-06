<template>
  <div class="email-form">
    <h2>Envoyer un Email</h2>
    <form @submit.prevent="sendEmail">
      <div>
        <label for="email">Adresse Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="subject">Sujet</label>
        <input type="text" v-model="subject" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea v-model="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    async sendEmail() {
      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            to: 'jaquislefebre@gmail.com', // Adresse email cible fixe
            from: this.email,
            subject: this.subject,
            message: this.message
          })
        });

        if (response.ok) {
          alert('Email envoyé avec succès !');
          this.email = '';
          this.subject = '';
          this.message = '';
        } else {
          alert("Échec de l'envoi de l'email.");
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        alert("Erreur lors de l'envoi de l'email.");
      }
    }
  }
};
</script>

<style scoped>
.email-form {
  max-width: 500px;
  margin: auto;
}
</style>
