import Link from "next/link";
import Arrow from "../assets/icons/arrowSecond.svg";

export const Project = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.param}`}
      key={project.id}
      className="transition-all group"
    >
      <li className="relative h-[330px]  bg-projectBackground rounded-xl shadow-project overflow-hidden z-0">
        <div
          className="bg-center bg-cover bg-no-repeat h-[65%] rounded-xl group-hover:absolute transition-all group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:left-0 group-hover:blur group-hover:-z-10"
          style={{ backgroundImage: `url(${project.imageUrl})` }}
        ></div>
        <div className="w-full px-5 pt-4 pb-6 bg-transparent h-[35%] transition-all group-hover:text-textLight group-hover:h-full group-hover:pt-16">
          <h3 className="text-2xl text-main font-bold group-hover:text-textLight">
            {project.category}
          </h3>
          <p className="text-sm transition-all group-hover:hidden">
            {project.shortDesc}
          </p>
          <p className="text-sm hidden group-hover:block">{project.longDesc}</p>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 border border-solid border-t-0 border-r-0 border-l-0 text-textLight flex justify-end hidden group-hover:flex">
            <div className="border-1 border-solid w-fit rounded-full m-2 ">
              <Arrow className="rotate-180 scale-75  " />
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
