import React from 'react';
import { cn } from '@/lib/utils';

// CSS styles for progress elements
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
    z-index: 5;
    transition: all 0.5s ease;
    width: calc(100% - 16px);
    left: 8px;
  }
  
  .progress-line-active {
    position: absolute;
    height: 3px;
    background-color: #E24536;
    top: 8px;
    z-index: 6;
    transition: all 0.5s ease;
  }
  
  .progress-line-halfway {
    position: absolute;
    height: 3px;
    background-color: #E24536;
    top: 8px;
    z-index: 6;
    transition: all 0.5s ease;
    width: 50%;
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
`;

interface ProgressDotProps {
  active: boolean;
  label: string;
  isNext?: boolean;
}

export const ProgressDot: React.FC<ProgressDotProps> = ({ active, label, isNext = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={cn(
        "progress-dot",
        active && "active",
        isNext && "next"
      )}>
        {active && (
          <div className="text-white text-xs">✓</div>
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

export const ProgressBar: React.FC<ProgressBarProps> = ({ activeSteps, nextStep = -1 }) => {
  const steps = [
    { label: "Order", step: 0 },
    { label: "Prep", step: 1 },
    { label: "Pickup", step: 2 },
    { label: "Delivery", step: 3 }
  ];

  return (
    <div className="relative px-4 py-6">
      <style>{progressStyles}</style>
      <div className="flex justify-between items-center relative">
        {/* Background grey lines that span the entire width */}
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div 
                className="progress-line" 
                style={{
                  left: `${(index - 1) * (100 / (steps.length - 1))}%`,
                  width: `${100 / (steps.length - 1)}%`
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
        
        {/* Completed red lines */}
        {steps.map((step, index) => (
          <React.Fragment key={`active-${index}`}>
            {index > 0 && index <= activeSteps && (
              <div 
                className="progress-line-active" 
                style={{
                  left: `${(index - 1) * (100 / (steps.length - 1))}%`,
                  width: `${100 / (steps.length - 1)}%`
                }}
              ></div>
            )}
          </React.Fragment>
        ))}
        
        {/* Halfway red line to next step */}
        {nextStep > 0 && nextStep === activeSteps + 1 && (
          <div 
            className="progress-line-halfway" 
            style={{
              left: `${(activeSteps) * (100 / (steps.length - 1))}%`,
              width: `${(100 / (steps.length - 1)) / 2}%`
            }}
          ></div>
        )}
        
        {/* Progress dots */}
        {steps.map((step) => (
          <ProgressDot 
            key={`dot-${step.step}`}
            active={activeSteps >= step.step} 
            label={step.label}
            isNext={nextStep === step.step}
          />
        ))}
      </div>
      {activeSteps > 0 && (
        <div className="dashpulse-indicator mt-2">
          <div className="dashpulse-pulse"></div>
          <span>DashPulse Active</span>
        </div>
      )}
    </div>
  );
};

interface UpdateBannerProps {
  title?: string;
  message: string;
  time?: string;
  type?: 'info' | 'warning' | 'error';
  severe?: boolean;
  helpButton?: boolean;
  onHelpClick?: () => void;
  backgroundColor?: string;
  borderColor?: string;
  textColorTitle?: string;
  textColorMessage?: string;
}

export const UpdateBanner: React.FC<UpdateBannerProps> = ({ 
  title, 
  message,
  time,
  type = 'info',
  severe = false,
  helpButton = false,
  onHelpClick,
  backgroundColor,
  borderColor,
  textColorTitle,
  textColorMessage
}) => {
  // Set default colors based on type
  let bgColor = backgroundColor;
  let bColor = borderColor;
  let titleColor = textColorTitle;
  let messageColor = textColorMessage;
  
  if (!backgroundColor || !borderColor || !textColorTitle || !textColorMessage) {
    switch (type) {
      case 'warning':
        bgColor = bgColor || "bg-amber-50";
        bColor = bColor || "border-amber-500";
        titleColor = titleColor || "text-amber-800";
        messageColor = messageColor || "text-amber-700";
        break;
      case 'error':
        bgColor = bgColor || "bg-red-50";
        bColor = bColor || "border-red-500";
        titleColor = titleColor || "text-red-800";
        messageColor = messageColor || "text-red-700";
        break;
      default: // info
        bgColor = bgColor || "bg-blue-50";
        bColor = bColor || "border-blue-500";
        titleColor = titleColor || "text-blue-800";
        messageColor = messageColor || "text-blue-700";
    }
  }
  
  // If severe is true, override the colors
  if (severe) {
    bgColor = "bg-red-50";
    bColor = "border-red-500";
    titleColor = "text-red-800";
    messageColor = "text-red-700";
  }

  return (
    <div className={`mx-4 my-3 p-3 ${bgColor} border-l-4 ${bColor} rounded-r-md relative`}>
      {title && <div className={`font-medium ${titleColor} mb-1`}>{title}</div>}
      <div className={`text-sm ${messageColor}`}>{message}</div>
      
      {time && (
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      )}
      
      {helpButton && (
        <button 
          className="absolute right-3 bottom-3 text-xs text-blue-600 font-medium"
          onClick={onHelpClick}
        >
          Help
        </button>
      )}
    </div>
  );
};
