import { Comment } from "@prisma/client"

type CommentWithAuthor = Comment & {
  user: { 
    name: string | null,
    image: string | null
  }
}

export default CommentWithAuthor