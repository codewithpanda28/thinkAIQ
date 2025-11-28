"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const allServiceDetails = {
  "whatsapp-automation-catalog": {
    name: "WhatsApp Automation Catalog – Industry‑Wise",
    description:
      "Expanded WhatsApp automation catalog with industry-specific core & advanced automations for E-commerce, Healthcare, Real Estate, Education, and more.",
    longDescription:
      "Streamline customer interactions and business workflows with our industry-specific WhatsApp automation catalog. Handle appointments, orders, leads, feedback, and follow-ups automatically while delivering personalized AI-powered recommendations.",
    features: [
      "Industry-wise core & advanced WhatsApp automations",
      "High-ROI pitch automations for multiple sectors",
      "Appointment, order, lead & feedback automations",
      "Automated follow-ups and customer engagement flows",
      "AI-powered product, service, and customer recommendations"
    ],
    benefits: [
      "Saves time with automation",
      "Improves customer engagement",
      "Boosts conversion & ROI",
      "Supports multiple industries",
      "Easy integration with existing workflows"
    ],
    useCases: [
      "Lead capture and qualification",
      "Automated product/service catalog delivery",
      "Appointment & demo scheduling",
      "Order tracking and status updates",
      "Customer feedback collection",
      "Follow-up automation",
      "Upsell and cross-sell recommendations",
      "Payment link reminders",
      "Abandoned cart recovery",
      "Support ticket automation"
    ],
    technologies: [
      "WhatsApp Business API",
      "AI Chatbots",
      "CRM Integration",
      "Automation Workflows",
      "Analytics Dashboards"
    ],
    video: "https://via.placeholder.com/800x400?text=Video+Coming+Soon",
    images: [
      "https://cdn.botpenguin.com/assets/website/whatsapp_bot_improves_customer_support_and_service_01_df56e82e62.webp",
      "https://cdn.botpenguin.com/assets/website/whatsapp_bot_improves_customer_support_and_service_01_df56e82e62.webp",
      "https://cdn.botpenguin.com/assets/website/whatsapp_bot_improves_customer_support_and_service_01_df56e82e62.webp"
    ],
   
    industries: [
      "E-commerce",
      "Healthcare",
      "Real Estate",
      "Education",
      "SaaS",
      "Salon & Beauty",
      "Restaurants & Cloud Kitchens",
      "Finance & Insurance",
      "Automobile",
      "Hotels & Travel",
      "B2B Manufacturing",
      "Home Services",
      "Lawyers & Consultants",
      "Fitness & Yoga",
      "Construction & Architects",
      "HR & Recruitment"
    ],
    timeline: "4-6 weeks",
    support: "24/7 support included",
    training: "Comprehensive training provided"
  }
};


const ServiceModal = ({ serviceKey, onClose }) => {
  if (!serviceKey) return null;

  const service = allServiceDetails[serviceKey];
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl bg-card dark:bg-card border border-border rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed sm:top-9 lg:top-[75px] right-6 z-[60] bg-background dark:bg-background border-2 border-border hover:border-destructive dark:hover:border-destructive rounded-full p-3 text-foreground hover:text-destructive dark:hover:text-destructive shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} />
          </button>

          <div className="p-6 lg:p-8 pt-16">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground dark:text-foreground">{service.name}</h2>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
                    WhatsApp Automation Solution
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed">{service.longDescription}</p>
            </div>

            {/* Video */}
            {service.video && (
              <div className="mb-8 rounded-xl overflow-hidden bg-muted">
                <iframe width="100%" height="400" src={service.video} title={service.name} allowFullScreen className="w-full"></iframe>
              </div>
            )}

            {/* Images */}
            {service.images && service.images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                      <Image src={img} alt={`${service.name} screenshot ${idx + 1}`} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-success mr-2" />Key Features
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-3 bg-muted/30 dark:bg-muted rounded-lg">
                        <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="TrendingUp" size={20} className="text-primary dark:text-accent mr-2" />Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                        <Icon name="ArrowRight" size={16} className="text-primary dark:text-accent flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                    {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Code" size={20} className="text-secondary mr-2" />Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-muted dark:bg-muted rounded-full text-sm text-foreground font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
             
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                   {/* Use Cases */}
                   <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="text-warning mr-2" />Use Cases
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.useCases?.map((useCase, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 dark:bg-muted rounded-lg text-sm text-foreground">{useCase}</div>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                

                {/* Industries */}
                {service.industries && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Building" size={20} className="text-primary dark:text-accent mr-2" />Suitable Industries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent rounded-full text-sm">{industry}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/918252472186?text=Hi, I'm interested in ${service.name} service. Please provide more details.`} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="default" className="w-full" iconName="MessageCircle" iconPosition="left">Chat on WhatsApp</Button>
              </a>
              <a href={`mailto:akashkumar.webdev@gmail.com?subject=Inquiry about ${service.name} service`} className="flex-1">
                <Button variant="outline" className="w-full" iconName="Mail" iconPosition="left">Send Email</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
