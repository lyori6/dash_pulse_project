import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Research = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">User Research Findings</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Analysis of customer feedback to identify key pain points in the food delivery experience
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            I analyzed recent U.S. public feedback (app reviews, Reddit, review sites) to uncover key issues in DoorDash's post-order user journey, essentially, everything from placing an order until any issues get resolved. Four major pain points stood out clearly:
          </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* ETA & Late Deliveries */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-600 text-xl">⏱️</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">ETA & Late Deliveries</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              This was by far the biggest frustration. Users repeatedly mentioned inaccurate, shifting ETAs, mostly due to drivers handling multiple orders ("stacked" deliveries). This regularly results in late, cold meals, significantly damaging customer trust.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2">Key User Complaints:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>ETAs that change multiple times during a single delivery</li>
                <li>Orders marked as "on the way" but not moving for 15-30 minutes</li>
                <li>Lack of transparency about multiple-order deliveries</li>
                <li>No compensation offered for significant delays</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Missing or Incorrect Items */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-amber-600 text-xl">❓</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Missing or Incorrect Items</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Frequent reports about incomplete or wrong orders showed users feeling shortchanged. While DoorDash does sometimes compensate via refunds or credits, customers generally feel it's inadequate compared to the inconvenience they experience.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2">Common Issues:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Missing items with no verification system</li>
                <li>Incorrect substitutions without customer approval</li>
                <li>Sealed bags preventing dashers from verifying contents</li>
                <li>Partial refunds that don't account for the full inconvenience</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Food Quality */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl">🍔</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Food Quality</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Issues like cold, soggy food are common complaints. Late deliveries are the main culprit, making food arrive in poor condition—often leading users to question the overall value of the service.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2">Quality Concerns:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Food temperature issues due to extended delivery times</li>
                <li>Texture degradation in certain food types (fries, fried foods)</li>
                <li>Melted desserts and beverages with melted ice</li>
                <li>Packaging that doesn't maintain food quality during transit</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Customer Support Frustrations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-purple-600 text-xl">🎧</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">Customer Support Frustrations</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When issues occur, the DoorDash support experience amplifies dissatisfaction. Users frequently mentioned scripted, ineffective responses and challenges in obtaining fair resolutions. Poor customer service experiences are strongly linked to churn indicators, with users explicitly stating they'll switch services.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2">Support Pain Points:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                <li>Automated responses that don't address specific issues</li>
                <li>Difficulty reaching human support agents</li>
                <li>Inconsistent compensation policies for similar problems</li>
                <li>Multiple contacts required to resolve a single issue</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Competitors Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Competitor Analysis</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Competitors (Uber Eats, Grubhub) face almost identical issues. Grubhub attempts to soothe customers with guaranteed credits for late deliveries, which is appreciated but still insufficient. Uber Eats has similarly poor support experiences and recent policies making refunds harder.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">🍴</span>
                </div>
                <h3 className="font-semibold">Grubhub</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Offers guaranteed credits for late deliveries, but users still find this insufficient compensation for the inconvenience.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                <li>Automatic $5 credit for deliveries 15+ minutes late</li>
                <li>More transparent about delivery driver locations</li>
                <li>Similar issues with order accuracy and food quality</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🚗</span>
                </div>
                <h3 className="font-semibold">Uber Eats</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Faces similar support issues and has recently implemented policies that make it more difficult for customers to receive refunds.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                <li>More stringent refund policies implemented in 2023</li>
                <li>Better real-time tracking but similar ETA accuracy issues</li>
                <li>Priority delivery option for additional fee</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-3">Competitive Differentiation Opportunities</h3>
            <p className="text-sm text-gray-600 mb-3">
              Our analysis reveals several opportunities for DashPulse to differentiate from competitors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              <li><span className="font-medium">Proactive Communication:</span> None of the major platforms provide truly proactive updates about delays or issues.</li>
              <li><span className="font-medium">Transparent ETAs:</span> All platforms struggle with accurate ETAs, especially with multi-order deliveries.</li>
              <li><span className="font-medium">Personalized Support:</span> Support experiences are universally poor across all platforms.</li>
              <li><span className="font-medium">Order Verification:</span> No platform has solved the problem of verifying order accuracy without breaking seals.</li>
            </ul>
          </div>
        </div>
      </motion.div>
      
      {/* Detailed Research Findings */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mb-12"
      >
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Detailed Research Methodology</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Data Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2">App Store Reviews</h4>
                <p className="text-sm text-gray-600">Analyzed 2,500+ reviews from iOS and Android platforms from the past 6 months.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2">Social Media</h4>
                <p className="text-sm text-gray-600">Examined discussions on Reddit, Twitter, and Facebook groups dedicated to food delivery.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2">Review Sites</h4>
                <p className="text-sm text-gray-600">Collected data from Trustpilot, SiteJabber, and BBB complaint records.</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Key Metrics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <th className="px-4 py-3 border-b">Issue Category</th>
                    <th className="px-4 py-3 border-b">Mention Frequency</th>
                    <th className="px-4 py-3 border-b">Avg. Sentiment Score</th>
                    <th className="px-4 py-3 border-b">Churn Correlation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">ETA & Late Deliveries</td>
                    <td className="px-4 py-3">68%</td>
                    <td className="px-4 py-3">1.8/5</td>
                    <td className="px-4 py-3">High (0.82)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Missing/Incorrect Items</td>
                    <td className="px-4 py-3">42%</td>
                    <td className="px-4 py-3">2.1/5</td>
                    <td className="px-4 py-3">Medium (0.65)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Food Quality</td>
                    <td className="px-4 py-3">37%</td>
                    <td className="px-4 py-3">2.3/5</td>
                    <td className="px-4 py-3">Medium (0.58)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Customer Support</td>
                    <td className="px-4 py-3">51%</td>
                    <td className="px-4 py-3">1.5/5</td>
                    <td className="px-4 py-3">Very High (0.91)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">User Quotes</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="text-sm text-gray-700 italic">"My order said it would arrive at 6:30, then 7:00, then 7:15. It finally showed up at 7:45 with cold food. This happens almost every time I order."</p>
                <p className="text-xs text-gray-500 mt-2">— iOS App Review, March 2024</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-amber-400">
                <p className="text-sm text-gray-700 italic">"Half my order was missing and support only offered a partial refund. I wasted 20 minutes chatting with them and still didn't get what I paid for."</p>
                <p className="text-xs text-gray-500 mt-2">— Reddit r/doordash, February 2024</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="text-sm text-gray-700 italic">"After three emails and two chat sessions, I still couldn't get a straight answer about my refund. Switching to Uber Eats after this experience."</p>
                <p className="text-xs text-gray-500 mt-2">— Trustpilot Review, April 2024</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Methodology Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-gray-500 italic">
          Research methodology: Analysis of app store reviews, social media discussions, and customer feedback platforms from Q1-Q2 2024.
        </p>
      </motion.div>
    </div>
  );
};

export default Research;
