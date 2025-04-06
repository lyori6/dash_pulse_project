# DashPulse Restructuring Implementation Plan

## Current Understanding

From examining the codebase, we have the following key components:

### Pages:
- **Home.tsx** - Welcome page with intro content
- **DashPulseFlow.tsx** - Core flow screens (normal, minor delay, significant delay, help button)
- **AppendixScreens.tsx** - Additional states (initial, update log, post-delivery, v2 concept)
- **FeatureIntegration.tsx** - Pre-order experience (discovery & search, checkout)
- **FullDeck.tsx** - Link to the presentation deck
- **ROICalculator.tsx** - ROI calculator (to be removed)

### Components:
- **MobileMockup.tsx** - Generic phone mockup component
- **MobileRestaurantSearch.tsx** - Restaurant discovery screen
- **MobileCheckout.tsx** - Checkout experience screen

## New Structure Requirements

1. **Single-Page Flow**: Combine all screens into one scrollable view on the Home page
2. **Navigation**: Only Home and Full Deck in header (no ROI calculator)
3. **Screen Sequence**:

   **Flow Screens** (in order):
   1. Checkout experience (from Feature Integration)
   2. Order confirmed (Initial State from AppendixScreens)
   3. Normal state (from DashPulseFlow)
   4. Minor delay (from DashPulseFlow) 
   5. Significant delay (from DashPulseFlow)
   6. Post delivery (from AppendixScreens)

   **Parallel Screens** (not part of main flow):
   - Nearby restaurants (Discovery from Feature Integration)
   - AB test (Help Button from DashPulseFlow)
   - Update log (from AppendixScreens)
   - V2 concept (from AppendixScreens)

## Navigation Changes 
- Simplify the header to only include "Home" and "Full Deck" 
- Remove ROI Calculator references 

## Revised Implementation Plan (Modular Approach)

To avoid timeouts and create a cleaner implementation, we'll break down the work into smaller, incremental steps:

### Phase 1: Core Components

#### 1.1 PhoneFrame Component
- Create a simple wrapper around the existing MobileMockup component
- Add selection state (active/inactive)
- Add visual indicators for flow vs. parallel screens
- Support keyboard navigation between phones

```jsx
// Example usage:
<PhoneFrame 
  title="Checkout Experience"
  description="The checkout page with DashPulse indicator"
  isActive={selectedPhone === 'checkout'}
  type="flow" 
  index={1}
  onSelect={() => setSelectedPhone('checkout')}
>
  {/* Content goes here */}
</PhoneFrame>
```

#### 1.2 PhoneContent Components
Create separate, small components for each screen's content:

- `CheckoutContent.tsx` - Checkout experience screen
- `OrderConfirmedContent.tsx` - Initial state screen
- `NormalStateContent.tsx` - Normal tracking screen
- `MinorDelayContent.tsx` - Minor delay screen
- `SignificantDelayContent.tsx` - Significant delay screen
- `PostDeliveryContent.tsx` - Post delivery screen
- `DiscoveryContent.tsx` - Restaurant discovery screen
- `HelpButtonContent.tsx` - AB test with help button
- `UpdateLogContent.tsx` - Update log screen
- `V2ConceptContent.tsx` - V2 concept screen

### Phase 2: Section Components

#### 2.1 FlowSection Component
- Container for main flow screens
- Handles section title and description
- Manages phone selection within the flow section

#### 2.2 ParallelSection Component
- Container for parallel screens
- Similar to FlowSection but with different styling

### Phase 3: Integration

#### 3.1 Home Page Integration
- Update Home.tsx to use the new section components
- Add intro section and overall layout
- Implement smooth scrolling between sections

#### 3.2 Responsive Design
- Ensure everything works across device sizes
- Add optimizations for mobile view

### Phase 4: Animation and Polish

#### 4.1 Add animations
- Smooth transitions when selecting phones
- Loading animations
- Highlight effects

#### 4.2 Performance optimizations
- Lazy loading for phone content
- Only render visible phones fully

## Implementation Order

1. PhoneFrame component
2. One or two PhoneContent components as a proof of concept
3. FlowSection component with the initial content components
4. Basic Home integration with FlowSection
5. Remaining PhoneContent components
6. ParallelSection component
7. Complete Home integration
8. Animations and polish

## Technical Implementation Details

### 1. PhoneFrame Component

```tsx
interface PhoneFrameProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  isActive: boolean;
  type: "flow" | "parallel";
  index?: number;
  onSelect: () => void;
}

const PhoneFrame = ({ children, title, description, isActive, type, index, onSelect }: PhoneFrameProps) => {
  // Implementation here
};
```

### 2. PhoneContent Components

Each content component should:
- Accept minimal props
- Be focused on just the content, not the frame
- Reuse existing code from current screens
- Be kept small enough to avoid timeouts

### 3. Section Structure

```tsx
const HomePage = () => {
  const [selectedPhone, setSelectedPhone] = useState('checkout');
  
  return (
    <div className="container mx-auto">
      <IntroSection />
      
      <FlowSection 
        selectedPhone={selectedPhone}
        onSelectPhone={setSelectedPhone}
      />
      
      <ParallelSection
        selectedPhone={selectedPhone}
        onSelectPhone={setSelectedPhone}
      />
    </div>
  );
};
```

## Styling Approach

- Use existing Tailwind classes when possible
- Keep animations lightweight
- Use `cn()` utility for conditional classes
- Ensure responsive design at each step

## Migration Tasks

1. Extract reusable parts from existing screens
2. Create new component structure
3. Update imports and references
4. Test thoroughly
5. Remove obsolete routes and components

By following this incremental approach, we'll avoid timeouts while creating a clean, maintainable implementation.
