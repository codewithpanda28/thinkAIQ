import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneySelector from './components/JourneySelector';
import TestimonialCarousel from './components/TestimonialCarousel';
import FeaturesShowcase from './components/FeaturesShowcase';
import SaaSProjectShowcase from './components/SaaSProjectShowcase';
import MonetizationSection from './components/MonetizationSection';
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
        <title>thinkAIQ - Transform Your Business with Intelligent AI Automation</title>
        <meta name="description" content="Join 300+ businesses that have revolutionized their operations with thinkAIQ's AI-powered automation solutions. Get 85% cost reduction and 99.7% accuracy. Book free consultation today." />
        <meta name="keywords" content="AI automation, business process automation, custom software development, artificial intelligence, business optimization, digital transformation, thinkAIQ" />
        <meta property="og:title" content="thinkAIQ - Transform Your Business with Intelligent AI Automation" />
        <meta property="og:description" content="Join 300+ businesses that have revolutionized their operations with AI-powered automation solutions. Get 85% cost reduction and 99.7% accuracy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thinkaiq.com/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="thinkAIQ - Transform Your Business with Intelligent AI Automation" />
        <meta name="twitter:description" content="Join 300+ businesses that have revolutionized their operations with AI-powered automation solutions." />
        <link rel="canonical" href="https://thinkaiq.com/homepage" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "thinkAIQ",
            "description": "AI-First Business Solutions Platform specializing in intelligent automation and custom software development",
            "url": "https://thinkaiq.com",
            "logo": "https://thinkaiq.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8252472186",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://linkedin.com/company/thinkaiq",
              "https://twitter.com/thinkaiq"
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
          {/* <JourneySelector /> */}
          
          {/* SaaS Project Showcase - Live projects users can try */}
          <SaaSProjectShowcase />
          
          {/* Features Showcase - Core solutions with interactive demos */}
          <FeaturesShowcase />
          
          {/* Testimonial Carousel - Social proof and success metrics */}
          <TestimonialCarousel />
          
          {/* Monetization Section - How we earn */}
          <MonetizationSection />
          
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