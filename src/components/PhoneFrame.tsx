import React from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  isActive: boolean;
  type: "flow" | "parallel";
  index?: number;
  onSelect: () => void;
  className?: string;
  badge?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children, 
  title, 
  description, 
  isActive, 
  type, 
  index, 
  onSelect,
  className,
  badge
}) => {
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect();
      e.preventDefault();
    }
  };

  return (
    <div 
      className={cn(
        "relative flex flex-col rounded-xl transition-all duration-300",
        className
      )}
    >
      {/* Type and index badge */}
      {type === "flow" && index && (
        <div className={cn(
          "absolute -top-8 -left-4 z-10 h-8 min-w-8 rounded-full flex items-center justify-center text-white text-sm font-medium transition-all duration-300",
          isActive ? "bg-doordash-red scale-110" : "bg-gray-400"
        )}>
          {index}
        </div>
      )}
      
      {type === "parallel" && badge && (
        <div className={cn(
          "absolute -top-8 -left-4 z-10 h-8 px-3 rounded-full flex items-center justify-center text-white text-xs font-medium transition-all duration-300",
          isActive ? "bg-doordash-blue scale-110" : "bg-gray-400"
        )}>
          {badge}
        </div>
      )}
      
      {/* Title and description */}
      <div className="mb-6">
        <h3 className={cn(
          "text-xl font-semibold transition-all duration-300",
          isActive ? "text-gray-900" : "text-gray-700"
        )}>
          {title}
        </h3>
        {description && (
          <p className={cn(
            "text-sm transition-all duration-300",
            isActive ? "text-gray-700" : "text-gray-500"
          )}>
            {description}
          </p>
        )}
      </div>

      {/* Simple frame with thin border */}
      <div
        className={cn(
          "relative w-[320px] rounded-xl overflow-hidden transition-all duration-300",
          isActive 
            ? "shadow-md ring-2 ring-doordash-red transform scale-[1.02] z-10" 
            : "shadow-sm border border-gray-200 hover:shadow-md hover:scale-[1.01]",
          type === "parallel" && isActive && "ring-doordash-blue"
        )}
        onClick={onSelect}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={isActive}
      >
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
