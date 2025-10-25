import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FounderSection from './components/FounderSection';
import CompanyTimelineSection from './components/CompanyTimelineSection';
import TeamExpertiseSection from './components/TeamExpertiseSection';
import CertificationsSection from './components/CertificationsSection';
import CallToActionSection from './components/CallToActionSection';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - Authera | Expert Network & Company Story';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Meet the expert team behind Authera. Founded by AI automation specialists Akash Kumar and Aditya Sharma, we transform businesses through intelligent automation solutions. MSME certified with 300+ successful projects.');
    }

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Founder Section */}
      <FounderSection />
      {/* Company Timeline */}
      <CompanyTimelineSection />
      {/* Team Expertise */}
      <TeamExpertiseSection />
      {/* Certifications & Awards */}
      <CertificationsSection />
      {/* Call to Action */}
      <CallToActionSection />
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Authera</div>
                  <div className="text-sm text-background/70">AI Automation Experts</div>
                </div>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Founded by experts, proven by results, trusted by businesses worldwide. 
                We transform organizations through intelligent automation and AI-powered solutions.
              </p>
              <div className="text-sm text-background/60">
                MSME Certified | ISO 9001:2015 | 300+ Projects Delivered
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/homepage" className="hover:text-background transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-background transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-background transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-background/80">
                <div>+91 98765 43210</div>
                <div>akashkumar.webdev@gmail.com</div>
                <div>Mon-Fri: 9 AM - 6 PM IST</div>
                <div>Emergency: +91 98765 43211</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; {new Date()?.getFullYear()} Authera. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;