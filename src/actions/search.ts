"use server"

import { redirect } from "next/navigation"

const search = async (formData: FormData) => {
  const searchTerm = formData.get('searchTerm')

  if (typeof searchTerm !== "string" || !searchTerm) {
    redirect('/')
  }

  redirect(`/search?searchTerm=${searchTerm}`)
}

export default search