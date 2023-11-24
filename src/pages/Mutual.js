import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavbarVertical from "../components/Navbar/NavbarVertical";

import { NatureMutualFields, MutualFields } from '../components/Data/Fields';
import { NatureMutualData, MutualData, UserData } from '../components/Data/Data';

import AddComponent from '../components/CRUD/AddComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';
import EditComponent from '../components/CRUD/EditComponent';


import editSymbol from './../assets/images/crud/edit-4-svgrepo-com.png';
import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';
import plusSymbol from './../assets/images/crud/plus-svgrepo-com.png';


const Mutual = () => {

    const [isFormOpenNatureMutual, setFormOpenNatureMutual] = useState(false);
    const [isFormOpenMutual, setFormOpenMutual] = useState(false);

    const [selectedNatureMutual, setSelectedNatureMutual] = useState(null);
    const [selectedMutual, setSelectedMutual] = useState(null);

    const [isActivatedNatureMutual, setActivatedOpenNatureMutual] = useState(false);
    const [isActivatedMutual, setActivatedOpenMutual] = useState(false);

    const [isEditOpen, setEditOpen] = useState(false);


    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);
  
    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }
    if(user.authority_name != 'admin' && user.authority_name != 'pharmacien'){
      return <div>Utilisateur non autorisé</div>;
    }
  
    const handleEditClick = (mutual) => {
        setSelectedMutual(mutual);
        setEditOpen(true);
    };



    const handleAddClickNatureMutual = () => {
        setFormOpenNatureMutual(true);
    };

    const handleAddClickMutual = () => {
        setFormOpenMutual(true);
    };


    const handleActivatedClickNatureMutual = (natureMutual) => {
        setSelectedNatureMutual(natureMutual);
        setActivatedOpenNatureMutual(true);
    };
    const handleActivatedClickMutual = (mutual) => {
        setSelectedMutual(mutual);
        setActivatedOpenMutual(true);
    };

    const handleFormCancel = () => {
        setFormOpenNatureMutual(false);
        setFormOpenMutual(false);
        setActivatedOpenMutual(false);
        setActivatedOpenNatureMutual(false);
        setSelectedNatureMutual(null);
        setSelectedMutual(null);
        setEditOpen(false)
    };

    
    const handleFormConfirmNatureMutual = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenNatureMutual(false);
        setActivatedOpenNatureMutual(false);
        setSelectedNatureMutual(null);
    };
    const handleFormConfirmMutual = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenMutual(false);
        setActivatedOpenMutual(false);
        setSelectedMutual(null);
        setEditOpen(false)
    };


    return (  
        <div className="flex">
            <NavbarVertical page="mutual" userId={userId}/>
            <div className="p-4">
                <h1 className="text-3xl mt-10 inter ml-10 mb-4">Mutuelles</h1>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Nature des mutuelles</h1>
                    <div className='flex justify-end pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickNatureMutual}>
                            <span className='pr-2 font-semibold'>Ajouter</span>  
                            <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                        </button>
                    </div>
                    <table className="ml-10 mb-6">
                        <thead>
                            <tr className='raleway border-b-2 border-gray-400'>
                                <th className="py-4 pl-6">Nom</th>
                                <th className="py-4 px-7">Statut</th>
                                <th className="py-4 px-7">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='inter'>
                            {NatureMutualData && NatureMutualData.map((natureMutual) => (
                                <tr className='border-b'>
                                    <td className="py-4 pl-6">{natureMutual.name}</td>
                                    <td className="py-4 px-7">
                                    <span className={`bg-${natureMutual.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                        {natureMutual.activated ? 'Activé' : 'Désactivé'}
                                    </span>
                                    </td>    
                                    <td className="py-4 px-7">
                                        <button onClick={() => handleActivatedClickNatureMutual(natureMutual)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                    </td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Type de mutuelles</h1>
                    <div className='flex justify-end pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickMutual}>
                            <span className='pr-2 font-semibold'>Ajouter</span>  
                            <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                        </button>
                    </div>
                    <table className=" table-auto ml-10 w-full mb-6">
                        <thead >
                            <tr className='raleway border-b-2 border-gray-400'>
                                <th className='py-4 pl-6'>Facturation</th>
                                <th className="py-4 px-7">Institution</th>
                                <th className="py-4 px-7">Nature</th>
                                <th className="py-4 px-7">Part patient (en %)</th>
                                <th className="py-4 px-7">Satut</th>
                                <th className="py-4 px-7">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='inter'>
                            {MutualData && MutualData.map((mutual) => (
                                <tr className='border-b'>
                                    <td className="py-4 pl-6">{mutual.facturation} </td>
                                    <td className="py-4 px-7">{mutual.institution}</td>    
                                    <td className="py-4 px-7">{mutual.nature}</td>    
                                    <td className="py-4 px-7">{mutual.part}</td>    
                                    <td className="py-4 px-7">
                                    <span className={`bg-${mutual.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                        {mutual.activated ? 'Activé' : 'Désactivé'}
                                    </span>
                                </td>    
                                <td className="py-4 px-7">
                                    <button onClick={() => handleEditClick(mutual)}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                    <button onClick={() => handleActivatedClickMutual(mutual)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </div>
            {isFormOpenNatureMutual && (
                    <AddComponent fields={NatureMutualFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmNatureMutual} />
            )}
            {isFormOpenMutual && (
                    <AddComponent fields= {MutualFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmMutual} />
            )}
            {isActivatedNatureMutual && (
                <ActivatedComponent data={selectedNatureMutual} onCancel={handleFormCancel} onConfirm={handleFormConfirmNatureMutual}/>
            )}
            {isActivatedMutual && (
                <ActivatedComponent data={selectedMutual} onCancel={handleFormCancel} onConfirm={handleFormConfirmMutual}/>
            )}

            {isEditOpen && (
                <EditComponent fields={MutualFields} data={selectedMutual} onCancel={handleFormCancel} onConfirm={handleFormConfirmMutual}/>
            )}


        </div>

    );
}
 
export default Mutual;