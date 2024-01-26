import * as auth from "@/auth"

const signIn = async () => {
  return auth.signIn("github")
}

export default signIn
