import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Brasov Brews - Cafe Website",
      description: "A warm, inviting website for a local Romanian cafe featuring online menu, location details, and authentic cultural storytelling.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      alt: "Modern coffee shop interior with elegant lighting and seating",
      link: "/brasov-brews",
      isLive: true
    },
    {
      title: "TechStart Solutions - SaaS Platform",
      description: "Modern B2B software platform with clean design, intuitive dashboard, and seamless user experience for startup companies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern office workspace with multiple monitors displaying analytics",
      link: "/techstart-solutions",
      isLive: true
    },
    {
      title: "Artisan Crafts - E-commerce Store",
      description: "Beautiful online store showcasing handmade products with integrated payment processing and inventory management.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Laptop displaying clean code on modern desk setup",
      link: "/artisan-crafts",
      isLive: true
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-80 h-80 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Portfolio Showcase
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Quality You Can
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                See & Feel
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Real projects for real businesses. Each website is crafted with attention to detail, modern design principles, and your success as the top priority.
            </p>
            
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-black text-accent">15+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent">3</div>
                <div className="text-sm text-gray-500">Day Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">devpops.com</div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-accent to-orange-300 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-20 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-accent rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const ProjectCard = (
              <Card 
                key={index}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 bg-white cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Live/Coming Soon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.isLive 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.isLive ? '🟢 Live' : '🔄 Coming Soon'}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center mt-6 text-accent font-medium group-hover:text-primary transition-colors">
                    <span className="text-sm">
                      {project.isLive ? 'View Live Site' : 'Preview Coming Soon'}
                    </span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            );

            return project.isLive ? (
              <Link key={index} href={project.link}>
                {ProjectCard}
              </Link>
            ) : (
              <div key={index} className="opacity-75">
                {ProjectCard}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
