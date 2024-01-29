"use client"
import { useSession } from "next-auth/react"
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"

import * as actions from '@/actions'

const HeaderAuth = () => {
  const session = useSession()
  const { signIn, signOut } = actions

  let authContent: React.ReactNode
  
  if (session.status === 'loading') {
    console.log(session.status)
    authContent = null
  } else if (session.data?.user) {
    authContent = (
      <Popover placement='left'>
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className='p-4'>
            <form action={signOut}>
              <Button type='submit'>Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type='submit' color='secondary' variant='bordered'>
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signIn}>
            <Button type='submit' color='primary' variant='flat'>
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    )
  }

  return authContent
}

export default HeaderAuth