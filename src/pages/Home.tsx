import { Card, CardContent } from "@/components/ui/card";
import DashPulseLogo from "@/components/DashPulseLogo";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import FlowSection from "@/components/FlowSection";
import ParallelSection from "@/components/ParallelSection";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState('normal-state'); 
  const [activeSection, setActiveSection] = useState<'flow' | 'parallel'>('flow'); // Initialize with 'flow' as the default active section
  const flowSectionRef = useRef<HTMLDivElement>(null);
  const parallelSectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [tabIndicatorPosition, setTabIndicatorPosition] = useState({ left: 0, width: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    setActiveSection('flow');
    setSelectedPhone('normal-state');
    window.scrollTo(0, 0);
    // Increase the timeout to ensure DOM is fully rendered before updating tab indicator
    setTimeout(() => {
      updateTabIndicator();
    }, 300);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
  }, [selectedPhone, activeSection]);
  
  const updateTabIndicator = () => {
    if (tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(`.${activeSection}-tab`);
      if (activeTab) {
        const { left, width } = activeTab.getBoundingClientRect();
        const tabsLeft = tabsRef.current.getBoundingClientRect().left;
        setTabIndicatorPosition({ 
          left: left - tabsLeft, 
          width 
        });
      }
    }
  };
  
  useEffect(() => {
    // Add a small delay to ensure DOM is updated before calculating positions
    const timer = setTimeout(() => {
      updateTabIndicator();
    }, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);
  
  useEffect(() => {
    const handleResize = () => {
      updateTabIndicator();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (flowSectionRef.current && parallelSectionRef.current) {
        const flowRect = flowSectionRef.current.getBoundingClientRect();
        const parallelRect = parallelSectionRef.current.getBoundingClientRect();
        const headerOffset = 150; 
        
        if (flowRect.top < window.innerHeight - headerOffset && flowRect.bottom > headerOffset) {
          if (activeSection !== 'flow') {
            setActiveSection('flow');
            if (!flowSectionRef.current.contains(document.activeElement)) {
              setSelectedPhone('normal-state');
            }
          }
        } 
        else if (parallelRect.top < window.innerHeight - headerOffset && parallelRect.bottom > headerOffset) {
          if (activeSection !== 'parallel') {
            setActiveSection('parallel');
            if (!parallelSectionRef.current.contains(document.activeElement)) {
              setSelectedPhone('initial');
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navigatePhones = (direction: 'next' | 'prev' | 'up' | 'down') => {
    const flowPhones = [
      'normal-state',       
      'minor-delay',        
      'significant-delay',  
      'help-button',        
    ];
    
    const parallelPhones = [
      'initial',            
      'update-log',         
      'post-delivery',      
      'v2-concept',         
    ];
    
    if (direction === 'up' || direction === 'down') {
      if (direction === 'down' && activeSection === 'flow') {
        scrollToSection(parallelSectionRef);
        return;
      } else if (direction === 'up' && activeSection === 'parallel') {
        scrollToSection(flowSectionRef);
        return;
      }
    }
    
    const currentArray = activeSection === 'flow' ? flowPhones : parallelPhones;
    const currentIndex = currentArray.indexOf(selectedPhone);
    
    if (currentIndex === -1) {
      setSelectedPhone(currentArray[0]);
      return;
    }
    
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % currentArray.length;
      setSelectedPhone(currentArray[nextIndex]);
    } else if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
      setSelectedPhone(currentArray[prevIndex]);
    }
  };
  
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const handleSectionChange = (section: 'flow' | 'parallel') => {
    setActiveSection(section);
    if (section === 'flow') {
      scrollToSection(flowSectionRef);
    } else {
      scrollToSection(parallelSectionRef);
    }
  };
  
  // Ensure the main flow is selected by default when the page loads
  // but don't scroll to it automatically
  useEffect(() => {
    // Set a small timeout to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      setActiveSection('flow');
      // No automatic scrolling here
      
      // Update tab indicator after state change
      setTimeout(updateTabIndicator, 50);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Card className="bg-white shadow-lg overflow-hidden">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="mb-6 md:mb-0 md:mr-8 transform transition-all duration-700 scale-90 md:scale-100" style={{ opacity: isLoaded ? 1 : 0 }}>
                <DashPulseLogo size="hero" />
              </div>
              <div className={cn(
                "transition-all duration-700 delay-300",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#E24536" }}>DashPulse</h1>
                <p className="text-gray-600">Real-time delivery updates and transparency</p>
              </div>
            </div>
            
            <p className="mb-4">
              <span className="font-semibold">DashPulse</span> is a new feature designed to enhance the delivery tracking experience by providing customers with proactive updates and improved transparency throughout their order journey.
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
      
      {/* Section Tabs - Sticky */}
      <div className="sticky top-[60px] z-40 bg-white py-3 border-b mb-8 shadow-sm">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center relative" ref={tabsRef}>
            {/* Tab indicator - Only show when positions are calculated */}
            {(tabIndicatorPosition.width > 0) && (
              <div 
                className="absolute bottom-0 h-1 rounded-full"
                style={{ 
                  left: tabIndicatorPosition.left, 
                  width: tabIndicatorPosition.width,
                  transform: 'translateY(2px)',
                  backgroundColor: "#E24536"
                }}
              />
            )}
            
            <button 
              className={cn(
                "px-4 sm:px-8 py-3 text-gray-800 text-base sm:text-lg font-medium mx-2 sm:mx-3 rounded-full transition-all duration-300 flow-tab",
                activeSection === 'flow' ? "text-[#E24536]" : ""
              )}
              onClick={() => handleSectionChange('flow')}
            >
              Main Flow
            </button>
            <button
              className={cn(
                "px-4 sm:px-8 py-3 text-gray-800 text-base sm:text-lg font-medium mx-2 sm:mx-3 rounded-full transition-all duration-300 parallel-tab",
                activeSection === 'parallel' ? "text-[#E24536]" : ""
              )}
              onClick={() => handleSectionChange('parallel')}
            >
              More Screens
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="bg-white max-w-6xl mx-auto px-4 py-6 rounded-lg border border-gray-200">
        {/* Main Flow Section */}
        <div ref={flowSectionRef} className="scroll-mt-32">
          <FlowSection 
            selectedPhone={selectedPhone}
            onSelectPhone={(phone) => {
              setSelectedPhone(phone);
              setActiveSection('flow');
            }}
          />
        </div>
        
        {/* Parallel Section */}
        <div ref={parallelSectionRef} className="scroll-mt-32 mt-16">
          <ParallelSection
            selectedPhone={selectedPhone}
            onSelectPhone={(phone) => {
              setSelectedPhone(phone);
              setActiveSection('parallel');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
