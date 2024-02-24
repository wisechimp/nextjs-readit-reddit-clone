"use client"

/* This ensures state (controlled by React Context) is shared with
   the NextUI components satisfactorily */
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NextThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </SessionProvider>
  )
}

export default Providers