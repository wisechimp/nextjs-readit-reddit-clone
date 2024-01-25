"use client"

/* This ensures state (controlled by React Context) is shared with
   the NextUI components satisfactorily */
import { NextUIProvider } from "@nextui-org/react"

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default Providers