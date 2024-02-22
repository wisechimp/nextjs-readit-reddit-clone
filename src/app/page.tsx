import PostLists from "@/components/posts/PostList";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicsList from "@/components/topics/TopicsList";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <PostLists />
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2"/>
        <h3 className="text-l">Topics</h3>
        <TopicsList />
      </div>
    </div>
  )
}