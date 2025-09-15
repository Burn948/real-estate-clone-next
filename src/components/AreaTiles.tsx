import React from 'react';
import lusticaBayImage from '../../public/images/Lushtikabay.png';
import dukleyGardensImage from '../../public/images/Dukley Gardens.jpg';
import portoNoviImage from '../../public/images/chrome_Qt02rhw609.png';
import portoMontenegroImage from '../../public/images/Porto montengro.png';
import generalCatalogImage from '../../public/images/pexels-kate-holovacheva-1824230-9743746.jpg';

interface AreaTile {
  title: string;
  image: string;
  href: string;
}

const areas: AreaTile[] = [
  {
    title: 'Lustica Bay',
    image: lusticaBayImage,
    href: '/catalog?location=lustica'
  },
  {
    title: 'Dukley Gardens',
    image: dukleyGardensImage,
    href: '/catalog?location=dukley'
  },
  {
    title: 'Porto Novi',
    image: portoNoviImage,
    href: '/catalog?location=porto-novi'
  },
  {
    title: 'Porto Montenegro',
    image: portoMontenegroImage,
    href: '/catalog?location=porto-montenegro'
  },
  {
    title: 'General Catalog',
    image: generalCatalogImage,
    href: '/catalog'
  }
];

const AreaTiles = () => {
  return (
    <section className="pt-12 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {areas.map((area, index) => (
            <a
              key={index}
              href={area.href}
              className="area-tile group block"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={area.image}
                  alt={`${area.title} - Luxury properties in Montenegro`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-semibold text-white text-lg md:text-xl text-shadow-lg">
                    {area.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaTiles;
