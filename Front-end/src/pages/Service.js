import React from 'react';
import NavbarVertical from "../components/NavbarVertical";

import editSymbol from './../assets/images/edit-4-svgrepo-com.png';
import deleteSymbol from './../assets/images/delete-svgrepo-com.png';
import plusSymbol from './../assets/images/plus-svgrepo-com.png';

const Service = () => {
    return (  
        <div className="flex">
            <NavbarVertical/>
            <div className="p-4">
                <h1 className="text-3xl mt-10 inter ml-10 mb-4">Services</h1>
                <div>
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des services</h1>
                    <div className='flex justify-end pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2'>
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
                                <td className="border px-4 py-2">Généraliste</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-greenApple p-1 border rounded-md text-white"
                                >
                                    Activé
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Pédiatrie</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-red-500 p-1 border rounded-md text-white"
                                >
                                    Désactivé
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Gynécologie</td>
                                <td className="border px-4 py-2 flex items-center justify-center">
                                <button
                                    className="bg-greenApple p-1 border rounded-md text-white"

                                >
                                    Activé
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Laboratoire</td>
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
                    <h1 className='text-xl mt-12 inter ml-10 mb-4 text-greenApple font-semibold'>Liste des catégories</h1>
                    <div className='flex justify-end pb-6'>
                        <button className='flex justify-center items-center bg-greenApple border rounded-2xl text-white text-lg p-2'>
                            <span className='pr-2 font-semibold'>Ajouter</span>  
                            <img className='w-5 h-5' src={plusSymbol} alt="" /> 
                        </button>
                    </div>
                    <table className=" table-auto ml-10 w-full mb-6">
                        <thead >
                            <tr className='raleway border-b-2 border-gray-400'>
                                <th className='py-4 pl-6'>Nom</th>
                                <th className="py-4 px-7">Service</th>
                                <th className="py-4 px-7">Satut</th>
                                <th className="py-4 px-7">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='inter'>
                        <tr className='border-b'>
                                <td className="py-4 px-7">Consultation</td>
                                <td className="py-4 px-7">Pédiatrie</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                            <tr className='border-b'>
                                <td className="py-4 px-7">Consultation</td>
                                <td className="py-4 px-7">Généraliste</td>    
                                <td className="py-4 px-7">
                                    <span className="bg-greenApple p-1 border rounded-md text-white">Activé</span>
                                </td>    
                                <td className="py-4 px-7">
                                <button> <img className='w-6 h-6' src={editSymbol} alt="" /></button>
                                <button> <img className='w-6 h-6' src={deleteSymbol} alt="" /></button>
                                </td>    
                            </tr>
                            <tr className='border-b'>
                                <td className="py-4 px-7">Analyses</td>
                                <td className="py-4 px-7">Laboratoire</td>    
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
        </div>

    );
}
 
export default Service;