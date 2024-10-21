import { Button } from "./Button";
import { Menu } from "./Menu";
import { WidthWrapper } from "./WidthWrapper";
import PhoneIcon from "../assets/icons/phone.svg";
import { Logo } from "./Logo";

export const MainBar = () => {
  return (
    <WidthWrapper>
      <div className="relative flex justify-between items-center z-10 sm:px-4 md:px-4 lg:px-0 ">
        <Logo />
        <div className="flex gap-10 py-4 items-center">
          <Button link="tel:#" type="icon" className="flex lg:hidden">
            <PhoneIcon />
          </Button>
          <Menu />
          <Button link="tel:#" type="narrow" className="hidden lg:flex">
            <PhoneIcon /> <p className="hidden lg:block">Call Us</p>
          </Button>
        </div>
      </div>
    </WidthWrapper>
  );
};
