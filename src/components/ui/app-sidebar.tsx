import { Home, User, Code, Mail, Star } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items mapping to home sections
const homeItems = [
    {
        title: "Home",
        url: "#hero",
        icon: Home,
    },
    {
        title: "About",
        url: "#about",
        icon: User,
    },
    {
        title: "Skills",
        url: "#skills",
        icon: Code,
    },
    {
        title: "Featured Projects",
        url: "#featured-projects",
        icon: Star,
    },
    {
        title: "Contact",
        url: "#contact",
        icon: Mail,
    },
]

// Menu items mapping to portfolio routes (feautured projects, professionals, personal, hobbies)
// TODO: Add portfolio routes to project search component with filtered results
const portfolioItems = [
    {
        title: "Featured Projects",
        url: "#featured-projects",
        icon: Star,
    },
    {
        title: "Professionals",
        url: "#professionals",
        icon: User,
    },
    {
        title: "Personal",
        url: "#personal",
        icon: Code,
    },
    {
        title: "Hobbies",
        url: "#hobbies",
        icon: Star,
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Home</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {homeItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {portfolioItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}