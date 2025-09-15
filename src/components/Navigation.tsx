import React from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Find New Home Logo" 
              className="w-9 h-9 object-contain"
            />
            <span className="font-heading font-semibold text-xl text-primary">
              Find New Home
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="/" 
              className={`font-body text-base transition-all duration-200 ${
                isActive('/') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </a>
            <a 
              href="#" 
              className="font-body text-base text-foreground hover:text-primary transition-all duration-200"
            >
              About Us
            </a>
            <a 
              href="#" 
              className="font-body text-base text-foreground hover:text-primary transition-all duration-200"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="font-body text-base text-foreground hover:text-primary transition-all duration-200"
            >
              Blog
            </a>
            <a 
              href="/catalog" 
              className={`font-body text-base transition-all duration-200 ${
                isActive('/catalog') 
                  ? 'text-primary border-b-2 border-primary pb-1' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Catalog
            </a>
          </div>
          
          {/* Language Selector */}
          <div className="ml-4">
            <button className="flex items-center justify-center w-8 h-8 rounded bg-red-500 text-white text-sm font-semibold">
              🇲🇪
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
