import { HomeIcon } from "@/components/ui/icons/home"
import { UserIcon } from "@/components/ui/icons/user"
import { FolderCodeIcon } from "@/components/ui/icons/folder-code"
import { SparklesIcon } from "@/components/ui/icons/sparkles"
import { AtSignIcon } from "@/components/ui/icons/at-sign"
import { BlocksIcon } from "@/components/ui/icons/blocks"
import { SearchIcon } from "@/components/ui/icons/search"
import { ClockIcon } from "@/components/ui/icons/clock"
// import { CoffeeIcon } from "@/components/ui/icons/coffee"
// import { RocketIcon } from "@/components/ui/icons/rocket"
// import { HeartIcon } from "@/components/ui/icons/heart"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/shadcn-ui/sidebar"
import { HashLink } from 'react-router-hash-link';


type MenuItem = {
    title: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
}


// Menu items mapping to home sections
export const homeItems: MenuItem[] = [
    {
        title: "Home",
        url: "/#hero",
        icon: HomeIcon,
    },
    {
        title: "About",
        url: "/#about",
        icon: UserIcon,
    },
    {
        title: "Experience",
        url: "/#experience",
        icon: ClockIcon,
    },
    {
        title: "Skills",
        url: "/#skills",
        icon: FolderCodeIcon,
    },
    {
        title: "Featured Projects",
        url: "/#featured-projects",
        icon: SparklesIcon,
    },
    {
        title: "Certifications",
        url: "/#certifications",
        icon: BlocksIcon,
    },
    {
        title: "Contact",
        url: "/#contact",
        icon: AtSignIcon,
    },
]



// Menu items mapping to portfolio routes (feautured projects, professionals, personal, hobbies)
// TODO:When project search component is implemented, add it to the menu items routing to filtered results
export const portfolioItems: MenuItem[] = [
    {
        title: "Explore Projects",
        url: "/projects",
        icon: SearchIcon,
    },
    // {
    //     title: "Featured Projects",
    //     url: "#featured-projects",
    //     icon: SparklesIcon,
    // },
    // {
    //     title: "Professionals",
    //     url: "#professionals",
    //     icon: CoffeeIcon,
    // },
    // {
    //     title: "Personal & Hobbies",
    //     url: "#personal",
    //     icon: RocketIcon,
    // },
    // {
    //     title: "Volunteer",
    //     url: "#volunteer",
    //     icon: HeartIcon,
    // }
]

export function AppSidebar() {
    const { setOpenMobile, isMobile } = useSidebar();

    const handleLinkClick = () => {
        if (isMobile) {
            setOpenMobile(false);
        }
    }

    return (
        <Sidebar className="border-none">
            {/* <SidebarContent className="bg-linear-to-r from-orange-200 via-orange-100 to-background"> */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Home</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {homeItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <HashLink smooth to={item.url} onClick={handleLinkClick}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </HashLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {
                    portfolioItems.length > 0 && (
                        <SidebarGroup>
                            <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {portfolioItems.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <HashLink smooth to={item.url} onClick={handleLinkClick}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </HashLink>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    )
                }
            </SidebarContent>
        </Sidebar>
    )
}