'use client'

import { useSession } from "next-auth/react"

const ProfilePage = () => {
  const session = useSession()

  if (session.data?.user) {
    const { name } = session.data.user
    return <div>Hi {name}</div>
  } else {
    return <div>Signed Out</div>
  }
}

export default ProfilePage