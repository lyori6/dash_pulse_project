import React from 'react';
import { cn } from '@/lib/utils';
import { Phone, MapPin, Clock, ChevronRight, Info, MessageSquare, Phone as PhoneIcon } from 'lucide-react';
import NormalStateContent from './phone-contents/NormalStateContent';
import MinorDelayContent from './phone-contents/MinorDelayContent';
import SignificantDelayContent from './phone-contents/SignificantDelayContent';
import HelpButtonContent from './phone-contents/HelpButtonContent';

interface UpdateBanner {
  title: string;
  message: string;
  severe?: boolean;
  helpButton?: boolean;
}

interface MobileMockupProps {
  children?: React.ReactNode;
  time?: string;
  title?: string;
  description?: string;
  activeSteps?: number;
  updateBanner?: UpdateBanner;
  eta?: string;
  isPostOrder?: boolean;
  onHelpClick?: () => void;
}

const MobileMockup: React.FC<MobileMockupProps> = ({ 
  children, 
  time = "9:41", 
  title = "Order Details",
  description,
  activeSteps = 2,
  updateBanner,
  eta = "10:15 PM - 10:25 PM",
  isPostOrder = false,
  onHelpClick
}) => {
  return (
    <div className="relative w-full max-w-[375px] mx-auto">
      {/* Phone Frame */}
      <div className="relative border-[14px] border-black rounded-[40px] overflow-hidden shadow-xl bg-white">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>
        
        {/* Status Bar */}
        <div className="bg-white px-4 py-2 flex justify-between items-center">
          <div className="text-xs font-semibold">{time}</div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="black"/>
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="black"/>
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="black"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* App Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className="mr-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-base font-semibold">{title}</div>
            <div className="ml-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="h-[600px] overflow-y-auto bg-gray-50">
          {/* Update Banner */}
          {updateBanner && (
            <div className={cn(
              "p-4 text-sm",
              updateBanner.severe ? "bg-red-50" : "bg-blue-50"
            )}>
              <div className="font-semibold mb-1 flex items-center">
                <Info size={16} className={cn(
                  "mr-1",
                  updateBanner.severe ? "text-red-600" : "text-blue-600"
                )} />
                <span className={cn(
                  updateBanner.severe ? "text-red-600" : "text-blue-600"
                )}>
                  {updateBanner.title}
                </span>
              </div>
              <div className="text-gray-700 mb-2">{updateBanner.message}</div>
              {updateBanner.helpButton && (
                <button 
                  className="bg-white border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={onHelpClick}
                >
                  Need Help?
                </button>
              )}
            </div>
          )}
          
          {/* Order Progress */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="text-base font-semibold">Order Progress</div>
              <div className="text-sm text-gray-500">ETA: {eta}</div>
            </div>
            
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                  activeSteps >= 1 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                )}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-xs text-center">Order<br/>Confirmed</div>
              </div>
              <div className={cn(
                "flex-1 h-1 mx-1",
                activeSteps >= 2 ? "bg-green-500" : "bg-gray-200"
              )}></div>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                  activeSteps >= 2 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                )}>
                  {activeSteps >= 2 ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>2</span>
                  )}
                </div>
                <div className="text-xs text-center">Preparing<br/>Order</div>
              </div>
              <div className={cn(
                "flex-1 h-1 mx-1",
                activeSteps >= 3 ? "bg-green-500" : "bg-gray-200"
              )}></div>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                  activeSteps >= 3 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                )}>
                  {activeSteps >= 3 ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>3</span>
                  )}
                </div>
                <div className="text-xs text-center">On the<br/>Way</div>
              </div>
              <div className={cn(
                "flex-1 h-1 mx-1",
                activeSteps >= 4 ? "bg-green-500" : "bg-gray-200"
              )}></div>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                  activeSteps >= 4 ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                )}>
                  {activeSteps >= 4 ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span>4</span>
                  )}
                </div>
                <div className="text-xs text-center">Delivered</div>
              </div>
            </div>
          </div>
          
          {/* Delivery Details */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="text-base font-semibold mb-3">Delivery Details</div>
            <div className="flex items-start mb-3">
              <MapPin size={18} className="text-gray-500 mr-2 mt-0.5" />
              <div>
                <div className="text-sm font-medium">123 Main Street, Apt 4B</div>
                <div className="text-xs text-gray-500">San Francisco, CA 94103</div>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="text-gray-500 mr-2" />
              <div className="text-sm">Estimated delivery: {eta}</div>
            </div>
          </div>
          
          {/* Your Dasher Section */}
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="text-base font-semibold mb-3">Your Dasher</div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dasher" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="text-sm font-medium mr-1">Michael R.</div>
                  <div className="flex items-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#FFD700" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs ml-0.5">4.9</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-2">Dasher for 2 years</div>
                <div className="flex space-x-2">
                  <button className="flex items-center justify-center bg-doordash-red text-white rounded-full w-[45%] py-1.5 text-xs font-medium">
                    <PhoneIcon size={14} className="mr-1" />
                    Call
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 text-gray-700 rounded-full w-[45%] py-1.5 text-xs font-medium">
                    <MessageSquare size={14} className="mr-1" />
                    Text
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Render children or default content based on updateBanner */}
          {children ? (
            <div className="bg-white">{children}</div>
          ) : (
            <div className="bg-white p-4">
              {updateBanner ? (
                updateBanner.severe ? (
                  updateBanner.helpButton ? (
                    <HelpButtonContent />
                  ) : (
                    <SignificantDelayContent />
                  )
                ) : (
                  <MinorDelayContent />
                )
              ) : (
                <NormalStateContent />
              )}
            </div>
          )}
          
          {/* Add some padding at the bottom */}
          <div className="h-8"></div>
        </div>
      </div>
      
      {/* Description */}
      {description && (
        <div className="mt-4 text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
          {description}
        </div>
      )}
    </div>
  );
};

export default MobileMockup;
