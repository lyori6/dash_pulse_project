import React from 'react';
import { ArrowLeft } from "lucide-react";

interface UpdateLogContentProps {
  onBackClick?: () => void;
}

const UpdateLogContent: React.FC<UpdateLogContentProps> = ({ onBackClick }) => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">9:15 PM</span>
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
        <h2 className="font-bold text-lg">Updates</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <div className="space-y-4">
            {/* Today */}
            <div>
              <div className="text-xs text-gray-500 mb-2">TODAY</div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium flex items-center">
                    Delivery Delay 
                    <div className="flex items-center ml-2 bg-blue-50 px-1.5 py-0.5 rounded">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-pulse"></div>
                      <span className="text-[10px] font-medium text-blue-600">DashPulse</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">7:45 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order will be delayed by approximately 15-20 minutes due to high volume at the restaurant.
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">Order Confirmed</div>
                  <div className="text-xs text-gray-500">7:30 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order has been confirmed. Estimated delivery time: 8:00-8:15 PM.
                </div>
              </div>
            </div>
            
            {/* Yesterday */}
            <div>
              <div className="text-xs text-gray-500 mb-2">YESTERDAY</div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">Delivery Complete</div>
                  <div className="text-xs text-gray-500">8:15 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order has been delivered. Enjoy your meal!
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">Order Confirmed</div>
                  <div className="text-xs text-gray-500">7:45 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order has been confirmed. Estimated delivery time: 8:10-8:20 PM.
                </div>
              </div>
            </div>
            
            {/* Last Week */}
            <div>
              <div className="text-xs text-gray-500 mb-2">LAST WEEK</div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">Delivery Complete</div>
                  <div className="text-xs text-gray-500">Fri, 6:30 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order has been delivered. Enjoy your meal!
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium">Order Confirmed</div>
                  <div className="text-xs text-gray-500">Fri, 6:05 PM</div>
                </div>
                <div className="text-sm text-gray-700">
                  Your order has been confirmed. Estimated delivery time: 6:35-6:50 PM.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLogContent;
