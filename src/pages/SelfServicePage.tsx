import { SectionTitle } from "@/components/ui/modules/section-title"
import { Button } from "@/components/ui/shadcn-ui/button"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Label } from "@/components/ui/shadcn-ui/label"
import { Palette, Image, Type, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { useState, useEffect } from "react"

const STATUSES = [
    'IDLE',
    'IDENTITY_PENDING',
    'IDENTITY_VERIFIED',
    'PRODUCT_PENDING',
    'PRODUCT_SELECTED',
    'CONFIRMED',
    'EXECUTING',
    'COMPLETED',
    'FAILED'
] as const;

export function SelfServicePage() {
    const [selectedFlow, setSelectedFlow] = useState<string | null>('issue-card');
    const [selectedBackend, setSelectedBackend] = useState<string | null>('dotnet');
    const [flowStatus, setFlowStatus] = useState<typeof STATUSES[number]>('IDLE');
    const [isPortrait, setIsPortrait] = useState(true);

    // Reset flow when config changes
    useEffect(() => {
        setFlowStatus('IDLE');
    }, [selectedFlow, selectedBackend]);

    return (
        <div id="self-service-section" className="container mx-auto py-8 px-4 min-h-[calc(100vh-4rem)] flex flex-col gap-8">
            <SectionTitle title="Self service demo" subtitle="Feel fee to explore the" />

            <div id="self-service-content-container" className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                {/* LEFT COLUMN: CONTROLS */}
                <div id="self-service-menu" className="flex flex-col gap-8 w-full lg:w-1/4 min-w-[300px]">

                    {/* Self service flow */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-right font-medium text-lg">Self service flow</h3>
                        <div className="flex flex-col gap-3">
                            <Button
                                variant={selectedFlow === 'issue-card' ? "default" : "outline"}
                                className={`w-full ${selectedFlow === 'issue-card' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedFlow('issue-card')}
                            >
                                Issue / Re Issue Card
                            </Button>
                            <Button
                                variant={selectedFlow === 'change-pin' ? "default" : "outline"}
                                className={`w-full ${selectedFlow === 'change-pin' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedFlow('change-pin')}
                            >
                                Change PIN
                            </Button>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-right font-medium text-lg">Backend</h3>
                        <div className="flex flex-col gap-3">
                            <Button
                                variant={selectedBackend === 'dotnet' ? "default" : "outline"}
                                className={`w-full ${selectedBackend === 'dotnet' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedBackend('dotnet')}
                            >
                                c# / netcore
                            </Button>
                            <Button
                                variant={selectedBackend === 'express' ? "default" : "outline"}
                                className={`w-full ${selectedBackend === 'express' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedBackend('express')}
                            >
                                javascript / express
                            </Button>
                            <Button
                                variant={selectedBackend === 'fastapi' ? "default" : "outline"}
                                className={`w-full ${selectedBackend === 'fastapi' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedBackend('fastapi')}
                            >
                                python / fastAPI
                            </Button>
                            <Button
                                variant={selectedBackend === 'flask' ? "default" : "outline"}
                                className={`w-full ${selectedBackend === 'flask' ? "" : "border-dashed border-primary/50 text-primary hover:text-primary hover:border-primary"}`}
                                onClick={() => setSelectedBackend('flask')}
                            >
                                python / flask
                            </Button>
                        </div>
                    </div>

                    {/* Style */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-right font-medium text-lg">Style</h3>

                        {/* Pick a color */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Palette className="w-4 h-4" />
                                <Label>Pick a color</Label>
                            </div>
                            <div className="flex items-center justify-between">
                                <Button size="icon" variant="outline" className="h-8 w-8">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="font-medium">Orange</span>
                                <Button size="icon" variant="outline" className="h-8 w-8">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <div className="h-6 w-6 rounded bg-orange-500 ml-2"></div>
                            </div>
                        </div>

                        {/* Insert logo URL */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Image className="w-4 h-4" />
                                <Label htmlFor="logo-url">Insert logo URL</Label>
                            </div>
                            <Input id="logo-url" placeholder="https://image.url...." />
                        </div>

                        {/* Brand name */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Type className="w-4 h-4" />
                                <Label htmlFor="brand-name">Brand name</Label>
                            </div>
                            <Input id="brand-name" placeholder="Bank of life..." />
                        </div>
                    </div>
                </div>

                {/* CENTRE COLUMN: DEMO */}
                <div className="flex flex-col gap-2 items-center w-full max-w-[450px]">
                    <div className="w-full flex justify-end">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsPortrait(!isPortrait)}
                            title="Rotate Screen"
                        >
                            <RotateCcw className="w-4 h-4" />
                        </Button>
                    </div>
                    <div
                        id="self-service-content"
                        className={`bg-[#1a1f2e] rounded-sm shadow-inner w-full relative transition-all duration-300 ${isPortrait ? 'aspect-9/16' : 'aspect-video'}`}
                    >
                        {/* Kiosk Screen content would go here */}
                    </div>
                </div>

                {/* RIGHT COLUMN: STATUS */}
                <div id="self-service-status" className="flex flex-col gap-8 w-full lg:w-1/4 min-w-[200px]">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-lg">Flow Status</h3>

                        {/* Status List */}
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            {STATUSES.map((status) => {
                                const isActive = flowStatus === status;
                                return (
                                    <div
                                        key={status}
                                        className={`flex items-center gap-2 ${isActive ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400'}`}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                                        {status}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-lg">Session Id</h3>
                        <div className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                            aaa92922ka
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-lg">Idle Time</h3>
                        <div className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                            00 min 30 sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}