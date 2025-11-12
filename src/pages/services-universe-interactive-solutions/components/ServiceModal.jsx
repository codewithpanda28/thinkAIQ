"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const allServiceDetails = {
  "workflow-automation": {
    name: "AI Workflow Automation",
    description: "Our AI-powered workflow automation system helps businesses streamline processes, reduce manual work, and increase efficiency. Tasks that once took hours are now automated, freeing up teams to focus on strategic decisions.",
    longDescription: "Transform your business processes with intelligent automation that learns and adapts. Our AI workflow automation system integrates seamlessly with your existing tools and provides real-time insights into process performance. From simple task automation to complex multi-step workflows, we handle it all.",
    features: [
      "AI-assisted decision making",
      "Automated task scheduling",
      "Smart workflow routing",
      "Real-time monitoring dashboards",
      "Error handling and recovery",
      "Customizable workflow templates",
      "Multi-system integration",
      "Analytics and reporting"
    ],
    benefits: [
      "Cut operational costs by up to 70%",
      "Enhance process efficiency with AI assistance",
      "Ensure compliance with automated checks",
      "Speed up processing time by 10x",
      "Reduce human errors by 95%",
      "Scale operations without additional staff"
    ],
    useCases: [
      "Automated invoice processing and approval",
      "Customer support ticket routing",
      "Document classification and filing",
      "Data entry and validation",
      "Report generation and distribution",
      "Email automation and responses"
    ],
    technologies: ["OpenAI GPT", "Custom AI Models", "RPA Tools", "Workflow Engine", "API Integration"],
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
    ],
    caseStudies: [
      {
        company: "TechFlow Solutions",
        result: "85% reduction in processing time",
        savings: "₹8,50,000/month"
      },
      {
        company: "Global Logistics Ltd",
        result: "80% faster response time",
        savings: "₹12,30,000/month"
      }
    ],
    industries: ["Technology", "Logistics", "Finance", "Healthcare", "Manufacturing"],
    timeline: "2-4 weeks",
    support: "24/7 support included",
    training: "Comprehensive training provided"
  },
  "document-processing": {
    name: "AI Document Processing",
    description: "Intelligent document extraction, processing, and management using advanced OCR and NLP. Handle large volumes of documents effortlessly with 99.7% accuracy.",
    longDescription: "Revolutionize your document management with AI-powered processing that extracts, classifies, and analyzes documents automatically. Our system supports multiple formats, languages, and document types, making it perfect for businesses dealing with high document volumes.",
    features: [
      "Advanced OCR technology",
      "Intelligent data extraction",
      "Automated document classification",
      "Multi-format support (PDF, Word, Excel, Images)",
      "Cloud-based secure storage",
      "Version control and audit trails",
      "Compliance monitoring",
      "API integration"
    ],
    benefits: [
      "Save 10-20 hours per week",
      "Minimize manual errors by 99%",
      "Quick access to all documents",
      "Maintain regulatory compliance",
      "Reduce storage costs by 60%",
      "Improve document retrieval speed by 10x"
    ],
    useCases: [
      "Resume parsing and database entry",
      "Invoice and receipt processing",
      "Contract analysis and extraction",
      "Policy and compliance documents",
      "Employee record digitization",
      "Digital signature workflows"
    ],
    technologies: ["Tesseract OCR", "NLP Models", "Computer Vision", "Cloud Storage", "Search Engine"],
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
    ],
    caseStudies: [
      {
        company: "EcoManufacturing",
        result: "60% waste reduction",
        savings: "₹15,75,000/month"
      },
      {
        company: "Digital Dynamics",
        result: "245% conversion increase",
        savings: "₹9,80,000/month"
      }
    ],
    industries: ["Legal", "Finance", "Healthcare", "Real Estate", "Education"],
    timeline: "3-5 weeks",
    support: "24/7 support included",
    training: "Comprehensive training provided"
  },
  "customer-support": {
    name: "AI Customer Support",
    description: "24/7 intelligent customer support automation with seamless human handoff capabilities. Reduce response time by 80% and increase customer satisfaction.",
    longDescription: "Transform your customer support with AI-powered chatbots and automation that handle inquiries, resolve issues, and provide instant responses. Our system learns from every interaction to continuously improve and can seamlessly hand off complex issues to human agents.",
    features: [
      "Intelligent chatbot integration",
      "Sentiment analysis",
      "Multi-language support (50+ languages)",
      "CRM and ticketing system integration",
      "Analytics dashboard",
      "Custom AI training",
      "Voice and text support",
      "Knowledge base integration"
    ],
    benefits: [
      "80% reduction in response time",
      "98% customer satisfaction rate",
      "24/7 availability",
      "Cost-efficient support operations",
      "Handle 10x more inquiries",
      "Improve first contact resolution by 70%"
    ],
    useCases: [
      "Customer inquiry handling",
      "Product support and troubleshooting",
      "Order status inquiries",
      "FAQ automation",
      "Appointment scheduling",
      "Complaint resolution"
    ],
    technologies: ["OpenAI GPT", "NLP", "Sentiment Analysis", "CRM APIs", "Analytics Tools"],
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    ],
    caseStudies: [
      {
        company: "TechCorp International",
        result: "90% efficiency gain",
        savings: "$125,000/month"
      }
    ],
    industries: ["E-commerce", "SaaS", "Healthcare", "Finance", "Retail"],
    timeline: "4-6 weeks",
    support: "24/7 support included",
    training: "Comprehensive training provided"
  }
};

