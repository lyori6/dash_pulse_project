import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, X } from "lucide-react";
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';
import DeliveryMap from '../DeliveryMap';

interface HelpButtonContentProps {
  onBackClick?: () => void;
}

const HelpButtonContent: React.FC<HelpButtonContentProps> = ({ onBackClick }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col relative">
      {/* Status bar - Fixed */}
      <div className="h-6 bg-white flex items-center justify-between px-4 sticky top-0 z-10">
        <span className="text-xs font-medium">8:15 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header - Fixed */}
      <div className="p-4 border-b sticky top-6 bg-white z-10 flex items-center">
        {onBackClick && (
          <button 
            onClick={onBackClick}
            className="mr-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={18} />
          </button>
        )}
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
          <div className="text-xl font-semibold">8:45 PM - 8:55 PM</div>
          <div className="text-xs text-red-600 font-medium">Delayed by 35 min</div>
        </div>
        
        {/* Restaurant info */}
        <div className="px-4 py-3 border-b">
          <div className="text-base font-semibold">Tasty Burger</div>
          <div className="text-sm text-gray-600">Order #DD-42398 • 2.4 miles away</div>
        </div>
        
        {/* Update banner */}
        <UpdateBanner 
          message="Your order is significantly delayed due to high restaurant volume."
          time="5 min ago"
          type="error"
        />
        
        {/* Improved Help Button - In red area */}
        <div className="px-4 py-4">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full bg-doordash-red text-white py-3 rounded-full font-medium flex items-center justify-center shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <HelpCircle size={18} className="mr-2" />
            Get Help With This Order
          </button>
        </div>
        
        {/* Order details */}
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
          </div>
        </div>
      </div>
      
      {/* Help Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-5 w-[85%] max-w-xs">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">How can we help?</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            
            <button className="w-full bg-white border border-gray-200 p-3 rounded-lg text-left flex items-center mb-3 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-sm">💬</span>
              </div>
              <div>
                <div className="font-medium">Chat with Support</div>
                <div className="text-xs text-gray-500">Typical response: 2 min</div>
              </div>
            </button>
            
            <button className="w-full bg-white border border-gray-200 p-3 rounded-lg text-left flex items-center mb-3 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-amber-600 text-sm">📋</span>
              </div>
              <div>
                <div className="font-medium">View Cancellation Policy</div>
                <div className="text-xs text-gray-500">Full refund available</div>
              </div>
            </button>
            
            <div className="mt-2 text-center">
              <div className="text-xs text-gray-500 mb-1">Fastest alternative delivery</div>
              <div className="text-sm font-medium text-amber-600 mb-4">Available in 30 minutes</div>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-100 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                I'll Keep Waiting
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButtonContent;
