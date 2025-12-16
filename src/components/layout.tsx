import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/shadcn-ui/sidebar"
import { AppSidebar } from "@/components/ui/modules/app-sidebar"
import { SpecialIcon } from "@/lib/icons"
import { HashLink } from "react-router-hash-link"

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset className="min-w-0">
                <header className="sticky max-w-full top-0 z-10 flex h-12 max-h-12 shrink-0 items-center gap-2 border-b bg-background px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="flex items-center gap-2">
                        <h1 className="text-lg font-semibold">Nicolás Olivares</h1>
                    </div>
                    <div className="flex items-center flex-1 justify-end">
                        <HashLink to="/"><SpecialIcon name="logo" className="size-16 p-2" /></HashLink>
                    </div>
                </header>
                <main className="flex flex-col">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}