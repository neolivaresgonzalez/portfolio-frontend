import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/shadcn-ui/navigation-menu"

import type { SectionProps } from "@/types/section-props"
import { homeItems, portfolioItems } from "@/components/ui/modules/app-sidebar"
import { SectionScrollDownIndicator } from "@/components/ui/icons/section-scroll-down-indicator"
import { SpecialIcon } from "@/lib/icons"

export function FooterNavbar(props: SectionProps) {
    return (
        <div className="flex flex-col h-full min-w-full gap-2">
            <div className="flex w-full items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ul className="flex flex-row w-full justify-center items-center gap-2">
                                {homeItems.map((item) => (
                                    <li key={item.title}>
                                        <NavigationMenuLink href={item.url} className="flex flex-col md:flex-row items-center gap-2">
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
            <div className="flex w-full items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <ul className="flex flex-row w-full justify-center items-center gap-2">
                                {portfolioItems.map((item) => (
                                    <li key={item.title}>
                                        <NavigationMenuLink href={item.url} className="flex flex-col md:flex-row items-center gap-2">
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
                <SpecialIcon name="logo" className="size-15" />
                <p className="text-center text-xs text-gray-500">Developed by Nicolás Olivares <a href="https://github.com/neolivaresgonzalez">github.com/neolivaresgonzalez</a></p>
            </div>



            <div id="footer-navbar-scroll-indicator" className="flex items-center justify-center mt-auto pt-8 pb-8 shrink-0">
                <SectionScrollDownIndicator enabled={props.scrollDownIndicator} nextSectionId={props.nextSectionId} />
            </div>
        </div >
    )
}