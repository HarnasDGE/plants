import { WidthWrapper } from "./WidthWrapper";
import EmailIcon from "../assets/icons/email.svg";
import PointNavigationIcon from "../assets/icons/pointNavigation.svg";
import PhoneSecondIcon from "../assets/icons/phoneSecond.svg";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";

export const TopBar = () => {
  return (
    <div className="bg-second py-4 z-10">
      <WidthWrapper>
        <div className="w-full inline-flex items-center justify-between p-5 pb-4 lg:p-0 lg:pb-0">
          <div className="inline-flex gap-7 items-center ">
            <Link
              href="mailto:#"
              className="inline-flex gap-2.5 text-textLight items-center"
            >
              <EmailIcon />
              <p className="inline-flex whitespace-nowrap hidden lg:inline-flex">
                Email: Plantingservice@7oroof.com
              </p>
            </Link>
            <Link
              href="tel:#"
              className="inline-flex gap-2.5 text-textLight items-center"
            >
              <PhoneSecondIcon />
              <p className="whitespace-nowrap hidden lg:inline-flex">
                +01 123456789
              </p>
            </Link>
            <Link
              href=""
              className="inline-flex gap-2.5 text-textLight items-center"
            >
              <PointNavigationIcon />
              <p className="whitespace-nowrap hidden lg:inline-flex">
                2072 Pinnickinick Street, WA 98370
              </p>
            </Link>
          </div>
          <LanguageSelector />
        </div>
      </WidthWrapper>
    </div>
  );
};
