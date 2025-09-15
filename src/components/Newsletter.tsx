import React, { useState } from 'react';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Placeholder for future Formspree integration
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Newsletter */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4 uppercase">
                STAY INFORMED WITH FIND NEW HOME'S TOP STORIES, VIDEOS & NEWS.
              </h2>
              <p className="font-body text-lg text-primary/80 mb-8">
                Receive the best from Find New Home's delivered to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-primary text-sm mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 font-body focus:outline-none focus:border-primary bg-transparent"
                  />
                </div>
                <div>
                  <label className="block font-body text-primary text-sm mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 font-body focus:outline-none focus:border-primary bg-transparent"
                  />
                </div>
                <div>
                  <label className="block font-body text-primary text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 font-body focus:outline-none focus:border-primary bg-transparent"
                  />
                </div>
              </div>
              
              <div className="text-sm text-primary/70 font-body leading-relaxed">
                By subscribing you are agreeing to Find New Home's Privacy Policy. You can 
                unsubscribe from Find New Home's emails at any time by clicking the "Manage your 
                Subscriptions" link in any of your emails.
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-body font-medium py-4 px-8 hover:opacity-90 transition-opacity disabled:opacity-50 uppercase tracking-wider"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </div>
          
          {/* Right Side - Contacts */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-2xl text-primary mb-8">Contacts</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-body text-primary mb-2">Phone number:</p>
                </div>
                
                <div>
                  <p className="font-body text-primary mb-2">Email:</p>
                </div>
                
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <span className="text-sm">📧</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-500 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <span className="text-sm">📱</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <span className="text-sm">📷</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;