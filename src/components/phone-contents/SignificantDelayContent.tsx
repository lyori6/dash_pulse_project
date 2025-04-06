import React from 'react';
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';
import DeliveryMap from '../DeliveryMap';

const SignificantDelayContent: React.FC = () => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar - Fixed */}
      <div className="h-6 bg-white flex items-center justify-between px-4 sticky top-0 z-10">
        <span className="text-xs font-medium">8:10 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header - Fixed */}
      <div className="p-4 border-b sticky top-6 bg-white z-10">
        <h2 className="font-bold text-lg">Order Details</h2>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Delivery Map */}
        <div className="px-4 pt-4">
          <DeliveryMap className="h-[140px] w-full rounded-lg mb-4" showLoading={false} />
        </div>
        
        {/* Progress bar */}
        <ProgressBar activeSteps={1} nextStep={2} />
        
        {/* ETA */}
        <div className="p-4 border-b">
          <div className="text-sm text-gray-600">Estimated Delivery</div>
          <div className="text-xl font-semibold">8:40 PM - 8:50 PM</div>
          <div className="text-xs text-red-600 font-medium">Delayed by 30 min</div>
        </div>
        
        {/* Restaurant info */}
        <div className="px-4 py-3 border-b">
          <div className="text-base font-semibold">Tasty Burger</div>
          <div className="text-sm text-gray-600">Order #DD-42398 • 2.4 miles away</div>
        </div>
        
        {/* Update banner */}
        <UpdateBanner 
          message="Your order is significantly delayed due to high restaurant volume. We apologize for the inconvenience."
          time="Just now"
          type="error"
        />
        
        {/* Help options */}
        <div className="p-4 border-t">
          <h3 className="text-sm font-semibold mb-2">Need help with this order?</h3>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-100 py-2 rounded-full text-sm font-medium">
              Contact Support
            </button>
            <button className="flex-1 bg-doordash-red text-white py-2 rounded-full text-sm font-medium">
              View Options
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignificantDelayContent;
