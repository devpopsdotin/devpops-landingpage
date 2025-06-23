import { useState } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Heart, 
  Star, 
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Users,
  Package,
  MapPin,
  Clock,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  artisan: string;
  location: string;
  inStock: boolean;
  featured: boolean;
  sale: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Hand-Woven Ceramic Bowl",
    price: 45.00,
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Ceramics",
    rating: 4.8,
    reviews: 24,
    description: "Beautiful hand-thrown ceramic bowl with natural earth tones and organic texture.",
    artisan: "Elena Rodriguez",
    location: "Santa Fe, NM",
    inStock: true,
    featured: true,
    sale: true
  },
  {
    id: 2,
    name: "Handcrafted Leather Journal",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Leather Goods",
    rating: 4.9,
    reviews: 18,
    description: "Premium leather journal with hand-stitched binding and vintage brass clasp.",
    artisan: "Marcus Thompson",
    location: "Portland, OR",
    inStock: true,
    featured: true,
    sale: false
  },
  {
    id: 3,
    name: "Artisan Wooden Cutting Board",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1544716278-e513176f20a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Woodwork",
    rating: 4.7,
    reviews: 31,
    description: "Solid walnut cutting board with natural edge and food-safe finish.",
    artisan: "David Chen",
    location: "Asheville, NC",
    inStock: true,
    featured: false,
    sale: false
  },
  {
    id: 4,
    name: "Hand-Knitted Wool Scarf",
    price: 55.00,
    originalPrice: 75.00,
    image: "https://images.unsplash.com/photo-1544716278-e513176f20a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textiles",
    rating: 4.6,
    reviews: 15,
    description: "Luxurious merino wool scarf with traditional cable knit pattern.",
    artisan: "Sarah Williams",
    location: "Vermont",
    inStock: true,
    featured: false,
    sale: true
  },
  {
    id: 5,
    name: "Silver Wire Wrapped Earrings",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Jewelry",
    rating: 4.9,
    reviews: 42,
    description: "Elegant sterling silver earrings with natural gemstone accents.",
    artisan: "Maria Santos",
    location: "Tucson, AZ",
    inStock: true,
    featured: true,
    sale: false
  },
  {
    id: 6,
    name: "Handmade Soap Set",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bath & Body",
    rating: 4.5,
    reviews: 28,
    description: "Natural soap set with lavender, eucalyptus, and tea tree oils.",
    artisan: "Jennifer Adams",
    location: "Sonoma, CA",
    inStock: false,
    featured: false,
    sale: false
  }
];

const categories = ["All", "Ceramics", "Leather Goods", "Woodwork", "Textiles", "Jewelry", "Bath & Body"];

export default function ArtisanCrafts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<{[key: number]: number}>({});
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => {
      const newItems = { ...prev };
      if (newItems[productId] > 1) {
        newItems[productId]--;
      } else {
        delete newItems[productId];
      }
      return newItems;
    });
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product?.price || 0) * count;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to DevPops</span>
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  Artisan Crafts
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                <a href="#products" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Products</a>
                <a href="#artisans" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Artisans</a>
                <a href="#about" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-800 font-medium transition-colors">Contact</a>
              </div>
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 px-4 py-2 bg-orange-100 text-orange-700 border-orange-200">
              Handcrafted with Love
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Unique
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Handmade Treasures
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Support local artisans and bring authentic, handcrafted pieces into your home. Each item tells a story of tradition, skill, and passion.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Shop Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $75</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Crafts</h3>
              <p className="text-sm text-gray-600">Verified artisans only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search products or artisans..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <Card key={product.id} className={`group overflow-hidden hover:shadow-lg transition-all duration-300 ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}>
                <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === "list" ? "w-full h-full" : "w-full h-48"
                    }`}
                  />
                  {product.sale && (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                      Sale
                    </Badge>
                  )}
                  {product.featured && (
                    <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 hover:bg-white"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`} 
                    />
                  </Button>
                </div>
                
                <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.artisan}</span>
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    <span>{product.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {product.inStock ? (
                      <div className="flex items-center space-x-2">
                        {cartItems[product.id] ? (
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(product.id)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {cartItems[product.id]}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addToCart(product.id)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => addToCart(product.id)}
                            className="bg-orange-600 hover:bg-orange-700"
                          >
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-gray-500">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Artisans Section */}
      <section id="artisans" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-orange-100 text-orange-700 border-orange-200">
              Meet Our Artisans
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Hands Behind the Craft
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece in our collection is created by skilled artisans who have dedicated their lives to perfecting their craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Elena Rodriguez",
                craft: "Ceramic Artist",
                location: "Santa Fe, NM",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Elena has been working with clay for over 15 years, creating beautiful functional pottery inspired by southwestern traditions."
              },
              {
                name: "Marcus Thompson",
                craft: "Leather Craftsman",
                location: "Portland, OR",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Marcus specializes in handcrafted leather goods, combining traditional techniques with modern design sensibilities."
              },
              {
                name: "Maria Santos",
                craft: "Jewelry Designer",
                location: "Tucson, AZ",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Maria creates unique jewelry pieces using natural stones and precious metals, drawing inspiration from her Mexican heritage."
              }
            ].map((artisan, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{artisan.name}</h3>
                  <p className="text-orange-600 font-medium mb-1">{artisan.craft}</p>
                  <p className="text-sm text-gray-500 mb-4 flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {artisan.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed">{artisan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Cart Summary</h3>
            <Badge className="bg-orange-500 text-white">
              {getTotalItems()} items
            </Badge>
          </div>
          <div className="space-y-2 mb-4">
            {Object.entries(cartItems).map(([productId, count]) => {
              const product = products.find(p => p.id === parseInt(productId));
              if (!product) return null;
              return (
                <div key={productId} className="flex justify-between text-sm">
                  <span className="truncate mr-2">{product.name}</span>
                  <span>${(product.price * count).toFixed(2)}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">${getTotalPrice().toFixed(2)}</span>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              Checkout
            </Button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Artisan Crafts</span>
              </div>
              <p className="text-gray-400">
                Connecting you with authentic handmade treasures from skilled artisans worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>hello@artisancrafts.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3" />
                  <span>Mon-Fri 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Artisan Crafts. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}