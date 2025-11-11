import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Footer from '../homepage-ai-automation-hub/components/Footer';

const SaaSProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h2>
          <Button onClick={() => navigate('/homepage-ai-automation-hub')}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.name} - Project Details | thinkAIQ</title>
        <meta name="description" content={`Detailed information about ${project.name} - ${project.description}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>Back to Projects</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="Cloud" size={16} />
                  <span>SaaS Product</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  {project.name}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  {project.tagline}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-12 shadow-lg mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Project Overview</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors"
                      >
                        <Icon name="ExternalLink" size={18} className="mr-2" />
                        Try Live Demo
                      </a>
                      <Button
                        variant="outline"
                        onClick={() => navigate('/contact-scheduling-multi-channel-engagement')}
                      >
                        <Icon name="Mail" size={18} className="mr-2" />
                        Contact Us
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="p-4 bg-muted/30 dark:bg-muted rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary dark:text-accent mb-1">{value}</div>
                        <div className="text-sm text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-muted/30 dark:bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-card dark:bg-card border border-border rounded-xl p-6 shadow-lg"
                  >
                    <Icon name="Check" size={24} className="text-success mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technology Stack</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-6 py-3 bg-muted dark:bg-muted rounded-full text-foreground font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Interested in This Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you achieve similar results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akashkumar.webdev@gmail.com?subject=Inquiry about project"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors"
                >
                  <Icon name="Mail" size={18} className="mr-2" />
                  Get in Touch
                </a>
                <Button
                  variant="outline"
                  onClick={() => navigate('/homepage-ai-automation-hub')}
                >
                  <Icon name="ArrowLeft" size={18} className="mr-2" />
                  Back to Home
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SaaSProjectDetails;

