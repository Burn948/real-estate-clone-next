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
    <section className="pt-16 pb-20">
      <div className="container-custom">
        <div className="bg-accent rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-primary mb-4">
              Stay Updated
            </h2>
            <p className="font-body text-lg text-primary/80 mb-8">
              Get the latest property listings and exclusive offers delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;