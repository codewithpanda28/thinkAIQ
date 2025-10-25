import React, { useState, useEffect } from 'react';

import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const successMetrics = [
    { value: "300+", label: "Businesses Automated", icon: "Building2" },
    { value: "85%", label: "Average Cost Reduction", icon: "TrendingDown" },
    { value: "24/7", label: "AI-Powered Support", icon: "Clock" },
    { value: "99.9%", label: "System Uptime", icon: "Shield" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % successMetrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      {/* Video Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'hero-reveal animate' : 'hero-reveal'}`}>
            <div className="space-y-4 ">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>AI-First Business Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform how {' '} you work
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                with intelligent automation
                </span>{' '}
                built for growth.
              </h1>
              
              <p className="text-md text-muted-foreground leading-relaxed max-w-2xl">
              We combine AI, automation and human-centered design to streamline operations, reduce costs and free your team for high-impact work. Trusted by growing teams across industries — from finance to logistics.
              </p>
            </div>

          {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  {/* Book Free Consultation Button */}
  <a
    href="mailto:akashkumar.webdev@gmail.com?subject=Free%20Consultation&body=Hi,%20I%27m%20interested%20in%20your%20AI%20Automation%20services.%20Please%20share%20more%20details."
    aria-label="Book a free consultation via email"
  >
    <Button
      variant="default"
      size="lg"
      iconName="Calendar"
      iconPosition="left"
      iconSize={20}
      className="premium-button"
    >
      Book Free Consultation
    </Button>
  </a>

  {/* Watch Demo Button */}
  <a
    href="https://wa.me/918252472186?text=Hi,%20I%27m%20interested%20in%20watching%20the%20AI%20Automation%20demo.%20Can%20you%20share%20the%20link?"
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
    >
      Watch Demo
    </Button>
  </a>
</div>


            {/* Success Metrics */}
            {/* <div className="pt-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {successMetrics?.map((metric, index) => (
                  <div 
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      currentMetric === index ? 'scale-105 opacity-100' : 'opacity-70'
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2">
                      <Icon name={metric?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{metric?.value}</div>
                    <div className="text-sm text-muted-foreground">{metric?.label}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Content - Interactive Demo Preview */}
          <div className={`relative ${isVisible ? 'hero-reveal animate animation-delay-300' : 'hero-reveal'}`}>
            <div className="relative">
              {/* Main Demo Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg authority-spotlight">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">AI Automation Dashboard</h3>
                    <div className="flex items-center space-x-2 text-success">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Bot" size={20} className="text-primary" />
                        <span className="text-sm font-medium">Invoice Processing</span>
                      </div>
                      <div className="text-sm text-success font-medium">Faster processing with automated checks</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Zap" size={20} className="text-secondary" />
                        <span className="text-sm font-medium">Customer Support</span>
                      </div>
                      <div className="text-sm text-success font-medium">Faster response and triage with AI routing</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="Target" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Lead Generation</span>
                      </div>
                      <div className="text-sm text-success font-medium">Improved lead qualification and follow-up</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Monthly Savings</span>
                      <span className="text-lg font-bold text-success">Reduced operational costs (varies by client)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-brand-lg">
                <Icon name="TrendingUp" size={24} className="text-white" /> 
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-accent to-success rounded-full flex items-center justify-center shadow-brand-lg">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Discover More</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;