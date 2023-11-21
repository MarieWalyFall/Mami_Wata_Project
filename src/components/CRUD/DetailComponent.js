import { useState } from "react";

const DetailComponent = ({fields, data, onCancel }) => {
  const [formData, setFormData] = useState(data);
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 blur"></div>
      <div className="relative bg-white rounded-lg p-4 z-10">
        <div className='flex flex-col m-12'>
        {fields
        .filter(field => field.name !== 'id')
        .map((field) => (
          <div key={field.name} className="mb-3">
            <span className="font-semibold">{field.placeholder} : </span> 
            {(() => {
                switch (field.name) {
                case 'activated':
                  return (
                    formData[field.name] ? 'Activé' : 'Désactivé'
                  );
              case 'mutualized':
                    return (
                      formData[field.name] ? 'OUI' : 'NON'
                    );
                default:
                    return formData[field.name];
                }
            })()}

          </div>
        ))}

          <div className="flex justify-center mt-4">
            <button
              className="bg-red-700 hover:bg-red-900 text-white px-4 py-2 mx-2 rounded"
              onClick={onCancel}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;