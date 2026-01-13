import { Button } from "@/components/ui/shadcn-ui/button"
import { Loader2, CheckCircle2, XCircle, CreditCard } from "lucide-react"
import { useEffect, useState } from "react"

interface ExecutionScreenProps {
    status: 'CONFIRMED' | 'EXECUTING' | 'WITHDRAWAL_PENDING' | 'COMPLETED' | 'FAILED';
    onFinish: () => void;
    onRetract?: () => void;
    processingMessage?: string;
    subMessage?: string;
}

export function ExecutionScreen({ status, onFinish, onRetract, processingMessage = "Processing request...", subMessage = "Please do not remove your card" }: ExecutionScreenProps) {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (status === 'WITHDRAWAL_PENDING') {
            setTimeLeft(30);
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        if (onRetract) onRetract();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [status, onRetract]);

    if (status === 'FAILED') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-gray-900 p-8 text-center bg-white">
                <div className="p-6 rounded-full bg-red-100">
                    <XCircle className="w-16 h-16 text-red-600" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Operation Failed</h2>
                    <p className="text-gray-500">Something went wrong. Please try again.</p>
                </div>
                <Button variant="outline" className="mt-4 border-gray-300 text-gray-700 hover:bg-gray-100" onClick={onFinish}>
                    Close
                </Button>
            </div>
        )
    }

    if (status === 'CONFIRMED') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-900 bg-white">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <h2 className="text-xl font-bold">Initiating...</h2>
            </div>
        )
    }

    if (status === 'EXECUTING') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-900 bg-white p-8 text-center">
                <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-100"></div>
                    <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <CreditCard className="w-10 h-10 text-gray-300 animate-pulse" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{processingMessage}</h2>
                <p className="text-gray-500">{subMessage}</p>
            </div>
        )
    }

    if (status === 'WITHDRAWAL_PENDING') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-gray-900 p-8 text-center bg-white animate-in zoom-in duration-300">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-yellow-100 flex items-center justify-center animate-pulse">
                        <CreditCard className="w-16 h-16 text-yellow-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        ACTION REQUIRED
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Withdraw Your Card</h2>
                    <p className="text-red-500 font-medium">Please remove your card immediately.</p>
                    <p className="text-sm text-gray-500 font-mono bg-gray-100 py-1 px-3 rounded-full inline-block">
                        Retraction in {timeLeft}s
                    </p>
                </div>
                <Button className="mt-8 w-full h-12 text-lg bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-xl transition-all" onClick={onFinish}>
                    Simulate Card Removal
                </Button>
            </div>
        )
    }

    if (status === 'COMPLETED') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-gray-900 p-8 text-center bg-white">
                <div className="p-6 rounded-full bg-green-100">
                    <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Success!</h2>
                    <p className="text-gray-500">Your operation has been completed successfully.</p>
                </div>
                <Button className="mt-4 w-full" onClick={onFinish}>
                    Done
                </Button>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-gray-900 p-8 text-center bg-white">
            <div className="relative">
                <div className="w-24 h-24 border-4 border-gray-100 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary animate-pulse" />
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                    {status === 'CONFIRMED' ? 'Processing...' : 'Executing...'}
                </h2>
                <p className="text-gray-500">Please do not remove your card</p>
            </div>
        </div>
    )
}
