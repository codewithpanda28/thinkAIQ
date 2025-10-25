import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCategories from './components/ServiceCategories';
import ROICalculator from './components/ROICalculator';
import ServiceComparison from './components/ServiceComparison';
import ProcessTimeline from './components/ProcessTimeline';
import ServiceTestimonials from './components/ServiceTestimonials';
import ServiceFAQ from './components/ServiceFAQ';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Automation Services | Custom Development & Process Optimization | Authera</title>
        <meta 
          name="description" 
          content="Transform your business with Authera's AI automation services. Custom software development, process optimization, system integration. Calculate ROI, compare solutions, and see real results from industry leaders." 
        />
        <meta name="keywords" content="AI automation, custom software development, process optimization, system integration, business automation, ROI calculator, Authera services" />
        <meta property="og:title" content="AI Automation Services | Custom Development & Process Optimization | Authera" />
        <meta property="og:description" content="We don't just automate processes - we reimagine possibilities. Discover intelligent automation solutions that grow with your business." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ServiceHero />
          <ServiceCategories />
          <ROICalculator />
          <ServiceComparison />
          <ProcessTimeline />
          <ServiceTestimonials />
          <ServiceFAQ />
        </main>

      {/* Footer CTA */}
<section className="py-16 bg-gradient-to-r from-primary to-secondary">
  <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
      Ready to Transform Your Business?
    </h2>
    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
      Join hundreds of businesses that have already revolutionized their operations 
      with our intelligent automation and AI-powered solutions.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Get Started Button */}
      {/* <a
        href="/contact" 
        className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        <span>Get Started Today</span>
      </a> */}

      {/* Call Button */}
      <a
        href="tel:+919876543210"
        className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>Call +91 8252472186</span>
      </a>
    </div>

    <p className="text-white/70 text-sm mt-6">
      Free consultation • No obligation • Response within 24 hours
    </p>
  </div>
</section>

      </div>
    </>
  );
};

export default ServicesPage;