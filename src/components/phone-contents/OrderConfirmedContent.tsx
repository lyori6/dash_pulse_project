import React from 'react';
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';
import { Loader } from 'lucide-react';

const OrderConfirmedContent: React.FC = () => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">7:35 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">Order Confirmed</h2>
      </div>
      
      {/* Progress bar */}
      <ProgressBar activeSteps={1} nextStep={2} />
      
      {/* Confirmation message */}
      <UpdateBanner 
        title="Order Confirmed" 
        message="Your order has been confirmed and is being prepared. Your Dasher will pick it up soon."
        backgroundColor="bg-green-50"
        borderColor="border-green-500"
        textColorTitle="text-green-800"
        textColorMessage="text-green-700"
      />
      
      {/* ETA - Loading State */}
      <div className="p-4 border-b">
        <div className="text-sm text-gray-600">Estimated Delivery</div>
        <div className="flex items-center mt-1">
          <div className="animate-spin mr-2">
            <Loader size={16} className="text-doordash-red" />
          </div>
          <div className="text-sm text-gray-500">Calculating delivery time...</div>
        </div>
      </div>
      
      {/* Restaurant info */}
      <div className="px-4 py-3 border-b">
        <div className="text-base font-semibold">Tasty Burger</div>
        <div className="text-sm text-gray-600">Order #DD-42398 • 2.4 miles away</div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="text-base font-semibold mb-3">Order Summary</div>
        <div className="flex justify-between py-2 border-b border-gray-100 text-sm">
          <div>1x Cheeseburger</div>
          <div>$8.99</div>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100 text-sm">
          <div>1x Fries (Large)</div>
          <div>$3.99</div>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-100 text-sm">
          <div>1x Milkshake</div>
          <div>$4.99</div>
        </div>
        <div className="flex justify-between py-3 font-medium">
          <div>Subtotal</div>
          <div>$17.97</div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedContent;
