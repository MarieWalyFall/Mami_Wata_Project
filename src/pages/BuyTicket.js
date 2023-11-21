import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Stepper from "../components/Stepper";
import Patientform from "../components/Patientform";
import AddTicket from "../components/AddTicket";
import PriceComponent from "../components/PriceComponent";

const BuyTicket = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  // Fonction de rappel pour indiquer que le formulaire est rempli
  const handleFormFilled = () => {
    if (currentStep === 1) {
      setCurrentStep(2); // Passe à l'étape 2 seulement si l'étape actuelle est la première
    }
  };

  return (
    <>
      <div className="h-1/5">
        <Navbar ticket={true} page="ticketSale" />
      </div>
      <div className="flex justify-center mt-8">
        <Stepper currentStep={currentStep} complete={complete} ticket={true}  />
      </div>
      <div className="flex">
        <div className="w-1/2 px-32">
          <Patientform onFormFilled={handleFormFilled} />
        </div>
        <div className="border-dashed border-l border-gray-300 w-1/2 h-full px-32 py-10 flex flex-col justify-center">
          <AddTicket />
          <PriceComponent/>
        </div>
      </div>
    </>
  );
};

export default BuyTicket;
