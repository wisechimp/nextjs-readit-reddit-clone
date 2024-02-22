type FormErrorMessageProps = {
  errorMessage: string[]
}

const FormErrorMessage = ({errorMessage} : FormErrorMessageProps) => {
  return(
    <div className='p-2 bg-pink-100 rounded-xl text-red-500'>
      {errorMessage?.join(", ")}
    </div>
  )
}

export default FormErrorMessage