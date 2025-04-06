import React from 'react';
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';
import { Loader } from 'lucide-react';
import DeliveryMap from '../DeliveryMap';

const OrderConfirmedContent: React.FC = () => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar - Fixed */}
      <div className="h-6 bg-white flex items-center justify-between px-4 sticky top-0 z-10">
        <span className="text-xs font-medium">7:45 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header - Fixed */}
      <div className="p-4 border-b sticky top-6 bg-white z-10">
        <h2 className="font-bold text-lg">Order Confirmed</h2>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Delivery Map */}
        <div className="px-4 pt-4">
          <DeliveryMap className="h-[140px] w-full rounded-lg mb-4" />
        </div>
        
        {/* Progress bar */}
        <ProgressBar activeSteps={1} nextStep={2} />
        
        {/* ETA */}
        <div className="p-4 border-b">
          <div className="text-sm text-gray-600">Estimated Delivery</div>
          <div className="flex items-center">
            <Loader className="w-4 h-4 mr-2 animate-spin text-doordash-red" />
            <span className="text-base font-medium">Calculating...</span>
          </div>
        </div>
        
        {/* Restaurant info */}
        <div className="px-4 py-3 border-b">
          <div className="text-base font-semibold">Tasty Burger</div>
          <div className="text-sm text-gray-600">Order #DD-42398 • 2.4 miles away</div>
        </div>
        
        {/* Update banner */}
        <UpdateBanner 
          message="Your order has been confirmed! The restaurant is preparing your food."
          time="Just now"
        />
        
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
          
          {/* Additional content to demonstrate scrolling */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Delivery Instructions</h3>
            <p className="text-sm text-gray-600">Please leave at the front door. Thank you!</p>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Payment Method</h3>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-blue-600 text-sm">💳</span>
              </div>
              <div className="text-sm">
                <div>Visa •••• 4242</div>
                <div className="text-xs text-gray-500">Expires 12/25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedContent;
