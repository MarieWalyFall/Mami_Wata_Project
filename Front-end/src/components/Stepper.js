import React from "react";
import { TiTick } from "react-icons/ti";

const Stepper = ({ currentStep, complete, ticket }) => {
  let steps;
  if (ticket) {
    steps = ["Informations Patient", "Choix Service"]; 
  } else {
    steps = ["Choix Médicament", "Informations Patient", "Validation"]; 
  }

  return (
    <>
      <div className="flex justify-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || (complete && i === 0)) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || (complete && i === 0) ? (
                <TiTick size={24} />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
