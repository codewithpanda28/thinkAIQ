import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Authera transformed our invoice processing from 3 days to 30 minutes. The ROI was visible within the first month. Their AI solutions are game-changing.",
      rating: 5,
      metrics: { savings: "₹8,50,000", efficiency: "95%", timeframe: "3 months" },
      industry: "Technology"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Operations Director",
      company: "Global Logistics Ltd",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The customer support automation reduced our response time by 80%. Our customer satisfaction scores have never been higher. Exceptional partnership!",
      rating: 5,
      metrics: { savings: "₹12,30,000", efficiency: "80%", timeframe: "2 months" },
      industry: "Logistics"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder",
      company: "EcoManufacturing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From manual inventory tracking to AI-powered predictions, Authera helped us reduce waste by 60% and increase profitability by 40%. Outstanding results!",
      rating: 5,
      metrics: { savings: "₹15,75,000", efficiency: "60%", timeframe: "4 months" },
      industry: "Manufacturing"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Marketing Head",
      company: "Digital Dynamics",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The lead generation automation increased our conversion rate by 245%. Authera\'s team understood our needs perfectly and delivered beyond expectations.",
      rating: 5,
      metrics: { savings: "₹9,80,000", efficiency: "245%", timeframe: "6 weeks" },
      industry: "Marketing"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              300+ Businesses
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours have transformed their operations and achieved remarkable results with our AI automation solutions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand-lg authority-spotlight">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Image
                    src={current?.avatar}
                    alt={current?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{current?.name}</h3>
                <p className="text-primary font-medium mb-1">{current?.position}</p>
                <p className="text-muted-foreground mb-4">{current?.company}</p>
                
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(current?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
                
                <div className="inline-flex items-center space-x-2 bg-muted/50 px-3 py-1 rounded-full text-sm text-muted-foreground">
                  <Icon name="Building" size={14} />
                  <span>{current?.industry}</span>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                  "{current?.content}"
                </blockquote>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">{current?.metrics?.savings}</div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{current?.metrics?.efficiency}</div>
                    <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">{current?.metrics?.timeframe}</div>
                    <div className="text-sm text-muted-foreground">Implementation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 shadow-brand-sm"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTestimonial === index 
                      ? 'bg-primary scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 shadow-brand-sm"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-muted-foreground">
            <Icon name={isAutoPlaying ? "Play" : "Pause"} size={14} />
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">₹50Cr+</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;