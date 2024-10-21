import Markdown from "react-markdown";
import { usersDb } from "../data/usersDb";
import { commentsDb } from "../data/commentsDb";
import CommentIcon from "../assets/icons/comment.svg";
import { PostFooter } from "./PostFooter";
import { AuthorInfo } from "./AuthorInfo";
import { postsDb } from "../data/postsDb";
import { SuggestNearlyPosts } from "./SuggestNearlyPosts";
import { Comments } from "./Comments";
import { LeaveComment } from "./LeaveComment";
export const Post = ({ article }) => {
  const author = usersDb.find((user) => user.id === article.authorId);
  const comments = commentsDb.filter(
    (comment) => comment.postId === article.id
  );
  const options = { month: "short", day: "numeric", year: "numeric" };
  const dateObj = new Date(article.date);
  let formattedDate = dateObj.toLocaleDateString("en-US", options);
  formattedDate = formattedDate.replace(", ", " - ");

  const newerArticle = postsDb.find((post) => post.id === article.nextPostId);
  const previousArticle = postsDb.find(
    (post) => post.id === article.previousPostId
  );
  return (
    <article>
      <div className="py-5 flex justify-between items-center">
        <div className="flex gap-12 w-full justify-between xl:justify-start xl:w-auto">
          <div className="font-bold underline">{formattedDate}</div>
          <div className="font-bold">By {author.nickname}</div>
          <div className="flex flex-nowrap w-fit gap-2 items-center block xl:hidden">
            <CommentIcon /> Comments {comments.length}
          </div>
        </div>
        <div className="flex gap-2 items-center w-fit hidden xl:flex">
          <CommentIcon /> Comments {comments.length}
        </div>
      </div>
      <h2>{article.title}</h2>

      <Markdown>{article.content}</Markdown>
      <PostFooter categories={article.categories} />
      <AuthorInfo author={author} />
      <SuggestNearlyPosts
        newerArticle={newerArticle}
        previousArticle={previousArticle}
      />
      <Comments articleId={article.id} />
      <LeaveComment />
    </article>
  );
};
