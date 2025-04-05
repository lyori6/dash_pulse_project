import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import MapPlaceholder from '@/components/MapPlaceholder';

const progressStyles = `
  .progress-dot {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 4px rgba(226, 232, 240, 0.3);
  }
  
  .progress-dot.active {
    background-color: #E24536;
    box-shadow: 0 0 0 4px rgba(226, 69, 54, 0.2);
  }
  
  .progress-dot.next {
    background-color: #e2e8f0;
    animation: pulse 2s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(226, 69, 54, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(226, 69, 54, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(226, 69, 54, 0);
    }
  }
  
  .progress-line {
    position: absolute;
    height: 3px;
    background-color: #e2e8f0;
    top: 8px;
    left: 0;
    right: 0;
    z-index: 5;
    transition: all 0.5s ease;
  }
  
  .progress-line.active {
    background-color: #E24536;
  }
  
  .progress-line.next {
    background: linear-gradient(90deg, #E24536 0%, #e2e8f0 100%);
    background-size: 200% 100%;
    animation: gradientMove 2s infinite ease-in-out;
  }
  
  @keyframes gradientMove {
    0% {
      background-position: 100% 0;
    }
    50% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  
  .dashpulse-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 12px;
    color: #0066FF;
    font-weight: 500;
    margin-top: 4px;
  }
  
  .dashpulse-pulse {
    width: 8px;
    height: 8px;
    background-color: #0066FF;
    border-radius: 50%;
    animation: dashpulse 2s infinite ease-in-out;
  }
  
  @keyframes dashpulse {
    0% {
      opacity: 0.4;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.4;
      transform: scale(0.8);
    }
  }
  
  .smartphone-mockup {
    width: 320px;
    position: relative;
  }
  
  .smartphone-frame {
    background: white;
    border-radius: 36px;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f1f1;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .smartphone-notch {
    position: absolute;
    width: 150px;
    height: 24px;
    background: #000;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    z-index: 20;
  }
  
  .status-bar {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    background: white;
    position: relative;
    z-index: 10;
    font-size: 14px;
  }
  
  .smartphone-screen {
    height: 580px;
    overflow: hidden;
  }
  
  .smartphone-home-button {
    width: 120px;
    height: 4px;
    background: #e0e0e0;
    border-radius: 4px;
    margin: 8px auto;
  }
  
  .update-banner {
    background-color: #f0f9ff;
    border-left: 4px solid #0ea5e9;
    padding: 12px 16px;
    margin: 12px 16px;
    border-radius: 6px;
    position: relative;
  }
  
  .update-banner.severe {
    background-color: #fff1f2;
    border-left-color: #e11d48;
  }
  
  .help-button {
    position: absolute;
    right: 12px;
    bottom: 12px;
    font-size: 12px;
    color: #0ea5e9;
    font-weight: 500;
  }
`;

interface ProgressDotProps {
  active: boolean;
  label: string;
  isNext?: boolean;
}

const ProgressDot: React.FC<ProgressDotProps> = ({ active, label, isNext = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "progress-dot",
        active && "active",
        isNext && "next"
      )}>
        {isNext && (
          <span className="absolute inset-0 bg-doordash-red/10 rounded-full animate-ping opacity-75"></span>
        )}
      </div>
      <span className={cn(
        "text-xs whitespace-nowrap mt-2 transition-colors duration-300",
        active ? "text-gray-800 font-medium" : "text-gray-500",
        isNext && "text-doordash-red font-medium"
      )}>
        {label}
      </span>
    </div>
  );
};

