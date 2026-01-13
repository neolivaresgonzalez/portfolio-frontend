import { IdleScreen } from "./screens/idle-screen"
import { IdentityScreen } from "./screens/identity-screen"
import { ProductScreen } from "./screens/product-screen"
import { ExecutionScreen } from "./screens/execution-screen"
import { PinScreen } from "./screens/pin-screen"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface KioskContainerProps {
    status: string;
    onStatusChange: (status: any) => void;
    brandColor: string;
    logoUrl: string;
    brandName: string;
}

export function KioskContainer({ status, onStatusChange, brandColor, logoUrl, brandName }: KioskContainerProps) {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<'reissue' | 'pin-reset' | null>(null);

    // Helper to simulate transitions for the demo
    const handleTransition = (nextStatus: string, delay = 0) => {
        if (delay > 0) {
            setTimeout(() => onStatusChange(nextStatus), delay);
        } else {
            onStatusChange(nextStatus);
        }
    };

    // Idle Timer Logic
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const resetTimer = () => {
            if (status === 'IDLE') return;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                onStatusChange('IDLE');
            }, 30000); // 30 seconds
        };

        const handleUserActivity = () => {
            resetTimer();
        };

        // Initial set
        resetTimer();

        // Listen for user activity
        window.addEventListener('mousemove', handleUserActivity);
        window.addEventListener('click', handleUserActivity);
        window.addEventListener('keydown', handleUserActivity);
        window.addEventListener('touchstart', handleUserActivity);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('mousemove', handleUserActivity);
            window.removeEventListener('click', handleUserActivity);
            window.removeEventListener('keydown', handleUserActivity);
            window.removeEventListener('touchstart', handleUserActivity);
        };
    }, [status, onStatusChange]);

    const renderScreen = () => {
        switch (status) {
            case 'IDLE':
                return <IdleScreen onStart={() => handleTransition('IDENTITY_PENDING')} />;

            case 'IDENTITY_PENDING':
                return <IdentityScreen
                    status={status}
                    onVerify={() => {
                        handleTransition('OTP_PENDING', 500); // Simulate network delay
                    }}
                    onCancel={() => handleTransition('IDLE')}
                />;

            case 'OTP_PENDING':
                return <IdentityScreen
                    status={status as any}
                    onVerify={() => {
                        handleTransition('IDENTITY_VERIFIED');
                        handleTransition('PRODUCT_PENDING', 1500);
                    }}
                    onCancel={() => handleTransition('IDLE')}
                />;

            case 'IDENTITY_VERIFIED':
                return <IdentityScreen status={status} onVerify={() => { }} onCancel={() => { }} />;

            case 'PRODUCT_PENDING':
            case 'PRODUCT_SELECTED':
                return <ProductScreen
                    status={status as any}
                    selectedProductId={selectedProduct}
                    onSelect={(productId) => {
                        setSelectedProduct(productId);
                        handleTransition('PRODUCT_SELECTED');
                    }}
                    onReissue={() => {
                        setSelectedService('reissue');
                        handleTransition('CONFIRMED');
                        handleTransition('EXECUTING', 1500);
                        handleTransition('WITHDRAWAL_PENDING', 4500);
                    }}
                    onPinReset={() => {
                        setSelectedService('pin-reset');
                        handleTransition('PIN_ENTRY');
                    }}
                    onBack={() => handleTransition('PRODUCT_PENDING')}
                />;

            case 'PIN_ENTRY':
                return <PinScreen
                    mode="setup"
                    onConfirm={() => handleTransition('PIN_CONFIRM')}
                    onBack={() => handleTransition('PRODUCT_SELECTED')}
                />;

            case 'PIN_CONFIRM':
                return <PinScreen
                    mode="confirm"
                    onConfirm={() => {
                        handleTransition('CONFIRMED');
                        handleTransition('EXECUTING', 500);
                        handleTransition('COMPLETED', 3500);
                    }}
                    onBack={() => handleTransition('PIN_ENTRY')}
                />;

            case 'WITHDRAWAL_PENDING':
                return <ExecutionScreen
                    status={status as any}
                    onFinish={() => {
                        handleTransition('COMPLETED');
                        handleTransition('IDLE', 3000); // Auto reset after success
                    }}
                    onRetract={() => handleTransition('FAILED')}
                    processingMessage="Please withdraw your card"
                    subMessage="Card will be retracted in 30 seconds"
                />;

            case 'CONFIRMED':
            case 'EXECUTING':
            case 'COMPLETED':
            case 'FAILED':
                const isPinReset = selectedService === 'pin-reset';
                const message = isPinReset
                    ? "Securely updating your PIN..."
                    : "Printing and Embossing Card...";

                const subMessage = isPinReset
                    ? "Please do not remove your card"
                    : "Your card will be dispensed shortly";

                return <ExecutionScreen
                    status={status as any}
                    onFinish={() => handleTransition('IDLE')}
                    processingMessage={message}
                    subMessage={subMessage}
                />;

            default:
                return <div className="text-red-500 p-4">Unknown Status: {status}</div>;
        }
    }

    return (
        <div className="w-full h-full flex-1 flex flex-col bg-white">
            {/* Branding Banner */}
            <div className={cn("w-full p-4 flex items-center gap-3 shrink-0 transition-colors duration-300", brandColor)}>
                {logoUrl ? (
                    <img src={logoUrl} alt="Brand Logo" className="w-8 h-8 object-contain bg-white/20 rounded-md p-0.5" />
                ) : (
                    <div className="w-8 h-8 bg-white/20 rounded-md animate-pulse" />
                )}
                <span className="text-white font-bold text-lg truncate">
                    {brandName || "Brand Name"}
                </span>
            </div>

            {/* Demo Hint Banner */}
            <div className="w-full bg-yellow-500/10 border-b border-yellow-500/20 p-1.5 text-center shrink-0">
                <p className="text-xs font-medium text-yellow-500 uppercase tracking-wide">
                    ⚠ Demo Mode: Accept any input to proceed
                </p>
            </div>

            {/* Screen Content */}
            <div className="flex-1 overflow-hidden relative w-full h-full">
                {renderScreen()}
            </div>
        </div>
    )
}
