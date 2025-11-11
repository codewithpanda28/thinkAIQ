import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your consultation request has been submitted.');
    closeModal();
  };

  const handleCallClick = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number.replace(/\+/g,'')}`, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/5 dark:from-primary/10 via-background dark:via-background to-secondary/5 dark:to-secondary/10 pt-24 pb-16">
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '600ms' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="absolute inset-0 geometric-pattern opacity-30 dark:opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="text-center max-w-4xl mx-auto">
          <div className="hero-reveal animate">
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} />
              <span>24/7 Support Available</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground dark:text-foreground mb-6 text-balance">
              Let's Build Your
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary bg-clip-text"> AI Future </span>
              Together
            </h1>
            
            <p className="text-xl text-muted-foreground dark:text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Ready to transform your business with intelligent automation? Our experts are standing by to discuss your unique requirements and create a custom solution that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Consultation Button */}
              <Button 
                variant="default" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="premium-button"
                onClick={openModal}
              >
                Book Free Consultation
              </Button>
              
              {/* Call Now Dropdown */}
             {/* Call Now Dropdown */}
<div className="relative">
  <Button
    variant="outline"
    size="lg"
    iconName="Phone"
    iconPosition="left"
    iconSize={20}
    onClick={() => setCallDropdownOpen(!callDropdownOpen)}
  >
    Call Now
  </Button>

  {callDropdownOpen && (
    <div className="absolute right-0 mt-3 w-60 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl shadow-xl border border-primary/30 p-4 z-50 animate-fadeIn">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-foreground">Choose a number</span>
        <button
          className="text-gray-500 hover:text-gray-800 font-bold text-lg"
          onClick={() => setCallDropdownOpen(false)}
        >
          &times;
        </button>
      </div>
      <button
        onClick={() => handleCallClick('+919876543210')}
        className="w-full text-left px-4 py-3 mb-2 rounded-lg bg-white hover:bg-primary/20 transition flex items-center space-x-2"
      >
        <Icon name="Phone" size={16} />
        <span className="text-foreground font-medium">+91 98765 43210</span>
      </button>
      <button
        onClick={() => handleCallClick('+918252472186')}
        className="w-full text-left px-4 py-3 rounded-lg bg-white hover:bg-primary/20 transition flex items-center space-x-2"
      >
        <Icon name="Phone" size={16} />
        <span className="text-foreground font-medium">+91 82524 72186</span>
      </button>
    </div>
  )}
</div>

            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Clock", value: "< 2 Hours", label: "Response Time" },
              { icon: "Users", value: "500+", label: "Happy Clients" },
              { icon: "Award", value: "98%", label: "Satisfaction Rate" },
              { icon: "Globe", value: "24/7", label: "Support Available" }
            ]?.map((stat, index) => (
              <div key={index} className="text-center hero-reveal animate" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-primary/10 dark:bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat?.icon} size={24} className="text-primary dark:text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground dark:text-foreground">{stat?.value}</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">{stat?.label}</div>
              </div>
            ))}
          </div>

          {/* Modal Form */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm animate-fadeIn">
              <div className="bg-card dark:bg-card border border-border rounded-xl max-w-md w-full p-6 relative shadow-xl">
                <button 
                  className="absolute top-4 right-4 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground font-bold text-xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center text-foreground dark:text-foreground">
                  Book Free Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border bg-background dark:bg-background text-foreground dark:text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border bg-background dark:bg-background text-foreground dark:text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border bg-background dark:bg-background text-foreground dark:text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    required
                    className="w-full px-4 py-3 border border-border dark:border-border bg-background dark:bg-background text-foreground dark:text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent transition"
                  />

                  <div className="flex justify-between mt-2 space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleWhatsAppClick('+918252472186')}
                      className="flex-1 flex items-center justify-center space-x-2"
                    >
                      <Icon name="MessageCircle" size={18} />
                      <span>WhatsApp</span>
                    </Button>
                    <Button
                      type="submit"
                      variant="default"
                      className="flex-1 flex items-center justify-center space-x-2"
                    >
                      <Icon name="Calendar" size={18} />
                      <span>Submit</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
