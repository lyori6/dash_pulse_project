
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="text-doordash-red font-bold text-6xl mb-6">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-6">We couldn't find the page you're looking for.</p>
        
        <Button asChild>
          <Link to="/" className="inline-flex items-center justify-center">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
