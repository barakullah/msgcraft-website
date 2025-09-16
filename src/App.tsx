import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { DeveloperApiSection } from "./components/DeveloperApiSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { PricingSection } from "./components/PricingSection";
import { TutorialsSection } from "./components/TutorialsSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <DeveloperApiSection />
        <UseCasesSection />
        <PricingSection />
        <TutorialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-bold">Msgcraft</span>
          </div>
          <p className="text-gray-400">© 2025 msgcraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
