import { cn } from "@/lib/utils";

interface DashPulseLogoProps {
  className?: string;
  size?: 'default' | 'large' | 'header';
}

const DashPulseLogo = ({ className, size = 'default' }: DashPulseLogoProps) => {
  const sizeClasses = {
    default: "w-5 h-5", // 20% bigger than original w-4 h-4
    large: "w-6 h-6",   // Larger for general use
    header: "w-12 h-12" // 200% bigger for header
  };
  
  return (
    <img 
      src="/lovable-uploads/d14f8f65-f629-42db-8eb7-faa7a50dd282.png"
      alt="DashPulse Logo"
      className={cn(sizeClasses[size], className)}
    />
  );
};

export default DashPulseLogo;
