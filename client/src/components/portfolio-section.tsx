import { Card, CardContent } from "@/components/ui/card";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Brasov Brews - Cafe Website",
      description: "A stylish and modern site designed to showcase their menu and location.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Modern coffee shop interior with elegant lighting and seating"
    },
    {
      title: "Creative Lens - Photography Portfolio",
      description: "A visually-focused portfolio to attract new clients.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Professional DSLR camera with prime lens on clean surface"
    },
    {
      title: "CodeCraft - Web Development",
      description: "A modern developer portfolio showcasing clean code and innovative solutions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Laptop displaying clean code on modern desk setup"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
            Quality You Can See
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See examples of my work with real businesses. Each project is crafted with attention to detail and your success in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover shadow-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
