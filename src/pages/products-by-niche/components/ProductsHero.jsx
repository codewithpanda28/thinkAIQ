import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductsHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: 'Search',
      title: 'Search & Explore',
      description: 'Find the perfect automation solution for your industry'
    },
    {
      icon: 'Zap',
      title: 'Complete Solutions',
      description: 'Ready-to-deploy automations tailored to your business needs'
    },
    {
      icon: 'CheckCircle2',
      title: 'Get Results',
      description: 'Transform your business operations with proven automation tools'
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-2 bg-gradient-to-b from-background via-primary/5 to-background dark:via-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">What We Do For</span>{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                You & Your Business
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              You came here for <span className="text-primary dark:text-accent font-semibold">solutions</span>. 
              We provide <span className="text-primary dark:text-accent font-semibold">complete automation solutions</span> for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
              <div className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-primary dark:text-accent">
                <Icon name="Search" size={24} />
                <span>Search It</span>
              </div>
              <Icon name="ArrowRight" size={20} className="text-text-secondary rotate-90 sm:rotate-0" />
              <div className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-secondary dark:text-accent">
                <Icon name="Compass" size={24} />
                <span>Explore It</span>
              </div>
              <Icon name="ArrowRight" size={20} className="text-text-secondary rotate-90 sm:rotate-0" />
              <div className="flex items-center space-x-2 text-lg sm:text-xl font-semibold text-green-600 dark:text-green-400">
                <Icon name="CheckCircle2" size={24} />
                <span>Get Solution</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 p-4 rounded-full mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary dark:text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution Focus Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-2xl p-8 sm:p-10 border border-primary/20 dark:border-accent/20"
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Icon name="Target" size={48} className="text-primary dark:text-accent" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Why You're Here
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary mb-6 max-w-2xl mx-auto">
                You need <span className="font-semibold text-primary dark:text-accent">WhatsApp automation solutions</span> for your business. 
                We have <span className="font-semibold text-primary dark:text-accent">17 industry-specific solutions</span> with 
                <span className="font-semibold text-primary dark:text-accent"> 100+ ready-to-deploy automations</span>.
              </p>
              <p className="text-base sm:text-lg text-text-secondary font-medium">
                <span className="text-primary dark:text-accent">Search below</span> to find your perfect solution, 
                <span className="text-primary dark:text-accent"> explore</span> the details, and 
                <span className="text-primary dark:text-accent"> get started</span> today.
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}

        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
