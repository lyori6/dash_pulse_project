import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import MobileMockup from "@/components/MobileMockup";
import { cn } from "@/lib/utils";

type FlowState = 'normal' | 'minor-delay' | 'significant-delay' | 'help-button';

const DashPulseFlow = () => {
  const [activeState, setActiveState] = useState<FlowState>('normal');
  const [showHelpModal, setShowHelpModal] = useState(false);
  
  const stateDescriptions = {
    'normal': 'Standard delivery tracking experience with real-time updates and estimated delivery time.',
    'minor-delay': 'Proactive notification of a small delay with adjusted ETA for transparency.',
    'significant-delay': 'Notification of a more substantial delay with clear explanation and recalculated delivery time.',
    'help-button': 'A/B test variant showing support option for customers experiencing significant delays.'
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Core Flow: DashPulse V1 Experience</h1>
      <p className="text-gray-700 mb-8">
        This section demonstrates the core DashPulse V1 flow across different scenarios. Use the buttons below to switch between states.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'normal' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('normal')}
        >
          1: Normal State
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'minor-delay' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('minor-delay')}
        >
          2: Minor Delay
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'significant-delay' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('significant-delay')}
        >
          3: Significant Delay
        </button>
        <button 
          className={cn(
            "px-4 py-2 rounded-full transition-all",
            activeState === 'help-button' 
              ? "bg-doordash-blue text-white shadow-md" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-doordash-blue"
          )}
          onClick={() => setActiveState('help-button')}
        >
          4: A/B Test (Help Button)
        </button>
      </div>
      
      <Card className="bg-white shadow-md overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <div className="screen-container">
            {/* Normal State */}
            {activeState === 'normal' && (
              <MobileMockup
                time="8:05 PM"
                title="Order Details"
                description={stateDescriptions['normal']}
                activeSteps={2}
                eta="8:15 PM - 8:25 PM"
                isPostOrder={true}
                key="normal-state"
              >
                <>
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
            
            {/* Minor Delay */}
            {activeState === 'minor-delay' && (
              <MobileMockup
                time="8:12 PM"
                title="Order Details"
                description={stateDescriptions['minor-delay']}
                activeSteps={2}
                updateBanner={{
                  title: "Order Update",
                  message: "Heads up! Restaurant seems busy. We're monitoring closely. New ETA: 8:35 PM - 8:45 PM."
                }}
                eta="8:35 PM - 8:45 PM"
                isPostOrder={true}
                key="minor-delay"
              />
            )}
            
            {/* Significant Delay */}
            {activeState === 'significant-delay' && (
              <MobileMockup
                time="8:25 PM"
                title="Order Details"
                description={stateDescriptions['significant-delay']}
                activeSteps={2}
                updateBanner={{
                  title: "Delivery Delay",
                  message: "Unexpected traffic reported on route. Apologies for the delay. New ETA: 9:05 PM - 9:15 PM.",
                  severe: true
                }}
                eta="9:05 PM - 9:15 PM"
                isPostOrder={true}
                key="significant-delay"
              />
            )}
            
            {/* Help Button */}
            {activeState === 'help-button' && (
              <MobileMockup
                time="8:30 PM"
                title="Order Details"
                description={stateDescriptions['help-button']}
                activeSteps={2}
                updateBanner={{
                  title: "Delivery Delay",
                  message: "Unexpected traffic reported on route. Apologies for the delay. New ETA: 9:05 PM - 9:15 PM.",
                  severe: true,
                  helpButton: true
                }}
                eta="9:05 PM - 9:15 PM"
                isPostOrder={true}
                key="help-button"
                onHelpClick={() => setShowHelpModal(true)}
              >
                <>
                  {/* Order summary */}
                  <div className="text-base font-semibold mb-3 mt-4 px-4">Order Summary</div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm px-4">
                    <div>1x Cheeseburger</div>
                    <div>$8.99</div>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm px-4">
                    <div>1x Fries (Large)</div>
                    <div>$3.99</div>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-sm px-4">
                    <div>1x Milkshake</div>
                    <div>$4.99</div>
                  </div>
                  <div className="flex justify-between py-3 font-medium px-4">
                    <div>Subtotal</div>
                    <div>$17.97</div>
                  </div>
                  
                  {/* Help modal */}
                  {showHelpModal && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 z-20">
                      <div className="bg-white rounded-xl p-6 w-[85%] max-w-xs relative">
                        <div className="text-lg font-semibold mb-3">Sorry about the delay with your order</div>
                        <div className="text-sm text-gray-800 mb-4 leading-relaxed">
                          We anticipate your order to arrive by 9:05 PM - 9:15 PM.
                        </div>
                        <button className="w-full bg-doordash-blue text-white text-center py-2.5 rounded-lg font-medium text-sm mb-3 hover:bg-blue-700 transition-colors">
                          Contact Support
                        </button>
                        <button className="w-full bg-white border border-doordash-blue text-doordash-blue text-center py-2.5 rounded-lg font-medium text-sm mb-3 hover:bg-blue-50 transition-colors">
                          View Cancellation Policy
                        </button>
                        <button 
                          className="w-full bg-gray-100 text-gray-700 text-center py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors"
                          onClick={() => setShowHelpModal(false)}
                        >
                          I'll Wait
                        </button>
                      </div>
                    </div>
                  )}
                </>
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

export default DashPulseFlow;
