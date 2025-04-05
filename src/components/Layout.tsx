import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import DashPulseLogo from "./DashPulseLogo";
import { useEffect, useState, useRef } from "react";

const Layout = () => {
  const location = useLocation();
  const [pageTransition, setPageTransition] = useState(false);
  const [activeTabPosition, setActiveTabPosition] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  
  // Trigger animation when route changes
  useEffect(() => {
    setPageTransition(true);
    const timer = setTimeout(() => {
      setPageTransition(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Update active tab indicator position
  useEffect(() => {
    if (navRef.current) {
      const activeTab = navRef.current.querySelector('.text-doordash-red');
      if (activeTab) {
        const { left, width } = activeTab.getBoundingClientRect();
        const navLeft = navRef.current.getBoundingClientRect().left;
        setActiveTabPosition({ 
          left: left - navLeft, 
          width 
        });
      }
    }
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <DashPulseLogo />
            <span className="text-[#E24536] text-xl font-bold">DashPulse</span>
          </Link>
        </div>
        <div className="container mx-auto px-4 overflow-x-auto">
          <nav className="flex space-x-4 min-w-max relative" ref={navRef}>
            {/* Active tab indicator */}
            <div 
              className="absolute bottom-0 h-0.5 bg-doordash-red transition-all duration-300 ease-in-out"
              style={{ 
                left: activeTabPosition.left, 
                width: activeTabPosition.width,
                transform: 'translateY(1px)'
              }}
            />
            
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red"
              )}
            >
              Home / Intro
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red"
              )}
            >
              Feature Integration
            </NavLink>
            <NavLink 
              to="/flow" 
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red"
              )}
            >
              Core Flow
            </NavLink>
            <NavLink 
              to="/states" 
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red" 
              )}
            >
              Other States
            </NavLink>
            <NavLink 
              to="/calculator" 
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red"
              )}
            >
              ROI Calculator
            </NavLink>
            <NavLink 
              to="/deck" 
              className={({ isActive }) => cn(
                "px-4 py-2 text-gray-600 transition-all duration-300 border-b-2 whitespace-nowrap",
                isActive ? "border-doordash-red text-doordash-red" : "border-transparent hover:text-doordash-red"
              )}
            >
              Full Deck
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={cn(
        "container mx-auto flex-1 p-4 md:p-6 transition-opacity duration-300",
        pageTransition ? "opacity-95" : "opacity-100"
      )}>
        <Outlet />
      </main>
      <footer className="bg-white shadow-sm-top mt-8">
        <div className="container mx-auto p-4 text-center text-sm text-gray-500">
          DashPulse — <a href="https://www.lyori.com" target="_blank" rel="noopener noreferrer">Lyor's</a> SimpleClosure Interview Demo
        </div>
      </footer>
    </div>
  );
};

export default Layout;
