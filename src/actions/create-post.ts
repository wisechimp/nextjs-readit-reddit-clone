"use server"

import { auth } from "@/auth"
import db from "@/db"
import paths from "@/paths"
import CreatePostFormState from "@/types/CreatePostFormState"
import { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const createPostSchema = z.object({
  title: z
    .string()
    .min(3),
  content: z.string().min(10),
})

const createPost = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content")
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  const session = await auth()
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to post a new, er, post!"]
      }
    }
  }

  const topic = await db.topic.findFirst({
    where: { slug }
  })

  if (!topic) {
    return {
      errors: {
        _form: ['Cannot find this topic']
      }
    }
  }

  let post: Post
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id
      }
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message]
        }
      }
    } else {
      return {
        errors: {
          _form: ["Something unexpected has gone wrong, failed to create post."]
        }
      }
    }
  }

  revalidatePath(paths.topicShow(slug))
  redirect(paths.postShow(slug, post.id))
}

export default createPost