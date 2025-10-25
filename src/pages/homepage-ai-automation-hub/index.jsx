import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneySelector from './components/JourneySelector';
import TestimonialCarousel from './components/TestimonialCarousel';
import FeaturesShowcase from './components/FeaturesShowcase';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Authera - Transform Your Business with Intelligent AI Automation</title>
        <meta name="description" content="Join 300+ businesses that have revolutionized their operations with Authera's AI-powered automation solutions. Get 85% cost reduction and 99.7% accuracy. Book free consultation today." />
        <meta name="keywords" content="AI automation, business process automation, custom software development, artificial intelligence, business optimization, digital transformation, Authera" />
        <meta property="og:title" content="Authera - Transform Your Business with Intelligent AI Automation" />
        <meta property="og:description" content="Join 300+ businesses that have revolutionized their operations with AI-powered automation solutions. Get 85% cost reduction and 99.7% accuracy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://authera.ai/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Authera - Transform Your Business with Intelligent AI Automation" />
        <meta name="twitter:description" content="Join 300+ businesses that have revolutionized their operations with AI-powered automation solutions." />
        <link rel="canonical" href="https://authera.ai/homepage" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Authera",
            "description": "AI-First Business Solutions Platform specializing in intelligent automation and custom software development",
            "url": "https://authera.ai",
            "logo": "https://authera.ai/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98765-43210",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://linkedin.com/company/authera",
              "https://twitter.com/authera_ai"
            ],
            "founder": [
              {
                "@type": "Person",
                "name": "Akash Kumar"
              },
              {
                "@type": "Person", 
                "name": "Aditya"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section - Primary entry point with immediate impact */}
          <HeroSection />
          
          {/* Journey Selector - Interactive quiz for personalized user paths */}
          <JourneySelector />
          
          {/* Features Showcase - Core solutions with interactive demos */}
          <FeaturesShowcase />
          
          {/* Testimonial Carousel - Social proof and success metrics */}
          <TestimonialCarousel />
          
          {/* CTA Section - Multiple conversion paths and contact methods */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;