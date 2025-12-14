import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/shadcn-ui/navigation-menu"

import { homeItems } from "@/components/ui/modules/app-sidebar"

export function FooterNavbar() {
    return (
        <div className="flex flex-col h-full min-w-full">
            <div className="flex flex-1 items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ul className="flex flex-row gap-4 p-4 m-4">
                                {homeItems.map((item) => (
                                    <li key={item.title}>
                                        <NavigationMenuLink href={item.url} className="flex flex-col md:flex-row items-center gap-3">
                                            <item.icon />
                                            <span className="hidden md:block">{item.title}</span>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
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