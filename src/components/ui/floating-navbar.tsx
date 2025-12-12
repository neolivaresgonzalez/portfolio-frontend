import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import profilePicture from "@/assets/profile.jpeg"

export function FloatingNavbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 max-w-64 h-full bg-gradient-to-r from-orange-400 to-white-500">
            <div className="flex flex-col items-start justify-between gap-5">
                <div id="floating-navbar-logo" className="flex flex-col align-center justify-start gap-2 ">
                    <div className="flex flex-col align-center justify-center">
                        <img id="profile-picture" className="rounded-full aspect-square object-cover m-2" src={profilePicture} alt="Profile picture" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p id="profile-name" className="text-2xl font-bold text-center">Nicolás Olivares</p>
                    </div>
                </div>
                <div id="floating-navbar-buttons" className="flex flex-col items-start justify-start ml-2">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start justify-start">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-left text-lg">Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-fit gap-3 p-4 align-left justify-center">
                                        <NavigationMenuLink className="text-md">About</NavigationMenuLink>
                                        <NavigationMenuLink className="text-md">Contact</NavigationMenuLink>
                                        <NavigationMenuLink className="text-md">Featured projects</NavigationMenuLink>
                                        <NavigationMenuLink className="text-md">Skills</NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-left text-lg">
                                    Explore
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-fit gap-3 p-4 align-left justify-start">
                                        <NavigationMenuLink href="/projects?projectType=featured" className="text-md">Featured projects</NavigationMenuLink>
                                        <NavigationMenuLink href="/projects?projectType=employment" className="text-md">Employment projects</NavigationMenuLink>
                                        <NavigationMenuLink href="/projects?projectType=personal" className="text-md">Personal projects</NavigationMenuLink>
                                        <NavigationMenuLink href="/projects?projectType=educational" className="text-md">Educational projects</NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    )
}