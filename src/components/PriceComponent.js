import React, { useState } from 'react';

const PriceComponent = () => {
  const [priceService, setPriceService] = useState(6000);
  const [priseEnCharge, setPriseEnCharge] = useState(4500);

  const handleValidation = () => {
    // Ajoutez ici votre logique de validation
    // Par exemple, vous pouvez afficher une alerte ou effectuer une action spécifique
    alert('Validation réussie !');
  };

  // Calcul du prix net
  const priceNet = priceService - priseEnCharge;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center font-bold m-6">
        <span className="border-b border-dotted border-gray-400 text-3xl text-gray-500">
          Prix net :
        </span>
        <span className="text-greenApple text-3xl ml-2">
          {priceNet}F
        </span>
      </div>

      <div className="text-left mt-2 text-gray-500">
        Prix du service : <span className='font-bold'>{priceService}F</span>
      </div>

      <div className="text-left text-gray-500">
        Prise en charge : <span className="text-red-500 font-bold">{priseEnCharge}F</span>
      </div>

      <button
        onClick={handleValidation}
        className="bg-greenApple hover:bg-green-600 text-white font-bold py-2 px-4 m-8 rounded-full"
      >
        Valider
      </button>
    </div>
  );
};

export default PriceComponent;
