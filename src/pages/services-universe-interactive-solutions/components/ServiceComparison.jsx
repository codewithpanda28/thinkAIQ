import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [selectedServices, setSelectedServices] = useState(['automation', 'development']);

  const services = {
    automation: {
      name: 'AI Automation',
      subtitle: 'Intelligent Process Automation',
      price: { setup: 35000, monthly: 8000 },
      popular: true,
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
      ideal: 'Businesses with repetitive processes'
    },
    development: {
      name: 'Custom Development',
      subtitle: 'Tailored Software Solutions',
      price: { setup: 75000, monthly: 15000 },
      popular: false,
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
      ideal: 'Companies needing custom software'
    },
    optimization: {
      name: 'Process Optimization',
      subtitle: 'Business Process Enhancement',
      price: { setup: 40000, monthly: 8000 },
      popular: false,
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
      ideal: 'Organizations seeking efficiency gains'
    },
    integration: {
      name: 'System Integration',
      subtitle: 'Seamless Tool Connectivity',
      price: { setup: 30000, monthly: 6000 },
      popular: false,
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
      ideal: 'Businesses with multiple tools'
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    })?.format(price);
  };

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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compare Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Side-by-side comparison to help you choose the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(services)?.map(([id, service]) => (
              <button
                key={id}
                onClick={() => toggleService(id)}
                disabled={!selectedServices?.includes(id) && selectedServices?.length >= 3}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedServices?.includes(id)
                    ? 'bg-primary text-white' :'bg-muted text-muted-foreground hover:bg-muted/80 disabled:opacity-50'
                }`}
              >
                {service?.name}
                {selectedServices?.includes(id) && (
                  <Icon name="X" size={14} className="ml-2 inline" />
                )}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Select up to 3 services to compare
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid gap-6" style={{ gridTemplateColumns: `300px repeat(${selectedServices?.length}, 1fr)` }}>
              {/* Header Row */}
              <div className="font-semibold text-foreground py-4">
                Features
              </div>
              {selectedServices?.map(serviceId => {
                const service = services?.[serviceId];
                return (
                  <div key={serviceId} className="bg-card border border-border rounded-xl p-6 shadow-brand-sm">
                    <div className="text-center mb-4">
                      {service?.popular && (
                        <div className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-2">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-foreground">{service?.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service?.subtitle}</p>
                      
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-primary">
                          {formatPrice(service?.price?.setup)}
                        </div>
                        <div className="text-sm text-muted-foreground">Setup Cost</div>
                        {service?.price?.monthly > 0 && (
                          <div className="mt-2">
                            <div className="text-lg font-semibold text-foreground">
                              {formatPrice(service?.price?.monthly)}
                            </div>
                            <div className="text-sm text-muted-foreground">per month</div>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm text-muted-foreground mb-2">
                        <Icon name="Clock" size={14} className="inline mr-1" />
                        {service?.timeline}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {service?.ideal}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Feature Rows */}
              {allFeatures?.map(feature => (
                <React.Fragment key={feature}>
                  <div className="py-3 text-sm text-muted-foreground border-b border-border">
                    {feature}
                  </div>
                  {selectedServices?.map(serviceId => (
                    <div key={`${serviceId}-${feature}`} className="py-3 text-center border-b border-border">
                      {services?.[serviceId]?.features?.[feature] ? (
                        <Icon name="Check" size={20} className="text-success mx-auto" />
                      ) : (
                        <Icon name="X" size={20} className="text-muted-foreground mx-auto opacity-30" />
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}

              {/* Action Row */}
            
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-xl p-8 max-w-2xl mx-auto">
            <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experts can help you select the perfect combination of services 
              for your specific business requirements.
            </p>
            <Button 
              variant="default" 
              iconName="Calendar"
              iconPosition="left"
              className="premium-button"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComparison;