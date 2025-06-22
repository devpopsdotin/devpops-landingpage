export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="text-center lg:text-left lg:pt-16">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Professional headshot of DevPops founder" 
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-8 shadow-2xl object-cover border-4 border-white"
              />
            </div>
            <div className="lg:-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
                Building Trust Through Quality
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', lineHeight: '1.6' }}>
                Hello! I'm the founder of DevPops. As a professional DevOps expert with a passion for building, I created this service for small businesses who need a powerful online presence without the high costs and complexity. My mission is to be your trusted technical partner, delivering a high-quality website quickly and providing the support you need to succeed.
              </p>
            </div>
          </div>
          
          {/* Decorative elements for modern asymmetrical design */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-8 translate-x-8 hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full translate-y-8 -translate-x-8 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
