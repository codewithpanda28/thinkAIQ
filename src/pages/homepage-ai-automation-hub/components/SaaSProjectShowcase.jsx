import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SaaSProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const saasProjects = [
    {
      id: 1,
      name: "AI Customer Support Agent",
      tagline: "24/7 Intelligent Customer Support",
      description: "An AI-powered customer support system that handles inquiries, resolves issues, and provides instant responses 24/7.",
      icon: "MessageSquare",
      color: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      metrics: { 
        users: "50+", 
        satisfaction: "98%", 
        response: "<2min",
        uptime: "99.9%"
      },
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "CRM Integration",
        "Analytics Dashboard",
        "Custom AI Training",
        "API Access"
      ],
      techStack: ["React", "Node.js", "OpenAI", "MongoDB", "AWS"],
      liveDemo: "https://demo.thinkaiq.com/customer-support",
      caseStudy: "/project-details/1",
      pricing: "Starting at ₹25,000/month",
      category: "AI Automation"
    },
    {
      id: 2,
      name: "Invoice Processing System",
      tagline: "Automated Invoice Management",
      description: "Intelligent invoice processing system with OCR, data extraction, and automated approval workflows.",
      icon: "FileText",
      color: "from-purple-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      metrics: { 
        accuracy: "99.7%", 
        time: "30min", 
        cost: "85% reduction",
        processed: "10K+/month"
      },
      features: [
        "Advanced OCR Technology",
        "Automated Data Extraction",
        "Approval Workflows",
        "Multi-format Support",
        "Cloud Storage",
        "Real-time Tracking"
      ],
      techStack: ["Python", "Tesseract OCR", "FastAPI", "PostgreSQL", "Docker"],
      liveDemo: "https://demo.thinkaiq.com/invoice-processing",
      caseStudy: "/project-details/2",
      pricing: "Starting at ₹35,000/month",
      category: "Document Processing"
    },
    {
      id: 3,
      name: "Lead Generation Bot",
      tagline: "AI-Powered Lead Qualification",
      description: "Intelligent lead generation and qualification system that nurtures prospects and increases conversion rates.",
      icon: "Target",
      color: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      metrics: { 
        conversion: "245%", 
        leads: "10K+", 
        qualification: "95%",
        roi: "300%"
      },
      features: [
        "Lead Scoring AI",
        "Automated Nurturing",
        "CRM Integration",
        "Email Campaigns",
        "Analytics & Reporting",
        "A/B Testing"
      ],
      techStack: ["Vue.js", "Python", "Machine Learning", "Redis", "SendGrid"],
      liveDemo: "https://demo.thinkaiq.com/lead-generation",
      caseStudy: "/project-details/3",
      pricing: "Starting at ₹30,000/month",
      category: "Marketing Automation"
    },
    {
      id: 4,
      name: "Inventory Management AI",
      tagline: "Smart Inventory Prediction",
      description: "Predictive inventory management system that optimizes stock levels and reduces waste using AI.",
      icon: "Package",
      color: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      metrics: { 
        savings: "40%", 
        accuracy: "95%", 
        waste: "60% reduction",
        efficiency: "80%"
      },
      features: [
        "Demand Forecasting",
        "Automated Reordering",
        "Multi-warehouse Support",
        "Real-time Tracking",
        "Analytics Dashboard",
        "Mobile App"
      ],
      techStack: ["React Native", "Python", "TensorFlow", "PostgreSQL", "Kubernetes"],
      liveDemo: "https://demo.thinkaiq.com/inventory",
      caseStudy: "/project-details/4",
      pricing: "Starting at ₹40,000/month",
      category: "Supply Chain"
    },
    {
      id: 5,
      name: "HR Automation Platform",
      tagline: "Complete HR Management",
      description: "Comprehensive HR automation platform for recruitment, onboarding, payroll, and employee management.",
      icon: "Users",
      color: "from-cyan-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      metrics: { 
        efficiency: "70%", 
        time: "50% reduction", 
        satisfaction: "92%",
        clients: "75+"
      },
      features: [
        "AI Resume Screening",
        "Automated Onboarding",
        "Payroll Management",
        "Performance Reviews",
        "Leave Management",
        "Employee Portal"
      ],
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveDemo: "https://demo.thinkaiq.com/hr-platform",
      caseStudy: "/project-details/5",
      pricing: "Starting at ₹45,000/month",
      category: "HR Tech"
    },
    {
      id: 6,
      name: "Document AI Analyzer",
      tagline: "Intelligent Document Analysis",
      description: "AI-powered document analysis system that extracts insights, summarizes content, and identifies key information.",
      icon: "FileSearch",
      color: "from-pink-500 to-rose-600",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      metrics: { 
        speed: "10x faster", 
        accuracy: "98%", 
        documents: "1M+ processed",
        languages: "50+"
      },
      features: [
        "Document Summarization",
        "Key Information Extraction",
        "Multi-language Support",
        "Custom AI Models",
        "API Integration",
        "Batch Processing"
      ],
      techStack: ["Python", "Transformers", "FastAPI", "Elasticsearch", "Docker"],
      liveDemo: "https://demo.thinkaiq.com/document-ai",
      caseStudy: "/project-details/6",
      pricing: "Starting at ₹50,000/month",
      category: "AI Analytics"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleViewDetails = (project) => {
    navigate(`/saas-project/${project.id}`, { state: { project } });
  };

  return (
    
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-muted/20 dark:to-background">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Cloud" size={16} />
            <span>Our SaaS Products</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Live SaaS Projects
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our live SaaS products, see real-time demos, and discover how we've helped businesses automate and scale.
          </p>
        </motion.div>

        {/* Projects Grid - Show only first 3 as samples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {saasProjects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card dark:bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image - Make sure image is visible */}
              <div className="relative h-56 overflow-hidden bg-muted dark:bg-muted">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.src = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    <Icon name={project.icon} size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{project.name}</h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{project.tagline}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-muted dark:bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(project.metrics).slice(0, 4).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-2 bg-muted/30 dark:bg-muted rounded-lg">
                      <div className="text-sm font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Button - Single button to redirect to services page */}
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  className="text-xs bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Navigate to services page with project ID to highlight specific project
                    navigate(`/services-universe-interactive-solutions?project=${project.id}`);
                  }}
                >
                  <Icon name="ArrowRight" size={14} className="mr-1" />
                  View Project Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card dark:bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-12 h-12 bg-gradient-to-br ${selectedProject.color} rounded-xl flex items-center justify-center`}>
                          <Icon name={selectedProject.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{selectedProject.name}</h3>
                          <p className="text-muted-foreground">{selectedProject.tagline}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Icon name="X" size={24} className="text-foreground" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Description</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-muted dark:bg-muted rounded-full text-xs text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Pricing</h4>
                      <p className="text-lg font-bold text-primary dark:text-accent">{selectedProject.pricing}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => {
                        window.open(selectedProject.liveDemo, '_blank');
                      }}
                    >
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Try Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => handleViewDetails(selectedProject)}
                    >
                      <Icon name="FileText" size={18} className="mr-2" />
                      View Full Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
    </section>
  );
};

export default SaaSProjectShowcase;

