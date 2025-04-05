import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashPulseLogo from "./DashPulseLogo";
import { useState, useEffect } from "react";

const MobileRestaurantSearch = () => {
  // Restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Tasty Burger",
      image: "/Burger.png",
      rating: 4.8,
      ratingCount: 2456,
      cuisine: "American",
      price: "$$",
      deliveryTime: "20-30 min",
      deliveryFee: "$1.99",
      dashPulseEnabled: true
    },
    {
      id: 2,
      name: "Pizza Palace",
      image: "/Pizza.png",
      rating: 4.5,
      ratingCount: 1289,
      cuisine: "Italian",
      price: "$$",
      deliveryTime: "25-40 min",
      deliveryFee: "$2.99",
      dashPulseEnabled: false
    },
    {
      id: 3,
      name: "Sushi Express",
      image: "/sushi.png",
      rating: 4.7,
      ratingCount: 864,
      cuisine: "Japanese",
      price: "$$$",
      deliveryTime: "30-45 min",
      deliveryFee: "$3.99",
      dashPulseEnabled: true
    },
    {
      id: 4,
      name: "Taco Time",
      image: "/taco.png",
      rating: 4.2,
      ratingCount: 742,
      cuisine: "Mexican",
      price: "$",
      deliveryTime: "15-25 min",
      deliveryFee: "$1.49",
      dashPulseEnabled: false
    }
  ];

  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleRestaurantClick = (name: string) => {
    setSelectedRestaurant(name);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="relative w-[320px] h-[580px] bg-white rounded-3xl overflow-hidden shadow-lg">
      <div className="sticky top-0 z-10 bg-white">
        {/* Status bar */}
        <div className="h-6 bg-white flex items-center justify-between px-4">
          <span className="text-xs font-medium">8:42 AM</span>
          <div className="flex items-center gap-1">
            <span className="text-xs">📶</span>
            <span className="text-xs">🔋</span>
          </div>
        </div>
        
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="font-bold text-lg mb-4">Nearby Restaurants</h2>
          
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search restaurants, cuisine, dishes..."
              className="w-full h-9 pl-10 pr-4 rounded-full bg-gray-100 text-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Restaurant list */}
      <ScrollArea className="h-[502px]">
        {loading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-doordash-red border-t-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-sm font-medium text-gray-600">Loading restaurants...</p>
            </div>
          </div>
        ) : (
          <div className="p-4">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="mb-4 pb-4 border-b last:border-0 last:mb-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg p-2 -mx-2 cursor-pointer"
                onClick={() => handleRestaurantClick(restaurant.name)}
              >
                <div className="flex gap-3">
                  {/* Restaurant image */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    {/* Restaurant info */}
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium text-base">{restaurant.name}</h3>
                      <div className="flex items-center">
                        <span className="text-sm">⭐ {restaurant.rating}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-1">
                      {restaurant.cuisine} • {restaurant.price} • ({restaurant.ratingCount})
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-xs">
                        {restaurant.deliveryTime} • {restaurant.deliveryFee}
                      </div>
                      
                      {/* DashPulse indicator */}
                      {restaurant.dashPulseEnabled && (
                        <div className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded group relative">
                          <DashPulseLogo />
                          <span className="text-[10px] font-medium text-[#0066FF]">DashPulse Enabled</span>
                          <span className="text-[10px] text-[#0066FF] cursor-help ml-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                            <div className="absolute bottom-full right-0 mb-2 w-40 bg-white shadow-lg rounded-md p-2 text-xs text-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                              DashPulse will monitor your order and provide updates about delays.
                            </div>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Toast notification */}
      {showToast && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fade-in-up z-50">
          This is only a demo. Get your own lunch! 🍔
        </div>
      )}
    </div>
  );
};

export default MobileRestaurantSearch;
