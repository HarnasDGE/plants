import { Button } from "./Button";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import PointNavigationIcon from "../assets/icons/pointNavigation.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import GoogleIcon from "../assets/icons/google.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
export const GetInTouch = () => {
  return (
    <div className="bg-backgroundSecond py-10 px-7 shadow-normal flex flex-col gap-7">
      <h2>Get in Touch</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printingand typesetting
        industry. Lorem Ipsum has been the industry.
      </p>
      <Button type="fullWidthLeft">
        <PhoneIcon />
        +01 123456789, 1234567890
      </Button>
      <Button type="fullWidthLeft" color="white">
        <EmailIcon className="text-main" /> Plantingservice@gmail.com
      </Button>
      <Button type="fullWidthLeft" color="white">
        <PointNavigationIcon className="text-main" /> 2072 Pinnickinick Street,
        WA 98370
      </Button>
      <div className="flex justify-center gap-5 text-textLight">
        <div className="p-2 bg-facebook rounded-full flex jusify-center items-center cursor-pointer">
          <FacebookIcon />
        </div>
        <div className="p-2 bg-google rounded-full  flex jusify-center items-center cursor-pointer">
          <GoogleIcon />
        </div>
        <div className="p-2 bg-twitter rounded-full  flex jusify-center items-center cursor-pointer">
          <TwitterIcon />
        </div>
        <div className="p-2 bg-pinterest rounded-full  flex jusify-center items-center cursor-pointer">
          <PinterestIcon />
        </div>
        <div className="p-2 bg-linkedIn rounded-full  flex jusify-center items-center cursor-pointer">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};
