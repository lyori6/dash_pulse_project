import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ArrowLeft, Clock, AlertCircle } from "lucide-react";

interface PostDeliveryContentProps {
  onBackClick?: () => void;
}

const PostDeliveryContent: React.FC<PostDeliveryContentProps> = ({ onBackClick }) => {
  const [dasherRating, setDasherRating] = useState(0);
  const [hoverDasherRating, setHoverDasherRating] = useState(0);
  
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
        <h2 className="font-bold text-lg">Delivery Complete</h2>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <div className="flex justify-center my-6">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-2xl">
              ✓
            </div>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-base font-medium">Your order has been delivered!</div>
            <div className="text-sm text-gray-600">9:05 PM • Dasher: Michael S.</div>
          </div>
          
          {/* DashPulse Activity Notification */}
          <div className="mb-6 bg-blue-50 rounded-lg p-3 border border-blue-100">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Clock className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-800 mb-1">DashPulse Active</div>
                <div className="text-xs text-blue-700">
                  DashPulse identified a slight 10-minute delay in your order and proactively updated your delivery time.
                </div>
              </div>
            </div>
          </div>
          
          <div className="py-4 border-t border-b border-gray-100">
            <div className="text-base font-semibold text-center mb-3">How was your experience?</div>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={`dasher-${star}`}
                  className="focus:outline-none transition-transform"
                  onMouseEnter={() => setHoverDasherRating(star)}
                  onMouseLeave={() => setHoverDasherRating(0)}
                  onClick={() => setDasherRating(star)}
                >
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill={star <= (hoverDasherRating || dasherRating) ? "#FFD700" : "none"} 
                    stroke={star <= (hoverDasherRating || dasherRating) ? "#FFD700" : "#D1D5DB"}
                    strokeWidth="2"
                    className={cn(
                      "transition-all duration-150",
                      star <= (hoverDasherRating || dasherRating) ? "scale-110" : "scale-100"
                    )}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
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
      </div>
    </div>
  );
};

export default PostDeliveryContent;
