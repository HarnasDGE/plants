import BlattImage from "../assets/images/blattDark.png";
import UserIcon from "../assets/icons/user.svg";
import Image from "next/image";
import { getAuthorById } from "../utilities/getAuthorById";

export const ArticleCard = ({ article, isLargeScreen = false, activePost }) => {
  const dateObj = new Date(article.date);
  const options = { month: "short", day: "numeric", year: "numeric" };
  let formattedDate = dateObj.toLocaleDateString("en-US", options);
  formattedDate = formattedDate.replace(", ", " - ");

  const author = getAuthorById(article.authorId);
  return (
    <li
      className={`relative h-[550px] flex-shrink-0 px-8 pt-24 rounded shadow-blogHighlist overflow-hidden flex flex-col bg-cover bg-center bg-no-repeat z-0 cursor-pointer group ${
        isLargeScreen ? "w-[30%]" : "min-w-full"
      }`}
      style={{
        backgroundImage: activePost ? "none" : `url(${article.image})`,
      }}
    >
      <div className="h-9 w-fit px-3 flex items-center bg-backgroundThird shadow-category text-main font-bold">
        {article.categories[0]}
      </div>
      <div
        className={`flex-1 self-stretch flex flex-col ${
          isLargeScreen
            ? "text-textDark justify-center"
            : "text-textLight justify-end"
        }`}
      >
        <h3
          className={`font-bold mt-10 text-2xl group-hover:underline group-hover:decoration-solid ${
            activePost ? "text-main" : "text-textLight"
          }`}
        >
          {article.title}
        </h3>
        <p
          className={`my-7 text-xl  ${
            activePost ? "text-textDark" : "text-textLight"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetuer lorem adipiscing elit. Aenean
          commodo ligula eget the dolor. Aenean massa. Cum sociis natoque
        </p>
      </div>
      <div
        className={`py-7 flex items-center justify-between border border-solid border-l-0 border-r-0 border-b-0 border-blogHighlistDivider ${
          activePost ? "text-textDark" : "text-textLight"
        }`}
      >
        <p>{formattedDate}</p>
        <p className="inline-flex gap-1">
          <UserIcon /> {author.nickname}
        </p>
      </div>
      {isLargeScreen && (
        <Image
          src={BlattImage}
          height={200}
          width={200}
          alt="Blatt image decoration"
          className="absolute -top-10 -right-5 rotate-[120deg] opacity-30"
        />
      )}
      {!isLargeScreen && (
        <div className="absolute h-full w-full top-0 left-0 bg-neutral-950 opacity-30 -z-10"></div>
      )}
    </li>
  );
};
