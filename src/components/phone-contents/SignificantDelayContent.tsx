import React, { useState } from 'react';
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';
import DeliveryMap from '../DeliveryMap';
import { X } from 'lucide-react';

const SignificantDelayContent: React.FC = () => {
  const [showCancellationModal, setShowCancellationModal] = useState(false);
  
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col relative">
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
            <button 
              className="flex-1 bg-doordash-red text-white py-2 rounded-full text-sm font-medium"
              onClick={() => setShowCancellationModal(true)}
            >
              View Options
            </button>
          </div>
        </div>
      </div>
      
      {/* Cancellation Policy Modal */}
      {showCancellationModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-5 w-[85%] max-w-xs animate-scaleIn">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Order Cancellation</h3>
              <button 
                onClick={() => setShowCancellationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            
            <p className="text-sm text-gray-700 mb-4">
              Unfortunately, the restaurant has already started preparing your order, so we won't be able to issue a full refund if you cancel at this time.
            </p>
            
            <div className="flex flex-col gap-3">
              <button className="w-full bg-white border border-gray-200 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                View Our Full Cancellation Policy
              </button>
              
              <button 
                onClick={() => setShowCancellationModal(false)}
                className="w-full bg-gray-100 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignificantDelayContent;
