import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import MobileMockup from "@/components/MobileMockup";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type AppendixState = 'initial' | 'update-log' | 'post-delivery' | 'v2-concept';

const AppendixScreens = () => {
  const [activeState, setActiveState] = useState<AppendixState>('initial');
  
  const stateDescriptions = {
    'initial': 'The first screen shown to users after placing their order, with calculating ETA.',
    'update-log': 'Comprehensive history of all delivery updates, including DashPulse notifications.',
    'post-delivery': 'Order completion screen with delivery confirmation and rating options.',
    'v2-concept': 'Future concept showing proactive alternative suggestion during significant delays.'
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Other States: Additional Scenarios</h1>
      <p className="text-gray-700 mb-8">
        These screens illustrate other relevant states in the user journey or potential future DashPulse capabilities (V2+).
      </p>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'initial' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('initial')}
        >
          1: Initial State
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'update-log' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('update-log')}
        >
          2: Update Log
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'post-delivery' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('post-delivery')}
        >
          3: Post-Delivery
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'v2-concept' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('v2-concept')}
        >
          4: V2 Concept
        </button>
      </div>
      
      <Card className="bg-white shadow-md overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="screen-container">
            {/* Initial State */}
            {activeState === 'initial' && (
              <MobileMockup
                time="8:00 PM"
                title="Order Confirmed"
                description={stateDescriptions['initial']}
                activeSteps={-1}
                eta="Calculating..."
                calculating={true}
                buttonText="View Details"
                key="initial-state"
              >
                <>
                  <div className="flex justify-center my-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-2xl">
                      ✓
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-base font-medium">Your order has been placed!</div>
                    <div className="text-sm text-gray-600">We're connecting you with a Dasher</div>
                  </div>
                  <div className="text-base font-semibold mb-3 mt-8">Order Summary</div>
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
                  <div className="flex justify-between py-3 font-medium">
                    <div>Subtotal</div>
                    <div>$17.97</div>
                  </div>
                </>
              </MobileMockup>
            )}
            
            {/* Update Log */}
            {activeState === 'update-log' && (
              <MobileMockup
                time="8:40 PM"
                title="Order Updates"
                description={stateDescriptions['update-log']}
                activeSteps={-1}
                eta=""
                buttonText=""
                showBackButton={true}
                onBackClick={() => window.location.href = "/flow"}
                key="update-log"
              >
                <div className="relative">
                  <Link 
                    to="/flow" 
                    className="absolute top-0 left-4 flex items-center gap-1 text-doordash-blue font-medium py-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back to Order
                  </Link>
                  <div className="pt-10">
                    <LogItems />
                  </div>
                </div>
              </MobileMockup>
            )}
            
            {/* Post-Delivery */}
            {activeState === 'post-delivery' && (
              <MobileMockup
                time="9:10 PM"
                title="Order Details"
                description={stateDescriptions['post-delivery']}
                activeSteps={-1}
                eta=""
                buttonText=""
                showETA={false}
                key="post-delivery"
              >
                <PostDeliveryContent />
              </MobileMockup>
            )}
            
            {/* V2 Concept */}
            {activeState === 'v2-concept' && (
              <MobileMockup
                time="8:45 PM"
                title="Order Details"
                description={stateDescriptions['v2-concept']}
                activeSteps={2}
                updateBanner={{
                  title: "Delivery Delay",
                  message: "Unexpected traffic reported on route. Apologies for the delay. New ETA: 9:50 PM - 10:00 PM.",
                  severe: true,
                }}
                eta="9:50 PM - 10:00 PM"
                overlay={
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-20">
                    <div className="bg-white rounded-xl p-6 w-[85%] max-w-xs relative">
                      <div className="text-lg font-semibold mb-3 text-doordash-red">Severe Delay Detected</div>
                      <div className="text-sm text-gray-800 mb-4 leading-relaxed">
                        Your order is facing a significant delay (Est. +45 min). DashPulse suggests switching to pickup to get your food sooner.
                      </div>
                      <button className="w-full bg-doordash-blue text-white text-center py-2.5 rounded-lg font-medium text-sm mb-3 hover:bg-blue-700 transition-colors">
                        Switch to Pickup (Ready ~9:15 PM)
                      </button>
                      <button className="w-full bg-white border border-doordash-blue text-doordash-blue text-center py-2.5 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
                        Keep Delivery (Est. 9:50 PM)
                      </button>
                    </div>
                  </div>
                }
                key="v2-concept"
              >
                <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium">
                  Future/V2 Concept
                </div>
              </MobileMockup>
            )}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 text-gray-600">
        <p className="text-xs mt-2 text-gray-500">The mockup is interactive. Try scrolling down to see all content!</p>
      </div>
    </div>
  );
};

