import { Lock, Shield } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PinScreenProps {
    mode: 'setup' | 'confirm';
    onConfirm: (pin: string) => void;
    onBack?: () => void;
}

export function PinScreen({ mode, onConfirm, onBack }: PinScreenProps) {
    const [pin, setPin] = useState('');

    const handleNumberClick = (num: string) => {
        if (pin.length < 4) {
            setPin(prev => prev + num);
        }
    };

    const handleDelete = () => {
        setPin(prev => prev.slice(0, -1));
    };

    const isComplete = pin.length === 4;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 pt-12 bg-gray-100 animate-in fade-in duration-300">
            {/* Physical Device Body */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-xl w-full max-w-[340px] border-b-8 border-r-8 border-gray-900 relative">

                {/* Device Branding/Header */}
                <div className="flex justify-between items-center mb-6 text-gray-400 px-2">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gray-500" />
                        <span className="text-xs font-mono tracking-widest uppercase">SECURE PAD</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                </div>

                {/* LCD Screen */}
                <div className="bg-[#2a3b2a] border-4 border-gray-700 rounded-lg p-4 mb-6 shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />
                    <div className="relative z-20 flex flex-col items-center gap-2">
                        <p className="text-green-500/80 font-mono text-sm uppercase tracking-wide">
                            {mode === 'setup' ? 'ENTER NEW PIN' : 'CONFIRM PIN'}
                        </p>
                        <div className="flex gap-3 my-2">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "w-4 h-4 rounded-full transition-all duration-100",
                                        i < pin.length ? "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" : "bg-green-900/30 border border-green-800"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Privacy Shield (Visual) */}
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none rounded-t-3xl" />

                {/* Keypad Grid */}
                <div className="grid grid-cols-4 gap-3">
                    {/* Numbers Column 1-3 */}
                    <div className="col-span-3 grid grid-cols-3 gap-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <button
                                key={num}
                                className="h-14 bg-gray-200 rounded-md shadow-[0_4px_0_rgb(156,163,175)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center text-xl font-bold text-gray-800 group"
                                onClick={() => handleNumberClick(num.toString())}
                            >
                                {num}
                            </button>
                        ))}
                        {/* 0 Row */}
                        <div className="col-span-3 grid grid-cols-3 gap-3">
                            <div className="h-14" /> {/* Empty left */}
                            <button
                                className="h-14 bg-gray-200 rounded-md shadow-[0_4px_0_rgb(156,163,175)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center text-xl font-bold text-gray-800"
                                onClick={() => handleNumberClick('0')}
                            >
                                0
                            </button>
                            <div className="h-14" /> {/* Empty right */}
                        </div>
                    </div>

                    {/* Function Keys Column */}
                    <div className="col-span-1 flex flex-col gap-3">
                        <button
                            className="h-14 bg-red-600 rounded-md shadow-[0_4px_0_rgb(153,27,27)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center text-white font-bold text-xs uppercase"
                            onClick={onBack}
                        >
                            CANCEL
                        </button>
                        <button
                            className="h-14 bg-yellow-500 rounded-md shadow-[0_4px_0_rgb(161,98,7)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center text-black font-bold text-xs uppercase"
                            onClick={handleDelete}
                        >
                            CORR
                        </button>
                        <div className="flex-1" /> {/* Spacer */}
                        <button
                            className={cn(
                                "h-28 bg-green-600 rounded-md shadow-[0_4px_0_rgb(21,128,61)] transition-all flex items-center justify-center text-white font-bold text-xs uppercase",
                                !isComplete ? "opacity-50 cursor-not-allowed" : "active:shadow-none active:translate-y-[4px] cursor-pointer"
                            )}
                            onClick={() => isComplete && onConfirm(pin)}
                            disabled={!isComplete}
                        >
                            ENTER
                        </button>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-gray-400 text-xs font-mono flex items-center gap-2">
                <Lock className="w-3 h-3" />
                End-to-end encrypted input
            </p>
        </div>
    )
}
