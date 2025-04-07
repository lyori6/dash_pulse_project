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
        
        {/* Order Summary */}
        <div className="p-4 border-t">
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
        
        {/* Dasher info */}
        <div className="px-4 pb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Your Dasher</h3>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500 font-bold">
                JD
              </div>
              <div>
                <div className="font-medium">John D.</div>
                <div className="text-xs text-gray-500">4.9 ★ • 2,354 deliveries</div>
              </div>
            </div>
            <div className="flex mt-3 space-x-2">
              <button className="flex-1 bg-gray-100 py-2 rounded-full text-sm font-medium flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </button>
              <button className="flex-1 bg-gray-100 py-2 rounded-full text-sm font-medium flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Text
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
    </div>
  );
};

export default SignificantDelayContent;
