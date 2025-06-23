import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Instagram,
  Mail,
  MapPin,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  height: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Hand-Thrown Stoneware Mug",
    price: 48,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Crafted from locally sourced clay and finished with a subtle oatmeal glaze. Perfect for your morning coffee ritual. Each piece is unique and may have slight variations.",
    height: "h-80"
  },
  {
    id: 2,
    name: "Minimalist Ceramic Bowl",
    price: 65,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A study in simplicity. This wheel-thrown bowl celebrates the natural beauty of clay with clean lines and an understated form.",
    height: "h-96"
  },
  {
    id: 3,
    name: "Textured Serving Plate",
    price: 85,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Inspired by natural rock formations, this plate features subtle texture work that catches light beautifully on your dining table.",
    height: "h-72"
  },
  {
    id: 4,
    name: "Organic Form Vase",
    price: 120,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Each vase is shaped by intuition and touch, creating vessels that feel alive and connected to the earth from which they came.",
    height: "h-88"
  },
  {
    id: 5,
    name: "Tea Ceremony Set",
    price: 195,
    image: "https://images.unsplash.com/photo-1610389051254-64849803c5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "A complete set for mindful tea preparation. Includes teapot, two cups, and serving tray, all thrown from the same clay body.",
    height: "h-80"
  }
];

export default function ArtisanCrafts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div 
      className="min-h-screen bg-stone-50"
      style={{ 
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#2c2c2c'
      }}
    >
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-3 text-stone-600 hover:text-stone-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to DevPops</span>
              </Link>
              <div className="w-px h-6 bg-stone-300"></div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-stone-100 rounded-full"></div>
                </div>
                <div>
                  <div className="text-xl font-light text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Elena Rodriguez
                  </div>
                  <div className="text-sm text-stone-500">Ceramic Studio</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#collection" className="text-stone-600 hover:text-stone-800 font-light transition-colors">Collection</a>
                <a href="#about" className="text-stone-600 hover:text-stone-800 font-light transition-colors">About</a>
                <a href="#contact" className="text-stone-600 hover:text-stone-800 font-light transition-colors">Contact</a>
              </div>
              <Button variant="outline" size="sm" className="border-stone-300 text-stone-700 hover:bg-stone-100">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Inquire
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(245, 245, 240, 0.7), rgba(245, 245, 240, 0.8)), url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-8">
            Handcrafted Ceramics
          </p>
          
          <h1 
            className="text-5xl lg:text-7xl font-light text-stone-800 mb-8 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            From Our Hands
            <span className="block italic">to Yours</span>
          </h1>
          
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Every piece is designed and thrown by hand in my small studio in the heart of the mountains. 
            My work is inspired by natural forms and the belief that everyday objects should be beautiful.
          </p>
          
          <Button 
            size="lg" 
            className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 text-base font-light"
          >
            Explore the Craft
          </Button>
        </div>
      </section>

      {/* Meet the Maker Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 
                className="text-4xl lg:text-5xl font-light text-stone-800 mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Story Behind
                <span className="block italic">Each Piece</span>
              </h2>
              
              <div className="space-y-6 text-stone-600 leading-relaxed font-light">
                <p>
                  I discovered my love for clay during a transformative summer in Japan, where I studied traditional 
                  pottery techniques with master ceramicists. The meditative process of centering clay on the wheel 
                  became a form of mindfulness that continues to guide my practice today.
                </p>
                
                <p>
                  My studio, nestled in the Blue Ridge Mountains, is where each piece begins its journey. I source 
                  local clay whenever possible, honoring the earth from which my work emerges. The natural variations 
                  in the clay body create subtle differences that make every piece unique.
                </p>
                
                <p>
                  Through my ceramics, I hope to bring moments of quiet beauty into daily rituals. Whether it's 
                  the morning coffee in a hand-thrown mug or flowers arranged in a wheel-thrown vase, these objects 
                  are meant to be lived with and cherished.
                </p>
              </div>

              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center text-stone-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Blue Ridge Mountains, NC</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-stone-500 hover:text-stone-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-stone-200 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Elena Rodriguez in her ceramic studio"
                  className="relative w-full rounded-lg object-cover shadow-lg filter grayscale"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-6">
              Winter Collection 2024
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-light text-stone-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Explore the Craft
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              Each piece in this collection celebrates the raw beauty of clay, 
              shaped by hand and fired with intention.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="break-inside-avoid relative group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.height}`}
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 
                        className="text-xl font-light mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-white/80 text-sm font-light">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <div className={`absolute top-4 right-4 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-10 h-10 p-0 bg-white/90 border-white/50 hover:bg-white"
                    >
                      <Heart className="w-4 h-4 text-stone-600" />
                    </Button>
                  </div>
                </div>
                
                {/* Product Details Below Image */}
                <div className="p-6 bg-white rounded-b-lg">
                  <h3 
                    className="text-lg font-light text-stone-800 mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 font-light">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-stone-800">
                      ${product.price}
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-stone-300 text-stone-700 hover:bg-stone-100 font-light"
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl lg:text-5xl font-light text-stone-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Making Process
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              From raw clay to finished piece, each creation follows a time-honored process 
              that connects us to centuries of ceramic tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Centering",
                description: "Clay is centered on the wheel, a meditative process that requires patience and focus. This foundation determines the entire character of the piece."
              },
              {
                step: "02", 
                title: "Shaping",
                description: "Through gentle pressure and intuitive touch, the clay rises into form. Each piece develops its own personality during this intimate dialogue between maker and material."
              },
              {
                step: "03",
                title: "Firing",
                description: "The kiln transforms soft clay into durable ceramic through intense heat. This ancient alchemy creates the final piece, unique and permanent."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-6xl font-light text-stone-300 mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {process.step}
                </div>
                <h3 
                  className="text-2xl font-light text-stone-800 mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {process.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 
            className="text-4xl lg:text-5xl font-light text-stone-800 mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Create Together
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Each piece is made to order, allowing for personalization and ensuring 
            that your ceramic finds its perfect home with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 font-light"
            >
              Commission a Piece
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-stone-300 text-stone-700 hover:bg-stone-200 px-8 py-4 font-light"
            >
              Visit the Studio
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-stone-500">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">elena@ceramicstudio.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Asheville, NC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-stone-800 rounded-full"></div>
                </div>
                <div>
                  <div className="text-lg font-light text-stone-100" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Elena Rodriguez
                  </div>
                  <div className="text-sm text-stone-400">Ceramic Studio</div>
                </div>
              </div>
              <p className="text-stone-400 leading-relaxed font-light">
                Handcrafted ceramics that bring beauty and mindfulness to everyday moments.
              </p>
            </div>
            
            <div>
              <h4 className="text-stone-100 font-light mb-4">Studio</h4>
              <ul className="space-y-3 text-stone-400 font-light">
                <li><a href="#" className="hover:text-stone-200 transition-colors">Collection</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Commissions</a></li>
                <li><a href="#" className="hover:text-stone-200 transition-colors">Workshops</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-stone-100 font-light mb-4">Connect</h4>
              <div className="space-y-3 text-stone-400 font-light">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>elena@ceramicstudio.com</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-4 h-4 mr-3" />
                  <span>@elenaceramics</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Asheville, NC</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400 font-light">
            <p>&copy; 2024 Elena Rodriguez Ceramic Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}