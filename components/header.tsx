import { ThemeToggle } from "./theme-toggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Header() {
  return (
    <header className="flex flex-row justify-between mx-5 top-0">
      <h1 className="text-4xl">
        STAR CITIZEN CARGO TOOL
      </h1>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>MENU</MenubarTrigger>
          <MenubarContent>
            <MenubarItem><a href="/">HOME</a></MenubarItem>
            <MenubarItem><a href="/sandbox">SANDBOX</a></MenubarItem>
            <MenubarItem><a href="/cargo_tab">CARGO_TAB</a></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ThemeToggle />
    </header>
  )
}