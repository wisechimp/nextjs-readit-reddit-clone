/*  This includes validation errors for the individual fields (title and
    content) plus more general errors related to the form such as
    user being logged in or failing to write to the database
*/

type CreatePostFormState = {
  errors: {
    title?: string[]
    content?: string[]
    _form?: string[]
  }
}

export default CreatePostFormState
