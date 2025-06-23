import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Coffee, Star, Heart, ShoppingCart, ArrowLeft, Camera, Users, BookOpen } from "lucide-react";
import { Link } from "wouter";

const menuItems = [
  {
    category: "— Espresso Creations —",
    items: [
      { name: "Caramel Macchiato", price: "€4.50", description: "Our signature espresso with vanilla-infused steamed milk and a rich caramel drizzle." },
      { name: "Carpathian Cappuccino", price: "€4.20", description: "Smooth espresso with velvety steamed milk and mountain honey from local beekeepers." },
      { name: "Transylvanian Mocha", price: "€5.10", description: "Dark chocolate meets rich espresso, inspired by medieval castle traditions." },
      { name: "Brasov Blend Pour-Over", price: "€3.80", description: "Single-origin beans from our roaster, medium roast with notes of hazelnut and dark cherry." },
      { name: "Flat White", price: "€4.00", description: "Double shot of espresso with microfoam milk, served in our handcrafted ceramic cups." }
    ]
  },
  {
    category: "— Freshly Baked —",
    items: [
      { name: "Cozonac cu Nucă", price: "€2.50", description: "Traditional Romanian sweet bread with walnuts and rum, baked fresh every morning." },
      { name: "Kürtőskalács", price: "€3.20", description: "Hungarian chimney cake rolled in cinnamon sugar, crispy outside and fluffy inside." },
      { name: "Papanași", price: "€6.80", description: "Romanian cottage cheese donuts with sour cream, blueberry jam, and powdered sugar." },
      { name: "Apple Strudel", price: "€4.50", description: "Flaky pastry filled with spiced apples, served warm with vanilla bean sauce." },
      { name: "Cornuri cu Ciocolată", price: "€2.80", description: "Buttery croissants filled with Belgian dark chocolate, perfect with morning coffee." }
    ]
  },
  {
    category: "— Teas & More —",
    items: [
      { name: "Ceai de Tei", price: "€2.90", description: "Traditional linden tea with local honey, served in vintage teacups." },
      { name: "Chai Latte", price: "€3.60", description: "Spiced tea blend with steamed milk and a touch of cardamom." },
      { name: "Hot Chocolate", price: "€3.40", description: "Rich Belgian chocolate melted with cream, topped with handmade marshmallows." },
      { name: "Tuică Coffee", price: "€5.50", description: "House coffee with a splash of traditional Romanian plum brandy (18+)." }
    ]
  }
];

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Reading Corner",
    description: "Find your perfect spot among vintage books and warm afternoon light"
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Artisan Coffee Making",
    description: "Watch our baristas craft each cup with traditional techniques and modern precision"
  },
  {
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Friends & Stories",
    description: "Where conversations flow as smoothly as our coffee, creating memories one cup at a time"
  },
  {
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Travel & Adventure",
    description: "Share tales of distant places while savoring flavors that transport you home"
  }
];

