import { Outlet, NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import DashPulseLogo from "./DashPulseLogo";
import { useEffect, useState, useRef } from "react";

const Layout = () => {
  const location = useLocation();
  const [pageTransition, setPageTransition] = useState(false);
  const [activeTabPosition, setActiveTabPosition] = useState({ left: 0, width: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <DashPulseLogo size="large" />
            <span className="text-[#E24536] text-xl font-bold">DashPulse</span>
          </Link>
            
          {/* Desktop Navigation */}
          <div className="relative hidden md:block" ref={navRef}>
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
                Presentation
              </NavLink>
              <NavLink 
                to="/research" 
                className={({ isActive }) => cn(
                  "px-5 py-2 text-gray-600 transition-all duration-300 text-base font-medium rounded-full mx-1",
                  isActive ? "active-tab text-doordash-red" : "hover:bg-gray-50"
                )}
              >
                Research
              </NavLink>
            </nav>
          </div>
          
          {/* Burger Menu Button (visible on mobile) - Now aligned right and using DashPulse red color */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn(
              "w-6 h-0.5 bg-[#E24536] transition-transform duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )}></span>
            <span className={cn(
              "w-6 h-0.5 bg-[#E24536] transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "w-6 h-0.5 bg-[#E24536] transition-transform duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}></span>
          </button>
        </div>
        
        {/* Mobile Menu (Slide down) */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-48" : "max-h-0"
        )}>
          <nav className="flex flex-col px-4 py-2 bg-white border-t border-gray-100">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => cn(
                "px-4 py-3 text-gray-600 transition-all duration-300 text-base font-medium border-b border-gray-100",
                isActive ? "text-doordash-red" : ""
              )}
            >
              Home
            </NavLink>
            <NavLink 
              to="/deck" 
              className={({ isActive }) => cn(
                "px-4 py-3 text-gray-600 transition-all duration-300 text-base font-medium border-b border-gray-100",
                isActive ? "text-doordash-red" : ""
              )}
            >
              Presentation
            </NavLink>
            <NavLink 
              to="/research" 
              className={({ isActive }) => cn(
                "px-4 py-3 text-gray-600 transition-all duration-300 text-base font-medium",
                isActive ? "text-doordash-red" : ""
              )}
            >
              Research
            </NavLink>
          </nav>
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
          DashPulse — <a href="https://www.lyori.com" target="_blank" rel="noopener noreferrer">Lyor's</a> Demo
        </div>
      </footer>
    </div>
  );
};

export default Layout;
