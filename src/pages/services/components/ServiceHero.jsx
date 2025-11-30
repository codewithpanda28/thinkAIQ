import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
     {/* Animated Background Elements */}
     
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Comprehensive AI Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-foreground mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent dark:from-accent dark:via-secondary dark:to-primary bg-clip-text text-transparent">
              Intelligent Automation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            We don't just automate processes — we reimagine possibilities. Discover intelligent automation solutions 
            that grow with your business and deliver measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:akashkumar.webdev@gmail.com?subject=Free%20Consultation"
              aria-label="Book a free consultation"
            >
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="premium-button transform hover:scale-105 transition-transform duration-200"
              >
                Book Free Consultation
              </Button>
            </a>
            <a
              href="https://wa.me/918252472186?text=Hi,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="transform hover:scale-105 transition-transform duration-200"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "10+", label: "Businesses Automated", icon: "Building2" },
            { value: "85%", label: "Average Cost Reduction", icon: "TrendingDown" },
            { value: "99.7%", label: "Accuracy Rate", icon: "Target" },
            { value: "24/7", label: "AI-Powered Support", icon: "Clock" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card dark:bg-card border border-border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-accent/20 rounded-xl mx-auto mb-4">
                <Icon name={stat.icon} size={24} className="text-primary dark:text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
