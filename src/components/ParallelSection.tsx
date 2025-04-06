import React, { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";
import PhoneFrame from './PhoneFrame';
import DiscoveryContent from './phone-contents/DiscoveryContent';
import HelpButtonContent from './phone-contents/HelpButtonContent';
import UpdateLogContent from './phone-contents/UpdateLogContent';
import V2ConceptContent from './phone-contents/V2ConceptContent';
import NotificationsContent from './phone-contents/NotificationsContent';

interface ParallelSectionProps {
  selectedPhone: string;
  onSelectPhone: (phone: string) => void;
}

const ParallelSection: React.FC<ParallelSectionProps> = ({ selectedPhone, onSelectPhone }) => {
  const [isVisible, setIsVisible] = useState(false);
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
  
  return (
    <section ref={sectionRef} className="mt-16 mb-20">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Additional Screens</h2>
        <p className="text-gray-700">
          These screens are alternative or supplementary views that aren't part of the main flow. 
          They showcase different features and future concepts.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-16 justify-center">
        {/* Discovery Content */}
        <div 
          className={cn(
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
          style={{ transitionDelay: "100ms" }}
        >
          <PhoneFrame
            title="Restaurant Discovery"
            description="Shows DashPulse-enabled restaurants during search"
            isActive={selectedPhone === 'discovery'}
            type="parallel"
            badge="Discovery"
            onSelect={() => onSelectPhone('discovery')}
          >
            <DiscoveryContent />
          </PhoneFrame>
        </div>
        
        {/* Help Button */}
        <div 
          className={cn(
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <PhoneFrame
            title="A/B Test: Help Button"
            description="Variant showing support option for delayed orders"
            isActive={selectedPhone === 'help-button'}
            type="parallel"
            badge="A/B"
            onSelect={() => onSelectPhone('help-button')}
          >
            <HelpButtonContent onBackClick={() => onSelectPhone('discovery')} />
          </PhoneFrame>
        </div>
        
        {/* Update Log */}
        <div 
          className={cn(
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <PhoneFrame
            title="Update Log"
            description="History of all delivery updates and notifications"
            isActive={selectedPhone === 'update-log'}
            type="parallel"
            badge="History"
            onSelect={() => onSelectPhone('update-log')}
          >
            <UpdateLogContent onBackClick={() => onSelectPhone('discovery')} />
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
            description="Future concept showing proactive alternatives"
            isActive={selectedPhone === 'v2-concept'}
            type="parallel"
            badge="V2"
            onSelect={() => onSelectPhone('v2-concept')}
          >
            <V2ConceptContent onBackClick={() => onSelectPhone('discovery')} />
          </PhoneFrame>
        </div>
        
        {/* Notifications */}
        <div 
          className={cn(
            "transform transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <PhoneFrame
            title="Push Notifications"
            description="Native phone notifications"
            isActive={selectedPhone === 'notifications'}
            type="parallel"
            badge="Notifications"
            onSelect={() => onSelectPhone('notifications')}
          >
            <NotificationsContent />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default ParallelSection;
