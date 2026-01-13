import { Button } from "@/components/ui/shadcn-ui/button"
import { ScrollArea } from "@/components/ui/shadcn-ui/scroll-area"
import { CreditCard, Lock, ArrowRight, RefreshCw } from "lucide-react"

interface ProductScreenProps {
    status: 'PRODUCT_PENDING' | 'PRODUCT_SELECTED';
    onSelect: (product: string) => void;
    onReissue: () => void;
    onPinReset: () => void;
    onBack: () => void;
    selectedProductId?: string | null;
}

const PRODUCTS = [
    { id: 'visa-gold', name: 'Visa Gold', icon: CreditCard, description: 'International credit card', last4: '4242' },
    { id: 'mastercard-black', name: 'Mastercard Black', icon: CreditCard, description: 'Premium benefits', last4: '8899' },
]

export function ProductScreen({ status, onSelect, onReissue, onPinReset, onBack, selectedProductId }: ProductScreenProps) {
    const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);

    if (status === 'PRODUCT_SELECTED') {
        const productIcon = selectedProduct?.icon || CreditCard;
        const Icon = productIcon;

        return (
            <div className="w-full h-full flex flex-col p-8 text-gray-900">
                <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
                    <div className="p-6 rounded-full bg-primary/10">
                        <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">Select Service</h2>
                        <p className="text-gray-500">For your <span className="text-gray-900 font-bold">{selectedProduct?.name || 'Product'}</span></p>
                        {selectedProduct?.last4 && (
                            <p className="text-sm font-mono text-gray-400">•••• {selectedProduct.last4}</p>
                        )}
                    </div>

                    <div className="w-full space-y-3 mt-8">
                        <Button className="w-full h-14 text-lg flex items-center gap-2" onClick={onReissue}>
                            <RefreshCw className="w-5 h-5" />
                            Reissue Card
                        </Button>
                        <Button variant="secondary" className="w-full h-14 text-lg flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900" onClick={onPinReset}>
                            <Lock className="w-5 h-5" />
                            Change PIN
                        </Button>
                        <Button variant="ghost" className="w-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 mt-2" onClick={onBack}>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col bg-white text-gray-900">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold">Select Card</h2>
                <p className="text-sm text-gray-500">Choose a card to manage</p>
            </div>

            <ScrollArea className="flex-1 p-4">
                <div className="space-y-3">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white hover:bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm cursor-pointer transition-colors flex items-center gap-4 group"
                            onClick={() => onSelect(product.id)}
                        >
                            <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                                <product.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="font-medium text-gray-900">{product.name}</h3>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs text-gray-500">{product.description}</p>
                                    {product.last4 && (
                                        <span className="text-xs font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                                            •••• {product.last4}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
