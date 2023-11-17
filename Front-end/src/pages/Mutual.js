import React, { useState } from 'react';
import NavbarVertical from "../components/NavbarVertical";
import AddComponent from '../components/CRUD/AddComponent';
import EditComponent from '../components/CRUD/EditComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';

import editSymbol from './../assets/images/edit-4-svgrepo-com.png';
import deleteSymbol from './../assets/images/delete-svgrepo-com.png';
import plusSymbol from './../assets/images/plus-svgrepo-com.png';

const mutualFields = [
    { name: 'facturation', type: 'String', placeholder: 'Facturation' },
    { name: 'institution', type: 'String', placeholder: 'Institution' },
    { name: 'part', type: 'Integer', placeholder: 'Part patient (en %)' },
];
const natureFields = [
    { name: 'name', type: 'String', placeholder: 'Nom' },
];


const Mutual = () => {

    const [isFormOpenMutual, setFormOpenMutual] = useState(false);
    const [isFormOpenNature, setFormOpenNature] = useState(false);

    const handleAddClickMutual = () => {
        setFormOpenMutual(true);
    };

    const handleAddClickNature = () => {
        setFormOpenNature(true);
    };


    const handleFormCancel = () => {
        setFormOpenMutual(false);
        setFormOpenNature(false);
    };

    const handleFormConfirmMutual = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenMutual(false);
    };
    const handleFormConfirmNature = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenNature(false);
    };


    return (  
        <div className="flex">
            <NavbarVertical page="mutual"/>
            <div className="p-4">
                <h1 className="text-3xl mt-10 inter ml-10 mb-4">Mutuelles</h1>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Natures de mutuelle</h1>
                    <div className='flex justify-end pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickNature}>
                            <span className='pr-2 font-semibold'>Ajouter</span>  
                            <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                        </button>
                    </div>

                    <table className="table-auto ml-10">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Nom</th>
                                <th className="px-4 py-2">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Cesam</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-greenApple p-1 border rounded-md text-white"
                                >
                                    Activé
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Tavailleur</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-red-500 p-1 border rounded-md text-white"
                                >
                                    Désactivé
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Maladie universelle</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-greenApple p-1 border rounded-md text-white"

                                >
                                    Activé
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des mutuelles</h1>
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
                        <tr className='border-b'>
                                <td className="py-4 px-7">Facturation</td>
                                <td className="py-4 px-7">Institution</td>    
                                <td className="py-4 px-7">Cesam</td>    
                                <td className="py-4 px-7">20</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                            <tr className='border-b'>
                                <td className="py-4 px-7">Facturation</td>
                                <td className="py-4 px-7">Institution</td>    
                                <td className="py-4 px-7">Cesam</td>    
                                <td className="py-4 px-7">20</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                            <tr className='border-b'>
                                <td className="py-4 px-7">Facturation</td>
                                <td className="py-4 px-7">Institution</td>    
                                <td className="py-4 px-7">Cesam</td>    
                                <td className="py-4 px-7">20</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                            <tr className='border-b'>
                                <td className="py-4 px-7">Facturation</td>
                                <td className="py-4 px-7">Institution</td>    
                                <td className="py-4 px-7">Cesam</td>    
                                <td className="py-4 px-7">20</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-red-500 p-1 border rounded-md text-white">Désactivé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            {isFormOpenMutual && (
                    <AddComponent fields={mutualFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmMutual} />
            )}
            {isFormOpenNature && (
                    <AddComponent fields={natureFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmNature} />
            )}
        </div>
    );
}
 
export default Mutual;