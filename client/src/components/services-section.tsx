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
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            Your All-in-One Website Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All packages include my personal attention and support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular 
                  ? "border-accent transform hover:scale-105" 
                  : "border-gray-200 hover:border-accent"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent hover:bg-accent text-white px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <CardTitle className="text-2xl font-bold text-primary mb-6">
                  {pkg.title}
                </CardTitle>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                  {pkg.priceUnit && (
                    <span className="text-gray-600">{pkg.priceUnit}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full btn-primary text-white font-semibold px-8 py-3"
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
