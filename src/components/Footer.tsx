import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pt-16 pb-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl text-primary">
              Find New Home
            </h3>
            <p className="font-body text-muted-foreground max-w-md">
              Discover luxury properties in Montenegro's most prestigious locations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="font-heading font-medium text-primary mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a 
                href="/" 
                className="block font-body text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </a>
              <a 
                href="/catalog" 
                className="block font-body text-muted-foreground hover:text-primary transition-colors"
              >
                Catalog
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Find New Home. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;