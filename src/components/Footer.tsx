import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Useful Links */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Useful Links</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                Moving to Montenegro
              </a>
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                How to use this site
              </a>
            </div>
          </div>
          
          {/* Corporate */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Corporate</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Support</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="block font-body text-white/70 hover:text-white transition-colors"
              >
                About Us
              </a>
            </div>
          </div>
          
          {/* Follow Us */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <span className="text-xs">📷</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <span className="text-xs">📱</span>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <span className="text-xs">📧</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="font-body text-sm text-white/70">
            ©2024 by Timofei Miloradovich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;