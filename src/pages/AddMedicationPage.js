import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Stepper from "../components/Stepper";
import Userform from "../components/Userform";
import AddMedication from "../components/AddMedication";
import PriceComponent from "../components/PriceComponent";
import ProductsList from "../components/ProductsList";

const AddMedicationPage = () => {
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
        <Navbar ticket={false}/>
      </div>
      <div className="flex justify-center mt-8">
        <Stepper currentStep={currentStep} complete={complete} ticket={false}  />
      </div>
      <div className="flex">
        <div className="w-1/3 px-8 py-10">
          <AddMedication/>
        </div>
        <div className="border-dashed border-x border-gray-300 w-1/3 px-8">
          <Userform onFormFilled={handleFormFilled} />
        </div>
        <div className="w-1/3 h-full px-8 py-10 flex flex-col justify-center">
          <ProductsList/>
          <PriceComponent/>
        </div>
      </div>
    </>
  );
};

export default AddMedicationPage;