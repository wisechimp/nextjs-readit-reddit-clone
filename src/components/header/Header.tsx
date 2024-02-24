import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"
import HeaderAuth from "./HeaderAuth"
import SearchInput from "./SearchInput"
import { Suspense } from "react"
import ThemeSwitcher from "../common/ThemeSwitcher"

const Header = () => {

  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <Link href='/' className='font-bold'>
          READIT!
        </Link>
        <ThemeSwitcher />
      </NavbarBrand>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}

export default Header