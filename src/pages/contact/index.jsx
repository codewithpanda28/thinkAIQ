import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationBooking from './components/ConsultationBooking';
import ContactForm from './components/ContactForm';
import OfficeLocations from './components/OfficeLocations';
import TeamDirectory from './components/TeamDirectory';
import EmergencySupport from './components/EmergencySupport';

const ContactSchedulingMultiChannelEngagement = () => {
  const [isBookingVisible, setIsBookingVisible] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleBookConsultation = () => {
    setIsBookingVisible(true);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918252472186';
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your AI automation services. Can we schedule a consultation?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMethodSelect = (method) => {
    setSelectedContactMethod(method);
    
    // Handle different contact methods
    switch (method?.id) {
      case 'consultation':
        setIsBookingVisible(true);
        break;
      case 'whatsapp':
        handleWhatsAppClick();
        break;
      case 'email':
        window.location.href = `mailto:${method?.email}?subject=AI Automation Inquiry`;
        break;
      case 'phone':
        window.location.href = `tel:${method?.phone}`;
        break;
      case 'livechat':
        // Implement live chat functionality
        console.log('Opening live chat...');
        break;
      case 'emergency':
        // Scroll to emergency support section
        document.getElementById('emergency-support')?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const handleCloseBooking = () => {
    setIsBookingVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Scheduling - Multi-Channel Engagement | AI Automation Hub</title>
        <meta 
          name="description" 
          content="Connect with AI Automation Hub through multiple channels. Book consultations, get instant WhatsApp support, visit our offices, or contact our expert team directly. 24/7 emergency support available for existing clients." 
        />
        <meta name="keywords" content="contact AI automation, schedule consultation, WhatsApp support, office locations, emergency support, team directory" />
        <meta property="og:title" content="Contact & Scheduling - Multi-Channel Engagement | AI Automation Hub" />
        <meta property="og:description" content="Multiple ways to connect with our AI automation experts. Book consultations, get instant support, or visit our offices." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen bg-background dark:bg-background">
        <Header />
        
        {/* Hero Section */}
        <ContactHero 
          onBookConsultation={handleBookConsultation}
          onWhatsAppClick={handleWhatsAppClick}
        />

        {/* Contact Methods */}
        <ContactMethods onMethodSelect={handleMethodSelect} />

        {/* Contact Form */}
        <ContactForm />

        {/* Office Locations */}
        <OfficeLocations />

        {/* Team Directory */}
        <TeamDirectory />

        {/* Emergency Support */}
        <div id="emergency-support">
          <EmergencySupport />
        </div>

        {/* Consultation Booking Modal */}
        {/* <ConsultationBooking 
          isVisible={isBookingVisible}
          onClose={handleCloseBooking}
        /> */}

        {/* Footer removed - only show on home page */}
      </div>
    </>
  );
};

export default ContactSchedulingMultiChannelEngagement;