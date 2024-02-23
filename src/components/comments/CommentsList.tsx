import ShowComment from "@/components/comments/ShowComment";
import fetchCommentsByPostId from "@/db/queries/comments";

type CommentsListProps = {
  postId: string
}

const CommentsList = async ({ postId }: CommentsListProps) => {
  const comments = await fetchCommentsByPostId(postId)

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <ShowComment
        key={comment.id}
        commentId={comment.id}
        postId={postId}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}

export default CommentsList
