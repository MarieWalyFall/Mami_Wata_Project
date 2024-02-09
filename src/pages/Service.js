import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavbarVertical from "../components/Navbar/NavbarVertical";

import { ServiceFields, CategoryFields, ServiceCategoryFields } from '../components/Data/Fields';
import { ServiceData, CategoryData, ServiceCategoryData, UserData } from '../components/Data/Data';

import AddComponent from '../components/CRUD/AddComponent';
import ActivatedComponent from '../components/CRUD/ActivatedComponent';
import EditComponent from '../components/CRUD/EditComponent';


import editSymbol from './../assets/images/crud/edit-4-svgrepo-com.png';
import deleteSymbol from './../assets/images/crud/delete-svgrepo-com.png';
import plusSymbol from './../assets/images/crud/plus-svgrepo-com.png';


const Service = () => {

    const [isFormOpenService, setFormOpenService] = useState(false);
    const [isFormOpenCategory, setFormOpenCategory] = useState(false);
    const [isFormOpenServiceCategory, setFormOpenServiceCategory] = useState(false);

    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedServiceCategory, setSelectedServiceCategory] = useState(null);

    const [isActivatedService, setActivatedOpenService] = useState(false);
    const [isActivatedCategory, setActivatedOpenCategory] = useState(false);
    const [isActivatedServiceCategory, setActivatedOpenServiceCategory] = useState(false);

    const [isEditOpen, setEditOpen] = useState(false);

    const { userId } = useParams();
    const user = UserData.find((user) => user.id === userId);
  
    if (!user) {
      console.log(userId);
      return <div>Utilisateur non trouvé</div>;
    }
    if(user.authority_name !== 'admin' && user.authority_name !== 'pharmacien'){
      return <div>Utilisateur non autorisé</div>;
    }


    const handleEditClick = (serviceCategory) => {
        setSelectedServiceCategory(serviceCategory);
        setEditOpen(true);
    };



    const handleAddClickService = () => {
        setFormOpenService(true);
    };
    const handleAddClickCategory = () => {
        setFormOpenCategory(true);
    };
    const handleAddClickServiceCategory = () => {
        setFormOpenServiceCategory(true);
    };


    const handleActivatedClickService = (service) => {
        setSelectedService(service);
        setActivatedOpenService(true);
    };
    const handleActivatedClickCategory = (category) => {
        setSelectedCategory(category);
        setActivatedOpenCategory(true);
    };
    const handleActivatedClickServiceCategory = (serviceCategory) => {
        setSelectedServiceCategory(serviceCategory);
        setActivatedOpenServiceCategory(true);
    };


    const handleFormCancel = () => {
        setFormOpenService(false);
        setFormOpenCategory(false);
        setFormOpenServiceCategory(false);
        setActivatedOpenService(false);
        setActivatedOpenCategory(false);
        setActivatedOpenServiceCategory(false);
        setSelectedService(null);
        setSelectedCategory(null);
        setSelectedServiceCategory(null);
        setEditOpen(false)
    };

    
    const handleFormConfirmService = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenService(false);
        setActivatedOpenService(false);
        setSelectedService(null);
    };
    const handleFormConfirmCategory = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenCategory(false);
        setActivatedOpenCategory(false);
        setSelectedCategory(null);
        setEditOpen(false)
    };
    const handleFormConfirmServiceCategory = (formData) => {
        // Mettez ici la logique pour traiter les données du formulaire
        // Vous pouvez également fermer le formulaire après le traitement
        setFormOpenServiceCategory(false);
        setActivatedOpenServiceCategory(false);
        setSelectedServiceCategory(null);
        setEditOpen(false)
    };


    return (  
        <div className="flex">
            <NavbarVertical page="service" userId={userId}/>
            <div className="p-4">
                
                <h1 className="text-3xl mt-10 inter ml-10 mb-4">Services</h1>
                <div className='flex justify-between'>
                    <div>
                        <div className='flex justify-center'>
                            <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des services</h1>
                        </div>
                        <div className='flex justify-center pb-6'>
                            <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickService}>
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
                                {ServiceData && ServiceData.map((service) => (
                                    <tr className='border-b'>
                                        <td className="py-4 pl-6">{service.name}</td>
                                        <td className="py-4 px-7">
                                        <span className={`bg-${service.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                            {service.activated ? 'Activé' : 'Désactivé'}
                                        </span>
                                        </td>    
                                        <td className="py-4 px-7">
                                            <button onClick={() => handleActivatedClickService(service)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                        </td>    
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des catégories</h1>
                        </div>
                        <div className='flex justify-center pb-6'>
                            <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickCategory}>
                                <span className='pr-2 font-semibold'>Ajouter</span>  
                                <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                            </button>
                        </div>
                        <table className=" table-auto ml-10 w-full mb-6">
                            <thead >
                                <tr className='raleway border-b-2 border-gray-400'>
                                    <th className='py-4 pl-6'>Nom</th>
                                    <th className="py-4 px-7">Satut</th>
                                    <th className="py-4 px-7">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='inter'>
                                {CategoryData && CategoryData.map((category) => (
                                    <tr className='border-b'>
                                        <td className="py-4 pl-6">{category.name} </td>
                                        <td className="py-4 px-7">
                                        <span className={`bg-${category.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                            {category.activated ? 'Activé' : 'Désactivé'}
                                        </span>
                                    </td>    
                                    <td className="py-4 px-7">
                                        <button onClick={() => handleActivatedClickCategory(category)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                    </td>    
                                    </tr>
                                ))}
                            </tbody>
                        </table>    
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des prix des catégories selon les services</h1>
                    <div className='flex justify-center pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2' onClick={handleAddClickServiceCategory}>
                            <span className='pr-2 font-semibold'>Ajouter</span>  
                            <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                        </button>
                    </div>
                    <table className="ml-10 mb-6">
                        <thead>
                            <tr className='raleway border-b-2 border-gray-400'>
                                <th className="py-4 pl-6">Catégorie</th>
                                <th className="py-4 px-7">Service</th>
                                <th className="py-4 px-7">Prix</th>
                                <th className="py-4 px-7">Statut</th>
                                <th className="py-4 px-7">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='inter'>
                            {ServiceCategoryData && ServiceCategoryData.map((serviceCategory) => (
                                <tr className='border-b'>
                                    <td className="py-4 pl-6">{serviceCategory.category}</td>
                                    <td className="py-4 px-7">{serviceCategory.service}</td>
                                    <td className="py-4 px-7">{serviceCategory.price}</td>
                                    <td className="py-4 px-7">
                                    <span className={`bg-${serviceCategory.activated ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                                        {serviceCategory.activated ? 'Activé' : 'Désactivé'}
                                    </span>
                                    </td>    
                                    <td className="py-4 px-7">
                                        <button onClick={() => handleEditClick(serviceCategory)}> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                        <button onClick={() => handleActivatedClickServiceCategory(serviceCategory)}> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                    </td>    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>  
            </div>
            {isFormOpenService && (
                    <AddComponent fields={ServiceFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmService} />
            )}
            {isFormOpenCategory && (
                    <AddComponent fields= {CategoryFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmCategory} />
            )}
            {isFormOpenServiceCategory && (
                    <AddComponent fields= {ServiceCategoryFields} onCancel={handleFormCancel} onConfirm={handleFormConfirmServiceCategory} />
            )}
            {isActivatedService && (
                <ActivatedComponent data={selectedService} onCancel={handleFormCancel} onConfirm={handleFormConfirmService}/>
            )}
            {isActivatedCategory && (
                <ActivatedComponent data={selectedCategory} onCancel={handleFormCancel} onConfirm={handleFormConfirmCategory}/>
            )}
            {isActivatedServiceCategory && (
                <ActivatedComponent data={selectedServiceCategory} onCancel={handleFormCancel} onConfirm={handleFormConfirmServiceCategory}/>
            )}

            {isEditOpen && (
                <EditComponent fields={ServiceCategoryFields} data={selectedServiceCategory} onCancel={handleFormCancel} onConfirm={handleFormConfirmServiceCategory}/>
            )}
 

        </div>

    );
}
 
export default Service;