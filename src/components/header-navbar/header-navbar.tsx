import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import profilePicture from "@/assets/profile.jpeg"

export function HeaderNavbar() {
  return (
    <div id="header-navbar" className="flex flex-1 flex-row justify-between items-center gap-10 border-b border-hex-808080 width-auto flex-grow-1">
      <div id="title-navbar" className="flex flex-1 flex-row items-center pl-2">
        <div id="icon-navbar" className="flex flex-1 flex-row items-center">
          <img id="profile-picture" className="size-10 keep-aspect-ratio rounded-full max-w-10 max-h-10" src={profilePicture} alt="Profile picture" />
        </div>
        <div id="title-navbar-text" className="flex flex-1 align-items-left flex-row items-center">
          <h2>@neolivaresgonzalez</h2>
        </div>
      </div>
      <div id="nav-bar" className="flex flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link">About</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link">Experience</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link">Projects</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Button variant="link">Contact</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}