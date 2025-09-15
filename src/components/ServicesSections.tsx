import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Luxury Rentals */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/images/1.jpg" 
                alt="Luxury villa with pool and mountain views"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-body text-sm mb-2 opacity-90">Find New Home's International Realty</p>
                <h3 className="font-heading text-2xl mb-2">Luxury Rentals</h3>
                <p className="font-body text-sm leading-relaxed max-w-xs">
                  Our selection of luxury holiday homes in Montenegro, with special focus on waterfront luxury rentals.
                </p>
              </div>
            </div>
          </div>
          
          {/* Development Project */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="/images/233.jpg" 
                alt="Architectural rendering of modern development project"
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-body text-sm mb-2 opacity-90">Find New Home's International Realty</p>
                <h3 className="font-heading text-2xl mb-2">Development Project</h3>
                <p className="font-body text-sm leading-relaxed max-w-xs">
                  Investment opportunities and development projects in the most exclusive areas of Montenegro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
