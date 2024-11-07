const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou autre service de mail
  auth: {
    user: 'theoservertest1@gmail.com', // remplacer par l'email de ton serveur
    pass: 'gefd pker dezw bcvh' // remplacer par le mot de passe de ton serveur
  }
});

app.post('/send-email', (req, res) => {
  const { to, from, subject, message } = req.body;

  const mailOptions = {
    from,
    to,
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur d\'envoi :', error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email');
    } else {
      console.log('Email envoyé :', info.response);
      res.status(200).send('Email envoyé avec succès');
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur backend démarré sur http://localhost:3000');
});

