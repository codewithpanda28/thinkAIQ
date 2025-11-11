import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const testimonial = location.state?.testimonial;

  if (!testimonial) {
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
        <title>{testimonial.name} - Project Details | thinkAIQ</title>
        <meta name="description" content={`Detailed project information for ${testimonial.company} - ${testimonial.workDetails}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>Back to Testimonials</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center space-x-2 bg-success/10 dark:bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Icon name="CheckCircle" size={16} />
                  <span>Success Story</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {testimonial.company} Project
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete project details, implementation process, and results
                </p>
              </motion.div>
            </div>
          </section>

          {/* Client Information */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="relative inline-block mb-6">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 dark:border-accent/20"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{testimonial.name}</h2>
                    <p className="text-primary dark:text-accent font-medium mb-1">{testimonial.position}</p>
                    <p className="text-muted-foreground mb-4">{testimonial.company}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground">
                      <Icon name="MapPin" size={16} />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Testimonial</h3>
                      <blockquote className="text-muted-foreground italic">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          {testimonial.projectImages && testimonial.projectImages.length > 0 && (
            <section className="py-16 bg-muted/30 dark:bg-muted/20">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Images</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonial.projectImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Work Details */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">How We Completed This Project</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.workDetails}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hotel Information */}
          {testimonial.hotel && (
            <section className="py-16 bg-muted/30 dark:bg-muted/20">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Hotel" size={24} className="text-primary dark:text-accent" />
                    <h2 className="text-2xl font-bold text-foreground">Accommodation</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">{testimonial.hotel}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We stayed at this location during the project implementation to ensure seamless communication and on-site support.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Video Testimonials */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Video Testimonials</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {testimonial.videoUrl && (
                  <div className="bg-card dark:bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Project Overview Video</h3>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={testimonial.videoUrl}
                        title="Project overview video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                
                {testimonial.clientVideo && (
                  <div className="bg-card dark:bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Client Testimonial Video</h3>
                    <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={testimonial.clientVideo}
                        title={`Client testimonial from ${testimonial.name}`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Project Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-success mb-2">{testimonial.metrics.savings}</div>
                  <div className="text-muted-foreground">Monthly Savings</div>
                </div>
                <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-primary dark:text-accent mb-2">{testimonial.metrics.efficiency}</div>
                  <div className="text-muted-foreground">Efficiency Gain</div>
                </div>
                <div className="bg-card dark:bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold text-secondary mb-2">{testimonial.metrics.timeframe}</div>
                  <div className="text-muted-foreground">Implementation Time</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help you achieve similar results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:akashkumar.webdev@gmail.com?subject=Free%20Consultation"
                  aria-label="Book a free consultation"
                >
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="premium-button"
                  >
                    Book Free Consultation
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowLeft"
                  iconPosition="left"
                  onClick={() => navigate('/homepage-ai-automation-hub')}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProjectDetails;

