import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
 {
  id: 1,
  name: "WhatsApp Automation Catalog",
  description: "Industry-wise core & advanced WhatsApp automations",
  icon: "Bot",
  metrics: { industries: "15+ industries", automations: "50+ flows", roi: "High ROI" },
  color: "from-green-500 to-emerald-600"
}
,
{
  id: 2,
  name: "AI HR Hiring System",

  description: "AI tool for smart resume screening.",

  icon: "UserCheck",

  metrics: {
    clients: "For any business",
    accuracy: "Accurate filtering",
    time: "Quick results"
  },

  color: "from-purple-500 to-pink-600"
}

,
    {
      id: 3,
      name: "Lead Generation Bot",
      description: "AI-powered lead qualification and nurturing",
      icon: "Target",
      metrics: { clients: "60+", conversion: "245%", leads: "10K+" },
      color: "from-green-500 to-emerald-600"
    },
    // {
    //   id: 4,
    //   name: "Inventory Management AI",
    //   description: "Smart inventory prediction and optimization",
    //   icon: "Package",
    //   metrics: { clients: "40+", savings: "40%", accuracy: "95%" },
    //   color: "from-orange-500 to-red-600"
    // }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10">
      {/* Animated Background Elements */}
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Icon name="Sparkles" size={16} />
              <span>AI-First Automation Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground dark:text-foreground leading-tight mb-6"
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent dark:from-accent dark:via-secondary dark:to-primary animate-gradient">
                Intelligent AI Automation
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              We build AI-powered automation solutions that streamline operations, reduce costs by up to 85%, and scale with your business. 
              Trusted by <span className="font-semibold text-primary dark:text-accent">10+ businesses</span> worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://cal.com/akash-kumar-x8dx1t/thinkaiq"
                aria-label="Book a free consultation via email"
              >
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  iconSize={20}
                  className="premium-button transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Free Consultation
                </Button>
              </a>
              <a
                href="https://youtu.be/zUL_7mhIqzU?si=g9TTO9bxRUkl-qfR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch demo on WhatsApp"
              >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}
                  className="transform hover:scale-105 transition-transform duration-200 border-2"
                >
                  Watch Demo
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary dark:text-accent mb-1">10+</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Businesses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary dark:text-accent mb-1">85%</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary dark:text-accent mb-1">99.7%</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary dark:text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Projects Showcase - Modern Card Grid */}
            <div className="grid lg:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-card dark:bg-card border-2 border-border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon name={project.icon} size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-muted/50 dark:bg-muted rounded-lg">
                          <div className="text-xs font-bold text-foreground dark:text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground dark:text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute lg:-bottom-22 lg:-right-12 -right-0 -bottom-20 bg-gradient-to-r from-primary to-secondary dark:from-accent dark:to-primary text-white rounded-2xl p-6 shadow-2xl border-4 border-background dark:border-background "
            >
              <div className="flex items-center space-x-3 ">
                <div className="w-8 h-8x bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
