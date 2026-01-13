import { CreditCard, MousePointerClick } from "lucide-react"

interface IdleScreenProps {
    onStart: () => void;
}

export function IdleScreen({ onStart }: IdleScreenProps) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
            <div className="mb-8 relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <CreditCard className="w-12 h-12 text-primary" />
                    </div>
                </div>
            </div>

            <div className="space-y-4 max-w-sm">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Welcome</h1>
                <p className="text-gray-500 text-lg">Tap anywhere to start issuing your card</p>
            </div>

            <div className="absolute bottom-12 animate-bounce">
                <MousePointerClick className="w-8 h-8 text-gray-400" />
            </div>

            {/* Tap overlay */}
            <div className="absolute inset-0 cursor-pointer z-10" onClick={onStart} />
        </div>
    )
}
