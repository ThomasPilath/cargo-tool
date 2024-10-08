import { ThemeToggle } from "./theme-toggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-5 top-0">
      <h1 className="text-5xl font-display">
        STAR CITIZEN CARGO TOOL
      </h1>
      <section className="flex justify-end gap-2 h-full">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>MENU</MenubarTrigger>
            <MenubarContent>
              <MenubarItem><a href="/">HOME</a></MenubarItem>
              <MenubarItem><a href="/sandbox">SANDBOX</a></MenubarItem>
              <MenubarItem><a href="/multi-tool">MULTI-TOOL</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <ThemeToggle />
      </section>
    </header>
  )
}