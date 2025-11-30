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
    document.title = 'About Us - thinkAIQ | Expert Network & Company Story';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Meet the expert team behind thinkAIQ. Founded by AI automation specialists Akash Kumar and Aditya Sharma, we transform businesses through intelligent automation solutions. MSME certified with 300+ successful projects.');
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
      {/* <CompanyTimelineSection /> */}
      {/* Team Expertise */}
      <TeamExpertiseSection />
      {/* Certifications & Awards */}
      <CertificationsSection />
      {/* Call to Action */}
      {/* <CallToActionSection /> */}
      {/* Footer removed - only show on home page */}
    </div>
  );
};

export default About;