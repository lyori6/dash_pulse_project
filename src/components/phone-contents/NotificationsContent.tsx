import React from 'react';
import { ArrowLeft } from "lucide-react";
import DashPulseLogo from "@/components/DashPulseLogo";

interface NotificationsContentProps {
  onBackClick?: () => void;
}

const NotificationsContent: React.FC<NotificationsContentProps> = ({ onBackClick }) => {
  return (
    <div className="w-[320px] h-[600px] bg-gray-100 rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-black flex items-center justify-between px-4">
        <span className="text-xs font-medium text-white">8:15 PM</span>
        <div className="flex items-center gap-1">
          <span className="text-xs text-white">📶</span>
          <span className="text-xs text-white">🔋</span>
        </div>
      </div>
      
      {/* Lock screen header */}
      <div className="pt-4 pb-2 text-center">
        <div className="text-xs font-medium text-gray-600">Friday, April 5</div>
        <div className="text-3xl font-semibold">8:15 PM</div>
      </div>
      
      {/* Notifications */}
      <div className="flex-1 px-3 py-2 overflow-auto">
        {/* Notification Group - DoorDash */}
        <div className="mb-4">
          <div className="text-xs font-medium text-gray-500 mb-1 px-1">EARLIER TODAY</div>
          
          {/* Significant Delay Notification */}
          <div className="bg-white rounded-xl shadow-sm mb-2 overflow-hidden">
            <div className="flex items-center px-3 pt-2.5 pb-1">
              <div className="w-8 h-8 bg-doordash-red rounded-lg flex items-center justify-center mr-2">
                <DashPulseLogo size="default" className="text-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">DoorDash</span>
                  <span className="text-xs text-gray-500 ml-1">• now</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs text-blue-600">DashPulse</span>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="font-medium text-sm mb-1">Significant Delay</div>
              <div className="text-sm text-gray-700">
                Your order from Tasty Burger will be delayed by approximately 30 minutes due to high volume. New ETA: 8:40-8:50 PM.
              </div>
            </div>
          </div>
          
          {/* Minor Delay Notification */}
          <div className="bg-white rounded-xl shadow-sm mb-2 overflow-hidden">
            <div className="flex items-center px-3 pt-2.5 pb-1">
              <div className="w-8 h-8 bg-doordash-red rounded-lg flex items-center justify-center mr-2">
                <DashPulseLogo size="default" className="text-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">DoorDash</span>
                  <span className="text-xs text-gray-500 ml-1">• 20m ago</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs text-blue-600">DashPulse</span>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="font-medium text-sm mb-1">Slight Delay</div>
              <div className="text-sm text-gray-700">
                Your order from Tasty Burger is running about 10 minutes behind schedule. New ETA: 8:10-8:20 PM.
              </div>
            </div>
          </div>
          
          {/* Order Confirmed Notification */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center px-3 pt-2.5 pb-1">
              <div className="w-8 h-8 bg-doordash-red rounded-lg flex items-center justify-center mr-2">
                <DashPulseLogo size="default" className="text-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">DoorDash</span>
                  <span className="text-xs text-gray-500 ml-1">• 45m ago</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs text-blue-600">DashPulse</span>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="font-medium text-sm mb-1">Order Confirmed</div>
              <div className="text-sm text-gray-700">
                Your order from Tasty Burger has been confirmed. Estimated delivery time: 8:00-8:15 PM.
              </div>
            </div>
          </div>
        </div>
        
        {/* Other notifications */}
        <div className="mb-4">
          <div className="text-xs font-medium text-gray-500 mb-1 px-1">YESTERDAY</div>
          
          {/* Other app notification */}
          <div className="bg-white rounded-xl shadow-sm mb-2 overflow-hidden">
            <div className="flex items-center px-3 pt-2.5 pb-1">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-xs">📱</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">Messages</span>
                  <span className="text-xs text-gray-500 ml-1">• 1d ago</span>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="text-sm text-gray-700">
                John: Are we still meeting for lunch tomorrow?
              </div>
            </div>
          </div>
          
          {/* Another app notification */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center px-3 pt-2.5 pb-1">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white text-xs">🔔</span>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm font-semibold">Calendar</span>
                  <span className="text-xs text-gray-500 ml-1">• 1d ago</span>
                </div>
              </div>
            </div>
            <div className="px-3 pb-3">
              <div className="text-sm text-gray-700">
                Reminder: Team meeting tomorrow at 10:00 AM
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom lock screen elements */}
      <div className="mt-auto pb-6 px-4">
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 bg-gray-300/50 rounded-full flex items-center justify-center">
            <span className="text-lg">🔦</span>
          </div>
          <div className="w-12 h-12 bg-gray-300/50 rounded-full flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
          <div className="w-10 h-10 bg-gray-300/50 rounded-full flex items-center justify-center">
            <span className="text-lg">📷</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="text-xs text-gray-600">Swipe up to unlock</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsContent;