const LogItems = () => (
  <div className="divide-y divide-gray-100">
    <LogItem 
      time="8:40 PM" 
      message="Your food is on the way. Meet your Dasher outside." 
      iconType="bell" 
    />
    <LogItem 
      time="8:35 PM" 
      message="DashPulse Update: Traffic delay reported. ETA adjusted to 9:05 PM - 9:15 PM." 
      iconType="dashpulse" 
    />
    <LogItem 
      time="8:30 PM" 
      message="Your order has been picked up by Dasher John S." 
      iconType="bell" 
    />
    <LogItem 
      time="8:18 PM" 
      message="DashPulse Update: Restaurant seems busy. ETA adjusted to 8:35 PM - 8:45 PM." 
      iconType="dashpulse" 
    />
    <LogItem 
      time="8:15 PM" 
      message="Dasher John S. has been assigned to pick up your order." 
      iconType="bell" 
    />
    <LogItem 
      time="8:10 PM" 
      message="Order confirmed by Tasty Burger." 
      iconType="bell" 
    />
    <LogItem 
      time="8:05 PM" 
      message="Order placed successfully." 
      iconType="bell" 
    />
  </div>
);

const PostDeliveryContent = () => {
  const [dasherRating, setDasherRating] = useState(0);
  const [foodRating, setFoodRating] = useState(0);
  const [hoverDasherRating, setHoverDasherRating] = useState(0);
  const [hoverFoodRating, setHoverFoodRating] = useState(0);
  
  return (
    <>
      <div className="pb-4 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl text-green-600 mx-auto mb-4">
          ✓
        </div>
        <div className="text-lg font-semibold mb-1">Order Delivered</div>
        <div className="text-sm text-gray-600 mb-4">Delivered at 9:10 PM</div>
        
        <div className="bg-doordash-light-blue text-doordash-blue text-sm py-3 px-3 rounded-lg mx-4">
          DashPulse detected a 15-min delay during your delivery.
        </div>
      </div>
      
      <div className="py-4 border-t border-b border-gray-100">
        <div className="text-base font-semibold text-center mb-3">How was your Dasher?</div>
        
        {/* Added Dasher info with Message option */}
        <div className="flex items-center justify-between px-4 mb-3">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <div className="font-medium">John D.</div>
              <div className="text-xs text-gray-500">Your Dasher</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">Message</div>
        </div>
        
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={`dasher-${star}`}
              className="focus:outline-none transition-transform"
              onMouseEnter={() => setHoverDasherRating(star)}
              onMouseLeave={() => setHoverDasherRating(0)}
              onClick={() => setDasherRating(star)}
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill={star <= (hoverDasherRating || dasherRating) ? "#FFD700" : "none"} 
                stroke={star <= (hoverDasherRating || dasherRating) ? "#FFD700" : "#D1D5DB"}
                strokeWidth="2"
                className={cn(
                  "transition-all duration-150",
                  star <= (hoverDasherRating || dasherRating) ? "scale-110" : "scale-100"
                )}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      
      <div className="py-4 border-b border-gray-100">
        <div className="text-base font-semibold text-center mb-3">How was your food?</div>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={`food-${star}`}
              className="focus:outline-none transition-transform"
              onMouseEnter={() => setHoverFoodRating(star)}
              onMouseLeave={() => setHoverFoodRating(0)}
              onClick={() => setFoodRating(star)}
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill={star <= (hoverFoodRating || foodRating) ? "#FFD700" : "none"} 
                stroke={star <= (hoverFoodRating || foodRating) ? "#FFD700" : "#D1D5DB"}
                strokeWidth="2"
                className={cn(
                  "transition-all duration-150",
                  star <= (hoverFoodRating || foodRating) ? "scale-110" : "scale-100"
                )}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-base font-semibold mb-3">Order Summary</div>
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
        <div className="flex justify-between py-3 font-medium">
          <div>Subtotal</div>
          <div>$17.97</div>
        </div>
      </div>
    </>
  );
};

interface LogItemProps {
  time: string;
  message: string;
  iconType: 'bell' | 'dashpulse';
}

const LogItem: React.FC<LogItemProps> = ({ time, message, iconType }) => {
  return (
    <div className="py-3">
      <div className="flex items-center mb-1">
        <div className={cn(
          "w-6 h-6 rounded-full mr-2 flex items-center justify-center text-xs",
          iconType === 'dashpulse' ? 'bg-[rgba(0,102,255,0.2)] text-doordash-blue' : 'bg-gray-200'
        )}>
          {iconType === 'dashpulse' ? 'D' : '🔔'}
        </div>
        <div className="font-semibold text-sm text-gray-800">{time}</div>
      </div>
      <div className="text-sm text-gray-600 ml-8">{message}</div>
    </div>
  );
};

export default AppendixScreens;
