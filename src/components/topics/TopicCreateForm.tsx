"use client"

import { Button, Input, Popover, PopoverContent, PopoverTrigger, Textarea } from "@nextui-org/react"
import * as actions from '@/actions'
import { useFormState } from "react-dom"

import FormButton from "../common/FormButton"
import FormErrorMessage from "../common/FormErrorMessage"

const TopicCreateForm = () => {
  const { createTopic } = actions
  const [formState, action] = useFormState(createTopic, {
    errors: {}
  })

  const { name, description, _form } = formState.errors

  return (
    <div className="mx-auto w-fit">
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary">Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action}>
            <div className="flex flex-col gap-4 p-4 w-80">
              <h3 className="text-lg">
                Create a Topic
              </h3>
              <Input 
                name="name" 
                label="Name"
                labelPlacement="outside"
                placeholder="Name"
                isInvalid={!!name}
                errorMessage={name?.join(', ')}
              />
              <Textarea
                name="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Describe your topic"
                isInvalid={!!description}
                errorMessage={description?.join(', ')}
              />
              {
                _form ? 
                  <FormErrorMessage errorMessage={_form} />
                  : null
              }
              <FormButton>Submit</FormButton>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default TopicCreateForm