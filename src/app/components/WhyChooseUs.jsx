import { WidthWrapper } from "./WidthWrapper";
import FloristImage from "../assets/images/florist.jpg";
import BlattImage from "../assets/images/blatt.png";
import TickIcon from "../assets/icons/tick.svg";
import { Button } from "./Button";
import Image from "next/image";
export const WhyChooseUs = () => {
  const adventages = [
    "Proper Take Care",
    "Expert Farmer",
    "Clean Working",
    "Home Gardening",
  ];
  return (
    <div className="relative py-24 bg-second z-0 overflow-hidden">
      <WidthWrapper>
        <div className="w-full xl:grid xl:grid-cols-2 gap-8 text-textLight z-10 ">
          <div
            className="block bg-no-repeat bg-cover bg-center content-[''] min-h-[426px]  xl:hidden mx-auto "
            style={{
              backgroundImage: `url(${FloristImage.src})`,
              height: "426px",
              width: "90%",
            }}
          ></div>
          <div>
            <h2 className="text-center xl:text-left">Why Choose Us</h2>
            <p className="text-center xl:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ul className="grid grid-cols-2 gap-8 my-8 mx-auto">
              {adventages.map((adv) => (
                <li
                  key={adv}
                  className="inline-flex gap-5 items-center font-bold"
                >
                  <div className="p-1 bg-textLight rounded-full">
                    <TickIcon />
                  </div>
                  {adv}
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Button link="/about-us">Discover Me</Button>
            </div>
          </div>
          <div
            className=" bg-no-repeat bg-contain content-[''] min-h-[426px] min-w-[672px] hidden xl:block"
            style={{
              backgroundImage: `url(${FloristImage.src})`,
              height: "426px",
              width: "672px",
            }}
          ></div>
        </div>
      </WidthWrapper>
      <Image
        src={BlattImage}
        width={541}
        height={535}
        alt="Blatt decoration Image"
        className="absolute left-[-250px] bottom-0 rotate-90 opacity-50 scale-1/2 -z-10"
      />
      <Image
        src={BlattImage}
        width={541}
        height={535}
        alt="Blatt decoration Image"
        className="absolute right-[-350px] top-0 rotate-90 opacity-50 scale-1/2 -z-10"
      />
    </div>
  );
};
