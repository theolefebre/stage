const nodemailer = require('nodemailer');

// Création du transporteur SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Serveur SMTP
  port: 587, // Port TLS
  secure: false, // true pour SSL, false pour TLS
  auth: {
    user: 'jaquislefebre@gmail.com', // Ton adresse email
    pass: 'La-bas9e', // Ton mot de passe
  },
});


// Configuration du message à envoyer
const mailOptions = {
  from: 'lefebretheo88@gmail.com',  // L'adresse email de l'expéditeur
  to: 'theo.lefebre@epitech.eu', // Adresse email du destinataire
  subject: 'Hello avec Nodemailer', // Sujet de l'email
  text: 'Ceci est un test d\'envoi d\'email avec Nodemailer', // Corps de l'email en texte
  html: '<b>Ceci est un test d\'envoi d\'email avec Nodemailer en HTML</b>' // Optionnel, corps de l'email en HTML
};

// Envoi de l'email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erreur d\'envoi: ', error);
  }
  console.log('Email envoyé avec succès: ', info.response);
});
