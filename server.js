const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // ou autre service de mail
  auth: {
    user: 'theoservertest1@gmail.com', // remplacer par l'email de ton serveur
    pass: 'gefd pker dezw bcvh' // remplacer par le mot de passe de ton serveur
  }
});

app.post('/send-email', async (req, res) => {
  const { firstName, lastName, phone, email, subject, message } = req.body;

  console.log("Données reçues :", req.body);
  
  if (!email) {
    console.error("Email est manquant ou undefined !");
    return res.status(400).json({ message: "L'adresse e-mail est manquante." });
  }

  const mailOptions = {
    from: email,
    to: "jaquislefebre@gmail.com",
    subject: subject,
    text: `Nom : ${firstName} ${lastName}\nPhone : ${phone}\nEmail : ${email}\<nMessage :\n${message}`
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
