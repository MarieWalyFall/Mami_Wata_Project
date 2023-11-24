import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavbarVertical from "../Navbar/NavbarVertical";

import EditComponent from '../CRUD/EditComponent';

import { UserData } from '../Data/Data';
import { UserFields } from '../Data/Fields';

import editSymbol from './../../assets/images/crud/edit-4-svgrepo-com.png';



const Account = () => {
    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);

    const [isEditOpen, setEditOpen] = useState(false);

    const handleEditClick = () => {
        setEditOpen(true);
    };

    const handleFormCancel = () => {
        setEditOpen(false);
    };

    const handleFormConfirm = (formData) => {
        setEditOpen(false);
    };


    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }



    return (  
        <div className='flex'>
            <NavbarVertical page="account" userId={userId}/>

            <div className='p-10'>
            <h1 className="inter text-3xl mt-10 inter ml-10 mb-4 text-greenApple">Mon compte</h1>

            {UserFields
            .filter(field => field.name !== 'id')
            .map((field) => (
            <div key={field.name} className="mb-3">
                <span className="font-semibold text-lg p-2">{field.placeholder} : </span> 
                {(() => {
                    switch (field.name) {
                    case 'activated':
                    return (
                        user[field.name] ? 'Activé' : 'Désactivé'
                    );
                case 'mutualized':
                        return (
                        user[field.name] ? 'OUI' : 'NON'
                        );
                    default:
                        return user[field.name];
                    }
                })()}

            </div>
            ))}
            <div className='flex justify-end pb-6'>
                <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-lg p-2' onClick={handleEditClick}>
                    <span className='pr-2 font-semibold'>Modifier</span>  
                    <img className='w-5 h-5' src={editSymbol} alt="" /> 
                </button>

            </div>


            </div>
            {isEditOpen && (
                <EditComponent fields={UserFields} data={user} onCancel={handleFormCancel} onConfirm={handleFormConfirm}/>
            )}

        </div>
    );
}
 
export default Account;