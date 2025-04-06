import React from 'react';
import { cn } from "@/lib/utils";
import PhoneFrame from './PhoneFrame';
import CheckoutContent from './phone-contents/CheckoutContent';
import OrderConfirmedContent from './phone-contents/OrderConfirmedContent';
import NormalStateContent from './phone-contents/NormalStateContent';
import MinorDelayContent from './phone-contents/MinorDelayContent';
import SignificantDelayContent from './phone-contents/SignificantDelayContent';
import PostDeliveryContent from './phone-contents/PostDeliveryContent';

interface FlowSectionProps {
  selectedPhone: string;
  onSelectPhone: (phone: string) => void;
}

const FlowSection: React.FC<FlowSectionProps> = ({ selectedPhone, onSelectPhone }) => {
  return (
    <section className="mt-16 mb-20">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Main Flow</h2>
        <p className="text-gray-700">
          Experience the complete user journey of DashPulse from checkout to delivery completion. 
          Select any screen to see it in detail.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-16 justify-center">
        {/* Checkout Experience */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'checkout' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Checkout Experience"
            description="Shows DashPulse enabled on the checkout page"
            isActive={selectedPhone === 'checkout'}
            type="flow"
            index={1}
            onSelect={() => onSelectPhone('checkout')}
          >
            <CheckoutContent onPlaceOrder={() => onSelectPhone('order-confirmed')} />
          </PhoneFrame>
        </div>
        
        {/* Order Confirmed */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'order-confirmed' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Order Confirmed"
            description="The initial screen after placing an order"
            isActive={selectedPhone === 'order-confirmed'}
            type="flow"
            index={2}
            onSelect={() => onSelectPhone('order-confirmed')}
          >
            <OrderConfirmedContent />
          </PhoneFrame>
        </div>
        
        {/* Normal State */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'normal-state' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Order Initiated"
            description="Standard delivery tracking with real-time updates"
            isActive={selectedPhone === 'normal-state'}
            type="flow"
            index={3}
            onSelect={() => onSelectPhone('normal-state')}
          >
            <NormalStateContent />
          </PhoneFrame>
        </div>
        
        {/* Minor Delay */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'minor-delay' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Minor Delay"
            description="Proactive notification of small delay"
            isActive={selectedPhone === 'minor-delay'}
            type="flow"
            index={4}
            onSelect={() => onSelectPhone('minor-delay')}
          >
            <MinorDelayContent />
          </PhoneFrame>
        </div>
        
        {/* Significant Delay */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'significant-delay' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Significant Delay"
            description="Notification of substantial delay with explanation"
            isActive={selectedPhone === 'significant-delay'}
            type="flow"
            index={5}
            onSelect={() => onSelectPhone('significant-delay')}
          >
            <SignificantDelayContent />
          </PhoneFrame>
        </div>
        
        {/* Post Delivery */}
        <div className={cn(
          "transition-all duration-300",
          selectedPhone === 'post-delivery' 
            ? 'opacity-100 scale-100' 
            : 'opacity-70 scale-95 hover:opacity-90'
        )}>
          <PhoneFrame
            title="Post Delivery"
            description="Order completion with ratings and feedback"
            isActive={selectedPhone === 'post-delivery'}
            type="flow"
            index={6}
            onSelect={() => onSelectPhone('post-delivery')}
          >
            <PostDeliveryContent onBackClick={() => onSelectPhone('discovery')} />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
