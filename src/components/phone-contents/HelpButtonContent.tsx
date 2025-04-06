import React, { useState } from 'react';
import { ArrowLeft, HelpCircle } from "lucide-react";
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';

interface HelpButtonContentProps {
  onBackClick?: () => void;
}

const HelpButtonContent: React.FC<HelpButtonContentProps> = ({ onBackClick }) => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col relative">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">8:30 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs">📶</span>
          <span className="text-xs">🔋</span>
          <span className="text-xs">📍</span>
        </div>
      </div>
      
      {/* Header with back button */}
      <div className="flex items-center p-4 border-b">
        <button 
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3"
          onClick={onBackClick}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h2 className="font-bold text-lg">Order Details</h2>
      </div>
      
      {/* Progress bar */}
      <ProgressBar activeSteps={1} nextStep={2} />
      
      {/* Delay Banner */}
      <UpdateBanner 
        title="Delivery Delay" 
        message="Unexpected traffic reported on route. Apologies for the delay. New ETA: 9:05 PM - 9:15 PM." 
        severe={true}
        helpButton={true}
        onHelpClick={() => setShowHelpModal(true)}
      />
      
      {/* ETA */}
      <div className="p-4 border-b">
        <div className="text-sm text-gray-600">Estimated Delivery</div>
        <div className="text-xl font-semibold">9:05 PM - 9:15 PM</div>
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
      
      {/* Help modal */}
      {showHelpModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-20">
          <div className="bg-white rounded-xl p-6 w-[85%] max-w-xs relative">
            <div className="text-lg font-semibold mb-3">Sorry about the delay with your order</div>
            <div className="text-sm text-gray-800 mb-4 leading-relaxed">
              We anticipate your order to arrive by 9:05 PM - 9:15 PM.
            </div>
            <button className="w-full bg-doordash-blue text-white text-center py-2.5 rounded-lg font-medium text-sm mb-3 hover:bg-blue-700 transition-colors">
              View Cancellation Policy
            </button>
            <button className="w-full bg-white border border-doordash-blue text-doordash-blue text-center py-2.5 rounded-lg font-medium text-sm mb-3 hover:bg-blue-50 transition-colors">
              Contact Support
            </button>
            <button 
              className="w-full bg-gray-100 text-gray-700 text-center py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
              onClick={() => setShowHelpModal(false)}
            >
              I'll Wait
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButtonContent;
