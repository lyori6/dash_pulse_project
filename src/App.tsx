
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import FeatureIntegration from "./pages/FeatureIntegration";
import DashPulseFlow from "./pages/DashPulseFlow";
import AppendixScreens from "./pages/AppendixScreens";
import ROICalculator from "./pages/ROICalculator";
import FullDeck from "./pages/FullDeck";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="features" element={<FeatureIntegration />} />
              <Route path="flow" element={<DashPulseFlow />} />
              <Route path="states" element={<AppendixScreens />} />
              <Route path="calculator" element={<ROICalculator />} />
              <Route path="deck" element={<FullDeck />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
