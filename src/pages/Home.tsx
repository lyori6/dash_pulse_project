import { Card, CardContent } from "@/components/ui/card";
import DashPulseLogo from "@/components/DashPulseLogo";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import FlowSection from "@/components/FlowSection";
import ParallelSection from "@/components/ParallelSection";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('checkout');
  const flowSectionRef = useRef<HTMLDivElement>(null);
  const parallelSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Arrow key navigation between phones
      if (e.key === 'ArrowRight') {
        navigatePhones('next');
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        navigatePhones('prev');
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        navigatePhones('down');
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        navigatePhones('up');
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhone]);

  // Enhanced navigation between phones with specific screen navigation rules
  const navigatePhones = (direction: 'next' | 'prev' | 'up' | 'down') => {
    // Define the matrix of phones for navigation
    // First row - flow section
    const flowPhones = [
      'checkout',           // Screen 1
      'order-confirmed',    // Screen 2
      'normal-state',       // Screen 3
      'minor-delay',        // Screen 4
      'significant-delay',  // Screen 5
      'post-delivery'       // Screen 6
    ];
    
    // Second row - parallel section
    const parallelPhones = [
      'discovery',          // A
      'help-button',        // B
      'update-log',         // C
      'v2-concept'          // D
    ];
    
    // Current position
    const isInFlowSection = flowPhones.includes(selectedPhone);
    const currentFlowIndex = flowPhones.indexOf(selectedPhone);
    const currentParallelIndex = parallelPhones.indexOf(selectedPhone);
    
    let newPhone: string | null = null;
    
    // Implement the specific navigation rules for each screen
    if (isInFlowSection) {
      // Flow section (screens 1-6)
      switch (currentFlowIndex) {
        case 0: // Screen 1 (checkout)
          if (direction === 'next') {
            newPhone = flowPhones[1]; // Right to Screen 2
          } else if (direction === 'down') {
            newPhone = parallelPhones[0]; // Down to Screen A
            scrollToSection(parallelSectionRef);
          }
          // Left and Up are disabled for Screen 1
          break;
          
        case 1: // Screen 2 (order-confirmed)
          if (direction === 'next') {
            newPhone = flowPhones[2]; // Right to Screen 3
          } else if (direction === 'prev') {
            newPhone = flowPhones[0]; // Left to Screen 1
          }
          // Up is disabled for Screen 2
          break;
          
        case 2: // Screen 3 (normal-state)
          if (direction === 'next') {
            newPhone = flowPhones[3]; // Right to Screen 4
          } else if (direction === 'prev') {
            newPhone = flowPhones[1]; // Left to Screen 2
          } else if (direction === 'down') {
            newPhone = parallelPhones[2]; // Down to Screen C
            scrollToSection(parallelSectionRef);
          }
          // Up is disabled for Screen 3
          break;
          
        case 3: // Screen 4 (minor-delay)
          if (direction === 'next') {
            newPhone = flowPhones[4]; // Right to Screen 5
          } else if (direction === 'prev') {
            newPhone = flowPhones[2]; // Left to Screen 3
          } else if (direction === 'up') {
            newPhone = flowPhones[0]; // Up to Screen 1
          }
          // Down is disabled for Screen 4
          break;
          
        case 4: // Screen 5 (significant-delay)
          if (direction === 'next') {
            newPhone = flowPhones[5]; // Right to Screen 6
          } else if (direction === 'prev') {
            newPhone = flowPhones[3]; // Left to Screen 4
          } else if (direction === 'up') {
            newPhone = flowPhones[1]; // Up to Screen 2
          }
          // Down is disabled for Screen 5
          break;
          
        case 5: // Screen 6 (post-delivery)
          if (direction === 'prev') {
            newPhone = flowPhones[4]; // Left to Screen 5
          } else if (direction === 'up') {
            newPhone = flowPhones[2]; // Up to Screen 3
          }
          // Right and Down are disabled for Screen 6
          break;
      }
    } else {
      // Parallel section (screens A-D)
      switch (currentParallelIndex) {
        case 0: // Screen A (discovery)
          if (direction === 'next') {
            newPhone = parallelPhones[1]; // Right to Screen B
          } else if (direction === 'up') {
            newPhone = flowPhones[0]; // Up to Screen 1
            scrollToSection(flowSectionRef);
          }
          break;
          
        case 1: // Screen B (help-button)
          if (direction === 'next') {
            newPhone = parallelPhones[2]; // Right to Screen C
          } else if (direction === 'prev') {
            newPhone = parallelPhones[0]; // Left to Screen A
          } else if (direction === 'up') {
            newPhone = flowPhones[1]; // Up to Screen 2
            scrollToSection(flowSectionRef);
          }
          break;
          
        case 2: // Screen C (update-log)
          if (direction === 'next') {
            newPhone = parallelPhones[3]; // Right to Screen D
          } else if (direction === 'prev') {
            newPhone = parallelPhones[1]; // Left to Screen B
          } else if (direction === 'up') {
            newPhone = flowPhones[2]; // Up to Screen 3
            scrollToSection(flowSectionRef);
          }
          break;
          
        case 3: // Screen D (v2-concept)
          if (direction === 'prev') {
            newPhone = parallelPhones[2]; // Left to Screen C
          } else if (direction === 'up') {
            newPhone = flowPhones[3]; // Up to Screen 4
            scrollToSection(flowSectionRef);
          }
          // Right is disabled for Screen D
          break;
      }
    }
    
    // Only update if a valid navigation target was found
    if (newPhone !== null) {
      setSelectedPhone(newPhone);
    }
  };

  // Helper function for smooth scrolling with animation
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <DashPulseLogo size="header" />
              <h1 className="text-3xl font-bold ml-3">DashPulse</h1>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Interactive Status Updates for Food Delivery</h2>
            
            <p className="mb-4">
              <span className="font-semibold">Problem:</span> Food delivery customers often experience anxiety when orders are delayed without explanation.
            </p>
            
            <p className="mb-4">
              <span className="font-semibold">Solution:</span> DashPulse provides real-time status updates and contextual information about delivery progress.
            </p>
            
            <p className="mb-4">
              <span className="font-semibold">Context:</span> This concept addresses user anxiety caused by delivery uncertainty through proactive transparency.
            </p>
            
            <p className="mb-4">
              <span className="font-semibold">DashPulse V1</span> focuses on providing users with dynamic ETAs and contextual updates directly within the tracking screen.
            </p>
            
            <p className="mb-6">
              Explore the full user flow below. Use arrow keys to navigate between screens, or click directly on any screen to focus.
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
      
      {/* Navigation Instructions */}
      <div className="max-w-3xl mx-auto my-12 text-center">
        <div className={cn(
          "mb-8 transition-all duration-500 delay-1300",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <h3 className="text-xl font-medium mb-3">Navigation Instructions</h3>
          <p className="text-gray-600">
            Use the <span className="font-semibold">arrow keys</span> to navigate between screens, or <span className="font-semibold">click</span> on any screen to focus.
            Use left/right arrows to move within a section and up/down arrows to move between sections.
          </p>
        </div>
        
        <div className="flex justify-center gap-4">
          <button 
            className="px-6 py-3 bg-doordash-red text-white rounded-lg shadow-md hover:bg-red-600 transition-colors"
            onClick={() => {
              setSelectedPhone('checkout');
              scrollToSection(flowSectionRef);
            }}
          >
            Start Flow
          </button>
          <button
            className="px-6 py-3 bg-doordash-blue text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            onClick={() => {
              setSelectedPhone('discovery');
              scrollToSection(parallelSectionRef);
            }}
          >
            View Additional Screens
          </button>
        </div>
      </div>
      
      {/* Flow Section */}
      <div ref={flowSectionRef} className="max-w-6xl mx-auto px-4 scroll-mt-16">
        <FlowSection 
          selectedPhone={selectedPhone}
          onSelectPhone={setSelectedPhone}
        />
      </div>
      
      {/* Parallel Section */}
      <div ref={parallelSectionRef} className="max-w-6xl mx-auto px-4 scroll-mt-16">
        <ParallelSection
          selectedPhone={selectedPhone}
          onSelectPhone={setSelectedPhone}
        />
      </div>
    </div>
  );
};

export default HomePage;
