import { useState } from "react";
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

const features = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Rapid Deployment",
    description: "Launch your SaaS product in days, not months, with our pre-built infrastructure and templates."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Built on modern cloud architecture for optimal performance and scalability worldwide."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC2 compliance, end-to-end encryption, and automated backups."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Management",
    description: "Complete user authentication, role-based access control, and team collaboration tools."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Real-time dashboards, custom reports, and actionable insights to grow your business."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Scale",
    description: "Auto-scaling infrastructure that grows with your business from startup to enterprise."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for new SaaS entrepreneurs",
    features: [
      "Up to 1,000 users",
      "Basic analytics",
      "Email support",
      "5 team members",
      "API access",
      "SSL certificate"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "/month",
    description: "For growing SaaS businesses",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "Priority support",
      "Unlimited team members",
      "Advanced API features",
      "Custom domain",
      "Advanced integrations",
      "A/B testing tools"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/month",
    description: "For large-scale operations",
    features: [
      "Unlimited users",
      "Custom analytics",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solution",
      "Advanced security features",
      "SLA guarantee"
    ],
    popular: false
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to DevPops</span>
              </Link>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-slate-800">
                  TechStart Solutions
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Features</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Pricing</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              🚀 Launch Your SaaS in Record Time
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Build Your SaaS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Without the Hassle
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete SaaS platform with authentication, payments, analytics, and deployment. 
              Focus on your business logic while we handle the infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 border-indigo-200">
              Everything You Need
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Powerful Features for Modern SaaS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built with the latest technologies and best practices. Everything you need to create, launch, and scale your SaaS business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Built with Modern Technology</h3>
              <p className="text-slate-600">Industry-leading tools and frameworks for maximum performance and reliability.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <div className={`${tech.color}`}>
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-green-100 text-green-700 border-green-200">
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg scale-105' 
                  : 'border-slate-200 hover:border-blue-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="px-4 py-2 bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-slate-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                    }`}
                  >
                    Get Started
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
              Trusted by SaaS Founders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join hundreds of successful entrepreneurs who launched their SaaS businesses with TechStart Solutions.
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who chose TechStart Solutions to build their dream SaaS business. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-blue-50">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
              <HeadphonesIcon className="w-5 h-5 mr-2" />
              Talk to Sales
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