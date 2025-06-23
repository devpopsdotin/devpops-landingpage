export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
            <div className="text-center lg:text-left lg:pt-8 xl:pt-16">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Professional headshot of DevPops founder" 
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto lg:mx-0 mb-6 sm:mb-8 shadow-2xl object-cover border-4 border-white"
              />
            </div>
            <div className="lg:-mt-4 xl:-mt-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center lg:text-left" style={{ fontFamily: 'Poppins, system-ui, sans-serif', fontWeight: 700 }}>
                An Expert on Your Side
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                <p>
                  Hello! I'm Sergiu Popa, the founder of DevPops.
                </p>
                <p>
                  In my career as a DevOps professional, I build and manage large-scale, complex technology systems. I noticed a major problem: small businesses like yours are often stuck between two bad options: paying a fortune for a simple website or wrestling with frustrating DIY builders.
                </p>
                <p>
                  I created DevPops to offer a better way. I use my expertise in building efficient, reliable systems to create high-quality, professional websites without the enterprise-level price tag. I handle all the technical details, so you get a rock-solid online presence and a dedicated partner you can trust.
                </p>
                <p>
                  My DevOps background means your website isn't just beautiful—it's built for performance, security, and growth from day one.
                </p>
              </div>
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
