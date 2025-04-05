import React, { useState, useEffect } from 'react';

interface MapPlaceholderProps {
  onClose?: () => void;
  isModal?: boolean;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ onClose, isModal = false }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Close button - only shown in modal view */}
      {isModal && onClose && (
        <button 
          className="absolute top-4 right-4 z-50 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      
      {loading ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-doordash-red border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm font-medium text-gray-600">Loading map...</p>
          </div>
        </div>
      ) : (
        <>
          <img 
            src="/map.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="bg-white/80 px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm font-medium text-gray-800">Demo Only</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MapPlaceholder;
