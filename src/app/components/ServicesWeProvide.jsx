"use client";
import { useState } from "react";

import PestImage from "../assets/services/pest.svg";
import ServicesPlantImage from "../assets/servicesPlant.png";
import { WidthWrapper } from "./WidthWrapper";
import Image from "next/image";
import { services } from "../constans/services";
import Link from "next/link";

export const ServicesWeProvide = () => {
  const [hoveredServiceName, setHoveredServiceName] = useState(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const handleMouseEnterContainer = () => {
    setIsContainerHovered(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsContainerHovered(false);
    setHoveredServiceName(null);
  };

  const handleMouseEnterService = (serviceName) => {
    setHoveredServiceName(serviceName);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      <WidthWrapper>
        <p className="lg:hidden text-center">Service</p>
        <h2 className="text-center">
          Services We <span className="text-main">Provide</span>
        </h2>
        <p className="text-xl text-center w-3/4 mx-auto mt-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 gap-8 transition-all">
          {services.map((service) => {
            // Sprawdzamy, czy serwis jest wyróżniony
            const isHighlighted =
              hoveredServiceName === null
                ? service.name === services[0].name // Domyślnie wyróżniony pierwszy serwis
                : service.name === hoveredServiceName; // Wyróżniony serwis najechany

            return (
              <Link
                href={`/services/${service.param}`}
                key={service.name}
                className={`relative py-5 xl:py-14 max-w-82 shadow-service rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                  isHighlighted ? "bg-main text-textLight" : "bg-background"
                }`}
                onMouseEnter={() => handleMouseEnterService(service.name)}
              >
                <div className=" inline-flex gap-10 px-10 items-start justify-start mx-3 xl:block xl:mx-10">
                  <div
                    className={`flex justify-center  h-full my-auto mx-auto xl:w-full ${
                      isHighlighted ? "text-textLight" : "text-main"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex flex-col justify-start items-start xl:items-center xl:justify-center ">
                    <h3 className="mt-4 xl:mb-2.5 font-bold text-2xl xl:text-center">
                      {service.name}
                    </h3>
                    <p className=" xl:text-center xl:w-full">{service.desc}</p>
                  </div>
                </div>
                <PestImage
                  className={`absolute bottom-[20px] left-0 scale-[1.8] xl:left-auto xl:scale-[1] xl:top-6 xl:right-1/2  xl:translate-x-1/3 z-0 opacity-20 ${
                    isHighlighted ? "fill-current text-textLight" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </WidthWrapper>
      <Image
        src={ServicesPlantImage}
        className="absolute right-0 bottom-1/3 -z-10"
        width="200"
        height="420"
        alt="Services Plant"
      />
    </div>
  );
};
