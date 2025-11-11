import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['automation', 'development']);

  const services = {
    automation: {
      name: 'AI Automation',
      subtitle: 'Intelligent Process Automation',
      icon: 'Bot',
      color: 'from-blue-500 to-indigo-600',
      description: 'Transform repetitive tasks into intelligent automated workflows',
      features: {
        'Workflow Design': true,
        'AI Decision Making': true,
        'Real-time Monitoring': true,
        'Error Handling': true,
        'Custom Development': false,
        'Mobile App': false,
        'API Integration': true,
        'Database Design': false,
        'Performance Optimization': true,
        'Analytics Dashboard': true,
        '24/7 Support': true,
        'Training Included': true,
        'Source Code Access': false,
        'White Label': false,
        'Multi-tenant': false
      },
      timeline: '3-5 weeks',
      ideal: 'Businesses with repetitive processes',
      bestFor: ['Small to Medium Businesses', 'Process Automation', 'Cost Reduction']
    },
    development: {
      name: 'Custom Development',
      subtitle: 'Tailored Software Solutions',
      icon: 'Code',
      color: 'from-purple-500 to-pink-600',
      description: 'Build tailored software solutions that perfectly fit your business needs',
      features: {
        'Workflow Design': false,
        'AI Decision Making': false,
        'Real-time Monitoring': true,
        'Error Handling': true,
        'Custom Development': true,
        'Mobile App': true,
        'API Integration': true,
        'Database Design': true,
        'Performance Optimization': true,
        'Analytics Dashboard': true,
        '24/7 Support': true,
        'Training Included': true,
        'Source Code Access': true,
        'White Label': true,
        'Multi-tenant': true
      },
      timeline: '6-10 weeks',
      ideal: 'Companies needing custom software',
      bestFor: ['Enterprise Solutions', 'Unique Requirements', 'Full Control']
    },
    optimization: {
      name: 'Process Optimization',
      subtitle: 'Business Process Enhancement',
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-600',
      description: 'Analyze and optimize your business processes to eliminate bottlenecks',
      features: {
        'Workflow Design': true,
        'AI Decision Making': false,
        'Real-time Monitoring': true,
        'Error Handling': true,
        'Custom Development': false,
        'Mobile App': false,
        'API Integration': true,
        'Database Design': false,
        'Performance Optimization': true,
        'Analytics Dashboard': true,
        '24/7 Support': true,
        'Training Included': true,
        'Source Code Access': false,
        'White Label': false,
        'Multi-tenant': false
      },
      timeline: '4-6 weeks',
      ideal: 'Organizations seeking efficiency gains',
      bestFor: ['Process Improvement', 'Cost Optimization', 'Efficiency Gains']
    },
    integration: {
      name: 'System Integration',
      subtitle: 'Seamless Tool Connectivity',
      icon: 'Zap',
      color: 'from-orange-500 to-red-600',
      description: 'Connect and integrate multiple systems for seamless data flow',
      features: {
        'Workflow Design': true,
        'AI Decision Making': false,
        'Real-time Monitoring': true,
        'Error Handling': true,
        'Custom Development': false,
        'Mobile App': false,
        'API Integration': true,
        'Database Design': false,
        'Performance Optimization': true,
        'Analytics Dashboard': false,
        '24/7 Support': true,
        'Training Included': true,
        'Source Code Access': false,
        'White Label': false,
        'Multi-tenant': false
      },
      timeline: '2-4 weeks',
      ideal: 'Businesses with multiple tools',
      bestFor: ['System Integration', 'Data Synchronization', 'Tool Connectivity']
    }
  };

  const allFeatures = [
    'Workflow Design',
    'AI Decision Making',
    'Real-time Monitoring',
    'Error Handling',
    'Custom Development',
    'Mobile App',
    'API Integration',
    'Database Design',
    'Performance Optimization',
    'Analytics Dashboard',
    '24/7 Support',
    'Training Included',
    'Source Code Access',
    'White Label',
    'Multi-tenant'
  ];

  const toggleService = (serviceId) => {
    if (selectedServices?.includes(serviceId)) {
      if (selectedServices?.length > 1) {
        setSelectedServices(selectedServices?.filter(id => id !== serviceId));
      }
    } else {
      if (selectedServices?.length < 3) {
        setSelectedServices([...selectedServices, serviceId]);
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Layers" size={16} />
            <span>Service Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Compare Our{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Side-by-side comparison to help you choose the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {Object.entries(services)?.map(([id, service]) => (
              <motion.button
                key={id}
                onClick={() => toggleService(id)}
                disabled={!selectedServices?.includes(id) && selectedServices?.length >= 3}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedServices?.includes(id)
                    ? 'bg-primary dark:bg-accent text-white shadow-lg' 
                    : 'bg-muted dark:bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50'
                }`}
              >
                {service?.name}
                {selectedServices?.includes(id) && (
                  <Icon name="X" size={14} className="ml-2 inline" />
                )}
              </motion.button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Select up to 3 services to compare
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {selectedServices?.map((serviceId) => {
            const service = services?.[serviceId];
            return (
              <motion.div
                key={serviceId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card dark:bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service?.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service?.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4">{service?.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">
                      <Icon name="Clock" size={14} className="inline mr-1" />
                      {service?.timeline}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {service?.ideal}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.bestFor.map((item, idx) => (
                        <span key={idx} className="px-2 py-1 bg-muted dark:bg-muted rounded-full text-xs text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  {allFeatures.slice(0, 8).map((feature) => (
                    <div key={feature} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{feature}</span>
                      {service?.features?.[feature] ? (
                        <Icon name="Check" size={16} className="text-success" />
                      ) : (
                        <Icon name="X" size={16} className="text-muted-foreground opacity-30" />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg max-w-2xl mx-auto">
            <Icon name="MessageCircle" size={48} className="text-primary dark:text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts can help you select the perfect combination of services 
              for your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:akashkumar.webdev@gmail.com?subject=Service Consultation"
                className="flex-1"
              >
                <Button 
                  variant="default" 
                  iconName="Calendar"
                  iconPosition="left"
                  className="w-full premium-button"
                >
                  Schedule Consultation
                </Button>
              </a>
              <a
                href="https://wa.me/918252472186?text=Hi, I need help choosing the right service."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  variant="outline" 
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceComparison;
