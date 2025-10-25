import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Process Automation',
      description: 'We help you turn slow, repetitive tasks into self-running systems. From managing data to handling daily operations, automation lets your team focus on what really matters — growth and innovation.',
      icon: 'Bot',
      color: 'from-blue-500 to-indigo-600',
      benefits: [
        'Cut down processing time by up to 70%',
        'Fewer human errors and smoother data flow',
        'Always-on operations, 24/7',
        'Works perfectly with your existing tools'
      ],
      demoData: {
        title: 'Invoice Processing Automation',
        metrics: [
          { label: 'Processing Time', before: '3 hours', after: '5 minutes', improvement: '97%' },
          { label: 'Accuracy Rate', before: '92%', after: '99.7%', improvement: '8.4%' },
          { label: 'Cost per Invoice', before: '₹45', after: '₹3', improvement: '93%' }
        ]
      }
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Your business is unique — your software should be too. We design and build solutions that fit your exact workflow and can grow with you as your business scales.',
      icon: 'Code',
      color: 'from-purple-500 to-pink-600',
      benefits: [
        'Tailor-made to your specific requirements',
        'Built using modern, reliable technologies',
        'Scalable and secure for long-term use',
        'Fully tested for performance and stability'
      ],
      demoData: {
        title: 'CRM Development Project',
        metrics: [
          { label: 'Development Time', before: '8 months', after: '4 months', improvement: '50%' },
          { label: 'User Adoption', before: '60%', after: '95%', improvement: '58%' },
          { label: 'System Performance', before: '3.2s', after: '0.8s', improvement: '75%' }
        ]
      }
    },
    {
      id: 'business-optimization',
      title: 'Business Process Optimization',
      description: 'We take a close look at how your business runs and find smarter ways to get things done. Our goal? To make every step faster, simpler, and more cost-effective.',
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-600',
      benefits: [
        'Identify process bottlenecks',
        'Redesign workflows for better results',
        'Reduce time and cost per task',
        'Continuous tracking and improvement'
      ],
      demoData: {
        title: 'Supply Chain Optimization',
        metrics: [
          { label: 'Inventory Costs', before: '₹25L', after: '₹15L', improvement: '40%' },
          { label: 'Delivery Time', before: '7 days', after: '3 days', improvement: '57%' },
          { label: 'Order Accuracy', before: '88%', after: '98%', improvement: '11%' }
        ]
      }
    },
    {
      id: 'ai-integration',
      title: 'AI Integration & Consulting',
      description: 'If you’re exploring AI but not sure where to start, we guide you through every step — from planning to full implementation.',
      icon: 'Brain',
      color: 'from-orange-500 to-red-600',
      benefits: [
        'Evaluate how ready your business is for AI',
        'Build a clear roadmap for adoption',
        'Choose the right tools and platforms',
        'Support your team during the transition'
      ],
      demoData: {
        title: 'AI Strategy Implementation',
        metrics: [
          { label: 'Decision Speed', before: '2 weeks', after: '2 hours', improvement: '99%' },
          { label: 'Prediction Accuracy', before: '70%', after: '94%', improvement: '34%' },
          { label: 'Operational Costs', before: '₹50L', after: '₹30L', improvement: '40%' }
        ]
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [features?.length]);

  const currentFeature = features?.[activeFeature];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Core Solutions</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
          Comprehensive{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI & Automation
            </span>{' '}
            Solutions for Modern Businesses
          </h2>
          
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
          We combine intelligent automation, custom software, and process optimization to help businesses save time, reduce errors, and scale efficiently. Every solution is tailored to your needs, not just a one-size-fits-all approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-6">
            {features?.map((feature, index) => (
              <div
                key={feature?.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-card border-primary shadow-brand-lg' 
                    : 'bg-card/50 border-border hover:border-primary/50 shadow-brand-sm'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature?.color} rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeFeature === index ? 'scale-110' : ''
                    } transition-transform duration-300`}>
                      <Icon name={feature?.icon} size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-primary' : 'text-foreground'
                      }`}>
                        {feature?.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{feature?.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {feature?.benefits?.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                            <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Demo */}
          <div className={`${isVisible ? 'hero-reveal animate' : 'hero-reveal'}`}>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg authority-spotlight">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">{currentFeature?.demoData?.title}</h3>
                  <div className="flex items-center space-x-2 text-success">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Demo</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {currentFeature?.demoData?.metrics?.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{metric?.label}</span>
                        <span className="text-sm text-success font-bold">↑ {metric?.improvement}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-lg font-semibold text-foreground">{metric?.before}</div>
                        </div>
                        <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                          <div className="text-xs text-success mb-1">After</div>
                          <div className="text-lg font-semibold text-success">{metric?.after}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    size="sm"
                    iconName="Play"
                    iconPosition="left"
                    className="w-full"
                    
                  >
                    View Full Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 flex justify-center space-x-2">
              {features?.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'w-8 bg-primary' :'w-2 bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 300+ businesses that have revolutionized their operations with our AI-powered solutions. Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="premium-button"
              >
                Schedule Free Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;