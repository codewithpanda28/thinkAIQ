import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO",
      company: "TechFlow Solutions",
      location: "Mumbai, India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "thinkAIQ transformed our invoice processing from 3 days to 30 minutes. The ROI was visible within the first month. Their AI solutions are game-changing.",
      rating: 5,
      metrics: { savings: "₹8,50,000", efficiency: "95%", timeframe: "3 months" },
      industry: "Technology",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      projectImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
      ],
      hotel: "Taj Mahal Palace, Mumbai",
      workDetails: "We implemented an AI-powered invoice processing system that automated data extraction, validation, and approval workflows. The system integrated seamlessly with their existing ERP.",
      clientVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Operations Director",
      company: "Global Logistics Ltd",
      location: "Delhi, India",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "The customer support automation reduced our response time by 80%. Our customer satisfaction scores have never been higher. Exceptional partnership!",
      rating: 5,
      metrics: { savings: "₹12,30,000", efficiency: "80%", timeframe: "2 months" },
      industry: "Logistics",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      projectImages: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      ],
      hotel: "The Leela Palace, Delhi",
      workDetails: "Developed an intelligent customer support chatbot that handles 70% of inquiries automatically, with seamless handoff to human agents when needed.",
      clientVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder",
      company: "EcoManufacturing",
      location: "Bangalore, India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "From manual inventory tracking to AI-powered predictions, thinkAIQ helped us reduce waste by 60% and increase profitability by 40%. Outstanding results!",
      rating: 5,
      metrics: { savings: "₹15,75,000", efficiency: "60%", timeframe: "4 months" },
      industry: "Manufacturing",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      projectImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
      ],
      hotel: "ITC Gardenia, Bangalore",
      workDetails: "Built a predictive inventory management system using machine learning to forecast demand, optimize stock levels, and reduce waste.",
      clientVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      position: "Marketing Head",
      company: "Digital Dynamics",
      location: "Hyderabad, India",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The lead generation automation increased our conversion rate by 245%. thinkAIQ's team understood our needs perfectly and delivered beyond expectations.",
      rating: 5,
      metrics: { savings: "₹9,80,000", efficiency: "245%", timeframe: "6 weeks" },
      industry: "Marketing",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      projectImages: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      ],
      hotel: "Park Hyatt, Hyderabad",
      workDetails: "Created an AI-powered lead scoring and nurturing system that automatically qualifies leads and sends personalized follow-ups.",
      clientVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      name: "John Smith",
      position: "CTO",
      company: "TechCorp International",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Working with thinkAIQ was seamless despite the distance. Their AI automation solutions exceeded our expectations and delivered measurable ROI.",
      rating: 5,
      metrics: { savings: "$125,000", efficiency: "90%", timeframe: "5 months" },
      industry: "Technology",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      projectImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
      ],
      hotel: "The Plaza, New York",
      workDetails: "Implemented a comprehensive document processing system that automated contract analysis, data extraction, and compliance checking.",
      clientVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  useEffect(() => {
    // Don't auto-play if video is playing
    if (isAutoPlaying && !isVideoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVideoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    if (isVideoPlaying) return; // Don't change if video is playing
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setIsVideoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    if (isVideoPlaying) return; // Don't change if video is playing
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setIsVideoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    if (isVideoPlaying) return; // Don't change if video is playing
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setIsVideoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleViewDetails = (testimonial) => {
    navigate(`/project-details/${testimonial.id}`, { state: { testimonial } });
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background dark:from-muted/20 dark:to-background">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-success/10 dark:bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              300+ Businesses
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours have transformed their operations and achieved remarkable results with our AI automation solutions.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-12 shadow-xl"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <Image
                      src={current?.avatar}
                      alt={current?.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 border-4 border-primary/20 dark:border-accent/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{current?.name}</h3>
                  <p className="text-primary dark:text-accent font-medium mb-1">{current?.position}</p>
                  <p className="text-muted-foreground mb-2">{current?.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center lg:justify-start">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {current?.location}
                  </p>
                  
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(current?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center space-x-2 bg-muted/50 dark:bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">
                    <Icon name="Building" size={14} />
                    <span>{current?.industry}</span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 space-y-6">
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                    "{current?.content}"
                  </blockquote>
                  
                  {/* Video Testimonial */}
                  {current?.videoUrl && (
                    <div className="relative w-full h-48 lg:h-64 rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={current?.videoUrl}
                        title={`Video testimonial from ${current?.name}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIsVideoPlaying(true)}
                        onMouseEnter={() => setIsVideoPlaying(true)}
                        onMouseLeave={() => {
                          // Check if video is actually playing before setting to false
                          setTimeout(() => setIsVideoPlaying(false), 2000);
                        }}
                      ></iframe>
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {isVideoPlaying ? 'Playing - Auto-slide paused' : 'Click to play'}
                      </div>
                    </div>
                  )}
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/30 dark:bg-muted rounded-lg">
                      <div className="text-xl lg:text-2xl font-bold text-success mb-1">{current?.metrics?.savings}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground">Monthly Savings</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 dark:bg-muted rounded-lg">
                      <div className="text-xl lg:text-2xl font-bold text-primary dark:text-accent mb-1">{current?.metrics?.efficiency}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground">Efficiency Gain</div>
                    </div>
                    <div className="text-center p-4 bg-muted/30 dark:bg-muted rounded-lg">
                      <div className="text-xl lg:text-2xl font-bold text-secondary mb-1">{current?.metrics?.timeframe}</div>
                      <div className="text-xs lg:text-sm text-muted-foreground">Implementation</div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="default"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full premium-button"
                    onClick={() => handleViewDetails(current)}
                  >
                    View Full Project Details
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card dark:bg-card border border-border rounded-full flex items-center justify-center hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-200 shadow-sm hover:shadow-md"
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
                      ? 'bg-primary dark:bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card dark:bg-card border border-border rounded-full flex items-center justify-center hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4 space-x-2 text-sm text-muted-foreground">
            <Icon name={isAutoPlaying && !isVideoPlaying ? "Play" : "Pause"} size={14} />
            <span>
              {isVideoPlaying 
                ? "Video playing - Auto-slide paused" 
                : isAutoPlaying 
                  ? "Auto-playing" 
                  : "Paused"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
