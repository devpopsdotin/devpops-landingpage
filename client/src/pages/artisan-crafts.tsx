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
import ceramicBowlImg from "@assets/pexels-rethaferguson-3817497_1750668805178.jpg";
import texturedPlateImg from "@assets/pexels-khezez-29935101_1750668908753.jpg";
import organicVaseImg from "@assets/pexels-karolina-grabowska-4038962_1750669011736.jpg";
import teaCeremonyImg from "@assets/pexels-ivan-samkov-8952012_1750669088780.jpg";
import artistStudioImg from "@assets/pexels-shvetsa-5682176_1750669225193.jpg";

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
    image: ceramicBowlImg,
    description: "Born from intimate moments with clay, this bowl embodies quiet luxury. The soft curves and warm ivory tone create a vessel that feels like poetry in ceramic form - perfect for mindful rituals.",
    height: "h-96"
  },
  {
    id: 3,
    name: "Textured Serving Plate",
    price: 85,
    image: texturedPlateImg,
    description: "Hand-carved radial lines create a mesmerizing pattern that radiates from the center. This functional art piece transforms every meal into a mindful experience, celebrating the marriage of form and purpose.",
    height: "h-72"
  },
  {
    id: 4,
    name: "Organic Form Vase",
    price: 120,
    image: organicVaseImg,
    description: "A sculptural meditation on form and space. This bulbous vessel breathes with organic curves, designed to cradle nature's gifts—from dried palms to wild stems—transforming any corner into a contemplative sanctuary.",
    height: "h-88"
  },
  {
    id: 5,
    name: "Tea Ceremony Set",
    price: 195,
    image: teaCeremonyImg,
    description: "Inspired by Japanese tea traditions, this earth-toned collection invites ritual and reflection. Each piece—teapot, cups, and serving vessels—shares the same warm clay body, creating harmony in both form and spirit for sacred teatime moments.",
    height: "h-80"
  }
];

export default function ArtisanCrafts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div 
      className="min-h-screen bg-amber-50"
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
            backgroundImage: `linear-gradient(rgba(251, 245, 238, 0.8), rgba(251, 245, 238, 0.9)), url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
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
            Every piece is born from quiet moments at the wheel, where clay and intention meet. 
            My work celebrates the raw beauty of earth transformed—each vessel carrying the memory of gentle hands and patient fire.
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
                  My journey with clay began in the quiet mountains of Japan, where ancient pottery traditions taught me 
                  that each vessel holds the breath of its maker. The wheel became my meditation, the fire my teacher, 
                  and silence my most trusted companion in creation.
                </p>
                
                <p>
                  From my mountain studio, I work with local clay that carries the memory of these hills. Every piece 
                  emerges from an intimate dialogue between earth and intention—curved bowls that cradle morning light, 
                  textured plates that celebrate the ritual of sharing, vases that transform space into sanctuary.
                </p>
                
                <p>
                  My ceramics are invitations to pause. In a world of endless motion, these vessels offer quiet moments: 
                  the weight of a mug in your hands, the shadows cast by dried stems in a sculptural vase, 
                  the simple act of setting a beautiful table.
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
                  src={artistStudioImg}
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
      <section id="collection" className="py-24 bg-amber-25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-6">
              Earth & Fire Collection 2024
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-light text-stone-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sacred Vessels
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
              From intimate bowls to ceremonial sets, each piece honors the ancient dialogue 
              between earth, fire, and human touch—creating vessels for life's quiet rituals.
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