// conditioningData.js

// Importez vos images ici
import injectable from './../assets/images/conditioning/injectable.png';
import cp from './../assets/images/conditioning/cp.jpg';
import gel from './../assets/images/conditioning/gel.jpg';
import pommade from './../assets/images/conditioning/pommade.jpg';
import sirop from './../assets/images/conditioning/sirop.jpg';
import solute from './../assets/images/conditioning/solute.jpg';
import suppositoire from './../assets/images/conditioning/suppositoire.jpg';

// Map entre les noms de conditionnement et les images
const conditioningImages = {
  cp: cp,
  sirop: sirop,
  pommade: pommade,
  gel: gel,
  suppositoire: suppositoire,
  injectable: injectable,
  solute: solute,
};

// Données de conditionnement
const conditioningData = [
  { name: 'Cp', image: cp, activated: false },
  { name: 'Sirop', image: sirop, activated: true },
  { name: 'Pommade', image: pommade, activated: true },
  { name: 'Gel', image: gel, activated: true },
  { name: 'Suppositoire', image: suppositoire, activated: false },
  { name: 'Injectable', image: injectable, activated: true },
  { name: 'Solute', image: solute, activated: true },
];

// Ajoutez le chemin de l'image à chaque objet de conditionnement
const conditioningDataWithImages = conditioningData.map((conditioning) => ({
  ...conditioning,
  image: getImageForConditioning(conditioning.name),
}));

// Fonction pour obtenir le chemin de l'image en fonction du nom de conditionnement
function getImageForConditioning(conditioningName) {
  // Convertir le nom en minuscules pour éviter les problèmes de casse
  const lowercaseName = conditioningName.toLowerCase();
  
  // Vérifier si l'image existe pour le nom de conditionnement donné
  if (conditioningImages[lowercaseName]) {
    return conditioningImages[lowercaseName];
  }
  return cp;
}



// Exportez les données
export { conditioningData, conditioningDataWithImages, getImageForConditioning };
