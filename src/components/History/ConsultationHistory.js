import React, { useState } from 'react';
import ActivatedComponent from '../CRUD/ActivatedComponent';
import { TicketTransactionData } from '../Data/Data';


const ConsultationHistory = () => {

  const [menuTransactionOpen, setMenuTransactionOpen] = useState({});


  const toggleMenuTransaction = (index) => {
    setMenuTransactionOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const [isActivated, setActivated] = useState(false);
  const [selectedTicketTransaction, setSelectedTicketTransaction] = useState(null);

  const handleActivatedClick = (ticketTransaction) => {
    setSelectedTicketTransaction(ticketTransaction);
    setActivated(true);
  };

  const handleFormCancel = () => {
    setActivated(false);
  };

  const handleFormConfirm = (formData) => {
      // Reset state
      setActivated(false);
      setSelectedTicketTransaction(null);
  }
  


  return (  
    <div className="relative py-10 px-4 rounded-lg">

      <span className="lato text-sm py-10 font-semibold">Aujourd'hui - Samedi 8 avril 2023</span>
      {TicketTransactionData && 
        TicketTransactionData.map((ticketTransaction, index) => (
        <table className="inter w-full text-sm text-left border mb-6 shadow-lg" key={index}>        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Service</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td> 
          </tr>
        </thead>
        <tbody>
          <tr key={ticketTransaction.name} >
            <td className="pb-4 pl-6"> {ticketTransaction.reference} </td>
            <td className="pb-4 px-2"> {ticketTransaction.totalInvoice} XOF </td>
            <td className="pb-4 px-2"> {ticketTransaction.amountCashedIn} XOF </td>
            <td className="pb-4 px-2"> {ticketTransaction.totalInvoice - ticketTransaction.amountCashedIn} XOF</td>
            <td className="pb-4 px-2"> {ticketTransaction.service}</td>
            <td className="pb-4 px-2">
              <span className={`bg-${ticketTransaction.sold ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                {ticketTransaction.sold ? 'Vendu' : 'Annulé'}
              </span>

            </td> 
            <td className={`text-xs ${menuTransactionOpen[index] ? 'hidden' : ''}`}> {ticketTransaction.date} </td>
          
        </tr>
        <tr className={`w-full font-semibold ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">Categorie</td>
          <td className="pt-4 px-2">Patient</td>
          <td className="pt-4 px-2">Caissier</td>          
          <td className="pt-4 px-2">Mutuelle</td>
          <td rowSpan={2} className="pt-4 mx-2 pb-4">
            <button className={`p-2 rounded-lg bg-red-700 text-white font-semibold ${!ticketTransaction.sold ? 'hidden' : ''}`} onClick={() => handleActivatedClick(ticketTransaction)}>Annuler</button>
          </td>
        </tr>
        <tr className={`w-full ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">{ticketTransaction.category}</td>
          <td className="pt-4 px-2">{ticketTransaction.patient}</td>
          <td className="pt-4 px-2">{ticketTransaction.cashier}</td>
          <td className="pt-4 px-2">{ticketTransaction.mutual}</td>
          <td className={`text-xs`}> {ticketTransaction.date} </td>
        </tr>
          <tr className={`bg-${!ticketTransaction.sold ? 'red-500' : 'greenApple'}`}>
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
      {TicketTransactionData && 
        TicketTransactionData.map((ticketTransaction, index) => (
        <table className="inter w-full text-sm text-left border mb-6 shadow-lg" key={index}>        <thead className="">
          <tr className="font-semibold text-sm ">
            <td className="pt-4 pl-6">Référence</td>
            <td className="pt-4 px-2">Total Facture</td>
            <td className="pt-4 px-2">Montant encaissé</td>
            <td className="pt-4 px-2">Prise en charge</td>
            <td className="pt-4 px-2">Service</td>
            <td className="pt-4 px-2">Statut</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr key={ticketTransaction.name} >
            <td className="pb-4 pl-6"> {ticketTransaction.reference} </td>
            <td className="pb-4 px-2"> {ticketTransaction.totalInvoice} XOF </td>
            <td className="pb-4 px-2"> {ticketTransaction.amountCashedIn} XOF </td>
            <td className="pb-4 px-2"> {ticketTransaction.totalInvoice - ticketTransaction.amountCashedIn} XOF</td>
            <td className="pb-4 px-2"> {ticketTransaction.service}</td>
            <td className="pb-4 px-2">
              <span className={`bg-${ticketTransaction.sold ? 'greenApple' : 'red-500'} p-1 border rounded-md text-white`}>
                {ticketTransaction.sold ? 'Vendu' : 'Annulé'}
              </span>

            </td> 
            <td className={`text-xs ${menuTransactionOpen[index] ? 'hidden' : ''}`}> {ticketTransaction.date} </td>
          
        </tr>
        <tr className={`w-full font-semibold ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">Categorie</td>
          <td className="pt-4 px-2">Patient</td>
          <td className="pt-4 px-2">Caissier</td>          
          <td className="pt-4 px-2">Mutuelle</td>
          <td rowSpan={2} className="pt-4 mx-2 pb-4">
            <button className={`p-2 rounded-lg bg-red-700 text-white font-semibold ${!ticketTransaction.sold ? 'hidden' : ''}`} onClick={() => handleActivatedClick(ticketTransaction)}>Annuler</button>
          </td>
        </tr>
        <tr className={`w-full ${menuTransactionOpen[index] ? '' : 'hidden'}`}>
          <td className="pt-4 pl-6">{ticketTransaction.category}</td>
          <td className="pt-4 px-2">{ticketTransaction.patient}</td>
          <td className="pt-4 px-2">{ticketTransaction.cashier}</td>
          <td className="pt-4 px-2">{ticketTransaction.mutual}</td>
          <td className={`text-xs`}> {ticketTransaction.date} </td>
        </tr>
          <tr className={`bg-${!ticketTransaction.sold ? 'red-500' : 'greenApple'}`}>
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
        <ActivatedComponent data={selectedTicketTransaction} onCancel={handleFormCancel} onConfirm={handleFormConfirm} />
      )}

    </div>

  );
}

export default ConsultationHistory;