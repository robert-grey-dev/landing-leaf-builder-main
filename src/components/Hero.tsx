import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="hero-section min-h-[90vh] flex items-center justify-center text-white relative overflow-hidden"
      role="banner"
      aria-label="Main hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className={`space-y-6 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Your Future,<br />Creating Excellence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Transforming spaces with precision and innovation since 2010
          </p>
          <Button 
            className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg
                     transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl
                     focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            aria-label="View our projects"
          >
            View Our Projects <ArrowRight className="ml-2 w-5 h-5 text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
};