import Link from "next/link";
import { socialsIcons } from "../constans/socialsIcons";

export const Person = ({ person }) => {
  return (
    <li
      key={person.id}
      className=" relative text-textLight rounded-xl  h-[408px] shadow-normal overflow-hidden transition-all group"
    >
      <div
        className="absolute top-0 left-0 h-full w-full z-0 bg-center bg-cover bg-no-repeat transition-all duration-300 group-hover:scale-125 group-hover:blur-[5px]"
        style={{ backgroundImage: `url(${person.imageUrl.src})` }}
      ></div>
      <div className="h-full w-full  flex flex-col justify-start items-center bg-staff-gradient  transition-all duration-300 absolute top-[300px]  py-[10px] group-hover:top-0 group-hover:py-0 group-hover:justify-center">
        <h3 className="text-2xl font-bold">{person.name}</h3>
        <p className="m-0"> {person.position}</p>
        <ul className="inline-flex gap-3 pt-5">
          {person.socials.map((social) => {
            return (
              <Link href={social.url} key={social.id}>
                <li>{socialsIcons[social.name] || ""}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
