import React from 'react';
import { ArrowLeft } from "lucide-react";
import { ProgressBar, UpdateBanner } from '@/components/ProgressElements';

interface V2ConceptContentProps {
  onBackClick?: () => void;
}

const V2ConceptContent: React.FC<V2ConceptContentProps> = ({ onBackClick }) => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-white flex items-center justify-between px-4">
        <span className="text-xs font-medium">8:40 PM</span>
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
        <h2 className="font-bold text-lg">Alternate Options</h2>
      </div>
      
      {/* Progress bar */}
      <ProgressBar activeSteps={3} nextStep={4} />
      
      {/* Delay Banner */}
      <UpdateBanner 
        title="Significant Delay" 
        message="Your order is delayed by 45 minutes. Consider these options:" 
        severe={true}
      />
      
      {/* ETA */}
      <div className="p-4 border-b">
        <div className="text-sm text-gray-600">Estimated Delivery</div>
        <div className="text-xl font-semibold">9:15 PM - 9:25 PM</div>
      </div>
      
      {/* Alternative options */}
      <div className="px-4 py-4">
        <div className="mb-4 bg-white border border-gray-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">Switch to Nearby Restaurant</div>
            <div className="text-xs text-green-600 font-medium">25 min faster</div>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            We found a similar restaurant nearby that can deliver sooner.
          </p>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-md mr-3 overflow-hidden">
                <img src="/burger2.jpg" alt="Burger Joint" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium">Burger Joint</div>
                <div className="text-xs text-gray-500">0.8 miles away • 4.6 ★</div>
              </div>
            </div>
            <button className="bg-doordash-blue text-white text-xs font-medium py-1.5 px-3 rounded-full">
              Switch
            </button>
          </div>
          <div className="text-xs text-gray-500">No cancellation fee • Full refund on original order</div>
        </div>
      </div>
      
      {/* Home indicator */}
      <div className="mt-auto h-5 bg-white flex justify-center items-center">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default V2ConceptContent;
