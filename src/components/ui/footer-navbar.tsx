import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "lucide-react"

export function FooterNavbar() {
    return (
        <div className="flex flex-col h-full min-w-full">
            <div className="flex flex-1 items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ul className="flex flex-row gap-4 p-4 m-4">
                                <li>
                                    <NavigationMenuLink href="#hero">Home</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="#about">About</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="#featured-projects">Projects</NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <p className="text-center text-xs text-gray-500">Developed by Nicolás Olivares <a href="https://github.com/neolivaresgonzalez">github.com/neolivaresgonzalez</a></p>
            </div>
        </div>
    )
}