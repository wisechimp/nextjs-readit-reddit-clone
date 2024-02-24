"use client"

import { Button, NavbarItem } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { IconContext } from "react-icons"
import { FaMoon } from "react-icons/fa6"
import { RiSunFill } from "react-icons/ri"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <NavbarItem className="mx-4">
        {theme === "light" ? (
          <Button radius="full" isIconOnly onClick={() => setTheme("dark")}>
            <FaMoon />
          </Button>
        ) : (
          <Button radius="full" isIconOnly onClick={() => setTheme("light")}>
            <RiSunFill />
          </Button>
        )}
      </NavbarItem>
    </IconContext.Provider>
  )
}

export default ThemeSwitcher