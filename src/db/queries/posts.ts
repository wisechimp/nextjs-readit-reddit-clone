import db from "..";
import PostWithData from "@/types/PostWithData";

const fetchPostsByTopicSlug = (slug: string): Promise<PostWithData[]> => {
  return db.post.findMany({
    where: { topic: { slug }},
    include: {
      topic: { select: { slug: true }},
      user: { select: { name: true }},
      _count: { select: { comments: true }}
    }
  })
}

export default fetchPostsByTopicSlug