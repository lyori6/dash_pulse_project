import React from 'react';
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
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Additional Screens</h2>
        <p className="text-gray-700 mb-10">
          These screens are alternative or supplementary views that aren't part of the main flow. 
          They showcase different features and future concepts.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-16 justify-center">
        {/* Discovery Content */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'discovery' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
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
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'help-button' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
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
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'update-log' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
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
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'v2-concept' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
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
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'notifications' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
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
