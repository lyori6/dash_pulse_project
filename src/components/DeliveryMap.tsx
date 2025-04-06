import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DeliveryMapProps {
  className?: string;
  showLoading?: boolean;
}

const DeliveryMap = ({ className, showLoading = true }: DeliveryMapProps) => {
  const [isLoading, setIsLoading] = useState(showLoading);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMapClicked, setIsMapClicked] = useState(false);

  useEffect(() => {
    if (showLoading) {
      // Simulate loading for 1.5 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [showLoading]);
  
  // Trigger loading animation when parent component is focused/selected
  useEffect(() => {
    // When the parent screen is selected, trigger the loading animation
    const handleScreenSelection = () => {
      const phoneFrame = document.querySelector('.selected-phone');
      if (phoneFrame) {
        setIsMapClicked(true);
        setIsLoading(true);
        
        // Simulate loading for 1.5 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };
    
    // Call once to check if already selected
    handleScreenSelection();
    
    // Set up a mutation observer to detect when the parent gets the 'selected-phone' class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target as HTMLElement;
          if (target.classList.contains('selected-phone')) {
            handleScreenSelection();
          }
        }
      });
    });
    
    // Find the closest phone frame parent
    const phoneFrame = document.querySelector('.phone-frame');
    if (phoneFrame) {
      observer.observe(phoneFrame, { attributes: true });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Handle map click to show loading state
  const handleMapClick = () => {
    setIsMapClicked(true);
    setIsLoading(true);
    
    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div 
      className={cn("relative rounded-xl overflow-hidden bg-gray-100 cursor-pointer", className)}
      onClick={handleMapClick}
    >
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-doordash-red rounded-full animate-spin mb-2"></div>
          <p className="text-sm text-gray-600 font-medium">
            {isMapClicked ? "Loading live map..." : "Loading location..."}
          </p>
        </div>
      )}
      
      {/* Map image */}
      <div 
        className={cn(
          "w-full h-full transition-opacity duration-500", 
          mapLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <img 
          src="/map.png" 
          alt="Delivery route map" 
          className="w-full h-full object-cover"
          onLoad={() => setMapLoaded(true)}
        />
        
        {/* Demo overlay */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          Demo Map
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
