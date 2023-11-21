import React, { useState } from 'react';
import NavbarVertical from "../components/Navbar/NavbarVertical";
import AddComponent from '../components/CRUD/AddComponent';
import DetailComponent from '../components/CRUD/DetailComponent';
import EditComponent from '../components/CRUD/EditComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';

import { PatientData } from '../components/Data/Data';
import { PatientFields } from '../components/Data/Fields';

import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';
import editSymbol from './../assets/images/crud/edit-4-svgrepo-com.png';
import plusSymbol from './../assets/images/crud/plus-svgrepo-com.png';
import eyeSymbol from './../assets/images/crud/eye-alt-svgrepo-com.png';
  


const Patient = () => {

    const [selectedPatient, setSelectedPatient] = useState(null);
    const [isActivated, setActivatedOpen] = useState(false);

    const handleActivatedClick = (patient) => {
        setSelectedPatient(patient);
        setActivatedOpen(true);
    };
    
    const [isDetailed, setDetailedOpen] = useState(false);

    const handleDetailClick = (patient) => {
        setSelectedPatient(patient);
        setDetailedOpen(true);
    };

    const [isEditOpen, setEditOpen] = useState(false);

    // Gestionnaire pour ouvrir le composant d'édition
    const handleEditClick = (patient) => {
        setSelectedPatient(patient);
        setEditOpen(true);
    };


    const [isFormOpen, setFormOpen] = useState(false);

    const handleAddClick = () => {
        setFormOpen(true);
    };

    
    const handleFormCancel = () => {
        setFormOpen(false);
        setSelectedPatient(null);
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
        <div className="flex">  
            <NavbarVertical page="patient" />
            <div className="p-4">
            <h1 className="inter text-3xl mt-10 inter ml-10 mb-4">Liste de patients</h1>
                <div className='flex justify-end pb-6'>
                    <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClick}>
                        <span className='pr-2 font-semibold'>Ajouter</span>  
                        <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                    </button>
                </div>
                <table className='table-auto ml-10 w-full mb-6'>
                    <thead>
                        <tr className='raleway border-b-2 border-gray-400'>
                            <th className="py-4 pl-6">Prénom(s)</th>
                            <th className="py-4 px-7">Nom</th>
                            <th className="py-4 px-7">Numéro de téléphone</th>
                            <th className="py-4 px-7">Age</th>
                            <th className="py-4 px-7">Mutuelle</th>
                            <th className="py-4 px-7">Statut</th>
                            <th className="py-4 px-7">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='inter'>
                        {PatientData && PatientData.map((patient) => (
                            <tr className='border-b'>
                                <td className="py-4 pl-6">{patient.name}</td>
                                <td className="py-4 px-7">{patient.sur_name}</td>
                                <td className="py-4 px-7">{patient.phone_number}</td>
                                <td className="py-4 px-7">{patient.age}</td>
                                <td className="py-4 px-7">{patient.mutualized ? patient.mutual_id : 'NON'}</td>
                                <td className="py-4 px-7">
                                <span className={`bg-${patient.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                    {patient.activated ? 'Activé' : 'Désactivé'}
                                </span>
                                </td>    
                                <td className="py-4 px-7">
                                    <button onClick={() => handleDetailClick(patient)}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                    <button onClick={() => handleEditClick(patient)}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                    <button onClick={() => handleActivatedClick(patient)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && (
                    <AddComponent fields={PatientFields} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
            )}
            {isDetailed && (
                <DetailComponent fields={PatientFields} data={selectedPatient} onCancel={handleFormCancel} />
            )}
            {isEditOpen && (
                <EditComponent fields={PatientFields} data={selectedPatient} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}
            {isActivated && (
                <ActivatedComponent data={selectedPatient} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}

        </div>
    );
}
 
export default Patient;