import { WidthWrapper } from "./WidthWrapper";
import PlantInHandImage from "../assets/images/plantInHand.jpg";
import MiddleAgePersonsImage from "../assets/images/middleAgePersons.jpg";

import OurMissionIcon from "../assets/icons/ourMission.svg";
import OurVisionIcon from "../assets/icons/ourVision.svg";
import SupportTeamIcon from "../assets/icons/supportTeam.svg";
import ClientsTrustIcon from "../assets/icons/clientsTrust.svg";
import { Button } from "./Button";

export const YearsOfExperience = () => {
  return (
    <div>
      <WidthWrapper>
        <div className="w-full xl:flex  ">
          <div className="relative xl:flex-1 xl:max-h-[700px] mb-32 xl:mb-0">
            <div
              className="bg-no-repeat bg-cover bg-center top-5 left-5 outline outline-dashed outline-offset-[20px] outline-main rounded-xl mx-auto"
              style={{
                backgroundImage: `url(${MiddleAgePersonsImage.src})`,
                width: "60%",
                aspectRatio: "3/4",
              }}
            />

            <div
              style={{
                backgroundImage: `url(${PlantInHandImage.src})`,
                width: "40%",
                aspectRatio: "4/3",
              }}
              className="absolute top-[70%] left-[50%] bg-no-repeat bg-cover bg-center outline outline-[20px] outline-solid outline-textLight rounded-xl z-10"
            />
          </div>
          <div className="xl:flex-1 z-10 ">
            <h2 className="w-full text-center xl:w-3/4  xl:text-left">
              <span className="text-main ">25+ Years of Experience </span>
              in Gadening & Landscaping
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="mt-12 mb-12 grid grid-cols-2 gap-8 ">
              <div className="flex flex-col py-4 md:inline-flex md:flex-row gap-4 md:gap-8 items-center text-2xl font-bold text-center shadow-normal md:shadow-none">
                <div className="bg-main w-fit p-2 rounded-full">
                  <OurMissionIcon />
                </div>
                Our Mission
              </div>
              <div className="flex flex-col py-4 md:inline-flex md:flex-row gap-4 md:gap-8 items-center text-2xl font-bold text-center shadow-normal md:shadow-none">
                <div className="bg-main w-fit p-2 rounded-full">
                  <OurVisionIcon />
                </div>
                Our Vision
              </div>
              <div className="flex flex-col py-4 md:inline-flex md:flex-row gap-4 md:gap-8 items-center text-2xl font-bold text-center shadow-normal md:shadow-none">
                <div className="bg-main w-fit p-2 rounded-full">
                  <SupportTeamIcon />
                </div>
                Support Team
              </div>
              <div className="flex flex-col py-4 md:inline-flex md:flex-row gap-4 md:gap-8 items-center text-2xl font-bold text-center shadow-normal md:shadow-none">
                <div className="bg-main w-fit p-2 rounded-full">
                  <ClientsTrustIcon />
                </div>
                Clients Trust
              </div>
            </div>
            <div className="flex justify-center">
              <Button link="/about-us">Discover More</Button>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
};
