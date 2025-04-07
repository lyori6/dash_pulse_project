import React, { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import PhoneFrame from './PhoneFrame';
import DiscoveryContent from './phone-contents/DiscoveryContent';
import UpdateLogContent from './phone-contents/UpdateLogContent';
import PostDeliveryContent from './phone-contents/PostDeliveryContent';
import V2ConceptContent from './phone-contents/V2ConceptContent';

interface ParallelSectionProps {
  selectedPhone: string;
  onSelectPhone: (phone: string) => void;
}

const ParallelSection: React.FC<ParallelSectionProps> = ({ selectedPhone, onSelectPhone }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Check if section is visible in viewport for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section is 20% visible, trigger animation
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // 20% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return (
    <section ref={sectionRef} className="mt-16 mb-20">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">More Screens</h2>
        <p className="text-gray-700">
          Explore additional screens and alternative experiences for the DashPulse concept.
        </p>
      </div>
      
      {/* Mobile View - Simple List */}
      {isMobile && (
        <div className="space-y-4">
          {/* Mobile notification toast */}
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg mb-2 text-sm flex items-center">
            <span className="mr-2">💻</span> For the best experience, view this showcase on desktop
          </div>
          
          {/* Discovery */}
          <div className="bg-white rounded-lg p-3">
            <h3 className="font-semibold mb-1 text-base">1. Discovery</h3>
            <p className="text-xs text-gray-600 mb-2">Initial onboarding experience for DashPulse</p>
            <div className="aspect-[9/19.5] w-full overflow-hidden">
              <div className="transform scale-[0.9] origin-top h-full">
                <DiscoveryContent />
              </div>
            </div>
          </div>
          
          {/* Update Log */}
          <div className="bg-white rounded-lg p-3">
            <h3 className="font-semibold mb-1 text-base">2. Update Log</h3>
            <p className="text-xs text-gray-600 mb-2">Chronological history of order updates</p>
            <div className="aspect-[9/19.5] w-full overflow-hidden">
              <div className="transform scale-[0.9] origin-top h-full">
                <UpdateLogContent />
              </div>
            </div>
          </div>
          
          {/* Post Delivery */}
          <div className="bg-white rounded-lg p-3">
            <h3 className="font-semibold mb-1 text-base">3. Post Delivery</h3>
            <p className="text-xs text-gray-600 mb-2">Order completion with ratings and feedback</p>
            <div className="aspect-[9/19.5] w-full overflow-hidden">
              <div className="transform scale-[0.9] origin-top h-full">
                <PostDeliveryContent onBackClick={() => onSelectPhone('discovery')} />
              </div>
            </div>
          </div>
          
          {/* V2 Concept */}
          <div className="bg-white rounded-lg p-3">
            <h3 className="font-semibold mb-1 text-base">4. V2 Concept</h3>
            <p className="text-xs text-gray-600 mb-2">Future vision for DashPulse with enhanced features</p>
            <div className="aspect-[9/19.5] w-full overflow-hidden">
              <div className="transform scale-[0.9] origin-top h-full">
                <V2ConceptContent />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Desktop View - Original Layout */}
      {!isMobile && (
        <div className="flex flex-wrap gap-16 justify-center">
          {/* Discovery */}
          <div 
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <PhoneFrame
              title="Discovery"
              description="Initial onboarding experience for DashPulse"
              isActive={selectedPhone === 'initial'}
              type="parallel"
              badge="Onboarding"
              onSelect={() => onSelectPhone('initial')}
            >
              <DiscoveryContent />
            </PhoneFrame>
          </div>
          
          {/* Update Log */}
          <div 
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <PhoneFrame
              title="Update Log"
              description="Chronological history of order updates"
              isActive={selectedPhone === 'update-log'}
              type="parallel"
              badge="History"
              onSelect={() => onSelectPhone('update-log')}
            >
              <UpdateLogContent />
            </PhoneFrame>
          </div>
          
          {/* Post Delivery */}
          <div 
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <PhoneFrame
              title="Post Delivery"
              description="Order completion with ratings and feedback"
              isActive={selectedPhone === 'post-delivery'}
              type="parallel"
              badge="Feedback"
              onSelect={() => onSelectPhone('post-delivery')}
            >
              <PostDeliveryContent onBackClick={() => onSelectPhone('discovery')} />
            </PhoneFrame>
          </div>
          
          {/* V2 Concept */}
          <div 
            className={cn(
              "transform transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <PhoneFrame
              title="V2 Concept"
              description="Future vision for DashPulse with enhanced features"
              isActive={selectedPhone === 'v2-concept'}
              type="parallel"
              badge="Future"
              onSelect={() => onSelectPhone('v2-concept')}
            >
              <V2ConceptContent />
            </PhoneFrame>
          </div>
        </div>
      )}
    </section>
  );
};

export default ParallelSection;
