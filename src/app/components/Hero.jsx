import { WidthWrapper } from "./WidthWrapper";
import PlantIcon from "../assets/plant.svg";
import ArrowIcon from "../assets/icons/arrowThird.svg";
import HeroFlowerImage from "../assets/heroFlower.png";
import HeroWomanImage from "../assets/heroWoman.jpg";
import { Button } from "./Button";
import { RoundedInfo } from "./RoundedInfo";

export const Hero = () => {
  return (
    <div className="relative bg-custom-gradient z-0">
      <WidthWrapper className="px-0">
        <div
          className="bg-no-repeat bg-cover block xl:hidden "
          style={{
            backgroundImage: `url(${HeroWomanImage.src})`,
            height: "680px",
            width: "100%",
          }}
        ></div>
        <div className="xl:w-1/3 xl:pb-24 xl:pt-32 w-full pt-20 px-4 pb-4">
          <div className="capitalize font-bold inline-flex gap-1 mb-5">
            <PlantIcon /> Landscape Planting Services
          </div>
          <h1 className="capitalize text-5xl font-extrabold mb-5">
            Perfect Landscape <span className="text-main">Solution.</span>
          </h1>
          <p className="text-xl mb-12 md:max-w-[75%] lg:max-w-[75%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mb-12 flex gap-8 flex-col xl:flex-row items-center ">
            <Button className="hidden xl:flex">Get A Quate</Button>
            <Button className="xl:hidden" type="fullWidth">
              Get A Quate
            </Button>
            <Button color="noneDark" bold={false}>
              See how it works <ArrowIcon className="scale-75 " />
            </Button>
          </div>
          <div className="relative font-bold flex flex-nowrap ml-[30%] gap-4 xl:ml-0 xl:gap-1 overflow-hidden after:bg-custom-gradient4 after:w-20 after:h-full after:content-[''] after:absolute after:right-0  after:opacity-70 xl:after:hidden">
            <RoundedInfo count="500+" title="Happy Customer" />
            <RoundedInfo count="800+" title="Garden Created" />
            <RoundedInfo count="100+" title="Team Members" />
          </div>
        </div>
      </WidthWrapper>
      <div
        className="absolute left-0 bottom-0 -z-10 bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${HeroFlowerImage.src})`,
          height: "180px",
          width: "197px",
        }}
      ></div>
      <div
        className="absolute right-0 bottom-0 -z-10 bg-no-repeat bg-cover hidden xl:block"
        style={{
          backgroundImage: `url(${HeroWomanImage.src})`,
          height: "95%",
          width: "50%",
        }}
      ></div>
    </div>
  );
};
