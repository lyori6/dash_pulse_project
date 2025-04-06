import React from 'react';
import MobileRestaurantSearch from '@/components/MobileRestaurantSearch';

const DiscoveryContent: React.FC = () => {
  return (
    <div className="w-[320px] h-[600px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="flex-1 overflow-hidden">
        <MobileRestaurantSearch />
      </div>
    </div>
  );
};

export default DiscoveryContent;
