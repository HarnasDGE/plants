import ArrowsIcon from "../assets/icons/arrows.svg";
import Link from "next/link";
import { Button } from "./Button";

export const SuggestNearlyPosts = ({ previousArticle, newerArticle }) => {
  return (
    <div className="flex justify-between items-center w-full py-5">
      {previousArticle && (
        <Link href={`/blog/${previousArticle.id}`}>
          <div
            className="bg-center bg-no-repeat bg-cover py-4 px-8  text-textLight rounded"
            style={{ backgroundImage: `url(${previousArticle.image})` }}
          >
            <ArrowsIcon className="rotate-180" />
          </div>
        </Link>
      )}
      {newerArticle && (
        <Button link={`/blog/${newerArticle.id}`}>
          Newer Post <ArrowsIcon />
        </Button>
      )}
    </div>
  );
};
