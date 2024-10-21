import { commentsDb } from "../data/commentsDb";
import { CommentCard } from "./CommentCard";

export const Comments = ({ articleId }) => {
  const comments = commentsDb.filter(
    (comment) => comment.articleId === articleId
  );
  const mainComments = comments.filter(
    (comment) => comment.parentCommentId === null
  );

  return (
    <div className="">
      <h3>{comments.length} Comments</h3>
      {mainComments.map((comment) => {
        const replies = comments.filter(
          (c) => c.parentCommentId === comment.id
        );
        return (
          <>
            <CommentCard comment={comment} />
            <div className="pl-10">
              {replies.map((rep) => (
                <CommentCard comment={rep} />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};
