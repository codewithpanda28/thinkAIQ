import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCategories from './components/ServiceCategories';
import ServiceComparison from './components/ServiceComparison';
import ProcessTimeline from './components/ProcessTimeline';
import ServiceTestimonials from './components/ServiceTestimonials';
import ServiceFAQ from './components/ServiceFAQ';
import Icon from '../../components/AppIcon';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Automation Services | Custom Development & Process Optimization | thinkAIQ</title>
        <meta 
          name="description" 
          content="Transform your business with thinkAIQ's AI automation services. Custom software development, process optimization, system integration. Calculate ROI, compare solutions, and see real results from industry leaders." 
        />
        <meta name="keywords" content="AI automation, custom software development, process optimization, system integration, business automation, ROI calculator, thinkAIQ services" />
        <meta property="og:title" content="AI Automation Services | Custom Development & Process Optimization | thinkAIQ" />
        <meta property="og:description" content="We don't just automate processes - we reimagine possibilities. Discover intelligent automation solutions that grow with your business." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ServiceHero />
          <ServiceCategories />
          {/* <ServiceComparison /> */}
          {/* <ProcessTimeline /> */}
          <ServiceTestimonials />
          <ServiceFAQ />
        </main>

      {/* Footer CTA - No footer, only CTA */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-accent dark:from-primary dark:via-secondary dark:to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have already revolutionized their operations 
            with our intelligent automation and AI-powered solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:+918252472186"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold text-base sm:text-lg hover:bg-white/90 transition-colors duration-200"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Call +91 8252472186
            </a>
            <a
              href="https://wa.me/918252472186?text=Hi,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-white/70 text-xs sm:text-sm mt-6">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>

      </div>
    </>
  );
};

export default ServicesPage;