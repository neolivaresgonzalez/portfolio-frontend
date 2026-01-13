import { Button } from "@/components/ui/shadcn-ui/button"
import { Input } from "@/components/ui/shadcn-ui/input"
import { Label } from "@/components/ui/shadcn-ui/label"
import { CheckCircle2, ShieldCheck, ScanLine } from "lucide-react"

interface IdentityScreenProps {
    status: 'IDENTITY_PENDING' | 'OTP_PENDING' | 'IDENTITY_VERIFIED';
    onVerify: () => void;
    onCancel: () => void;
}

export function IdentityScreen({ status, onVerify, onCancel }: IdentityScreenProps) {
    if (status === 'IDENTITY_VERIFIED') {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-gray-900 animate-in zoom-in duration-300">
                <div className="p-6 rounded-full bg-green-100">
                    <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold">Identity Verified</h2>
                <p className="text-gray-500">Please wait...</p>
            </div>
        )
    }

    if (status === 'OTP_PENDING') {
        return (
            <div className="w-full h-full flex flex-col p-8 text-gray-900 animate-in slide-in-from-right duration-300">
                <div className="flex-1 flex flex-col justify-center gap-8">
                    <div className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">Verification</h2>
                        <p className="text-gray-500">Enter the code sent to your device</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="otp" className="text-gray-700">OTP Code</Label>
                            <Input
                                id="otp"
                                placeholder="000 000"
                                className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 text-center text-lg tracking-widest focus-visible:ring-primary"
                            />
                        </div>
                        <Button className="w-full h-12 text-lg" onClick={onVerify}>
                            Verify Code
                        </Button>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Button variant="ghost" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100" size="sm" onClick={onCancel}>
                        Cancel
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col p-8 text-gray-900 animate-in slide-in-from-right duration-300">
            <div className="flex-1 flex flex-col justify-center gap-8">
                <div className="text-center space-y-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <ScanLine className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Scan Document</h2>
                    <p className="text-gray-500">Place your ID or Passport on the reader</p>
                </div>

                {/* Scanner Visual */}
                <div className="relative w-full aspect-[1.586/1] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden group">
                    {/* Simulated Card */}
                    <div className="w-3/4 h-3/4 bg-white shadow-sm border border-gray-200 rounded flex flex-col p-3 gap-2 opacity-50">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="space-y-1">
                            <div className="w-full h-2 bg-gray-200 rounded px-1"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                        </div>
                        <div className="mt-auto space-y-1 opacity-70">
                            <div className="w-full h-1 bg-gray-200 rounded"></div>
                            <div className="w-full h-1 bg-gray-200 rounded"></div>
                        </div>
                    </div>

                    {/* Scanning Beam */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-1/3 animate-scan-y top-0 border-b-2 border-primary/50"></div>
                </div>

                <div className="space-y-4">
                    <Button className="w-full h-12 text-lg" onClick={onVerify}>
                        Simulate Scan
                    </Button>
                    <p className="text-xs text-center text-gray-500">Supports MRZ, Barcode, and NFC</p>
                </div>
            </div>

            <div className="text-center">
                <Button variant="ghost" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100" size="sm" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}
