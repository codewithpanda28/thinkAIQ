import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      description: 'Transform repetitive tasks into intelligent automated workflows that work 24/7, reducing manual effort by up to 85% and eliminating human errors.',
      icon: 'Bot',
      color: 'from-blue-500 to-indigo-600',
      benefits: [
        '85% reduction in manual processing time',
        '99.7% accuracy with AI-powered validation',
        '24/7 automated operations',
        'Seamless integration with existing tools',
        'Real-time monitoring and alerts',
        'Scalable to handle growing volumes'
      ],
      useCases: [
        'Invoice processing and approval workflows',
        'Customer support ticket routing',
        'Data entry and validation',
        'Report generation and distribution',
        'Email automation and responses',
        'Document classification and filing'
      ],
      technologies: ['OpenAI GPT', 'Custom AI Models', 'RPA', 'Workflow Engine'],
      results: {
        timeSaved: '85%',
        costReduction: '70%',
        accuracy: '99.7%',
        scalability: '10x'
      }
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly fit your business needs, from web applications to mobile apps and enterprise systems.',
      icon: 'Code',
      color: 'from-purple-500 to-pink-600',
      benefits: [
        '100% customized to your requirements',
        'Modern tech stack for future-proof solutions',
        'Scalable architecture for growth',
        'Enterprise-grade security',
        'Comprehensive testing and QA',
        'Ongoing support and maintenance'
      ],
      useCases: [
        'Custom CRM and ERP systems',
        'E-commerce platforms',
        'Mobile applications (iOS & Android)',
        'API development and integration',
        'Cloud-based solutions',
        'Legacy system modernization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
      results: {
        developmentTime: '50% faster',
        userAdoption: '95%',
        performance: '75% improvement',
        satisfaction: '98%'
      }
    },
    {
      id: 'business-optimization',
      title: 'Business Process Optimization',
      description: 'Analyze and optimize your business processes to eliminate bottlenecks, reduce costs, and improve efficiency across all operations.',
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-600',
      benefits: [
        'Identify and eliminate process bottlenecks',
        'Reduce operational costs by 40-60%',
        'Improve process efficiency by 80%',
        'Enhance customer satisfaction',
        'Data-driven decision making',
        'Continuous improvement framework'
      ],
      useCases: [
        'Supply chain optimization',
        'Inventory management',
        'Order processing workflows',
        'Customer onboarding processes',
        'Quality control procedures',
        'Resource allocation optimization'
      ],
      technologies: ['Process Mining', 'Data Analytics', 'ML Models', 'Dashboard Tools'],
      results: {
        costReduction: '50%',
        efficiency: '80% improvement',
        deliveryTime: '60% faster',
        accuracy: '95%'
      }
    },
    {
      id: 'ai-integration',
      title: 'AI Integration & Consulting',
      description: 'Strategic AI adoption consulting to help you identify opportunities, build roadmaps, and implement AI solutions that drive real business value.',
      icon: 'Brain',
      color: 'from-orange-500 to-red-600',
      benefits: [
        'AI readiness assessment',
        'Custom AI strategy development',
        'Technology selection and evaluation',
        'Implementation roadmap',
        'Change management support',
        'Ongoing AI optimization'
      ],
      useCases: [
        'AI strategy development',
        'Machine learning model deployment',
        'Natural language processing integration',
        'Computer vision solutions',
        'Predictive analytics implementation',
        'AI-powered decision support systems'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Custom Models'],
      results: {
        decisionSpeed: '99% faster',
        predictionAccuracy: '94%',
        costSavings: '40%',
        roi: '300%'
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

  const currentFeature = features?.[activeFeature];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent/10 dark:bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Our Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI & Automation
            </span>{' '}
            Solutions
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine intelligent automation, custom software, and process optimization to help businesses save time, 
            reduce errors, and scale efficiently. Every solution is tailored to your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features?.map((feature, index) => (
              <motion.div
                key={feature?.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'scale-105' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-card dark:bg-card border-primary dark:border-accent shadow-lg' 
                    : 'bg-card/50 dark:bg-card/50 border-border hover:border-primary/50 dark:hover:border-accent/50 shadow-sm'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature?.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      activeFeature === index ? 'scale-110' : ''
                    }`}>
                      <Icon name={feature?.icon} size={24} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        activeFeature === index ? 'text-primary dark:text-accent' : 'text-foreground'
                      }`}>
                        {feature?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{feature?.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg sticky top-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{currentFeature?.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{currentFeature?.description}</p>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentFeature?.results || {}).map(([key, value], idx) => (
                  <div key={idx} className="p-4 bg-muted/30 dark:bg-muted rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary dark:text-accent mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="CheckCircle" size={18} className="text-success mr-2" />
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentFeature?.benefits?.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Lightbulb" size={18} className="text-warning mr-2" />
                  Use Cases
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {currentFeature?.useCases?.map((useCase, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-sm">
                      <Icon name="ArrowRight" size={14} className="text-primary dark:text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Code" size={18} className="text-secondary mr-2" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentFeature?.technologies?.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-muted dark:bg-muted rounded-full text-xs text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <a
                  href="mailto:akashkumar.webdev@gmail.com?subject=Inquiry about services"
                  className="block"
                >
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="w-full premium-button"
                  >
                    Get Started Today
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
