import React from 'react';
import { ProgressBar } from '@/components/ProgressElements';

const NormalStateContent: React.FC = () => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">7:50 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="font-bold text-lg">Order Details</h2>
      </div>
      
      {/* Progress bar */}
      <ProgressBar activeSteps={2} nextStep={3} />
      
      {/* ETA */}
      <div className="p-4 border-b">
        <div className="text-sm text-gray-600">Estimated Delivery</div>
        <div className="text-xl font-semibold">8:10 PM - 8:20 PM</div>
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

export default NormalStateContent;
