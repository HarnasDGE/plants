"use client";
import { WidthWrapper } from "./WidthWrapper";
import ConsultationIcon from "../assets/icons/consultation.svg";
import DesignAndWorkIcon from "../assets/icons/designAndWork.svg";
import MaintenanceIcon from "../assets/icons/maintenance.svg";
import CompleteIcon from "../assets/icons/complete.svg";
import BlatsIcon from "../assets/icons/blats.svg";
import { useState } from "react";

export const WorkingProcess = ({ desc = true }) => {
  const [hoveredStepId, setHoveredStepId] = useState(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const processSteps = [
    {
      id: 1,
      icon: <ConsultationIcon />,
      name: "Consultation",
      desc: "Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      id: 2,
      icon: <DesignAndWorkIcon />,
      name: "Design & Work",
      desc: "Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      id: 3,
      icon: <MaintenanceIcon />,
      name: "Maintenance",
      desc: "Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      id: 4,
      icon: <CompleteIcon />,
      name: "Complete",
      desc: "Lorem Ipsum is simply dummy of the printing and typesetting test industry. Lorem Ipsum has been the industry's standard.",
    },
  ];

  const handleMouseEnterContainer = () => {
    setIsContainerHovered(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsContainerHovered(false);
    setHoveredStepId(null);
  };

  const handleMouseEnterStep = (stepId) => {
    setHoveredStepId(stepId);
  };

  return (
    <div
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      <WidthWrapper>
        <h2 className="text-center">
          Working <span className="text-main">Process</span>
        </h2>
        <p className="text-center w-3/4 mx-auto ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-7">
          {processSteps.map((step) => {
            const isHighlighted =
              hoveredStepId === null
                ? step.id === 1
                : step.id === hoveredStepId;

            return (
              <div
                key={step.id}
                className={`relative pt-12 pb-16 px-7 rounded-xl shadow-service transition-all duration-300 group ${
                  isHighlighted ? "bg-main text-textLight" : ""
                }`}
                onMouseEnter={() => handleMouseEnterStep(step.id)}
              >
                <div className="w-full flex justify-between items-center ">
                  {/* Ikona */}
                  <div
                    className={`${
                      isHighlighted ? "text-textLight" : "text-main"
                    }`}
                  >
                    {step.icon}
                  </div>
                  {/* Numer kroku */}
                  <p
                    className={`text-6xl font-bold opacity-30 ${
                      isHighlighted
                        ? "text-textLight opacity-100"
                        : "text-textMedium"
                    }`}
                  >
                    {step.id}
                  </p>
                </div>
                {/* Nazwa kroku */}
                <h3 className="text-2xl font-bold mb-5">{step.name}</h3>
                {/* Opis kroku */}
                {desc && <p className="text-xl">{step.desc}</p>}
                {/* Dodatkowa ikona */}
                <BlatsIcon
                  className={`absolute top-1/2 right-[50px] -translate-y-1/2 md:translate-y-1  md:left-1/2 md:-translate-y-1/4  text-main ${
                    isHighlighted ? "text-textLight" : ""
                  }`}
                />
              </div>
            );
          })}
        </div>
      </WidthWrapper>
    </div>
  );
};
