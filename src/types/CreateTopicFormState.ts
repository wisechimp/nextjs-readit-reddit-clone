/*  This includes validation errors for the individual fields (name and
    description) plus more general errors related to the form such as
    user being logged in or failing to write to the database
*/

type CreateTopicFormState = {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[]
  }
}

export default CreateTopicFormState