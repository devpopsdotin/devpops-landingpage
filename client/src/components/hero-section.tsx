import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-primary to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Professional Business Website, Live in 3 Days.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            I provide a complete, stress-free service: from concept and design to hosting and ongoing support. I handle all the tech, so you can focus on your business.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
