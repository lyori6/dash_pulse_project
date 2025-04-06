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
      const activeTab = navRef.current.querySelector('.active-tab');
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
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105 mr-8">
              <DashPulseLogo size="large" />
              <span className="text-[#E24536] text-xl font-bold">DashPulse</span>
            </Link>
            
            <div className="relative" ref={navRef}>
              {/* Active tab indicator */}
              <div 
                className="absolute bottom-0 h-1 bg-doordash-red transition-all duration-300 ease-in-out rounded-full"
                style={{ 
                  left: activeTabPosition.left, 
                  width: activeTabPosition.width,
                  transform: 'translateY(8px)'
                }}
              />
              
              <nav className="flex">
                <NavLink 
                  to="/" 
                  end
                  className={({ isActive }) => cn(
                    "px-5 py-2 text-gray-600 transition-all duration-300 text-base font-medium rounded-full mx-1",
                    isActive ? "active-tab text-doordash-red" : "hover:bg-gray-50"
                  )}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/deck" 
                  className={({ isActive }) => cn(
                    "px-5 py-2 text-gray-600 transition-all duration-300 text-base font-medium rounded-full mx-1",
                    isActive ? "active-tab text-doordash-red" : "hover:bg-gray-50"
                  )}
                >
                  Full Presentation
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className={cn(
        "container mx-auto flex-1 p-4 md:p-6 transition-opacity duration-300 scroll-smooth",
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
