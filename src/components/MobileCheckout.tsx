import { ArrowLeft, MapPin, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import DashPulseLogo from "./DashPulseLogo";
import { useState, useEffect } from "react";

interface MobileCheckoutProps {
  onPlaceOrder: () => void;
}

const MobileCheckout = ({ onPlaceOrder }: MobileCheckoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const orderItems = [
    { name: "Cheeseburger", quantity: 1, price: 8.99 },
    { name: "French Fries (Large)", quantity: 1, price: 3.99 },
    { name: "Chocolate Milkshake", quantity: 1, price: 4.99 }
  ];
  
  const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
  const tax = subtotal * 0.0875; // 8.75% tax
  const deliveryFee = 1.99;
  const serviceFee = 2.49;
  const tip = 3.00;
  const total = subtotal + tax + deliveryFee + serviceFee + tip;
  
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 bg-white">
        {/* Header */}
        <div className="flex items-center p-4 border-b">
          <ArrowLeft className="h-5 w-5 mr-3" />
          <h2 className="font-bold text-lg">Checkout</h2>
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-doordash-red border-t-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-sm font-medium text-gray-600">Loading checkout...</p>
            </div>
          </div>
        ) : (
          <div className="p-4">
            {/* Restaurant name with DashPulse indicator */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Tasty Burger</h3>
              <div className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded">
                <DashPulseLogo />
                <span className="text-[10px] font-medium text-[#0066FF]">DashPulse Enabled</span>
              </div>
            </div>
            
            {/* Delivery info */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-start mb-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">123 Main St, Apt 4B</p>
                  <p className="text-xs text-gray-500">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <p className="text-sm">Delivery in 25-35 min</p>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Order Summary</h4>
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between py-2">
                  <span className="text-sm">{item.quantity}x {item.name}</span>
                  <span className="text-sm">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            {/* Payment details */}
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Tax</span>
                <span className="text-sm">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Delivery Fee</span>
                <span className="text-sm">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Service Fee</span>
                <span className="text-sm">${serviceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Tip</span>
                <span className="text-sm">${tip.toFixed(2)}</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            {/* Total */}
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            
            {/* Payment method */}
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3 mb-6">
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm">•••• 4242</span>
              </div>
              <span className="text-xs text-blue-600">Change</span>
            </div>
            
            {/* Place order button */}
            <Button 
              className="w-full bg-[#0066FF] hover:bg-blue-700"
              onClick={onPlaceOrder}
            >
              Place Order
            </Button>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default MobileCheckout;
