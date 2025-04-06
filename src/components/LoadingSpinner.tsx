import React from 'react';
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "md", 
  className 
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10"
  };
  
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)}>
      <Loader className={cn(sizeClasses[size], "text-doordash-red animate-spin")} />
      <p className="text-gray-600 font-medium text-sm">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
