"use client"
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react"
import { useFormState } from "react-dom"

import * as actions from '@/actions'
import FormButton from "../common/FormButton"
import FormErrorMessage from "../common/FormErrorMessage"

type PostCreateFormProps = {
  slug: string
}

const PostCreateForm = ({ slug }: PostCreateFormProps) => {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {}
    }
  )

  const { title, content, _form } = formState.errors

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button color='primary'>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className='flex flex-col gap-4 p-4 w-80'>
            <h3 className='text-lg'>Create a Post</h3>
            <Input
              isInvalid={!!title}
              errorMessage={title?.join(", ")}
              name='title'
              label='Title'
              labelPlacement='outside'
              placeholder='Title'
            />
            <Textarea
              isInvalid={!!content}
              errorMessage={content?.join(", ")}
              name='content'
              label='Content'
              labelPlacement='outside'
              placeholder='Content'
            />
            {_form ? <FormErrorMessage errorMessage={_form} /> : null}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm