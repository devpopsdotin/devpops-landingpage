import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Rocket, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Globe, 
  Check, 
  Star,
  ArrowRight,
  Play,
  ChevronDown,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  HeadphonesIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const solutions = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Web Applications",
    description: "We build scalable, secure, and user-friendly platforms from the ground up, tailored to your specific business processes."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps Infrastructure",
    description: "We ensure your application is reliable and ready to scale by deploying it on rock-solid, modern cloud infrastructure."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Product Strategy & Design",
    description: "Our design process focuses on creating intuitive, engaging user experiences that are easy to use and achieve your business goals."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "API & Database Solutions",
    description: "Robust backend systems and APIs that power your applications with optimal performance and data security."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile-First Development",
    description: "Every solution we build is optimized for mobile devices, ensuring your users have a seamless experience across all platforms."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security protocols and compliance standards built into every application we develop."
  }
];

const projectTypes = [
  {
    title: "Startup MVP",
    timeframe: "4-8 weeks",
    description: "Get your minimum viable product to market quickly",
    features: [
      "Core functionality development",
      "User authentication & management",
      "Responsive web design",
      "Basic analytics integration",
      "Cloud deployment",
      "3 months of support"
    ],
    ideal: "Early-stage startups validating their concept"
  },
  {
    title: "Business Application",
    timeframe: "8-16 weeks",
    description: "Custom software tailored to your business processes",
    features: [
      "Advanced feature development",
      "Third-party integrations",
      "Custom admin dashboard",
      "Advanced security features",
      "Performance optimization",
      "6 months of support"
    ],
    ideal: "Growing businesses needing custom solutions"
  },
  {
    title: "Enterprise Platform",
    timeframe: "16+ weeks",
    description: "Large-scale applications with complex requirements",
    features: [
      "Scalable architecture design",
      "Advanced API development",
      "Multi-tenant capabilities",
      "Enterprise security compliance",
      "Load testing & optimization",
      "12 months of support"
    ],
    ideal: "Large organizations with complex needs"
  }
];

const technologies = [
  { icon: <Code className="w-6 h-6" />, name: "React/Next.js", color: "text-blue-600" },
  { icon: <Database className="w-6 h-6" />, name: "PostgreSQL", color: "text-indigo-600" },
  { icon: <Cloud className="w-6 h-6" />, name: "AWS/Azure", color: "text-orange-600" },
  { icon: <Smartphone className="w-6 h-6" />, name: "Mobile Ready", color: "text-green-600" },
  { icon: <Monitor className="w-6 h-6" />, name: "Analytics", color: "text-purple-600" },
  { icon: <Shield className="w-6 h-6" />, name: "Security", color: "text-red-600" }
];

const testimonials = [
  {
    name: "Sarah Chen",
    company: "DataFlow SaaS",
    role: "Founder & CEO",
    content: "TechStart Solutions helped us launch our analytics platform 3x faster than expected. The infrastructure is rock-solid and scales beautifully.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Marcus Rodriguez",
    company: "InnovateLabs",
    role: "CTO",
    content: "The security features and compliance tools saved us months of development. We went from idea to paying customers in just 6 weeks.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Johnson",
    company: "CloudSync Pro",
    role: "Product Manager",
    content: "The analytics dashboard gives us insights we never had before. Customer retention improved by 40% after implementing their recommendations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function TechStartSolutions() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/devpops" className="flex items-center space-x-1 sm:space-x-2 text-slate-600 hover:text-slate-800 transition-colors">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Back to DevPops</span>
              </Link>
              <div className="w-px h-4 sm:h-6 bg-slate-300 hidden sm:block"></div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-2xl font-bold text-slate-800">
                  TechStart Solutions
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#solutions" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Solutions</a>
              <a href="#process" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Process</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 bg-blue-100 text-blue-700 border-blue-200 text-xs sm:text-sm">
              Custom Software Development
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 leading-tight">
              We Build the Custom Software
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                That Powers Your Business
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              We partner with startups and established businesses to design, build, and deploy robust web applications that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full sm:w-auto">
                Get a Project Estimate
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50">
                <Play className="w-5 h-5 mr-2" />
                Schedule a Free Consultation
              </Button>
            </div>
            
            <p className="text-sm text-slate-500 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Hero Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-3xl transform -rotate-6"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-slate-500">dashboard.techstart.com</div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-8 h-8 text-blue-600" />
                      <span className="text-2xl font-bold text-blue-700">2,847</span>
                    </div>
                    <p className="text-blue-600 font-medium">Active Users</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <BarChart3 className="w-8 h-8 text-green-600" />
                      <span className="text-2xl font-bold text-green-700">$24.2K</span>
                    </div>
                    <p className="text-green-600 font-medium">Monthly Revenue</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-8 h-8 text-purple-600" />
                      <span className="text-2xl font-bold text-purple-700">99.9%</span>
                    </div>
                    <p className="text-purple-600 font-medium">Uptime</p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-slate-700">Revenue Growth</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">+32% this month</Badge>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
              Trusted by Leading Companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center opacity-60">
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-600">Innovate Corp</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-600">NextGen Logistics</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-600">Summit Financial</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-600">Quantum Analytics</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-2xl font-bold text-slate-600">TechFlow Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
              Our Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technology Solutions That Drive Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver custom software solutions that solve real business problems and drive measurable growth for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-700 border-green-200">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How We Work With You
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our structured approach ensures your project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <div className="text-2xl font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Discover</h3>
              <p className="text-slate-600 leading-relaxed">
                We analyze your goals and requirements to understand exactly what you need to succeed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <div className="text-2xl font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Design</h3>
              <p className="text-slate-600 leading-relaxed">
                We create wireframes and prototypes for your approval before any development begins.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <div className="text-2xl font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Develop</h3>
              <p className="text-slate-600 leading-relaxed">
                Our expert engineers write clean, efficient code using industry best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                <div className="text-2xl font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Deploy</h3>
              <p className="text-slate-600 leading-relaxed">
                We handle the launch and provide ongoing support to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700 border-purple-200">
              Project Types
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              We Handle Projects of All Sizes
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From MVP development to enterprise platforms, we tailor our approach to your specific needs and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl font-bold text-slate-900">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {project.timeframe}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      What's Included
                    </p>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm font-medium text-slate-700 mb-1">Ideal for:</p>
                    <p className="text-sm text-slate-600">{project.ideal}</p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Discuss This Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-yellow-100 text-yellow-700 border-yellow-200">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join hundreds of successful companies who built their custom software solutions with TechStart Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom software solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
              Get Project Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Questions? Contact us at hello@techstartsolutions.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechStart Solutions</span>
              </div>
              <p className="text-slate-400">
                The fastest way to build and launch your SaaS business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechStart Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}