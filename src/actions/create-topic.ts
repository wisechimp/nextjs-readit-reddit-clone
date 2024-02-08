"use server"

import { z } from 'zod'
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import type { Topic } from '@prisma/client'

import CreateTopicFormState from "@/types/CreateTopicFormState"
import db from '@/db'
import paths from '@/paths'

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { 
      message: 'Must be lowercase letters or dashes without spaces'
    }),
  description: z.string().min(10),
})

const createTopic = async (
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
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
        _form: ["You must be signed in to register a new topic."]
      }
    }
  }

  let topic: Topic
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description
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
          _form: ["Something unexpected has gone wrong."]
        }
      }
    }
  }

  revalidatePath("/")
  redirect(paths.topicShow(topic.slug))
}

export default createTopic
