import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Modern gradient background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-blue-900">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40 text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Your Professional 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-300">
                Business Website,
              </span>
              <span className="block">Live in 3 Days.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed max-w-2xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Complete, stress-free service: from concept and design to hosting and ongoing support. I handle all the tech, so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="btn-primary text-white font-semibold px-12 py-4 text-lg"
              >
                Get Your Free Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-12 py-4 text-lg backdrop-blur-sm"
              >
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 transform rotate-6 hover:rotate-3 transition-transform duration-700">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-accent to-orange-300 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-lg"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-accent rounded w-20"></div>
                    <div className="h-8 bg-white/20 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
