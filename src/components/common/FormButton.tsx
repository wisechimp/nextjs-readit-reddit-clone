"use client"
import { Button } from "@nextui-org/react"
import React from "react"
import { useFormStatus } from "react-dom"

type FormButtonProps = {
  children: React.ReactNode
}

const FormButton = ({children}: FormButtonProps) => {
  const { pending } = useFormStatus()

  return(
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  )
}

export default FormButton