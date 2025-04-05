import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader } from "lucide-react";
import DashPulseLogo from "@/components/DashPulseLogo";
import { cn } from "@/lib/utils";
import MobileRestaurantSearch from "@/components/MobileRestaurantSearch";
import MobileCheckout from "@/components/MobileCheckout";

const FeatureIntegration = () => {
  const [activeTab, setActiveTab] = useState<string>("discovery");
  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      setIsPlacingOrder(false);
      navigate("/flow"); // Navigate to Core Flow tab
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto my-4 md:my-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">DashPulse: Feature Integration (Pre-Order)</h1>
      
      <p className="text-gray-700 mb-6">
        This section shows how DashPulse would be visible to users before they place an order, 
        highlighting participating restaurants and building confidence during checkout.
      </p>

      <Tabs
        defaultValue="discovery"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="discovery">Discovery & Search</TabsTrigger>
          <TabsTrigger value="checkout">Checkout Experience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="discovery" className="mt-0">
          <Card className="w-full shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-lg font-medium mb-2">Restaurant Discovery</h3>
                <p className="text-gray-600 text-center text-sm mb-4">
                  DashPulse-enabled restaurants are highlighted in search results, 
                  helping users identify merchants with enhanced delivery tracking.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="smartphone-mockup-container">
                  <MobileRestaurantSearch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checkout" className="mt-0">
          <Card className="w-full shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-lg font-medium mb-2">Checkout Experience</h3>
                <p className="text-gray-600 text-center text-sm mb-4">
                  During checkout, users can see that their order will include DashPulse 
                  enhanced delivery tracking.
                </p>
              </div>
              
              <div className={cn(
                "flex justify-center relative", 
                isPlacingOrder && "pointer-events-none"
              )}>
                <div className="smartphone-mockup-container">
                  <MobileCheckout onPlaceOrder={handlePlaceOrder} />
                </div>
                
                {isPlacingOrder && (
                  <div className="absolute inset-0 bg-black/50 rounded-2xl flex flex-col items-center justify-center gap-3">
                    <Loader className="h-10 w-10 text-white animate-spin" />
                    <p className="text-white font-medium">Placing Order...</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeatureIntegration;
