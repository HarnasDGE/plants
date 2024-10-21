import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import PhoneIcon from "../assets/icons/phone.svg";
import WomanImage from "../assets/cta/woman.png";
import BlobImage from "../assets/blobs/wave2.png";
import PlantIcon from "../assets/cta/plantBg.svg";
import BlatsImage from "../assets/cta/group2.png";
import Image from "next/image";
import { CustomGradientDiv } from "./CustomGradientDiv";

export const CtaSecond = () => {
  return (
    <CustomGradientDiv>
      <WidthWrapper className="h-full flex flex-col justify-center z-20">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left gap-7">
          <h2 className="text-4xl font-extrabold z-20">
            Our Best Reliable{" "}
            <span className="text-main">Gardening and Lawn</span> services
          </h2>
          <div className="z-20">
            <Button>
              <PhoneIcon />
              Call us
            </Button>
          </div>
        </div>
      </WidthWrapper>

      {/* Ustawienie WomanImage w kształcie BlobImage */}
      <div
        className="absolute top-0 right-0 h-full w-3/4 md:w-3/4 lg:w-1/2 z-20 drop-shadow-sm hidden lg:block"
        style={{
          backgroundImage: `url(${WomanImage.src})`, // Ustawienie WomanImage jako tła
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: `url(${BlobImage.src})`, // Ustawienie BlobImage jako maski
          WebkitMaskImage: `url(${BlobImage.src})`, // Dla kompatybilności z przeglądarkami Webkit
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      ></div>

      <PlantIcon className="z-10 absolute bottom-0 left-1/2" />
      <Image
        src={BlatsImage}
        height={200}
        width={200}
        className="absolute top-1/2 left-0"
      />
    </CustomGradientDiv>
  );
};
