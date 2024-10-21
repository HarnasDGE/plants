import Link from "next/link";
import { sordByDate } from "../utilities/sortByDate";
import Image from "next/image";
import CalendarIcon from "../assets/icons/calendar.svg";
import { postsDb } from "../data/postsDb";

export const RecentPosts = () => {
  const recentPosts = sordByDate(postsDb).slice(0, 5);

  return (
    <div className="py-10 px-7 shadow-normal">
      <h3>Recent Posts</h3>
      <ul className="flex flex-col gap-5">
        {recentPosts.map((post) => {
          const options = { month: "short", day: "numeric", year: "numeric" };
          const dateObj = new Date(post.date);
          let formattedDate = dateObj.toLocaleDateString("en-US", options);

          return (
            <Link href={`/blog/${post.id}`}>
              <div className="flex gap-5">
                <Image
                  src={post.image}
                  height={58}
                  width={100}
                  alt={`Post image`}
                  className="rounded"
                />
                <div className="w-full">
                  <p className="text-textDark">{post.title}</p>
                  <div className="text-textMedium border-solid border-t-0 border-r-0 border-l-0 border-b-[1px] flex w-full items-center gap-2">
                    <CalendarIcon /> {formattedDate}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
