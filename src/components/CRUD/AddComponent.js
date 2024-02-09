import React, { useState } from 'react';

const AddComponent = ({ fields, onCancel, onConfirm }) => {
  const [formData, setFormData] = useState(getInitialFormData(fields));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirm = () => {
    onConfirm(formData);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 blur"></div>
      <div className="relative bg-white rounded-lg p-4 z-10">
        <div className='flex flex-col m-12'>
          {fields
          .filter(field => field.name !== 'activated')
          .filter(field => field.name !== 'mutualized')
          .filter(field => field.name !== 'id')
          .map((field) => (
            field.name === 'field' ? (
              <h1 className='text-xl text-gray-700' key={field.name}>Ajouter {field.placeholder}</h1>
            ) : (
              <input
                key={field.name}
                type={field.type.toLowerCase()}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className='border-b my-3 py-1 text-lg'
              />
            )
          ))}
          <div className="flex justify-center mt-4">
            <button
              className="bg-greenApple hover:bg-green-700 text-white px-4 py-2 mx-2 rounded"
              onClick={handleConfirm}
            >
              Confirmer
            </button>
            <button
              className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 mx-2 rounded"
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

const getInitialFormData = (fields) => {
  const initialData = {};
  fields.forEach((field) => {
    initialData[field.name] = '';
  });
  return initialData;
};

export default AddComponent;
