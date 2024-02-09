import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavbarVertical from "../components/Navbar/NavbarVertical";

import AddComponent from '../components/CRUD/AddComponent';
import DetailComponent from '../components/CRUD/DetailComponent';
import EditComponent from '../components/CRUD/EditComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';

import { MedicationData, UserData } from '../components/Data/Data';
import { MedicationFields } from '../components/Data/Fields';

import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';
import editSymbol from './../assets/images/crud/edit-4-svgrepo-com.png';
import plusSymbol from './../assets/images/crud/plus-svgrepo-com.png';
import eyeSymbol from './../assets/images/crud/eye-alt-svgrepo-com.png';
  

const ListMedication = () => {
    const [selectedMedication, setSelectedMedication] = useState(null);
    const [isActivated, setActivatedOpen] = useState(false);

    const handleActivatedClick = (medication) => {
        setSelectedMedication(medication);
        setActivatedOpen(true);
    };
    
    const [isDetailed, setDetailedOpen] = useState(false);

    const handleDetailClick = (medication) => {
        setSelectedMedication(medication);
        setDetailedOpen(true);
    };

    const [isEditOpen, setEditOpen] = useState(false);

    // Gestionnaire pour ouvrir le composant d'édition
    const handleEditClick = (medication) => {
        setSelectedMedication(medication);
        setEditOpen(true);
    };


    const [isFormOpen, setFormOpen] = useState(false);

    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);
  
    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }
    if(user.authority_name != 'admin' && user.authority_name != 'pharmacien'){
      return <div>Utilisateur non autorisé</div>;
    }


    const handleAddClick = () => {
        setFormOpen(true);
    };

    
    const handleFormCancel = () => {
        setFormOpen(false);
        setSelectedMedication(null);
        setEditOpen(false);
        setActivatedOpen(false);
        setDetailedOpen(false);

    };

    const handleFormConfirm = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpen(false);
        setEditOpen(false);
        setActivatedOpen(false);

    };




    return (  
        <div className='flex'>
            <NavbarVertical page="listMedication" userId={userId}/>
            <div className='p-4'>
                <h1 className="inter text-3xl mt-10 inter ml-10 mb-4">Liste de médicaments</h1>
                <div className='flex justify-end pb-6'>
                    <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClick}>
                        <span className='pr-2 font-semibold'>Ajouter</span>  
                        <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                    </button>

                </div>
                <table className="table-auto ml-10 w-full mb-6">
                    <thead >
                        <tr className='raleway border-b-2 border-gray-400'>
                            <th className='py-4 pl-6'>Image</th>
                            <th className="py-4 px-7">Conditionnement</th>
                            <th className="py-4 px-7">Designation</th>
                            <th className="py-4 px-7">Prix XOF</th>
                            <th className="py-4 px-7">Quantité</th>
                            <th className="py-4 px-7">CMM</th>
                            <th className="py-4 px-7">Satut</th>
                            <th className="py-4 px-7">Action</th>
                        </tr>
                    </thead>
                    <tbody className='inter'>
                        {MedicationData && MedicationData.map((medication) => (
                            <tr className='border-b'>
                                <td className='py-4 pl-6'>
                                    <img className='w-7 h-7' src={medication.image} alt="" />
                                </td>
                                <td className="py-4 px-7">{medication.conditioning} </td>
                                <td className="py-4 px-7">{medication.name}</td>    
                                <td className="py-4 px-7">{medication.price}</td>    
                                <td className="py-4 px-7">{medication.quantity} </td>    
                                <td className="py-4 px-7">
                                    {(() => {
                                        switch (medication.stockLevelIndication) {
                                        case 'LOW':
                                            return (
                                            <span className="bg-orange-500 p-1 border rounded-md text-white">
                                                Faible
                                            </span>
                                            );
                                        case 'MEDIUM':
                                            return (
                                            <span className="bg-yellow-500 p-1 border rounded-md text-white">
                                                Moyen
                                            </span>
                                            );
                                        case 'SAFE':
                                            return (
                                            <span className="bg-greenApple p-1 border rounded-md text-white">
                                                Sûr
                                            </span>
                                            );
                                        case 'ALARMING':
                                            return (
                                            <span className="bg-red-500 p-1 border rounded-md text-white">
                                                Alarmant
                                            </span>
                                            );
                                        default:
                                            return null; // Vous pouvez également afficher un message par défaut ou ne rien afficher
                                        }
                                    })()}

                                </td>    
                                <td className="py-4 px-7">
                                    <span className={`bg-${medication.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                        {medication.activated ? 'Activé' : 'Désactivé'}
                                    </span>
                                </td>    
                                <td className="py-4 px-7">
                                    <button onClick={() => handleDetailClick(medication)}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                    <button onClick={() => handleEditClick(medication)}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                    <button onClick={() => handleActivatedClick(medication)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                        ))}
                    </tbody>
                </table>    

            </div>
            {isFormOpen && (
                    <AddComponent fields={MedicationFields} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
            )}
            {isDetailed && (
                <DetailComponent fields={MedicationFields} data={selectedMedication} onCancel={handleFormCancel} />
            )}
            {isEditOpen && (
                <EditComponent fields={MedicationFields} data={selectedMedication} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}
            {isActivated && (
                <ActivatedComponent data={selectedMedication} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}

        </div>
    );

}

export default ListMedication;