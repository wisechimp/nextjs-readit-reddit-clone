import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth()

  if (session?.user) {
    const {name} = session.user
    return (
      <div>
        Welcome {name}
        <form action={signOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
    )
  } else {
    return (
      <div>
        Signed Out
        <form action={signIn}>
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    )
  }
}
