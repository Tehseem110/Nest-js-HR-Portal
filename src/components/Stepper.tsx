"use client";
import React from "react";
import dronePng from "/public/assets/drone_gif.gif";
import Image from "next/image";
import { useState } from "react";
import { StepperProps } from "../../types";
import PersonalDetails from "./PersonalDetails";
import EducationQualification from "./EducationQualification";
import OfficeDetails from "./OfficeDetails";
import { set } from "mongoose";

const Stepper: React.FC<StepperProps> = ({ step }) => {
  const newStep = step.map((items: any) => items.section);

  /// local state
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState({});
  const [officeDetails, setOfficeDetails] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  /// handle change

  const handleOnChangePersonalDetail = (type: any, event: any) => {
    if (type === "file") {
      const { name } = event.target;
      const selectedFile = event.target.files[0]; // Get the selected file

      setPersonalDetails((prevValue: any) => {
        return { ...prevValue, [name]: selectedFile };
      });
    } else if (type === "text") {
      const { name, value } = event.target;

      setPersonalDetails((prevValue: any) => {
        return { ...prevValue, [name]: value };
      });
    }
  };

  /// function
  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };
  return (
    <>
      <div className=" relative flex-between  px-0 md:px-16 ">
        <div
          className={` hidden md:flex absolute transition-all  left-0 top-4 w-full  ${
            currentStep === 0
              ? "justify-start"
              : currentStep === 1
              ? "justify-center"
              : currentStep === 2 && "justify-end"
          }   px-28`}
        >
          <Image src={dronePng} alt="" width={60} height={60} />
        </div>
        {step.map((steps: any, index: number) => (
          <div
            onClick={() => goToStep(index)}
            key={index}
            className="flex-center gap-2 flex-col md:flex-row"
          >
            <span
              className={` ${
                index === currentStep ? "bg-purple-500" : "bg-transparent"
              } bg-purple-500 px-2 text-white rounded-full border-2 border-black `}
            >
              {index + 1}
            </span>
            <h2 className=" text-sm  text-center font-semibold ">
              {steps.step}
            </h2>
          </div>
        ))}
      </div>
      {currentStep === 0 && (
        <PersonalDetails
          data={personalDetails}
          handleChange={handleOnChangePersonalDetail}
        />
      )}
      {currentStep === 1 && <EducationQualification />}
      {currentStep === 2 && <OfficeDetails />}

      <section className="flex gap-4 justify-center mt-6 ">
        <button
          className="btn_primary"
          onClick={() => {
            if (currentStep === 0) {
              setCurrentStep(0);
            } else {
              setCurrentStep(currentStep - 1);
            }
          }}
        >
          {" "}
          back
        </button>
        <button
          style={{ display: currentStep === 2 ? "none" : "block" }}
          className={`btn_primary  `}
          onClick={() => {
            if (currentStep === 2) {
              setCurrentStep(2); // Reset to 0
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          {" "}
          next
        </button>
        <button
          onClick={() => {
            console.log(personalDetails);
          }}
        >
          Submit
        </button>
      </section>
    </>
  );
};

export default Stepper;
