import { Button } from "./Button";
import { WidthWrapper } from "./WidthWrapper";
import PhoneIcon from "../assets/icons/phone.svg";
import BackgroundImage from "../assets/images/gardenerInWork.png";

export const CallUs = () => {
  return (
    <WidthWrapper>
      <div
        className="w-full bg-cover bg-no-repeat rounded-xl py-20 pr-14 flex flex-col text-center  gap-20 items-center justify-end lg:inline-flex lg:flex-row lg:text-left"
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      >
        <h3 className="text-3xl text-textLight font-bold">
          Our Best Reliable Gardening and Lawn services
        </h3>
        <Button color="second" border={false}>
          <PhoneIcon />
          Call Us
        </Button>
      </div>
    </WidthWrapper>
  );
};
