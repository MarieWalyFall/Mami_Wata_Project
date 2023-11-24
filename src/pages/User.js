import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavbarVertical from "../components/Navbar/NavbarVertical";

import AddComponent from '../components/CRUD/AddComponent';
import DetailComponent from '../components/CRUD/DetailComponent';
import EditComponent from '../components/CRUD/EditComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';

import { UserData } from '../components/Data/Data';
import { UserFields } from '../components/Data/Fields';

import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';
import editSymbol from './../assets/images/crud/edit-4-svgrepo-com.png';
import plusSymbol from './../assets/images/crud/plus-svgrepo-com.png';
import eyeSymbol from './../assets/images/crud/eye-alt-svgrepo-com.png';
  


const User = () => {

    const [selectedUser, setSelectedUser] = useState(null);
    const [isActivated, setActivatedOpen] = useState(false);

    const handleActivatedClick = (user) => {
        setSelectedUser(user);
        setActivatedOpen(true);
    };
    
    const [isDetailed, setDetailedOpen] = useState(false);

    const handleDetailClick = (user) => {
        setSelectedUser(user);
        setDetailedOpen(true);
    };

    const [isEditOpen, setEditOpen] = useState(false);

    // Gestionnaire pour ouvrir le composant d'édition
    const handleEditClick = (user) => {
        setSelectedUser(user);
        setEditOpen(true);
    };


    const [isFormOpen, setFormOpen] = useState(false);

    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);
  
    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }
    if(user.authority_name != 'admin'){
      return <div>Utilisateur non autorisé</div>;
    }


    const handleAddClick = () => {
        setFormOpen(true);
    };

    
    const handleFormCancel = () => {
        setFormOpen(false);
        setSelectedUser(null);
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
            <NavbarVertical page="user" userId={userId}/>
            <div className="p-4">
            <h1 className="inter text-3xl mt-10 inter ml-10 mb-4">Liste des utilisateurs</h1>
                <div className='flex justify-end pb-6'>
                    <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClick}>
                        <span className='pr-2 font-semibold'>Ajouter</span>  
                        <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                    </button>
                </div>
                <table className='table-auto ml-10 w-full mb-6'>
                    <thead>
                        <tr className='raleway border-b-2 border-gray-400'>

                            <th className="py-4">Prénom(s)</th>
                            <th className="py-4 px-7">Nom</th>
                            <th className="py-4 px-7">Login</th>
                            <th className="py-4 px-7">Email</th>
                            <th className="py-4 px-7">Role</th>
                            <th className="py-4 px-7">Statut</th>
                            <th className="py-4 px-7">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='inter'>
                        {UserData && UserData.map((user) => (
                            <tr className='border-b'>
                                <td className="py-4">{user.first_name}</td>
                                <td className="py-4 px-7">{user.last_name}</td>
                                <td className="py-4 px-7">{user.login}</td>
                                <td className="py-4 px-7">{user.email}</td>
                                <td className="py-4 px-7">{user.authority_name}</td>
                                <td className="py-4 px-7">
                                <span className={`bg-${user.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                    {user.activated ? 'Activé' : 'Désactivé'}
                                </span>
                                </td>    
                                <td className="py-4 px-7">
                                    <button onClick={() => handleDetailClick(user)}> <img className='w-6 h-6' src={eyeSymbol} alt="" /></button>
                                    <button onClick={() => handleEditClick(user)}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                    <button onClick={() => handleActivatedClick(user)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isFormOpen && (
                    <AddComponent fields={UserFields} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
            )}
            {isDetailed && (
                <DetailComponent fields={UserFields} data={selectedUser} onCancel={handleFormCancel} />
            )}
            {isEditOpen && (
                <EditComponent fields={UserFields} data={selectedUser} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}
            {isActivated && (
                <ActivatedComponent data={selectedUser} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}

        </div>
    );
}
 
export default User;