import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Coffee, Star, Heart, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      { name: "Transylvanian Espresso", price: "12 RON", description: "Rich, dark roast with hints of chocolate and nuts" },
      { name: "Carpathian Cappuccino", price: "18 RON", description: "Smooth espresso with velvety steamed milk and mountain honey" },
      { name: "Brasov Blend", price: "15 RON", description: "Our house specialty - medium roast with caramel notes" },
      { name: "Medieval Mocha", price: "22 RON", description: "Decadent chocolate coffee inspired by old town traditions" }
    ]
  },
  {
    category: "Fresh Pastries",
    items: [
      { name: "Cozonac Traditional", price: "8 RON", description: "Traditional Romanian sweet bread with walnuts" },
      { name: "Kürtőskalács", price: "12 RON", description: "Hungarian chimney cake with cinnamon sugar" },
      { name: "Papanași", price: "25 RON", description: "Romanian donuts with sour cream and jam" },
      { name: "Strudel de Mere", price: "18 RON", description: "Apple strudel with vanilla sauce" }
    ]
  }
];

export default function BrasovBrews() {
  const [selectedCategory, setSelectedCategory] = useState("Signature Coffees");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-500 hover:text-amber-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to DevPops</span>
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-8 h-8 text-amber-600" />
                <span className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                  Brașov Brews
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/10 to-red-500/20"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                Located in Historic Brașov
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                Authentic 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Romanian Coffee
                </span>
                <span className="block">Experience</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
                Nestled in the heart of medieval Brașov, we serve exceptional coffee and traditional Romanian pastries in a warm, welcoming atmosphere that celebrates our rich cultural heritage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Our Menu
                </Button>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-700 hover:bg-amber-50 px-12 py-4 text-lg"
                >
                  Visit Us Today
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-gray-500">4.9/5 Rating</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Favorites</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Coffee className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">Carpathian Cappuccino</span>
                      </div>
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Coffee className="w-5 h-5 text-orange-600" />
                        <span className="font-medium">Medieval Mocha</span>
                      </div>
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              <Coffee className="w-4 h-4 mr-2" />
              Fresh Daily
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Our Authentic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Menu
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every item is crafted with love using traditional recipes passed down through generations, combined with the finest locally-sourced ingredients.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              {menuItems.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                    selectedCategory === category.category
                      ? 'bg-white text-amber-700 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems
              .find(cat => cat.category === selectedCategory)
              ?.items.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border border-amber-100">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-xl font-black text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2018 by Maria and Alexandru Popescu, Brașov Brews began as a dream to bring authentic Romanian coffee culture to the heart of our beloved medieval city.
                </p>
                <p>
                  What started as a small family business has grown into Brașov's most cherished coffee destination, where locals and tourists alike gather to experience the warmth of Romanian hospitality alongside exceptional coffee and traditional pastries.
                </p>
                <p>
                  Every cup tells a story of our heritage, every pastry carries the love of our traditions, and every visit creates memories that last a lifetime.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-amber-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Years Serving</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-orange-600 mb-2">2000+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-amber-600 mb-2">15</div>
                    <div className="text-sm text-gray-600">Coffee Varieties</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-orange-600 mb-2">8</div>
                    <div className="text-sm text-gray-600">Traditional Pastries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of historic Brașov, we're easy to find and always ready to welcome you with a warm smile and exceptional coffee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600">
                Strada Republicii 45<br />
                Brașov, 500030<br />
                Romania
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 7:00 - 20:00<br />
                Saturday: 8:00 - 21:00<br />
                Sunday: 9:00 - 19:00
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
              <p className="text-gray-600">
                <Phone className="w-4 h-4 inline mr-2" />
                +40 268 123 456<br />
                <Mail className="w-4 h-4 inline mr-2" />
                hello@brasovbrews.ro
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold">Brașov Brews</span>
            </div>
            <p className="text-gray-400">
              © 2024 Brașov Brews. Made with ❤️ in Transylvania
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}