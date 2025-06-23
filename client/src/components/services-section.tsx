import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const packages = [
    {
      title: "Digital Launchpad",
      price: "€150",
      features: [
        "A professional single-page site",
        "Perfect for getting online fast",
        "Contact info & social links",
        "Mobile-friendly design"
      ],
      popular: false
    },
    {
      title: "Business Showcase",
      price: "€350",
      features: [
        "A complete 3-5 page website",
        "Photo gallery & services page",
        "Contact form to capture leads",
        "Basic SEO setup"
      ],
      popular: true
    },
    {
      title: "Support & Maintenance Plan",
      price: "€30",
      priceUnit: "/month",
      features: [
        "Secure & fast hosting",
        "Domain management",
        "Software updates",
        "Personal ongoing support"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Pricing & Packages
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
            Your All-in-One
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Website Solution
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose the perfect package for your business needs. All packages include my personal attention and support to ensure your success.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular 
                  ? "border-2 border-accent shadow-2xl scale-105 bg-gradient-to-b from-white to-accent/5" 
                  : "border border-gray-200 hover:border-accent/50 shadow-lg hover:shadow-2xl bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-accent to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative text-center p-4 sm:p-6 lg:p-8 pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                  {pkg.title}
                </CardTitle>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  {pkg.priceUnit && (
                    <span className="text-gray-500 text-base sm:text-lg font-medium">{pkg.priceUnit}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="relative p-4 sm:p-6 lg:p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full btn-primary text-white font-bold px-8 py-4 text-lg group-hover:scale-105 transition-transform"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