const ServiceModal = ({ serviceKey, services, onClose }) => {
  if (!serviceKey) return null;
  
  // Find service in the services array passed from parent
  const service = services?.find(s => s.key === serviceKey) || allServiceDetails[serviceKey];
  
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
          {/* Close Button - Fixed position */}
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
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground dark:text-foreground">
                    {service.name}
                  </h2>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">
                    Comprehensive AI Automation Solution
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed">
                {service.longDescription || service.description}
              </p>
            </div>

            {/* Video Section */}
            {service.video && (
              <div className="mb-8 rounded-xl overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="400"
                  src={service.video}
                  title={service.name}
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            )}

            {/* Images Gallery */}
            {service.images && service.images.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.images.map((img, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${service.name} screenshot ${idx + 1}`}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-success mr-2" />
                    Key Features
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
                    <Icon name="TrendingUp" size={20} className="text-primary dark:text-accent mr-2" />
                    Key Benefits
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

                {/* Use Cases */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Lightbulb" size={20} className="text-warning mr-2" />
                    Use Cases
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.useCases?.map((useCase, idx) => (
                      <div key={idx} className="p-3 bg-muted/30 dark:bg-muted rounded-lg text-sm text-foreground">
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Code" size={20} className="text-secondary mr-2" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-muted dark:bg-muted rounded-full text-sm text-foreground font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                {service.caseStudies && service.caseStudies.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Award" size={20} className="text-success mr-2" />
                      Success Stories
                    </h3>
                    <div className="space-y-4">
                      {service.caseStudies.map((study, idx) => (
                        <div key={idx} className="p-4 bg-muted/30 dark:bg-muted rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2">{study.company}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{study.result}</p>
                          <p className="text-sm font-semibold text-success">{study.savings}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries */}
                {service.industries && (
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Building" size={20} className="text-primary dark:text-accent mr-2" />
                      Suitable Industries
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent rounded-full text-sm">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline & Support */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 dark:bg-muted rounded-lg">
                    <Icon name="Clock" size={20} className="text-primary dark:text-accent mb-2" />
                    <h4 className="font-semibold text-foreground dark:text-foreground mb-1">Timeline</h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{service.timeline}</p>
                  </div>
                  <div className="p-4 bg-muted/30 dark:bg-muted rounded-lg">
                    <Icon name="Headphones" size={20} className="text-success mb-2" />
                    <h4 className="font-semibold text-foreground dark:text-foreground mb-1">Support</h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{service.support}</p>
                  </div>
                </div>

                {/* Implementation Process */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-4 flex items-center">
                    <Icon name="GitBranch" size={20} className="text-primary dark:text-accent mr-2" />
                    Implementation Process
                  </h3>
                  <div className="space-y-3">
                    {[
                      { step: "1. Discovery & Analysis", desc: "We analyze your current processes and identify automation opportunities" },
                      { step: "2. Custom Solution Design", desc: "We design a tailored solution that fits your specific business needs" },
                      { step: "3. Development & Testing", desc: "We build and thoroughly test the solution in a controlled environment" },
                      { step: "4. Deployment & Training", desc: "We deploy the solution and provide comprehensive training to your team" },
                      { step: "5. Ongoing Support", desc: "We provide continuous support and optimization to ensure maximum ROI" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-muted/30 dark:bg-muted rounded-lg">
                        <div className="w-6 h-6 bg-primary dark:bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground dark:text-foreground text-sm">{item.step}</h4>
                          <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI & Metrics */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-4 flex items-center">
                    <Icon name="TrendingUp" size={20} className="text-success mr-2" />
                    Expected ROI & Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Time Savings", value: "70-90%" },
                      { label: "Cost Reduction", value: "60-85%" },
                      { label: "Accuracy", value: "95-99%" },
                      { label: "ROI Timeline", value: "3-6 months" }
                    ].map((metric, idx) => (
                      <div key={idx} className="p-3 bg-success/10 dark:bg-success/20 rounded-lg text-center">
                        <div className="text-lg font-bold text-success mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground dark:text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/918252472186?text=Hi, I'm interested in ${service.name} service. Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="default" className="w-full" iconName="MessageCircle" iconPosition="left">
                  Chat on WhatsApp
                </Button>
              </a>
              <a
                href={`mailto:akashkumar.webdev@gmail.com?subject=Inquiry about ${service.name} service`}
                className="flex-1"
              >
                <Button variant="outline" className="w-full" iconName="Mail" iconPosition="left">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
