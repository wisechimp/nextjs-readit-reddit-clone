import CommentWithAuthor from "@/types/CommentWithUser"
import db from ".."
import { cache } from "react"

const fetchCommentsByPostId = cache ((postId: string): Promise<CommentWithAuthor[]> => {
  console.log("Asking for comments")
  return db.comment.findMany({
    where: { postId: postId },
    include: {
      user: {
        select: {
          name: true,
          image: true
        }
      }
    }
  })
})

export default fetchCommentsByPostId