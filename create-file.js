// creation d'un fichier nommé "welcome.txt" contenant une ligne "Hello Node".
// // Importation  le module fs
const fs = require('fs');
//  Le contenu  dans le fichier
const content = 'Hello Node';
// Le nom du fichier que nous voulons creer
const nomDuFichier = 'welcome.txt';
// la méthode `writeFile` pour creer et ecrire le contenu dans le fichier
fs.writeFile('welcome.txt', content, (err) => {

    if (err) {
        console.error("Une erreur s'est produite lors de la création du fichier :", err);
    } else {
        console.log('Le fichier "welcome.txt" a été créé avec succès:', content);
    }
});







