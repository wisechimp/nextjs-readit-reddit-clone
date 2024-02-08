import PostLists from "@/components/posts/PostList";
import TopicCreateForm from "@/components/topics/TopicCreateForm";

export default function Home() {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <PostLists />
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  )
}