interface ProgressBarProps {
  activeSteps: number;
  nextStep?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeSteps, nextStep = -1 }) => {
  const steps = ["Ordered", "Preparing", "On the way", "Delivered"];
  
  return (
    <div className="py-8 px-6 bg-white border-b border-gray-100 relative z-10">
      <style dangerouslySetInnerHTML={{ __html: progressStyles }} />
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {index > 0 && (
              <div className={cn(
                "progress-line", 
                index <= activeSteps && "active",
                index === nextStep && "next"
              )} />
            )}
            <ProgressDot 
              active={index <= activeSteps} 
              label={step}
              isNext={nextStep === index} 
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

interface UpdateBannerProps {
  title: string;
  message: string;
  severe?: boolean;
  helpButton?: boolean;
  onHelpClick?: () => void;
}

const UpdateBanner: React.FC<UpdateBannerProps> = ({ 
  title, 
  message, 
  severe = false,
  helpButton = false,
  onHelpClick
}) => {
  return (
    <div className={cn(
      "update-banner",
      severe && "severe"
    )}>
      <div className="flex justify-between items-start">
        <div>
          <div className="font-semibold text-sm mb-1">{title}</div>
          <div className="text-xs">{message}</div>
        </div>
        {helpButton && (
          <button 
            onClick={onHelpClick}
            className="ml-2 px-3 py-1 bg-white border border-doordash-red text-doordash-red text-xs rounded-lg font-medium hover:bg-red-50 transition-colors"
          >
            Help
          </button>
        )}
      </div>
    </div>
  );
};

interface ETADisplayProps {
  time: string;
  calculating?: boolean;
  isPostOrder?: boolean;
  showETA?: boolean;
}

const ETADisplay: React.FC<ETADisplayProps> = ({ time, calculating = false, isPostOrder = true, showETA = true }) => {
  if (!showETA) return null;
  
  return (
    <div className="px-4 py-4 bg-[#f6f8fe] border-b border-gray-100 text-center">
      <div className="text-sm text-gray-600 mb-1">Estimated Delivery</div>
      <div className={cn(
        "font-semibold text-doordash-blue", 
        calculating ? "text-lg" : "text-xl"
      )}>
        {time}
      </div>
      {isPostOrder && (
        <div className="dashpulse-indicator">
          <div className="dashpulse-pulse"></div>
          <span className="text-[#0066FF] font-medium">DashPulse Active</span>
        </div>
      )}
    </div>
  );
};

interface StarRatingProps {
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 mb-4">
      {!isSubmitted ? (
        <>
          <h3 className="font-medium text-base mb-3">How was your delivery experience?</h3>
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="focus:outline-none transition-transform"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleRatingClick(star)}
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill={star <= (hoverRating || rating) ? "#FFD700" : "none"} 
                  stroke={star <= (hoverRating || rating) ? "#FFD700" : "#D1D5DB"}
                  strokeWidth="2"
                  className={cn(
                    "transition-all duration-150",
                    star <= (hoverRating || rating) ? "scale-110" : "scale-100"
                  )}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
          <button 
            className={cn(
              "w-full py-2 rounded-md font-medium transition-colors",
              rating > 0 
                ? "bg-doordash-blue text-white hover:bg-blue-700" 
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            Submit Feedback
          </button>
        </>
      ) : (
        <div className="text-center py-2">
          <div className="text-green-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="font-medium text-base mb-1">Thanks for your feedback!</h3>
          <p className="text-sm text-gray-500">Your rating helps us improve our service.</p>
        </div>
      )}
    </div>
  );
};

interface MobileMockupProps {
  children?: React.ReactNode;
  time?: string;
  title?: string;
  description?: string;
  activeSteps?: number;
  eta?: string;
  calculating?: boolean;
  buttonText?: string;
  updateBanner?: {
    title: string;
    message: string;
    severe?: boolean;
    helpButton?: boolean;
  };
  overlay?: React.ReactNode;
  isPostOrder?: boolean;
  showETA?: boolean;
  showRating?: boolean;
  onHelpClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const MobileMockup: React.FC<MobileMockupProps> = ({ 
  children,
  time = "8:30 PM",
  title = "Order Details",
  description,
  activeSteps = 0,
  eta = "8:30 PM - 8:40 PM",
  calculating = false,
  buttonText = "Live Tracking",
  updateBanner,
  overlay,
  isPostOrder = true,
  showETA = true,
  showRating = false,
  onHelpClick,
  showBackButton = false,
  onBackClick
}) => {
  const [showMap, setShowMap] = useState(false);
  
  const handleTrackClick = () => {
    setShowMap(true);
  };
  
  const handleCloseMap = () => {
    setShowMap(false);
  };
  
  return (
    <div className="relative">
      {description && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
      
      <div className="smartphone-mockup transition-all duration-300 fade-in mx-auto">
        {/* Phone Frame without white border */}
        <div className="smartphone-frame">
          <div className="smartphone-notch"></div>
          
          {/* Status Bar */}
          <div className="status-bar">
            <div className="font-bold">{time}</div>
            <div className="flex gap-2">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="px-4 py-4 bg-white border-b border-gray-100 flex items-center">
            {showBackButton && (
              <button 
                className="mr-3 cursor-pointer"
                onClick={onBackClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
          
          {/* Scrollable Content */}
          <ScrollArea className="smartphone-screen">
            {/* Map Placeholder */}
            <div className="h-[180px] relative">
              <MapPlaceholder />
            </div>
            
            {/* Progress Bar */}
            {activeSteps >= 0 && (
              <ProgressBar activeSteps={activeSteps} nextStep={activeSteps + 1} />
            )}
            
            {/* Update Banner */}
            {updateBanner && (
              <UpdateBanner 
                title={updateBanner.title} 
                message={updateBanner.message} 
                severe={updateBanner.severe} 
                helpButton={updateBanner.helpButton}
                onHelpClick={onHelpClick}
              />
            )}
            
            {/* Restaurant Info */}
            <div className="px-4 py-4 bg-white border-b border-gray-100">
              <div className="text-lg font-semibold mb-1">Tasty Burger</div>
              <div className="text-sm text-gray-600">Order #DD-42398 • 2.4 miles away</div>
            </div>
            
            {/* ETA Display */}
            <ETADisplay time={eta} calculating={calculating} isPostOrder={isPostOrder} showETA={showETA} />
            
            {/* Star Rating (if enabled) */}
            {showRating && (
              <div className="px-4 pt-4">
                <StarRating initialRating={0} />
              </div>
            )}
            
            {/* Track Button */}
            {buttonText && (
              <div 
                className="bg-doordash-blue text-white text-center py-3 px-4 mx-4 my-4 rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors"
                onClick={handleTrackClick}
              >
                {buttonText}
              </div>
            )}
            
            {/* Order Summary or Custom Content */}
            <div className="p-4 bg-white min-h-[200px]">
              {children || (
                <>
                  <div className="font-semibold text-base mb-3">Order Summary</div>
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
                </>
              )}
            </div>
          </ScrollArea>
          
          {/* Phone Home Button */}
          <div className="smartphone-home-button"></div>
        </div>
        
        {/* Modal Overlay - fix overflow issue */}
        {overlay && (
          <div className="absolute inset-0 overflow-hidden rounded-[36px]">
            {overlay}
          </div>
        )}
        
        {/* Map Fullscreen Overlay */}
        {showMap && (
          <div className="absolute inset-0 overflow-hidden rounded-[36px] z-10">
            <div className="absolute inset-0 bg-white">
              {/* Map Header */}
              <div className="flex items-center gap-3 px-4 py-6 border-b border-gray-100">
                <div 
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
                  onClick={handleCloseMap}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l-7-7 7-7"></path>
                  </svg>
                </div>
                <h1 className="text-xl font-semibold text-gray-800">Live Tracking</h1>
              </div>
              
              {/* Fullscreen Map */}
              <div className="h-full">
                <MapPlaceholder onClose={handleCloseMap} isModal={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMockup;
