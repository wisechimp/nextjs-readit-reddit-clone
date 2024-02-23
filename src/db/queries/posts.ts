import db from "..";
import PostWithData from "@/types/PostWithData";

const fetchTopPosts = (): Promise<PostWithData[]> => {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 7
  })
}

const fetchPostsByTopicSlug = (slug: string): Promise<PostWithData[]> => {
  return db.post.findMany({
    where: { topic: { slug }},
    include: {
      topic: { select: { slug: true }},
      user: { select: { name: true, image: true }},
      _count: { select: { comments: true }}
    }
  })
}

const fetchPostsBySearchTerm = (searchTerm: string): Promise<PostWithData[]> => {
  return db.post.findMany({
    where: {
      OR: [
        { title: { contains: searchTerm } },
        { content: { contains: searchTerm } }
      ]
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } }
    }
  })
}

export { fetchTopPosts, fetchPostsByTopicSlug, fetchPostsBySearchTerm }