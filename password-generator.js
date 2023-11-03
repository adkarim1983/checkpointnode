// installation de generatuer de mot de pass avec la commande : npm install generate-password

const generatePassword = require('generate-password');
var generator = require('generate-password');

var passwords = [];
for (var i = 0; i < 10; i++) {
  var password = generator.generate({ length: 13, uppercase: true });
  passwords.push(password);
}

console.log(passwords);
// les password générés:'KYjQQhegscmby',
  /*'xdRbgXuQAqmxw',
  'KOIchJmVYsBsI',
  'NnSdDnXGeDwpD',
  'HycdzdOfRhcmC',
  'lmFXVEEutwJAt',
  'dbDyNpySYIWfX',
  'juGGptmTtRrfY',
  'MNbUhDRIIOBrs',
  'ikjafjzTyrPeQ' */


///////////////////////////////////     //////////////////////////////////        ////////////////////////////////// 
/* un autre code qui genere un password:
const generatePassword = require('generate-password');
const options = {
  length: 12, // Longueur du mot de passe
  numbers: true, // Inclure des chiffres
  uppercase: true, // Inclure des lettres majuscules
  
};
const password = generatePassword.generate(options);
console.log("Mot de passe généré : " + password);
// mot de pass généré: 8nj8riZ7t951






*/
