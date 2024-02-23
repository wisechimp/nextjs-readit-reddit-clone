import Link from "next/link";
import ShowPost from "@/components/posts/ShowPost";
import CommentList from "@/components/comments/CommentsList";
import CommentCreateForm from "@/components/comments/CreateCommentForm";
import paths from "@/paths";
import { Suspense } from "react";
import ShowPostLoading from "@/components/posts/ShowPostLoading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className='space-y-3'>
      <Link className='underline decoration-solid' href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <Suspense fallback={<ShowPostLoading />}>
        <ShowPost postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  )
}
