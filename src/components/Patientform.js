import React, { useState } from 'react';

function generateAgeOptions() {
  const ageOptions = [];
  for (let age = 0; age <= 100; age++) {
    ageOptions.push(age.toString());
  }
  return ageOptions;
}

const PatientForm = ({ onFormFilled }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '18',
    phoneNumber: '',
    isMutual: false,
    mutuelleType: '',
    mutuelle: '',
    carnet: '',
  });

  // Créez un gestionnaire d'événements pour détecter les modifications du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (value.trim() === "") {
      console.log(`Le champ ${name} ne peut pas être vide.`);
      return;
    }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    const allFieldsFilled = Object.values({ ...formData, [name]: value }).every((field) => field !== "");
    if (allFieldsFilled) {
      onFormFilled();
    }
  };
  
  const ageOptions = generateAgeOptions();  


  const [isMutualise, setIsMutualise] = useState(false);

  const toggleMutual = () => {
    setIsMutualise(!isMutualise);
  };

  return (
    <div className="container mx-auto mt-10">
      <form>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="firstName">
            Prénom
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder='Prénom'
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="lastName">
            Nom
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='Nom'
          />
        </div>
        <div className="mb-4 flex">
          <div className="w-10px pr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="age">
              Âge
            </label>
            <select
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
          >
            {ageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          </div>
          <div className=" w-full pl-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="phoneNumber">
              Téléphone
            </label>
            <div className="mb-4 flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                +221
              </span>
              <input
                type="tel"
                className="shadow appearance-none border rounded-r-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lato"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Numéro de téléphone"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <button
            id="mutualToggle"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            type='button'
            onClick={toggleMutual}
            className={`text-black focus:ring-4 focus:outline-none focus:ring-greenApple font-medium text-sm px-5 py-2.5 text-center inline-flex items-center raleway`}
          >
            {isMutualise ? 'Mutualisé' : 'Non Mutualisé'}
            {isMutualise ? (
                <svg className="w-2.5 h-2.5 ml-2.5 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              ) :
              (
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              )
            }
          </button>
        </div>
        {isMutualise && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="mutuelleType">
                Type de Mutuelle
              </label>
              <select
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="mutuelleType"
                id="mutuelleType"
                value={formData.mutuelleType}
                onChange={handleInputChange}
              >
                <option value="">Sélectionnez un type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                {/* ... autres options de type de mutuelle */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="mutuelle">
                Mutuelle
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="mutuelle"
                id="mutuelle"
                value={formData.mutuelle}
                onChange={handleInputChange}
                placeholder='Mutuelle'
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 raleway" htmlFor="carnet">
                Carnet
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="carnet"
                id="carnet"
                value={formData.carnet}
                onChange={handleInputChange}
                placeholder='Carnet'
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
}



export default PatientForm;
