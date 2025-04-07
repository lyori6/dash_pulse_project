import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import MapPlaceholder from '@/components/MapPlaceholder';

// Simplified progress styles with minimal animations
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
    box-shadow: 0 0 0 4px rgba(226, 232, 240, 0.3);
  }
  
  .progress-dot.active {
    background-color: #E24536;
    box-shadow: 0 0 0 4px rgba(226, 69, 54, 0.2);
  }
  
  .progress-line {
    position: absolute;
    height: 3px;
    background-color: #e2e8f0;
    top: 8px;
    left: 0;
    right: 0;
    z-index: 5;
  }
  
  .progress-line.active {
    background-color: #E24536;
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
    height: 680px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
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
        {active && (
          <div className="w-2 h-2 bg-white rounded-full"></div>
        )}
      </div>
      <div className="text-xs mt-1 text-gray-600">{label}</div>
    </div>
  );
};

interface ProgressBarProps {
  activeSteps: number;
  nextStep?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeSteps, nextStep = -1 }) => {
  return (
    <div className="px-4 py-6 relative">
      <style dangerouslySetInnerHTML={{ __html: progressStyles }} />
      
      {/* Progress Lines */}
      <div className="flex justify-between relative">
        <div className={cn("progress-line", activeSteps >= 1 && "active")} style={{ left: '16px', right: '50%' }}></div>
        <div className={cn("progress-line", activeSteps >= 2 && "active")} style={{ left: '50%', right: '16px' }}></div>
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-between">
        <ProgressDot active={activeSteps >= 0} label="Ordered" />
        <ProgressDot active={activeSteps >= 1} label="Preparing" isNext={nextStep === 1} />
        <ProgressDot active={activeSteps >= 2} label="Delivering" isNext={nextStep === 2} />
        <ProgressDot active={activeSteps >= 3} label="Delivered" isNext={nextStep === 3} />
      </div>
      
      {/* DashPulse Indicator */}
      {activeSteps >= 0 && (
        <div className="dashpulse-indicator">
          <div className="dashpulse-pulse"></div>
          <span>DashPulse Active</span>
        </div>
      )}
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
    <div className={cn("update-banner", severe && "severe")}>
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm">{message}</div>
      
      {helpButton && (
        <button 
          className="help-button"
          onClick={onHelpClick}
        >
          Get Help
        </button>
      )}
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
    <div className="px-4 py-4 bg-white border-b border-gray-100">
      {isPostOrder ? (
        <>
          <div className="text-sm text-gray-600">Estimated Delivery</div>
          <div className="text-xl font-semibold">{calculating ? 'Calculating...' : time}</div>
        </>
      ) : (
        <>
          <div className="text-sm text-gray-600">Estimated Time</div>
          <div className="text-xl font-semibold">{time}</div>
        </>
      )}
    </div>
  );
};

interface StarRatingProps {
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const handleRatingClick = (selectedRating: number) => {
    setRating(selectedRating);
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  return (
    <div className="bg-white p-4 rounded-lg">
      {submitted ? (
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl text-green-600 mx-auto mb-4">
            ✓
          </div>
          <div className="text-lg font-semibold mb-1">Thanks for your feedback!</div>
          <div className="text-sm text-gray-600">Your rating helps us improve.</div>
        </div>
      ) : (
        <>
          <div className="text-lg font-semibold mb-4 text-center">How was your delivery?</div>
          
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="focus:outline-none"
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => handleRatingClick(star)}
              >
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill={star <= (hover || rating) ? "#FFD700" : "none"} 
                  stroke={star <= (hover || rating) ? "#FFD700" : "#D1D5DB"}
                  strokeWidth="2"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>
          
          <button 
            className="w-full bg-doordash-blue text-white text-center py-3 rounded-lg font-medium"
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            Submit Rating
          </button>
        </>
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
      
      <div className="smartphone-mockup mx-auto">
        {/* Phone Frame without white border */}
        <div className="smartphone-frame">
          <div className="smartphone-notch"></div>
          
          {/* Status Bar */}
          <div className="status-bar">
            <div>{time}</div>
            <div className="flex items-center gap-1">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b border-gray-100 bg-white">
            {showBackButton && (
              <button 
                onClick={onBackClick}
                className="mr-2 text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
            )}
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          
          {/* Scrollable Screen Content */}
          <div className="smartphone-screen">
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
                className="bg-doordash-blue text-white text-center py-3 px-4 mx-4 my-4 rounded-lg font-medium cursor-pointer"
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
          </div>
          
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
