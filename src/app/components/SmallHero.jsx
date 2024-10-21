import SmallHeroImage from "../assets/images/smallHero.jpg";
import Link from "next/link";

export const SmallHero = ({ title, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${SmallHeroImage.src})` }}
      className="relative bg-cover bg-center bg-no-repeat flex flex-col text-textLight z-0"
    >
      <div className="min-h-[500px] flex flex-col justify-center items-center border border-solid">
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <p className="w-3/4 mb-10 text-center font-medium">{description}</p>

        <ul className="flex gap-2 items-enter justify-center text-2xl font-bold">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li>{`>`}</li>
          <li className="text-main">{title}</li>
        </ul>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-slate-950 opacity-20 -z-10" />
    </div>
  );
};
