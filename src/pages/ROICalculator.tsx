
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const ROICalculator = () => {
  // Fixed assumptions
  const totalAnnualOrders = 500000000; // 500 Million
  const currentWismoRate = 0.05; // 5%

  // Interactive inputs with updated default values
  const [wismoReduction, setWismoReduction] = useState(8); // Default 8%
  const [developmentCost, setDevelopmentCost] = useState(750000); // Default $750,000
  const [costPerContact, setCostPerContact] = useState(7); // Default $7.00

  // Calculated outputs
  const [contactsReduced, setContactsReduced] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [annualROI, setAnnualROI] = useState(0);

  // Calculate results whenever inputs change
  useEffect(() => {
    // Current total WISMO contacts
    const currentContacts = totalAnnualOrders * currentWismoRate;
    
    // Contacts reduced based on reduction percentage
    const reduced = currentContacts * (wismoReduction / 100);
    setContactsReduced(reduced);
    
    // Annual savings
    const savings = reduced * costPerContact;
    setAnnualSavings(savings);
    
    // Annual ROI percentage
    const roi = (savings / developmentCost) * 100;
    setAnnualROI(roi);
  }, [wismoReduction, developmentCost, costPerContact]);

  // Format large numbers with commas and abbreviations
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)} Million`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toFixed(0);
  };

  // Format currency
  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)} Million`;
    } else if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}k`;
    }
    return `$${num.toFixed(2)}`;
  };

  // Format ROI percentage
  const formatROI = (percentage: number) => {
    return `${Math.round(percentage)}%`;
  };

  return (
    <div className="max-w-4xl mx-auto my-4 md:my-12 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">DashPulse V1: Illustrative ROI Calculator (WISMO Reduction)</h1>
      
      <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-6 flex items-start gap-3">
        <Info className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-amber-800">
          <strong>NOTE:</strong> This calculator uses hypothetical assumptions for illustrative purposes only. 
          Actual results will depend on real-world data, implementation, and user adoption.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Assumptions Section */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Calculation Assumptions</h2>
              
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Total Annual US DoorDash Orders (Est.):</span>
                  <span className="font-bold">{formatNumber(totalAnnualOrders)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Current Estimated WISMO Contact Rate:</span>
                  <span className="font-bold">{(currentWismoRate * 100).toFixed(1)}%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Interactive Inputs Section */}
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Adjust Key Variables</h2>
              <p className="text-sm text-gray-600 mb-6">Use the sliders below to explore potential impact:</p>
              
              <div className="space-y-8">
                {/* WISMO Reduction Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Target WISMO Reduction % (via DashPulse V1)</label>
                    <span className="font-bold text-doordash-blue">{wismoReduction}%</span>
                  </div>
                  <Slider 
                    value={[wismoReduction]} 
                    min={0} 
                    max={20} 
                    step={1}
                    onValueChange={(value) => setWismoReduction(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>20%</span>
                  </div>
                </div>
                
                {/* Development Cost Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Estimated V1 Development Cost (Illustrative)</label>
                    <span className="font-bold text-doordash-blue">${(developmentCost/1000).toFixed(0)}k</span>
                  </div>
                  <Slider 
                    value={[developmentCost]} 
                    min={250000} 
                    max={2000000} 
                    step={50000}
                    onValueChange={(value) => setDevelopmentCost(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$250k</span>
                    <span>$2M</span>
                  </div>
                </div>
                
                {/* Cost Per Contact Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Estimated Cost Per WISMO Contact</label>
                    <span className="font-bold text-doordash-blue">${costPerContact.toFixed(2)}</span>
                  </div>
                  <Slider 
                    value={[costPerContact]} 
                    min={3} 
                    max={12} 
                    step={0.5}
                    onValueChange={(value) => setCostPerContact(value[0])}
                    className="py-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$3.00</span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Results */}
        <div>
          <Card className="shadow-sm h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-6">Estimated Annual Impact</h2>
              
              <div className="space-y-6 flex-grow">
                {/* WISMO Contacts Reduced */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">WISMO Contacts Reduced Annually:</h3>
                  <div id="output-contacts-reduced" className="text-2xl font-bold text-doordash-blue">
                    ~{formatNumber(contactsReduced)}
                  </div>
                </div>
                
                {/* Annual Support Cost Savings */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Estimated Annual Support Cost Savings:</h3>
                  <div id="output-annual-saving" className="text-2xl font-bold text-doordash-blue">
                    ~{formatCurrency(annualSavings)}
                  </div>
                </div>
                
                {/* Annual ROI Percentage */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-600 mb-1">Illustrative Annual ROI % (Saving / Dev Cost):</h3>
                  <div id="output-annual-roi" className="text-2xl font-bold text-doordash-blue">
                    ~{formatROI(annualROI)}
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-auto">
                <p className="text-sm text-blue-800">
                  <strong>Calculation:</strong> Est. Annual Saving = (Total Orders * Rate * Reduction %) * Cost per Contact. ROI % = (Annual Saving / Dev Cost) * 100.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
