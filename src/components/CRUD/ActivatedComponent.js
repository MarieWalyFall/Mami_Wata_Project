import React, { useState } from 'react';

const ActivatedComponent = ({ data, onCancel, onConfirm }) => {
  // Utilisez l'état local pour suivre les données du formulaire
  const [formData, setFormData] = useState(data);

  // Gestionnaire pour soumettre le formulaire
  const handleSubmit = () => {
    setFormData({
      ...formData,
      activated: !formData.activated,
    });
    onConfirm(formData);
  };
  
  const getMessage = () => {
    return !formData.activated ? <span className='text-3xl text-greenApple' >Activé</span> : <span className='text-3xl font-semibold text-red-500'>Désactivé</span>;
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        {/* ... Arrière-plan gris et flou ... */}
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 blur"></div>
        <div className="relative bg-white rounded-lg p-4 z-10">
            <div className='flex flex-col m-8'>
            
                <p className="text-xl mb-2"> Voulez vous vraiment mettre le status à : {getMessage()}</p>
                <div className="flex items-center">
                    <button
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

            </div>
        </div>
    </div>

  );
};

export default ActivatedComponent;
