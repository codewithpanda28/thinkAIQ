import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';


const ServiceTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechFlow Solutions',
      service: 'AI Automation',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Authera transformed our entire customer service operation with their AI automation solution. We've seen a 70% reduction in response time and 95% customer satisfaction. The ROI was evident within just 3 months of implementation.`,
      results: [
        { metric: '70%', label: 'Faster Response Time' },
        { metric: '95%', label: 'Customer Satisfaction' },
        { metric: '3 months', label: 'ROI Achieved' }
      ],
      industry: 'Technology Services'
    },
    {
      id: 2,
      name: 'Priya Sharma',position: 'Operations Director',company: 'RetailMax India',service: 'Process Optimization',avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',rating: 5,content: `The process optimization project delivered beyond our expectations. Our inventory management is now 90% more efficient, and we've reduced operational costs by ₹2.5 lakhs monthly. Exceptional team and flawless execution.`,
      results: [
        { metric: '90%', label: 'Efficiency Improvement' },
        { metric: '₹2.5L', label: 'Monthly Savings' },
        { metric: '100%', label: 'On-time Delivery' }
      ],
      industry: 'Retail & E-commerce'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      position: 'Hospital Administrator',
      company: 'HealthCare Plus',
      service: 'Custom Development',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `The custom patient management system has revolutionized our operations. Patient wait times reduced by 60%, staff productivity increased by 40%, and we can now serve 200+ more patients daily. Outstanding technical expertise.`,
      results: [
        { metric: '60%', label: 'Reduced Wait Time' },
        { metric: '40%', label: 'Staff Productivity' },
        { metric: '200+', label: 'More Patients Daily' }
      ],
      industry: 'Healthcare'
    },
    {
      id: 4,
      name: 'Vikash Singh',
      position: 'Founder',
      company: 'LogiTech Enterprises',
      service: 'System Integration',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Authera seamlessly integrated our 5 different systems into one unified platform. Order processing time reduced from 2 hours to 15 minutes, and our team can now focus on strategic work instead of manual data entry.`,
      results: [
        { metric: '87%', label: 'Time Reduction' },
        { metric: '5 systems', label: 'Successfully Integrated' },
        { metric: '15 min', label: 'Order Processing' }
      ],
      industry: 'Logistics'
    },
    {
      id: 5,
      name: 'Neha Gupta',
      position: 'CFO',
      company: 'FinanceFirst Ltd',
      service: 'AI Automation',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `The automated invoice processing system has been a game-changer. We process 10x more invoices with 99.8% accuracy, and our month-end closing time reduced from 5 days to 1 day. Incredible value for investment.`,
      results: [
        { metric: '10x', label: 'Processing Capacity' },
        { metric: '99.8%', label: 'Accuracy Rate' },
        { metric: '80%', label: 'Time Savings' }
      ],
      industry: 'Financial Services'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageSquare" size={16} />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. See how our solutions have transformed 
            operations and delivered measurable ROI across various industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Testimonial Navigation */}
          <div className="space-y-4">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setActiveTestimonial(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-primary text-white border-primary shadow-brand-md'
                    : 'bg-card border-border hover:border-primary/30 hover:shadow-brand-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-semibold truncate ${
                        activeTestimonial === index ? 'text-white' : 'text-foreground'
                      }`}>
                        {testimonial?.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        activeTestimonial === index
                          ? 'bg-white/20 text-white' :'bg-primary/10 text-primary'
                      }`}>
                        {testimonial?.service}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${
                      activeTestimonial === index ? 'text-white/80' : 'text-muted-foreground'
                    }`}>
                      {testimonial?.position}, {testimonial?.company}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8 shadow-brand-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials?.[activeTestimonial]?.avatar}
                    alt={testimonials?.[activeTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {testimonials?.[activeTestimonial]?.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonials?.[activeTestimonial]?.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-1">
                    {testimonials?.[activeTestimonial]?.position}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonials?.[activeTestimonial]?.company} • {testimonials?.[activeTestimonial]?.industry}
                  </p>
                </div>
              </div>

              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{testimonials?.[activeTestimonial]?.content}"
              </blockquote>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {testimonials?.[activeTestimonial]?.results?.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{result?.metric}</div>
                    <div className="text-sm text-muted-foreground">{result?.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-sm text-muted-foreground">
                    Service: {testimonials?.[activeTestimonial]?.service}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {activeTestimonial + 1} of {testimonials?.length}
                  </span>
                  <div className="flex space-x-1">
                    {testimonials?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeTestimonial === index ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* CTA Section */}


      </div>
    </section>
  );
};

export default ServiceTestimonials;