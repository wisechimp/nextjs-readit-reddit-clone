import { Post } from "@prisma/client"

type PostWithData = Post & {
  topic: { slug: string }
  user: { name: string | null }
  _count: { comments: number }
}

/* 
  type PostWithData = Awaited<
    ReturnType<typeof fetchPostsByTopicSlug>
  >[number]
*/

export default PostWithData
