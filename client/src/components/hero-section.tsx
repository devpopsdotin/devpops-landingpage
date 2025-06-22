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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 800 }}>
            Your Professional Business Website, Live in 3 Days.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '20px', lineHeight: '1.6' }}>
            I provide a complete, stress-free service: from concept and design to hosting and ongoing support. I handle all the tech, so you can focus on your business.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="btn-primary text-white font-semibold px-12 py-4 text-lg"
          >
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
