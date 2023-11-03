// installation du module nodemailer, en utilisant : npm install nodemailer
const nodemailer = require('nodemailer');

// Configuration du transporteur (SMTP)
const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: 'karimxy306@gmail.com', // mon adresse e-mail
    pass: 'latg pnkn glen zudw', // Votre mot de passe
  },
});

// Paramètres du message
const mailOptions = {
  from: 'karimxy306@gmail.com', // L'expéditeur   
  to: 'aderrab.karim1983@gmail.com', // Le destinataire
  subject: 'Test Node', 
  text: 'ceci est un test a verifier', // Le contenu du message 
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail : ' + error);
  } else {
    console.log('E-mail envoyé : ' + info.response);    
  }
});
// j'ai fait le test avec mes deux adresses mail, et ca marchait