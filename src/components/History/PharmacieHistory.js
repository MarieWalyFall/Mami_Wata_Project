import React, { useState } from 'react';
import ActivatedComponent from '../CRUD/ActivatedComponent';
import { MedicationTransactionData } from '../Data/Data';


const PharmacieHistory = () => {

  const [menuTransactionOpen, setMenuTransactionOpen] = useState({});


  const toggleMenuTransaction = (index) => {
    setMenuTransactionOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const [isActivated, setActivated] = useState(false);
  const [selectedMedicationTransaction, setSelectedMedicationTransaction] = useState(null);

  const handleActivatedClick = (medicationTransaction) => {
    setSelectedMedicationTransaction(medicationTransaction);
    setActivated(true);
  };

  const handleFormCancel = () => {
    setActivated(false);
  };

  const handleFormConfirm = (formData) => {
      // Reset state
      setActivated(false);
      setSelectedMedicationTransaction(null);
  }
  



  return (  
    <div className="py-10 px-4 rounded-lg">

      <span className="lato text-sm py-10 font-semibold">Aujourd'hui - Samedi 8 avril 2023</span>
      {MedicationTransactionData && 
        MedicationTransactionData.map((medicationTransaction, index) => (
        <table className="inter w-full text-sm text-left border mb-6 shadow-lg" key={index}>        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr key={medicationTransaction.name} >
            <td className="pb-4 pl-6"> {medicationTransaction.reference} </td>
            <td className="pb-4 px-2"> {medicationTransaction.articles} </td>
            <td className="pb-4 px-2"> {medicationTransaction.totalInvoice} XOF </td>
            <td className="pb-4 px-2"> {medicationTransaction.amountCashedIn} XOF </td>
            <td className="pb-4 px-2"> {medicationTransaction.totalInvoice - medicationTransaction.amountCashedIn} XOF</td>
            <td className="pb-4 px-2">
              {(() => {
                switch (medicationTransaction.status) {
                  case 'UNPAID':
                    return (
                      <span className="bg-orange-500 p-1 border rounded-md text-white">
                        Non payé
                      </span>
                    );
                  case 'PAID':
                    return (
                      <span className="bg-yellow-500 p-1 border rounded-md text-white">
                        Payé
                      </span>
                    );
                  case 'DELIVERED':
                    return (
                      <span className="bg-greenApple p-1 border rounded-md text-white">
                        Vendu
                      </span>
                    );
                  case 'CANCELLED':
                    return (
                      <span className="bg-red-500 p-1 border rounded-md text-white">
                        Annulé
                      </span>
                    );
                  default:
                    return null; // Vous pouvez également afficher un message par défaut ou ne rien afficher
                }
              })()}
            </td> 
            <td className={`text-xs ${menuTransactionOpen[index] ? 'hidden' : ''}`}> {medicationTransaction.date} </td>
          
        </tr>
        <tr className={`w-full font-semibold ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">Code</td>
          <td className="pt-4 px-2">Patient</td>
          <td className="pt-4 px-2">Depositaire</td>
          <td className="pt-4 px-2">Caissier</td>          
          <td className="pt-4 px-2">Mutuelle</td>
          <td rowSpan={2} className="pt-4 mx-2 pb-4">
            <button className={`p-2 rounded-lg bg-red-700 text-white font-semibold ${medicationTransaction.status == 'CANCELLED' ? 'hidden' : ''}`} onClick={() => handleActivatedClick(medicationTransaction)}>Annuler</button>
          </td>
        </tr>
        <tr className={`w-full ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">{medicationTransaction.checkOutCode}</td>
          <td className="pt-4 px-2">{medicationTransaction.patient}</td>
          <td className="pt-4 px-2">{medicationTransaction.depositary}</td>
          <td className="pt-4 px-2">{medicationTransaction.cashier}</td>
          <td className="pt-4 px-2">{medicationTransaction.mutual}</td>
          <td className={`text-xs`}> {medicationTransaction.date} </td>
        </tr>
          <tr className={`bg-${medicationTransaction.status == 'CANCELLED' ? 'red-500' : 'greenApple'}`}>
            <td colSpan={7} className="text-center py-1 col-span-full">
              <button 
                type="button"
                aria-controls="navbar-hamburger"
                aria-expanded={menuTransactionOpen[index]}
                onClick={() => toggleMenuTransaction(index)}
              >
                <div className="flex justify-center">
                  {menuTransactionOpen[index] ? (
                    <svg className="w-4 h-4 mx-auto rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 mx-auto text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>                  
                  )}
                </div>                
              </button>
            </td>
          </tr>
        </tbody>
        </table>
      ))}

      <div className="flex justify-center my-10">
        <hr className="border-1.5 border-black w-1/12"/>
      </div>

      <span className="lato text-sm font-semibold">Hier - Vendredi 7 avril 2023</span>
      {MedicationTransactionData && 
        MedicationTransactionData.map((medicationTransaction, index) => (
        <table className="inter w-full text-sm text-left border mb-6 shadow-lg" key={index}>        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Nombre d'article</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr key={medicationTransaction.name} >
            <td className="pb-4 pl-6"> {medicationTransaction.reference} </td>
            <td className="pb-4 pl-6"> {medicationTransaction.articles} </td>
            <td className="pb-4 px-2"> {medicationTransaction.totalInvoice} XOF </td>
            <td className="pb-4 px-2"> {medicationTransaction.amountCashedIn} XOF </td>
            <td className="pb-4 px-2"> {medicationTransaction.totalInvoice - medicationTransaction.amountCashedIn} XOF</td>
            <td className="pb-4 px-2">
              {(() => {
                switch (medicationTransaction.status) {
                  case 'UNPAID':
                    return (
                      <span className="bg-orange-500 p-1 border rounded-md text-white">
                        Non payé
                      </span>
                    );
                  case 'PAID':
                    return (
                      <span className="bg-yellow-500 p-1 border rounded-md text-white">
                        Payé
                      </span>
                    );
                  case 'DELIVERED':
                    return (
                      <span className="bg-greenApple p-1 border rounded-md text-white">
                        Vendu
                      </span>
                    );
                  case 'CANCELLED':
                    return (
                      <span className="bg-red-500 p-1 border rounded-md text-white">
                        Annulé
                      </span>
                    );
                  default:
                    return null; // Vous pouvez également afficher un message par défaut ou ne rien afficher
                }
              })()}
            </td> 
            <td className={`text-xs ${menuTransactionOpen[index] ? 'hidden' : ''}`}> {medicationTransaction.date} </td>
          
        </tr>
        <tr className={`w-full font-semibold ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">Code</td>
          <td className="pt-4 px-2">Patient</td>
          <td className="pt-4 px-2">Depositaire</td>
          <td className="pt-4 px-2">Mutuelle</td>
          <td rowSpan={2} className="pt-4 mx-2 pb-4">
            <button className={`p-2 rounded-lg bg-red-700 text-white font-semibold ${medicationTransaction.status == 'CANCELLED' ? 'hidden' : ''}`} onClick={() => handleActivatedClick(medicationTransaction)}>Annuler</button>
          </td>
        </tr>
        <tr className={`w-full ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">{medicationTransaction.checkOutCode}</td>
          <td className="pt-4 px-2">{medicationTransaction.patient}</td>
          <td className="pt-4 px-2">{medicationTransaction.depositary}</td>
          <td className="pt-4 px-2">{medicationTransaction.mutual}</td>
          <td className={`text-xs`}> {medicationTransaction.date} </td>
        </tr>
          <tr className={`bg-${medicationTransaction.status == 'CANCELLED' ? 'red-500' : 'greenApple'}`}>
            <td colSpan={7} className="text-center py-1 col-span-full">
              <button 
                type="button"
                aria-controls="navbar-hamburger"
                aria-expanded={menuTransactionOpen[index]}
                onClick={() => toggleMenuTransaction(index)}
              >
                <div className="flex justify-center">
                  {menuTransactionOpen[index] ? (
                    <svg className="w-4 h-4 mx-auto rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 mx-auto text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>                  
                  )}
                </div>                
              </button>
            </td>
          </tr>
        </tbody>
        </table>
      ))}

      {isActivated && (
        <ActivatedComponent data={selectedMedicationTransaction} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
      )}
    </div>
  );
}

export default PharmacieHistory;