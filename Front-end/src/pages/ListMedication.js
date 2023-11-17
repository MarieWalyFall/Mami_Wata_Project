import React, { useState } from 'react';
import NavbarVertical from "../components/NavbarVertical";
import AddComponent from '../components/CRUD/AddComponent';
import DetailComponent from '../components/CRUD/DetailComponent';
import EditComponent from '../components/CRUD/EditComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';

import injectable from './../assets/images/conditioning/injectable.png';
import deleteSymbol from './../assets/images/delete-svgrepo-com.png';
import editSymbol from './../assets/images/edit-4-svgrepo-com.png';
import plusSymbol from './../assets/images/plus-svgrepo-com.png';
import eyeSymbol from './../assets/images/eye-alt-svgrepo-com.png';

const medicationFields = [
    { name: 'nom', type: 'String', placeholder: 'Nom' },
    { name: 'description', type: 'String', placeholder: 'Description' },
    { name: 'conditionnement', type: 'String', placeholder: 'Conditionnement' },
    { name: 'prix', type: 'Double', placeholder: 'Prix' },
    { name: 'quantite', type: 'Long', placeholder: 'Quantité' },
    { name: 'warningLevel', type: 'Long', placeholder: 'Niveau dangereux' },
    { name: 'activated', type: 'Long', placeholder: 'Statut' },
  ];

const exampleData = {
    nom: 'Nom du médicament',
    description: 'Description du médicament',
    conditionnement: 'Conditionnement du médicament',
    prix: 200,
    quantite: 1,
    warningLevel: 56,
    activated: true
};

  

const ListMedication = () => {

    const [isActivated, setActivated] = useState(false);

    const handleActivatedClick = () => {
        setActivated(true);
    };

    const [selectedMedication, setSelectedMedication] = useState(false);

    const handleDetailClick = () => {
        setSelectedMedication(true);
    };

    const [isEditOpen, setEditOpen] = useState(false);

    // Gestionnaire pour ouvrir le composant d'édition
    const handleEditClick = () => {
        setEditOpen(true);
    };


    const [isFormOpen, setFormOpen] = useState(false);

    const handleAddClick = () => {
        setFormOpen(true);
    };

    
    const handleFormCancel = () => {
        setFormOpen(false);
        setSelectedMedication(false);
        setEditOpen(false);
        setActivated(false);

    };

    const handleFormConfirm = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpen(false);
        setEditOpen(false);
        setActivated(false);

    };




    return (  
        <div className='flex'>
            <NavbarVertical page="listMedication" />
            <div className='p-4'>
                <h1 className="inter text-3xl mt-10 inter ml-10 mb-4">Liste de médicaments</h1>
                <div className='flex justify-end pb-6'>
                    <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClick}>
                        <span className='pr-2 font-semibold'>Ajouter</span>  
                        <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                    </button>

                </div>
                <table className=" table-auto ml-10 w-full mb-6">
                    <thead >
                        <tr className='raleway border-b-2 border-gray-400'>
                            <th className='py-4 pl-6'>Image</th>
                            <th className="py-4 px-7">Conditionnement</th>
                            <th className="py-4 px-7">Designation</th>
                            <th className="py-4 px-7">Prix XOF</th>
                            <th className="py-4 px-7">Quantité</th>
                            <th className="py-4 px-7">Stock</th>
                            <th className="py-4 px-7">Satut</th>
                            <th className="py-4 px-7">Action</th>
                        </tr>
                    </thead>
                    <tbody className='inter'>
                        <tr className='border-b'>
                                <td className='py-4 pl-6'>
                                    <img className='w-7 h-7' src={injectable} alt="" />
                                </td>
                                <td className="py-4 px-7">Injectable</td>
                                <td className="py-4 px-7">Adrénaline</td>    
                                <td className="py-4 px-7">1000</td>    
                                <td className="py-4 px-7">64</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Safe</span>
                                </td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                    <button onClick= {handleDetailClick}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                    <button onClick= {handleEditClick}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                    <button onClick= {handleActivatedClick}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                        </tr>
                        <tr className='border-b'>
                            <td className='py-4 pl-6'>
                                <img className='w-7 h-7' src={injectable} alt="" />
                            </td>
                            <td className="py-4 px-7">Injectable</td>
                            <td className="py-4 px-7">Adrénaline</td>    
                            <td className="py-4 px-7">1000</td>    
                            <td className="py-4 px-7">64</td>    
                            <td className="py-4 px-7">
                                <span className="bg-yellow-400 p-1 border rounded-md text-white">Medium</span>
                            </td>    
                            <td className="py-4 px-7">
                                <span className="bg-red-500 p-1 border rounded-md text-white">Désactivé</span>
                            </td>    
                                <td className="py-4 px-7">
                                <button onClick= {handleDetailClick}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                        </tr>
                        <tr className='border-b'>
                            <td className='py-4 pl-6'>
                                <img className='w-7 h-7' src={injectable} alt="" />
                            </td>
                            <td className="py-4 px-7">Injectable</td>
                            <td className="py-4 px-7">Adrénaline</td>    
                            <td className="py-4 px-7">1000</td>    
                            <td className="py-4 px-7">64</td>    
                            <td className="py-4 px-7">
                                <span className="bg-orange-500 p-1 border rounded-md text-white">Low</span>
                            </td>    
                            <td className="py-4 px-7">
                                <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                            </td>    
                                <td className="py-4 px-7">
                                <button onClick= {handleDetailClick}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                        </tr>
                        <tr className='border-b'>
                            <td className='py-4 pl-6'>
                                <img className='w-7 h-7' src={injectable} alt="" />
                            </td>
                            <td className="py-4 px-7">Injectable</td>
                            <td className="py-4 px-7">Adrénaline</td>    
                            <td className="py-4 px-7">1000</td>    
                            <td className="py-4 px-7">64</td>    
                            <td className="py-4 px-7">
                                <span className="bg-red-500 p-1 border rounded-md text-white">Alarming</span>
                            </td>    
                            <td className="py-4 px-7">
                                <span className="bg-red-500 p-1 border rounded-md text-white">Désactivé</span>
                            </td>    
                                <td className="py-4 px-7">
                                <button onClick= {handleDetailClick}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                        </tr>
                        <tr className='border-b'>
                            <td className='py-4 pl-6'>
                                <img className='w-7 h-7' src={injectable} alt="" />
                            </td>
                            <td className="py-4 px-7">Injectable</td>
                            <td className="py-4 px-7">Adrénaline</td>    
                            <td className="py-4 px-7">1000</td>    
                            <td className="py-4 px-7">64</td>    
                            <td className="py-4 px-7">
                                <span className="bg-greenApple p-1 border rounded-md text-white">Safe</span>
                            </td>    
                            <td className="py-4 px-7">
                                <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                            </td>    
                            <td className="py-4 px-7">
                                <button onClick= {handleDetailClick}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                <button onClick= {handleEditClick}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button onClick= {handleActivatedClick}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                            </td>    
                        </tr>
                    </tbody>
                </table>    

            </div>
            {isFormOpen && (
                    <AddComponent fields={medicationFields} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
            )}
            {selectedMedication && (
                <DetailComponent fields={medicationFields} data={exampleData} onCancel={handleFormCancel} />
            )}
            {isEditOpen && (
                <EditComponent fields={medicationFields} data={exampleData} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}
            {isActivated && (
                <ActivatedComponent data={exampleData} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}

        </div>
    );

}

export default ListMedication;