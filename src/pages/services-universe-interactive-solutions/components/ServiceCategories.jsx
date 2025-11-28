"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import ServiceModal from "./ServiceModal";
import QuoteModal from "./QuoteModal";

const ServiceCategories = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('project');
  
  const [activeCategory, setActiveCategory] = useState("automation");
  const [selectedServiceKey, setSelectedServiceKey] = useState(null);
  const [quoteServiceKey, setQuoteServiceKey] = useState(null);
  const [highlightedProject, setHighlightedProject] = useState(null);

  // Handle project ID from URL query parameter
  useEffect(() => {
    if (projectId) {
      // Map project IDs to service keys
      const projectMap = {
        '1': 'whatsapp-automation-catalog',
        '2': 'document-processing',
        '3': 'workflow-automation',
        '4': 'workflow-automation',
        '5': 'workflow-automation',
        '6': 'document-processing'
      };
      
      const serviceKey = projectMap[projectId];
      if (serviceKey) {
        setHighlightedProject(serviceKey);
        // Auto-open the service modal
        setTimeout(() => {
          setSelectedServiceKey(serviceKey);
          // Scroll to the service
          const element = document.getElementById(`service-${serviceKey}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
    }
  }, [projectId]);

  const categories = [
    { 
      id: "automation", 
      name: "AI Automation", 
      icon: "Bot", 
      description: "Intelligent process automation that learns and adapts",
      color: "from-blue-500 to-indigo-600"
    },
    { 
      id: "development", 
      name: "Custom Development", 
      icon: "Code", 
      description: "Tailored software solutions for unique business needs",
      color: "from-purple-500 to-pink-600"
    },
    { 
      id: "consulting", 
      name: "AI Consulting", 
      icon: "Brain", 
      description: "Strategic guidance for AI adoption and implementation",
      color: "from-green-500 to-emerald-600"
    },
    { 
      id: "integration", 
      name: "System Integration", 
      icon: "Zap", 
      description: "Seamless integration of AI into existing systems",
      color: "from-orange-500 to-red-600"
    }
  ];

const services = {
  automation: [
    {
      key: "whatsapp-automation-catalog",
      image: "https://cdn.botpenguin.com/assets/website/whatsapp_bot_improves_customer_support_and_service_01_df56e82e62.webp",
      name: "WhatsApp Automation Catalog – Industry‑Wise",
      description: "Expanded WhatsApp automation catalog with industry-specific core & advanced automations for multiple industries including E-commerce, Healthcare, Real Estate, Education, and more.",
      features: [
        "E-commerce & D2C",
        "Healthcare, Clinics, Hospitals",
        "Real Estate",
        "Education, Coaching, EdTech",
        "Salon, Spa, Beauty Clinics",
        "Restaurants, Cloud Kitchens, Cafes",
      ],
      
     
      benefits: [
        "Saves time with automation",
        "Improves customer engagement",
        "Boosts conversion & ROI",
        "Supports multiple industries",
        "Easy integration with existing workflows"
      ]
    }
  ]
};


  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(price);

  return (
    <section className="py-20 bg-background dark:bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Our Intelligent Service Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
            Experience next-gen AI automation and intelligent systems built for your business growth.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : "bg-card dark:bg-card border border-border hover:border-primary dark:hover:border-accent text-foreground hover:shadow-md"
              }`}
            >
              <Icon name={cat.icon} size={22} />
              <div className="text-left">
                <div className="font-semibold">{cat.name}</div>
                <div className="text-sm opacity-80">{cat.description}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services[activeCategory]?.map((service, index) => {
              const isHighlighted = highlightedProject === service.key;
              return (
    <motion.div
      key={service.key}
                id={`service-${service.key}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: isHighlighted ? 1.05 : 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-card dark:bg-card border-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  isHighlighted 
                    ? 'border-primary dark:border-accent shadow-2xl ring-4 ring-primary/20 dark:ring-accent/20' 
                    : 'border-border'
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden mb-4 sm:mb-6">
      <img
        src={service.image}
        alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

      {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-foreground mb-2 sm:mb-3">
  {service.name}
</h3>

                {/* Description */}
                <p className="text-muted-foreground dark:text-muted-foreground text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
        {service.description}
      </p>

      {/* Features List */}
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {service.features.slice(0, 6).map((f, idx) => (
          <li
            key={idx}
                      className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground font-medium text-xs sm:text-sm"
          >
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-muted/30 dark:bg-muted rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-1 text-xs text-muted-foreground dark:text-muted-foreground">
                          <Icon name="TrendingUp" size={12} className="text-success" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
               

      {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button
          variant="outline"
          onClick={() => setSelectedServiceKey(service.key)}
                    className="flex-1  bg-accent hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 text-xs sm:text-sm"
        >
          Learn More
        </Button>
        <Button
          onClick={() => setQuoteServiceKey(service.key)}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all duration-300 text-xs sm:text-sm"
        >
          Get Quote
        </Button>
      </div>
    </motion.div>
              );
            })}
            </motion.div>
          </AnimatePresence>

        {/* Modals */}
        <AnimatePresence>
          {selectedServiceKey && (
            <ServiceModal 
              serviceKey={selectedServiceKey} 
              services={services[activeCategory]} 
              onClose={() => setSelectedServiceKey(null)} 
            />
          )}
          {quoteServiceKey && (
            <QuoteModal 
              serviceKey={quoteServiceKey} 
              services={services[activeCategory]} 
              onClose={() => setQuoteServiceKey(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceCategories;
