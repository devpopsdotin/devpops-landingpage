import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              DevPops
            </button>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("hero")}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors w-full text-left rounded-md font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors w-full text-left rounded-md font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors w-full text-left rounded-md font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors w-full text-left rounded-md font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors w-full text-left rounded-md font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
