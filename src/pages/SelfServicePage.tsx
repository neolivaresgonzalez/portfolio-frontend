import { SectionTitle } from "@/components/ui/modules/section-title"
import { FooterNavbar } from "@/components/ui/modules/footer-navbar"
import { Button } from "@/components/ui/shadcn-ui/button"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Label } from "@/components/ui/shadcn-ui/label"
import { Palette, Image, Type, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/shadcn-ui/tooltip"
import { useState, useEffect } from "react"
import { KioskContainer } from "@/components/ui/modules/self-service/kiosk-container"

const STATUSES = [
    'IDLE',
    'IDENTITY_PENDING',
    'OTP_PENDING',
    'IDENTITY_VERIFIED',
    'PRODUCT_PENDING',
    'PRODUCT_SELECTED',
    'PIN_ENTRY',
    'PIN_CONFIRM',
    'CONFIRMED',
    'EXECUTING',
    'WITHDRAWAL_PENDING',
    'COMPLETED',
    'FAILED'
] as const;

const STATUS_DESCRIPTIONS: Record<typeof STATUSES[number], string> = {
    'IDLE': 'Waiting for user interaction',
    'IDENTITY_PENDING': 'Scanning identity document',
    'OTP_PENDING': 'Verifying one-time password',
    'IDENTITY_VERIFIED': 'Identity verification successful',
    'PRODUCT_PENDING': 'User selecting a card',
    'PRODUCT_SELECTED': 'User confirming service',
    'PIN_ENTRY': 'Entering new PIN',
    'PIN_CONFIRM': 'Confirming new PIN',
    'CONFIRMED': 'Selection confirmed',
    'EXECUTING': 'Processing transaction',
    'WITHDRAWAL_PENDING': 'Please take your card',
    'COMPLETED': 'Flow finished successfully',
    'FAILED': 'An error occurred'
};

export function SelfServicePage() {
    const [flowStatus, setFlowStatus] = useState<typeof STATUSES[number]>('IDLE');
    // Branding State
    const [brandColor, setBrandColor] = useState('bg-orange-500');
    const [brandName, setBrandName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');

    const COLORS = [
        { name: 'Orange', class: 'bg-orange-500' },
        { name: 'Blue', class: 'bg-blue-600' },
        { name: 'Red', class: 'bg-red-600' },
        { name: 'Green', class: 'bg-green-600' },
        { name: 'Purple', class: 'bg-purple-600' },
    ];
    const [colorIndex, setColorIndex] = useState(0);

    const cycleColor = (direction: 'next' | 'prev') => {
        let newIndex = direction === 'next' ? colorIndex + 1 : colorIndex - 1;
        if (newIndex >= COLORS.length) newIndex = 0;
        if (newIndex < 0) newIndex = COLORS.length - 1;
        setColorIndex(newIndex);
        setBrandColor(COLORS[newIndex].class);
    };

    // Reset flow when config changes
    useEffect(() => {
        setFlowStatus('IDLE');
    }, [brandColor, brandName, logoUrl]);

    return (
        <div id="self-service-section" className="container mx-auto py-8 px-4 min-h-[calc(100vh-4rem)] flex flex-col gap-8">
            <SectionTitle title="Self service demo" subtitle="Feel fee to explore the" />

            <div id="self-service-content-container" className="flex flex-col lg:flex-row gap-8 items-start justify-center flex-1">
                {/* LEFT COLUMN: CONTROLS */}
                <div id="self-service-menu" className="flex flex-col gap-8 w-full lg:w-1/4 min-w-[300px]">

                    {/* Style */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-center font-medium text-lg">Branding style</h3>

                        {/* Pick a color */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Palette className="w-4 h-4" />
                                <Label>Pick a color</Label>
                            </div>
                            <div className="flex items-center justify-between">
                                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => cycleColor('prev')}>
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="font-medium w-20 text-center">{COLORS[colorIndex].name}</span>
                                <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => cycleColor('next')}>
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <div className={`h-6 w-6 rounded ml-2 ${brandColor}`}></div>
                            </div>
                        </div>

                        {/* Insert logo URL */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Image className="w-4 h-4" />
                                <Label htmlFor="logo-url">Insert logo URL</Label>
                            </div>
                            <Input
                                id="logo-url"
                                placeholder="https://image.url...."
                                value={logoUrl}
                                onChange={(e) => setLogoUrl(e.target.value)}
                            />
                        </div>

                        {/* Brand name */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Type className="w-4 h-4" />
                                <Label htmlFor="brand-name">Brand name</Label>
                            </div>
                            <Input
                                id="brand-name"
                                placeholder="Bank of life..."
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* CENTRE COLUMN: DEMO */}
                <div className="flex flex-col gap-2 items-center w-full max-w-[450px]">
                    <div
                        id="self-service-content"
                        className="bg-[#1a1f2e] rounded-sm shadow-inner relative transition-all duration-300 border-4 border-gray-800 w-full min-h-[700px] h-auto flex flex-col"
                    >
                        <KioskContainer
                            status={flowStatus}
                            onStatusChange={setFlowStatus}
                            brandColor={brandColor}
                            brandName={brandName}
                            logoUrl={logoUrl}
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: STATUS */}
                <div id="self-service-status" className="flex flex-col gap-8 w-full lg:w-1/4 min-w-[200px]">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-lg">Flow Status</h3>

                        {/* Status List */}
                        <div className="flex flex-col gap-3 text-sm font-medium">
                            {STATUSES.map((status, index) => {
                                const currentIndex = STATUSES.indexOf(flowStatus);
                                const isPassed = index < currentIndex;
                                const isCurrent = index === currentIndex;

                                let dotClass = 'bg-gray-300 dark:bg-gray-600';
                                let textClass = 'text-gray-500 dark:text-gray-400';

                                if (isPassed) {
                                    dotClass = 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]';
                                    textClass = 'text-green-600 dark:text-green-400';
                                } else if (isCurrent) {
                                    dotClass = 'bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]';
                                    textClass = 'text-yellow-600 dark:text-yellow-400';
                                }

                                return (
                                    <div
                                        key={status}
                                        className={`flex items-center gap-2 transition-colors duration-300 ${textClass}`}
                                    >
                                        <div className={`w-3 h-3 rounded-full transition-colors duration-300 shrink-0 ${dotClass}`}></div>
                                        <span className="font-semibold leading-none">{status}</span>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <HelpCircle className="w-3.5 h-3.5 opacity-50 hover:opacity-100 transition-opacity cursor-help" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{STATUS_DESCRIPTIONS[status]}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <FooterNavbar scrollDownIndicator={false} nextSectionId="" />
        </div>
    )
}