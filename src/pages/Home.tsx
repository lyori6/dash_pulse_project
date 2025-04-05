import { Card, CardContent } from "@/components/ui/card";
import DashPulseLogo from "@/components/DashPulseLogo";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="max-w-3xl mx-auto my-4 md:my-12">
      <div className="flex flex-col items-center mb-12">
        <div className={cn(
          "flex items-center gap-4 mb-6 transition-all duration-700 transform",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        )}>
          <DashPulseLogo size="header" />
          <h1 className="text-4xl font-bold text-[#E24536]">DashPulse</h1>
        </div>
        <h2 className={cn(
          "text-2xl md:text-3xl font-semibold text-center mb-6 transition-all duration-700 delay-300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          Proactive Delivery Monitoring
        </h2>
        
        <Card className={cn(
          "w-full shadow-md transition-all duration-700 delay-500",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <CardContent className="p-6 md:p-10">
            <p className="text-lg mb-6">
              Welcome. This interactive prototype showcases DashPulse V1, a proposed enhancement for the DoorDash post-order experience.
            </p>
            
            <p className="mb-4">
              <span className="font-semibold">Context:</span> This concept was developed for a PM interview presentation redo, addressing feedback that emphasized the need for a focused, foundational solution to user anxiety caused by delivery uncertainty.
            </p>
            
            <p className="mb-4">
              <span className="font-semibold">DashPulse V1</span> focuses on proactive transparency – providing users with dynamic ETAs and contextual updates directly within the tracking screen.
            </p>
            
            <p className="mb-6">
              Explore the core flow and additional states using the tabs above. You can also view the full presentation deck.
            </p>
            
            <div className={cn(
              "bg-gray-50 p-6 rounded-lg border border-gray-200 transition-all duration-700 delay-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className={cn("transition-all", isLoaded ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "800ms" }}>Real-time order tracking with dynamic ETA updates</li>
                <li className={cn("transition-all", isLoaded ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "900ms" }}>Contextual notifications based on order status</li>
                <li className={cn("transition-all", isLoaded ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "1000ms" }}>Proactive delay communications</li>
                <li className={cn("transition-all", isLoaded ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "1100ms" }}>Visual progress indicators</li>
                <li className={cn("transition-all", isLoaded ? "opacity-100" : "opacity-0")} style={{ transitionDelay: "1200ms" }}>Unified update history</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
