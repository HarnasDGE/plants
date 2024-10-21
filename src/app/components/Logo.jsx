import Link from "next/link";
import LogoImage from "../assets/Logo.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <LogoImage />
    </Link>
  );
};
