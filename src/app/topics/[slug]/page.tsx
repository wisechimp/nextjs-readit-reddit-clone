import PostCreateForm from "@/components/posts/PostCreateForm"
import PostsList from "@/components/posts/PostsList"
import fetchPostsByTopicSlug from "@/db/queries/posts"

type ShowTopicPageProps = {
  params: {
    slug: string
  }
}

const ShowTopicPage = ({ params }: ShowTopicPageProps) => {
  const { slug } = params
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className='col-span-3'>
        <h1 className="text-2xl font-bold mb-2">
          {slug}
        </h1>
        <PostsList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}

export default ShowTopicPage