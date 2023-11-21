import React, { useState } from 'react';

function generateQuantiteOptions() {
    const quantiteOptions = [];
    for (let quantite = 0; quantite <= 100; quantite++) {
      quantiteOptions.push(quantite.toString());
    }
    return quantiteOptions;
}
  

const AddMedication = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        quantite: '1',
        phoneNumber: '',
        isMutual: false,
        mutuelleType: '',
        mutuelle: '',
        carnet: '',
    });

    const quantiteOptions = generateQuantiteOptions();    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    
    const handleAdd = () => {
      // Ajoutez ici votre logique de Add
      // Par exemple, vous pouvez afficher une alerte ou effectuer une action spécifique
      alert('Add réussie !');
    };
  
    return (  
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="conditionnement">
              Conditionnement
            </label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
              name="conditionnement"
              id="conditionnement"
              value={formData.conditionnement}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un conditionnement</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* ... autres options de type de mutuelle */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="medicament">
              Médicament
            </label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
              name="medicament"
              id="medicament"
              value={formData.medicament}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un médicament</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* ... autres options de type de mutuelle */}
            </select>
          </div>
          <div className="w-16 pr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="quantite">
              Quantité
              </label>
              <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quantite"
              id="quantite"
              value={formData.quantite}
              onChange={handleChange}
          >
              {quantiteOptions.map((option) => (
              <option key={option} value={option}>
                  {option}
              </option>
              ))}
          </select>
          </div>
          <button
            onClick={handleAdd}
            className="bg-greenApple hover:bg-green-600 text-white text-md font-bold py-2 px-8 m-8 rounded-full"
          >
            Ajouter
          </button>
      
        </div>
    );
}
 
export default AddMedication;