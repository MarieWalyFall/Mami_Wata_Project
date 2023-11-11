import React, { useState } from 'react';

const AddMedicationForm = ({ onCancel, onConfirm }) => {
  const [formData, setFormData] = useState({
    // Définissez ici les champs nécessaires, par exemple :
    conditionnement: '',
    nom: '',
    prix: '',
    description: '',
    warningLevel: '',
    quantite: '',
    // ... d'autres champs ...
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirm = () => {
    // Mettez ici la logique pour traiter le formulaire
    // Vous pouvez appeler la fonction onConfirm avec les données du formulaire
    onConfirm(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* ... Arrière-plan gris et flou ... */}
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 blur"></div>
      <div className="relative bg-white rounded-lg p-4 z-10">
        {/* ... Votre formulaire ici ... */}
        <div className='flex flex-col m-12 '>

            <input
            type="text"
            name="nom"
            value={formData.conditionnement}
            onChange={handleChange}
            placeholder="Nom"
            className='border-b my-3 py-1 text-lg'
            />
            <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className='border-b my-3 py-1 text-lg'
            />
            <input
            type="text"
            name="conditionnement"
            value={formData.conditionnement}
            onChange={handleChange}
            placeholder="Conditionnement"
            className='border-b my-3 py-1 text-lg'
            />
            <input
            type="text"
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            placeholder="Prix"
            className='border-b my-3 py-1 text-lg'
            />
            <input
            type="text"
            name="quantite"
            value={formData.quantite}
            onChange={handleChange}
            placeholder="Quantité"
            className='border-b my-3 py-1 text-lg'
            />
            <input
            type="text"
            name="warningLevel"
            value={formData.warningLevel}
            onChange={handleChange}
            placeholder="Niveau dangereux"
            className='border-b my-3 py-1 text-lg'
            />
        </div>
        
        <div className="flex justify-center mt-4">
          <button
            className="bg-greenApple text-white px-4 py-2 mx-2 rounded"
            onClick={handleConfirm}
          >
            Confirmer
          </button>
          <button
            className="bg-red-700 text-white px-4 py-2 mx-2 rounded"
            onClick={onCancel}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicationForm;
