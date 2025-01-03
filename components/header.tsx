import { ThemeToggle } from "./theme-toggle";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar";

export default function Header() {
  return (
    <header className="flex justify-between items-center my-5 top-0">
      <h1 className="text-5xl font-display">
        Pilath Next Discovery Space
      </h1>
      <section className="flex justify-end gap-2 h-full">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>MENU</MenubarTrigger>
            <MenubarContent>
              <MenubarItem><a href="/">Accueil</a></MenubarItem>
              <MenubarItem><a href="/sandbox">Sandbox</a></MenubarItem>
              <MenubarItem><a href="/sc_tool">SC Tool</a></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <ThemeToggle />
      </section>
    </header>
  )
}