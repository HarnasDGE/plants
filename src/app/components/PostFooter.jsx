import { Button } from "./Button";
import { SocialShare } from "./SocialShare";

export const PostFooter = ({ categories }) => {
  return (
    <div className="w-full border border-divider border-solid border-b-0 border-r-0 border-l-0 p-4 flex flex-wrap-reverse xl:flex-nowrap justify-center gap-5 mt-5  items-center xl:justify-between">
      <SocialShare />
      <ul className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <li key={category} className="whitespace-nowrap">
            <Button color="third">{category}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
