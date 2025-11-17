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
        '1': 'customer-support',
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
        key: "workflow-automation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        name: "Workflow Automation",
        description: "Automate repetitive tasks and business processes with AI-powered workflows that adapt to your needs.",
        features: ["Custom workflow design", "AI decision making", "Real-time monitoring", "Error handling", "Scalable architecture"],
        pricing: { setup: 25000, monthly: 5000 },
        timeline: "2-4 weeks",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        benefits: ["70% time reduction", "95% accuracy", "24/7 operation", "Cost savings"]
      },
      {
        key: "document-processing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        name: "Document Processing",
        description: "Intelligent document extraction, processing, and management using advanced OCR and NLP.",
        features: ["OCR technology", "Data extraction", "Automated filing", "Compliance tracking", "Multi-format support"],
        pricing: { setup: 35000, monthly: 8000 },
        timeline: "3-5 weeks",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U",
        benefits: ["99.7% accuracy", "30min processing", "Auto-classification", "Cost reduction"]
      },
      {
        key: "customer-support",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        name: "AI Customer Support",
        description: "24/7 intelligent customer support automation with seamless human handoff capabilities.",
        features: ["Chatbot integration", "Sentiment analysis", "Multi-language support", "CRM integration", "Analytics dashboard"],
        pricing: { setup: 40000, monthly: 10000 },
        timeline: "4-6 weeks",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        benefits: ["80% response time", "98% satisfaction", "24/7 availability", "Cost efficient"]
      }
    ],
    development: [
      {
        key: "custom-software",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        name: "Custom Software Development",
        description: "Tailored software solutions built specifically for your business requirements and workflows.",
        features: ["Custom architecture", "Scalable design", "Modern tech stack", "API integration", "Cloud deployment"],
        pricing: { setup: 100000, monthly: 15000 },
        timeline: "8-12 weeks",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        benefits: ["100% customization", "Scalable solution", "Modern tech", "Long-term support"]
      },
      {
        key: "ai-integration",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        name: "AI System Integration",
        description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
        features: ["API development", "Legacy system integration", "Data migration", "Testing & QA", "Documentation"],
        pricing: { setup: 75000, monthly: 12000 },
        timeline: "6-10 weeks",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U",
        benefits: ["Seamless integration", "No disruption", "Enhanced capabilities", "Future-ready"]
      }
    ],
    consulting: [
      {
        key: "ai-strategy",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
        name: "AI Strategy Consulting",
        description: "Strategic guidance for AI adoption, implementation, and optimization across your organization.",
        features: ["AI readiness assessment", "Roadmap development", "Technology selection", "ROI analysis", "Change management"],
        pricing: { setup: 50000, monthly: 0 },
        timeline: "2-4 weeks",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        benefits: ["Clear strategy", "Risk mitigation", "Optimal ROI", "Expert guidance"]
      }
    ],
    integration: [
      {
        key: "system-integration",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        name: "Enterprise System Integration",
        description: "Connect and integrate multiple systems for seamless data flow and operations.",
        features: ["API integration", "Data synchronization", "Real-time updates", "Error handling", "Monitoring"],
        pricing: { setup: 60000, monthly: 10000 },
        timeline: "6-8 weeks",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U",
        benefits: ["Unified systems", "Data consistency", "Efficiency gain", "Reduced errors"]
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  {service.features.slice(0, 3).map((f, idx) => (
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
                    className="flex-1 border-primary dark:border-accent text-primary dark:text-accent hover:bg-primary dark:hover:bg-accent hover:text-white transition-all duration-300 text-xs sm:text-sm"
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
