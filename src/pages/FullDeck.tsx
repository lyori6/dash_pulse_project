import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FullDeck = () => {
  return (
    <div className="max-w-3xl mx-auto my-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Full Presentation Deck</h1>
      <Card className="shadow-md">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E24536" strokeWidth="2"/>
                <path d="M3 8H21" stroke="#E24536" strokeWidth="2"/>
                <path d="M7 3V8" stroke="#E24536" strokeWidth="2"/>
                <path d="M17 3V8" stroke="#E24536" strokeWidth="2"/>
                <circle cx="12" cy="15" r="2" fill="#E24536"/>
              </svg>
            </div>
            
            <p className="text-lg mb-6">
              Ready for the deep dive? Access the complete DashPulse presentation for the full strategic context, 
              detailed research analysis, implementation specifics, and future vision.
            </p>
            
            <p className="text-gray-600 mb-8">
              This deck outlines the data-driven approach, prioritization rationale, MVP definition, 
              risk mitigation, and success metrics discussed.
            </p>
            
            <Button 
              asChild
              size="lg" 
              className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-6 h-auto font-medium text-base"
            >
              <a 
                href="https://drive.google.com/file/d/1KXt74v6gczr0mm9GKj1XBwOvKsM-d8IB/view" 
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2"
              >
                View Full Presentation Deck
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FullDeck;
