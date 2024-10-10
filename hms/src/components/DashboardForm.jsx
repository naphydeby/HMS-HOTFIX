import React, { useState } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";


const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if the form is submitted

  // Function to handle moving to the next step
  const nextStep = () => {
    setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  // Function to handle moving to the previous step
  const prevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the popup when the form is submitted
  };

  // Function to close the popup when the "OK" button is clicked
  const closePopup = () => {
    setIsSubmitted(false); // Hide the popup
  };

  // Function to render the form inputs based on the current step
  const renderStepInputs = () => {
    switch (step) {
      case 1:
        return <input className="border p-2 w-full" type="text" placeholder="Enter your name" />;
      case 2:
        return <input className="border p-2 w-full" type="email" placeholder="Enter your email" />;
      case 3:
        return <input className="border p-2 w-full" type="password" placeholder="Create a password" />;
      case 4:
        return <input className="border p-2 w-full" type="text" placeholder="Enter your phone number" />;
      default:
        return null;
    }
  };

  // Renders the progress bar based on the current step
  const renderProgress = () => {
    const progressSteps = [1, 2, 3, 4];
    return (
      <div className="flex justify-between mb-4">
        {progressSteps.map((progressStep, index) => (
          <div
            key={index}
            className={`h-2 w-1/4 rounded-full transition duration-300 ${
              step >= progressStep ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  
  return (
    <>
        <div className="grid grid-cols-[16rem_1fr]" >
            <SideBar/>

            <main className="col-start-2 bg-white h-screen ">

                {/* navigation bar */}
               <Navbar/>




                <div className="max-w-md mx-auto mt-40 p-4 border rounded-md shadow-md ">
                    {/* Popup Message */}
                    {isSubmitted && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
                            <p>Thank you for completing the registration.</p>
                            {/* OK Button to close the popup */}
                            <button
                            onClick={closePopup}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                            OK
                            </button>
                        </div>
                        </div>
                    )}

                    {/* Progress Bar */}
                    {renderProgress()}

                    {/* Form Inputs */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {renderStepInputs()}

                        <div className="flex justify-between">
                        {/* Previous Button */}
                        <button
                            type="button"
                            onClick={prevStep}
                            className={`w-1/3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${
                            step === 1 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={step === 1} // Disable previous button on the first step
                        >
                            Previous
                        </button>

                        {/* Next or Submit Button */}
                        {step < 4 ? (<button type="button" onClick={nextStep} className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Next</button>) 
                        : (<button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"> Submit </button>)}
                        </div>
                    </form>
                </div>
            </main>
            
        </div>
        
    </>
  );
};

export default MultiStepForm;
