import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import github from "next-auth/providers/github"

import db from "./db"

export const { handlers: { GET, POST }, auth, signOut, signIn } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [github],
  callbacks: {
    /* Usually not required, but it's a bug in the current nextauth version. It
       allows us to acceess the id which we'll use later */
    async session({ session, user }: any) {
      if(session && user) {
        session.user.id = user.id
      }
      return session
    }
  }
})