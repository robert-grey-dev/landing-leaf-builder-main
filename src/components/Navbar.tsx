import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    setIsMobileMenuOpen(false);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      toast({
        title: "Navigation",
        description: `Scrolling to ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} section`,
        duration: 1500,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-lg py-4" 
            : "bg-transparent py-6"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className={cn(
                "text-3xl font-bold transition-colors duration-300 tracking-tight",
                isScrolled ? "text-primary hover:text-primary/90" : "text-white hover:text-white/90"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Construction Co.
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant={isScrolled ? "default" : "secondary"}
                  size="lg"
                  className={cn(
                    "transition-all duration-300",
                    isScrolled 
                      ? "bg-primary/90 hover:bg-primary text-white" 
                      : "bg-white/10 hover:bg-white/20 text-white",
                    "font-medium"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden transition-colors p-3",
                isScrolled ? "text-gray-600" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
              isMobileMenuOpen
                ? "max-h-[400px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            )}
          >
            <div className={cn(
              "rounded-2xl p-4 space-y-2",
              isScrolled ? "bg-white/50 backdrop-blur-sm" : "bg-black/20 backdrop-blur-sm"
            )}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant={isScrolled ? "default" : "secondary"}
                  className={cn(
                    "w-full justify-start text-lg font-medium",
                    "transition-all duration-200",
                    isScrolled
                      ? "bg-primary/90 hover:bg-primary text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-3 rounded-full",
          "bg-primary/90 hover:bg-primary text-white shadow-lg",
          "transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </>
  );
};