import React, { useState } from 'react';
import NavbarVertical from "../components/Navbar/NavbarVertical";
import ActivatedComponent from '../components/CRUD/ActivatedComponent';
import { conditioningData } from '../components/Data/Data';
import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';

const Conditioning = () => {
  const [isActivated, setActivated] = useState(false);
  const [selectedConditioning, setSelectedConditioning] = useState(null);
  const [conditioningDataBis, setConditioningData] = useState(conditioningData);

  const handleActivatedClick = (conditioning) => {
    setSelectedConditioning(conditioning);
    setActivated(true);
  };

  const handleFormCancel = () => {
    setActivated(false);
  };

  const handleFormConfirm = (formData) => {
    if (selectedConditioning) {
      // Create a new array with the updated object
      const updatedConditioningData = conditioningDataBis.map((conditioning) =>
        conditioning.name === selectedConditioning.name ? { ...conditioning, ...formData } : conditioning
      );

      // Update the state with the new array
      setConditioningData(updatedConditioningData);

      // Reset state
      setActivated(false);
      setSelectedConditioning(null);
    }
  };
  return (
    <div className="flex">
      <NavbarVertical page="conditioning" />
      <div className="p-4">
        <h1 className="text-3xl mt-10 inter ml-10 mb-4">Liste de conditionnement</h1>
        <table className="table-auto w-full ml-10 mb-6">
          <thead>
            <tr className="raleway border-b-2 border-gray-400">
              <th className="py-4 pl-6">Image</th>
              <th className="py-4 px-7">Nom</th>
              <th className="py-4 px-7">Statut</th>
              <th className="py-4 px-7">Action</th>
            </tr>
          </thead>
          <tbody className="inter">
            {conditioningData && conditioningData.map((conditioning) => (
              <tr key={conditioning.name} className="border-b">
                <td className="py-4 pl-6">
                  <img className="w-7 h-7" src={conditioning.image} alt={conditioning.name} />
                </td>
                <td className="py-4 px-7">{conditioning.name}</td>
                <td className="py-4 px-7">
                  <span className={`bg-${conditioning.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                    {conditioning.activated ? 'Activé' : 'Désactivé'}
                  </span>
                </td>
                <td className="flex justify-center py-4 px-7">
                  <button onClick={() => handleActivatedClick(conditioning)}>
                    <img className="w-6 h-6" src={deleteSymbol} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isActivated && (
        <ActivatedComponent data={selectedConditioning} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
      )}
    </div>
  );
};

export default Conditioning;
