import { ProgressBar } from "./ProgressBar";
import { RoundedInfo } from "./RoundedInfo";
import { WidthWrapper } from "./WidthWrapper";
import ManWithPlantImage from "../assets/images/manWithPlant.jpg";
export const OurSkills = () => {
  return (
    <WidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div>
          <h2 className="text-4xl font-extrabold">Our Skills</h2>
          <p className="mt-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex gap-5 my-7 flex-wrap">
            <RoundedInfo count="500+" title="Happy Customer" />
            <RoundedInfo count="800+" title="Garden Created" />
            <RoundedInfo count="100+" title="Team Members" />
          </div>
          <ProgressBar procent="85" title="Garden Care" />
          <ProgressBar procent="75" title="Lawn Care" />
          <ProgressBar procent="80" title="Lawn Care" />
          <ProgressBar procent="100" title="Lawn Care" />
        </div>
        <div className="flex justify-center">
          <div
            className="relative bg-no-repeat bg-cover bg-center flex before:relative before:bg-main before:content-[''] before:top-[-25px] before:right-[-25px] before:w-full before:h-full before:-z-10"
            style={{
              backgroundImage: `url(${ManWithPlantImage.src})`,
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </div>
    </WidthWrapper>
  );
};
