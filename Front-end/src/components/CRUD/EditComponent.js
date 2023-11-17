import React, { useState } from 'react';

const EditComponent = ({ fields, data, onCancel, onConfirm }) => {
  // Utilisez l'état local pour suivre les données du formulaire
  const [formData, setFormData] = useState(data);

  // Gestionnaire pour mettre à jour les champs du formulaire
  const handleChange = (e, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  // Gestionnaire pour soumettre le formulaire
  const handleSubmit = () => {
    // Appeler la fonction onConfirm avec les données mises à jour
    onConfirm(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
    {/* ... Arrière-plan gris et flou ... */}
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 blur"></div>
    <div className="relative bg-white rounded-lg p-4 z-10">
    <div className='flex flex-col m-8'>
      <form>
        {fields
        .map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.placeholder}
            </label>
            <input
              type={field.type === 'Long' || field.type === 'Double' ? 'number' : 'text'}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(e, field.name)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-greenApple hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
            onClick={handleSubmit}
          >
            Confirmer
          </button>
          <button
            type="button"
            className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
    </div>
  </div>

  );
};

export default EditComponent;
