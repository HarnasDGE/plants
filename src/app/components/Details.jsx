import ArrowIcon from "../assets/icons/arrow.svg";
import { Button } from "./Button";
import { PostFooter } from "./PostFooter";
import { SocialShare } from "./SocialShare";

export const Details = ({ project }) => {
  return (
    <div className=" pb-7 ">
      <div
        className="h-[440px] w-full bg-cover bg-center bg-no-repeat mb-12"
        style={{ backgroundImage: `url(${project.mainImageUrl})` }}
      ></div>
      <div>
        <h2>Project Summary</h2>
        {project.summary.map((s) => (
          <p>{s}</p>
        ))}
      </div>
      <div>
        <h2>Project Challenges</h2>
        {project.challenges.map((s) => (
          <p>{s}</p>
        ))}
      </div>
      <div className="flex mb-7 gap-7">
        <div
          className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        ></div>
        <div
          className="w-full h-[200px] bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${project.images[1]})` }}
        ></div>
      </div>
      <ul className="flex flex-col gap-2">
        {project.steps.map((s) => (
          <li key={s} className="flex gap-5 items-start">
            <ArrowIcon className="-rotate-90 h-4 w-4 scale-150 fill-main" />
            {s}
          </li>
        ))}
      </ul>
      <PostFooter categories={project.categories} />
    </div>
  );
};
