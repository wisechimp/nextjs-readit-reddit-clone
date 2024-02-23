import PostsList from "@/components/posts/PostsList"
import { fetchPostsBySearchTerm } from "@/db/queries/posts"
import { redirect } from "next/navigation"

type SearchResultsPageProps = {
  searchParams: {
    searchTerm: string
  }
}

const SearchResultsPage = async ({ searchParams }: SearchResultsPageProps) => {
  const { searchTerm } = searchParams

  if(!searchTerm) {
    redirect("/")
  }
 
  return(
    <div>
      <PostsList fetchData={() => fetchPostsBySearchTerm(searchTerm)} />
    </div>
  )
}

export default SearchResultsPage