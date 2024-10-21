import Image from "next/image";
import { usersDb } from "../data/usersDb";
import { Button } from "./Button";

export const CommentCard = ({ comment }) => {
  const author = usersDb.find((user) => user.id === comment.authorId);

  const options = { month: "short", day: "numeric" };
  const dateObj = new Date(comment.date);
  let formattedDate = dateObj.toLocaleDateString("en-US", options);
  formattedDate = formattedDate.replace(", ", " - ");

  return (
    <div className="flex flex-col gap-5 border-solid border-t-0 border-r-0 border-l-0 border-b-[1px] border-commentBorder py-5">
      <Image
        src={author.avatar}
        height={50}
        width={50}
        alt={`${author.nickname} avatar`}
        className="rounded-xl"
      />
      <div className="w-full flex justify-between items-center">
        <h3>{author.nickname}</h3>
        <p className="text-textMedium">{formattedDate}</p>
      </div>
      <p>{comment.content}</p>
      <Button color="second">Reply</Button>
    </div>
  );
};
