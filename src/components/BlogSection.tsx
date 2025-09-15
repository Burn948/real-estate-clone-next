import React from 'react';

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="font-body text-primary/60 text-sm uppercase tracking-wider">
                From Our Blog
              </p>
              
              <h2 className="font-heading text-3xl md:text-4xl text-primary leading-tight">
                Global real estate brand Find New Home opens a representative office in Belgrade
              </h2>
              
              <p className="font-body text-primary/80 leading-relaxed">
                In a bold move that has captured the attention of the real estate industry, the esteemed 
                real estate brand, Find New Home, has announced the opening of a new representative 
                office in Belgrade, Serbia. This strategic expansion not only marks the company's first 
                foray into the Balkans but also...
              </p>
              
              <button className="inline-block px-6 py-3 border border-primary text-primary font-body hover:bg-primary hover:text-white transition-colors rounded-md">
                Read More
              </button>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img 
                src="/images/chrome_91ffonkNqs.png" 
                alt="Modern building in Belgrade cityscape at sunset"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border border-primary text-primary font-body hover:bg-primary hover:text-white transition-colors rounded-md">
            <span className="mr-2">☰</span>
            Our Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
