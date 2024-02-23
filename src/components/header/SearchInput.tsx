'use client'

import { Input } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"
import * as actions from '@/actions'

const SearchInput = () => {
  const { search } = actions
  const searchParams = useSearchParams()

  return (
    <form action={search}>
      <Input name="searchTerm" defaultValue={searchParams.get("searchTerm") || ""} />
    </form>
  )
}

export default SearchInput