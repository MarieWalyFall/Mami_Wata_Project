import React, { useState } from 'react';

function generateQuantiteOptions() {
    const quantiteOptions = [];
    for (let quantite = 0; quantite <= 100; quantite++) {
      quantiteOptions.push(quantite.toString());
    }
    return quantiteOptions;
}
  

const AddTicket = () => {

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
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="categorie">
              Catégorie
            </label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
              name="categorie"
              id="categorie"
              value={formData.categorie}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* ... autres options de type de mutuelle */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="service">
              Service
            </label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un service</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              {/* ... autres options de type de mutuelle */}
            </select>
          </div>
        </div>
    );
}
 
export default AddTicket;