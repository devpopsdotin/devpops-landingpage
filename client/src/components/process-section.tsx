import { Phone, Code, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: "Discovery Call",
      description: "We'll have a quick chat to understand your vision and goals."
    },
    {
      icon: Code,
      title: "Build & Review",
      description: "I'll build your website and we'll review it together to make sure it's perfect."
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "I'll handle the entire launch process and provide ongoing support."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            Your Path to a Professional Website
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, proven process that takes you from idea to launch in just 3 days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