export default function BrasovBrews() {
  const [selectedCategory, setSelectedCategory] = useState("— Espresso Creations —");

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100" style={{ 
      fontFamily: 'Georgia, "Times New Roman", serif',
      background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #DEB887 75%, #F5DEB3 100%)'
    }}>
      {/* Navigation */}
      <nav className="bg-amber-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b-2 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-amber-200 hover:text-amber-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to DevPops</span>
              </Link>
              <div className="w-px h-6 bg-amber-600"></div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-8 h-8 text-amber-300" />
                <span className="text-2xl font-bold text-amber-100" style={{ fontFamily: 'Georgia, serif', fontWeight: 700 }}>
                  Brașov Brews
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-amber-200 hover:text-amber-100 transition-colors font-medium">Home</a>
              <a href="#menu" className="text-amber-200 hover:text-amber-100 transition-colors font-medium">Menu</a>
              <a href="#gallery" className="text-amber-200 hover:text-amber-100 transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-amber-200 hover:text-amber-100 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(160, 82, 45, 0.6)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-amber-200/90 text-amber-900 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Est. 2018 • Historic Brașov, Romania
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-cream mb-8 leading-tight text-shadow-lg" style={{ 
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              color: '#F5F5DC'
            }}>
              Brașov Brews
            </h1>
            
            <h2 className="text-2xl md:text-4xl text-amber-200 mb-12 font-light leading-relaxed" style={{ 
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic'
            }}>
              Where Stories Brew & Memories Steep
            </h2>
            
            <p className="text-xl text-amber-100 mb-12 leading-relaxed max-w-3xl mx-auto opacity-90">
              Nestled among ancient books and warm wooden tables, we serve artisanal coffee and traditional Romanian pastries in the heart of medieval Brașov.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-cream px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-600"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Explore Our Menu
              </Button>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-cream text-cream hover:bg-cream/10 px-12 py-4 text-lg backdrop-blur-sm"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Find Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-amber-900 text-amber-100 py-4 border-y-2 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-amber-300" />
              <span className="font-medium">📍 Strada Sforii 12, Brașov, Romania</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-5 h-5 text-amber-300" />
              <span className="font-medium">⏰ Mon-Fri: 7:30am-6:00pm | Sat-Sun: 8:30am-7:00pm</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-amber-300" />
              <span className="font-medium">📞 0722 123 456</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-gradient-to-b from-cream to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6" style={{ 
              fontFamily: 'Georgia, serif'
            }}>
              Our Artisan Menu
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Every item crafted with love using traditional recipes passed down through generations, 
              combined with the finest locally-sourced ingredients from the Carpathian region.
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-16">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200">
                <h3 className="text-3xl font-bold text-amber-900 text-center mb-12" style={{ 
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.05em'
                }}>
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, index) => (
                    <div key={index} className="border-b border-amber-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-amber-900 flex-1" style={{ fontFamily: 'Georgia, serif' }}>
                          {item.name}
                        </h4>
                        <div className="flex-1 mx-4 border-b border-dotted border-amber-400 mb-2"></div>
                        <span className="text-xl font-bold text-amber-700" style={{ fontFamily: 'Georgia, serif' }}>
                          {item.price}
                        </span>
                      </div>
                      <p className="text-amber-700 leading-relaxed max-w-4xl" style={{ 
                        fontFamily: 'Georgia, serif', 
                        fontStyle: 'italic',
                        fontSize: '16px'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery Section */}
      <section id="gallery" className="py-24 bg-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6" style={{ 
              fontFamily: 'Georgia, serif'
            }}>
              Life at Brașov Brews
            </h2>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed" style={{ 
              fontFamily: 'Georgia, serif', 
              fontStyle: 'italic' 
            }}>
              More than just a coffee shop – we're a gathering place where stories unfold, 
              friendships flourish, and every moment is steeped in warmth and wonder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-cream mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-amber-200 text-sm leading-relaxed" style={{ 
                      fontFamily: 'Georgia, serif', 
                      fontStyle: 'italic' 
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-cream to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-amber-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                <p className="text-xl font-medium italic">
                  "Every great story begins with a simple dream..."
                </p>
                <p>
                  Founded in 2018 by Maria and Alexandru Popescu, Brașov Brews began as a vision to create a sanctuary 
                  where the rich traditions of Romanian coffee culture could flourish in the heart of our beloved medieval city.
                </p>
                <p>
                  What started as a humble family venture has blossomed into Brașov's most cherished gathering place, 
                  where locals and wanderers alike discover the true meaning of Romanian hospitality amidst the aroma 
                  of freshly roasted beans and the warmth of handcrafted pastries.
                </p>
                <p className="italic">
                  Here, every cup tells a story of heritage, every pastry carries the soul of tradition, 
                  and every moment shared creates memories that echo through time.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-amber-200">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-amber-700 mb-3" style={{ fontFamily: 'Georgia, serif' }}>6+</div>
                    <div className="text-sm text-amber-600 font-medium">Years of Stories</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-700 mb-3" style={{ fontFamily: 'Georgia, serif' }}>3,000+</div>
                    <div className="text-sm text-amber-600 font-medium">Cups Shared</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-700 mb-3" style={{ fontFamily: 'Georgia, serif' }}>20+</div>
                    <div className="text-sm text-amber-600 font-medium">Artisan Blends</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-700 mb-3" style={{ fontFamily: 'Georgia, serif' }}>12</div>
                    <div className="text-sm text-amber-600 font-medium">Traditional Treats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Find Your Way to Us
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Nestled on the narrowest street in Europe, we await your visit with warm welcomes, 
              rich aromas, and stories waiting to be shared over the perfect cup.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-amber-200">
              <MapPin className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>Our Address</h3>
              <p className="text-amber-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                📍 Strada Sforii 12<br />
                Historic Center<br />
                Brașov, 500123<br />
                Romania
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-amber-200">
              <Clock className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>Opening Hours</h3>
              <p className="text-amber-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                ⏰ Monday - Friday<br />
                7:30am - 6:00pm<br />
                Saturday - Sunday<br />
                8:30am - 7:00pm
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-amber-200">
              <Phone className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-amber-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>Get in Touch</h3>
              <p className="text-amber-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                📞 0722 123 456<br />
                ✉️ hello@brasovbrews.ro<br />
                📱 @brasovbrews<br />
                Follow our journey
              </p>
            </Card>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.234!2d25.588!3d45.6427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b7cbbc78e87%3A0x93e3c4b45e8c9e2a!2sStrada%20Sforii%2C%20Bra%C8%99ov%2C%20Romania!5e0!3m2!1sen!2sus!4v1647889234567!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brașov Brews Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-16 border-t-4 border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Coffee className="w-8 h-8 text-amber-300" />
                <span className="text-2xl font-bold text-amber-100" style={{ fontFamily: 'Georgia, serif' }}>
                  Brașov Brews
                </span>
              </div>
              <p className="text-amber-200 leading-relaxed" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Where every cup tells a story and every story creates a memory. 
                Join us in celebrating the art of coffee and the warmth of community.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Quick Links
              </h4>
              <div className="space-y-3">
                <a href="#home" className="block text-amber-200 hover:text-amber-100 transition-colors">Home</a>
                <a href="#menu" className="block text-amber-200 hover:text-amber-100 transition-colors">Our Menu</a>
                <a href="#gallery" className="block text-amber-200 hover:text-amber-100 transition-colors">Gallery</a>
                <a href="#contact" className="block text-amber-200 hover:text-amber-100 transition-colors">Visit Us</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-amber-100 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Connect With Us
              </h4>
              <div className="space-y-3 text-amber-200">
                <p>📞 0722 123 456</p>
                <p>✉️ hello@brasovbrews.ro</p>
                <p>📍 Strada Sforii 12, Brașov</p>
                <p>📱 @brasovbrews</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-800 pt-8 text-center">
            <p className="text-amber-300" style={{ fontFamily: 'Georgia, serif' }}>
              © 2024 Brașov Brews. Crafted with love in the heart of Transylvania.
            </p>
            <p className="text-amber-400 text-sm mt-2" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              A proud DevPops portfolio project
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}