import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 pt-24 pb-16 overflow-hidden">
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
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-reveal"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div className="text-xs sm:text-sm font-medium text-primary dark:text-accent bg-primary/10 dark:bg-accent/20 px-3 py-1 rounded-full">
                Founded by Passionate Developers
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-6 text-balance">
              Meet <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent dark:from-accent dark:via-secondary dark:to-primary bg-clip-text">Akash Kumar</span> &{' '}
              <span className="text-transparent bg-gradient-to-r from-secondary via-primary to-accent dark:from-secondary dark:via-accent dark:to-primary bg-clip-text">Aditya</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground mb-8 text-balance leading-relaxed">
              We're two passionate developers who believe in building impactful digital experiences.
              From frontend innovation to automation systems — we create solutions that make a difference.
              Every project we take is built with dedication, creativity, and real purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:akashkumar.webdev@gmail.com?subject=About thinkAIQ"
                className="inline-block"
              >
                <Button
                  variant="default"
                  size="lg"
                  iconName="Users"
                  iconPosition="left"
                  className="premium-button w-full sm:w-auto"
                >
                  Meet Our Team
                </Button>
              </a>
              <a
                href="/homepage-ai-automation-hub"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Award"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent">300+</div>
                <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent">85%</div>
                <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1629904853716-f91e66f6b532?w=700&h=500&fit=crop"
                alt="Akash and Aditya working on frontend project"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-brand-lg"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card dark:bg-card border border-border rounded-xl p-3 sm:p-4 shadow-brand-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 dark:bg-success/20 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} className="text-success" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-foreground dark:text-foreground">Client Success Rate</div>
                    <div className="text-xl sm:text-2xl font-bold text-success">98%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
