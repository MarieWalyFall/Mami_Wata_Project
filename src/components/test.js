import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '18',
    phoneNumber: '', // Champ de numéro de téléphone
    isMutual: false,
    mutuelleType: '',
    mutuelle: '',
    carnet: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleMutual = () => {
    setFormData({
      ...formData,
      isMutual: !formData.isMutual,
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Formulaire</h1>
      <form>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
              Âge
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
            >
              {/* Vous pouvez générer dynamiquement les options d'âge si nécessaire */}
              <option value="18">18 ans</option>
              <option value="19">19 ans</option>
              {/* ... autres options d'âge */}
            </select>
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Téléphone
            </label>
            <div className="mb-4 flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                +221
              </span>
              <input
                type="tel"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Numéro de téléphone"
              />
            </div>
          </div>
        </div>
        {/* ... Autres champs du formulaire */}
      </form>
    </div>
  );
}

export default UserForm;
