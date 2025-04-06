import React, { useState } from 'react';
import MobileCheckout from '@/components/MobileCheckout';
import { Loader } from "lucide-react";

interface CheckoutContentProps {
  onPlaceOrder?: () => void;
}

const CheckoutContent: React.FC<CheckoutContentProps> = ({ onPlaceOrder = () => {} }) => {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  
  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      setIsPlacingOrder(false);
      onPlaceOrder();
    }, 1500);
  };
  
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">7:30 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <MobileCheckout onPlaceOrder={handlePlaceOrder} />
      </div>
      
      {/* Loading overlay */}
      {isPlacingOrder && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 z-50">
          <Loader className="h-10 w-10 text-white animate-spin" />
          <p className="text-white font-medium">Placing Order...</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutContent;
