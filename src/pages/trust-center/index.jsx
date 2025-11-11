import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CertificationCard from './components/CertificationCard';
import TestimonialCard from './components/TestimonialCard';
import SecurityComplianceCard from './components/SecurityComplianceCard';
import PartnershipCard from './components/PartnershipCard';
import AwardCard from './components/AwardCard';
import TransparencyReport from './components/TransparencyReport';
import ClientReferenceSystem from './components/ClientReferenceSystem';

const TrustCenter = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count
    const count = Math.floor(Math.random() * 1000) + 5000;
    setVisitorCount(count);
  }, []);

  const certifications = [
    {
      id: 1,
      name: "MSME Registration",
      issuer: "Ministry of MSME, Government of India",
      description: "Official registration as a Micro, Small & Medium Enterprise, enabling us to serve government and enterprise clients with verified credentials.",
      issueDate: "March 2023",
      expiryDate: "March 2028",
      icon: "Award",
      verified: true,
      verificationUrl: "https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm"
    },
    {
      id: 2,
      name: "ISO 27001:2013",
      issuer: "International Organization for Standardization",
      description: "Information Security Management System certification ensuring the highest standards of data protection and security protocols.",
      issueDate: "August 2023",
      expiryDate: "August 2026",
      icon: "Shield",
      verified: true,
      verificationUrl: "https://www.iso.org/standard/54534.html"
    },
    {
      id: 3,
      name: "Google Cloud Partner",
      issuer: "Google Cloud Platform",
      description: "Certified partner status with Google Cloud, demonstrating expertise in cloud infrastructure and AI/ML solutions.",
      issueDate: "January 2024",
      expiryDate: "January 2025",
      icon: "Cloud",
      verified: true,
      verificationUrl: "https://cloud.google.com/partners"
    },
    {
      id: 4,
      name: "AWS Solution Provider",
      issuer: "Amazon Web Services",
      description: "Authorized AWS solution provider with certified expertise in cloud architecture and deployment.",
      issueDate: "November 2023",
      expiryDate: "November 2024",
      icon: "Server",
      verified: true,
      verificationUrl: "https://aws.amazon.com/partners/"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Chief Technology Officer",
      company: "TechCorp Solutions Pvt Ltd",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Working with Authera has been transformational for our business. Their AI automation solutions reduced our manual processing time by 85% and improved accuracy to 99.2%. The team's expertise in understanding our complex workflows and delivering tailored solutions exceeded our expectations. What impressed us most was their post-deployment support and continuous optimization approach.`,
      date: "November 2024",
      projectType: "AI Process Automation",
      roi: "340% in 8 months",
      verified: true,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Operations Manager",
      company: "Digital Dynamics India",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Authera delivered our custom CRM system ahead of schedule and under budget. The solution perfectly integrated with our existing tools and the user adoption rate was 95% within the first month. Their transparent communication and agile development approach made the entire process smooth and stress-free.`,
      date: "October 2024",
      projectType: "Custom Software Development",
      roi: "250% in 6 months",
      verified: true
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder & CEO",
      company: "InnovateTech Startups",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `As a startup, we needed a technology partner who could understand our vision and scale with us. Authera not only built our MVP but also provided strategic guidance that helped us secure our Series A funding. Their expertise in AI and automation gave us a competitive edge in the market.`,
      date: "September 2024",
      projectType: "MVP Development & AI Integration",
      roi: "500% valuation increase",
      verified: true
    }
  ];

  const securityCompliance = [
    {
      id: 1,
      title: "Data Encryption Standards",
      category: "Security Protocol",
      description: "End-to-end encryption using AES-256 for all data transmissions and storage, ensuring maximum security for client information.",
      status: "active",
      icon: "Lock",
      features: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "Regular key rotation protocols",
        "Zero-knowledge architecture"
      ],
      lastUpdated: "December 2024",
      nextAudit: "March 2025",
      documentUrl: "/documents/encryption-standards.pdf"
    },
    {
      id: 2,
      title: "GDPR Compliance",
      category: "Privacy Regulation",
      description: "Full compliance with General Data Protection Regulation ensuring proper handling of personal data for international clients.",
      status: "active",
      icon: "Shield",
      features: [
        "Data subject rights implementation",
        "Privacy by design principles",
        "Regular compliance audits",
        "Data breach notification procedures"
      ],
      lastUpdated: "November 2024",
      nextAudit: "February 2025",
      documentUrl: "/documents/gdpr-compliance.pdf"
    },
    {
      id: 3,
      title: "Penetration Testing",
      category: "Security Assessment",
      description: "Quarterly penetration testing by certified ethical hackers to identify and resolve security vulnerabilities.",
      status: "active",
      icon: "Search",
      features: [
        "Quarterly security assessments",
        "Vulnerability scanning and remediation",
        "Social engineering testing",
        "Compliance reporting"
      ],
      lastUpdated: "October 2024",
      nextAudit: "January 2025",
      documentUrl: "/documents/pentest-report.pdf"
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: "Google Cloud Platform",
      type: "Technology Partner",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      description: "Certified Google Cloud Partner with expertise in AI/ML services, cloud infrastructure, and enterprise solutions.",
      benefits: [
        "Access to latest AI/ML technologies",
        "Priority technical support",
        "Co-marketing opportunities",
        "Training and certification programs"
      ],
      since: "January 2024",
      region: "India & APAC",
      verified: true,
      verificationUrl: "https://cloud.google.com/partners/detail/authera"
    },
    {
      id: 2,
      name: "Microsoft Azure",
      type: "Solution Provider",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=100&h=100&fit=crop",
      description: "Microsoft Azure certified partner specializing in cloud migration, AI services, and enterprise application development.",
      benefits: [
        "Azure credits and resources",
        "Technical pre-sales support",
        "Go-to-market resources",
        "Advanced partner benefits"
      ],
      since: "March 2023",
      region: "Global",
      verified: true,
      verificationUrl: "https://partner.microsoft.com/en-us/partnership/find-a-partner/authera"
    },
    {
      id: 3,
      name: "AWS Partner Network",
      type: "Solution Provider",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      description: "Amazon Web Services partner with proven expertise in cloud architecture, serverless computing, and AI/ML implementations.",
      benefits: [
        "AWS promotional credits",
        "Technical training resources",
        "Marketing development funds",
        "Customer referral opportunities"
      ],
      since: "November 2023",
      region: "India",
      verified: true,
      verificationUrl: "https://partners.amazonaws.com/partners/001E000001C5m8QIAR/"
    }
  ];

  const awards = [
    {
      id: 1,
      title: "Best AI Innovation Startup 2024",
      organization: "India Tech Awards",
      date: "October 2024",
      location: "Mumbai, India",
      description: "Recognized for innovative AI automation solutions that transformed traditional business processes across multiple industries.",
      category: "Innovation",
      level: "National",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      criteria: [
        "Innovation in AI technology application",
        "Measurable business impact for clients",
        "Scalability and market potential",
        "Technical excellence and implementation"
      ]
    },
    {
      id: 2,
      title: "Excellence in Software Development",
      organization: "NASSCOM",
      date: "August 2024",
      location: "Bangalore, India",
      description: "Awarded for maintaining highest standards in software development practices and client satisfaction.",
      category: "Quality",
      level: "Industry",
      criteria: [
        "Code quality and documentation standards",
        "Client satisfaction scores above 95%",
        "On-time delivery track record",
        "Innovation in development methodologies"
      ]
    },
    {
      id: 3,
      title: "Emerging Technology Leader",
      organization: "CII Digital Transformation Awards",
      date: "June 2024",
      location: "New Delhi, India",
      description: "Recognition for leadership in helping traditional businesses adopt AI and automation technologies.",
      category: "Leadership",
      level: "Regional",
      criteria: [
        "Thought leadership in AI automation",
        "Successful digital transformation projects",
        "Industry speaking engagements",
        "Contribution to technology ecosystem"
      ]
    }
  ];

  const tabs = [
    { id: 'certifications', label: 'Certifications', icon: 'Award', count: certifications?.length },
    { id: 'testimonials', label: 'Client Testimonials', icon: 'MessageSquare', count: testimonials?.length },
    { id: 'security', label: 'Security & Compliance', icon: 'Shield', count: securityCompliance?.length },
    { id: 'partnerships', label: 'Partnerships', icon: 'Handshake', count: partnerships?.length },
    { id: 'awards', label: 'Awards & Recognition', icon: 'Trophy', count: awards?.length },
    { id: 'transparency', label: 'Transparency Report', icon: 'FileText', count: 1 },
    { id: 'references', label: 'Client References', icon: 'Users', count: 1 }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'certifications':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications?.map((cert) => (
              <CertificationCard key={cert?.id} certification={cert} />
            ))}
          </div>
        );
      case 'testimonials':
        return (
          <div className="grid lg:grid-cols-2 gap-6">
            {testimonials?.map((testimonial) => (
              <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
            ))}
          </div>
        );
      case 'security':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCompliance?.map((compliance) => (
              <SecurityComplianceCard key={compliance?.id} compliance={compliance} />
            ))}
          </div>
        );
      case 'partnerships':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships?.map((partnership) => (
              <PartnershipCard key={partnership?.id} partnership={partnership} />
            ))}
          </div>
        );
      case 'awards':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards?.map((award) => (
              <AwardCard key={award?.id} award={award} />
            ))}
          </div>
        );
      case 'transparency':
        return <TransparencyReport />;
      case 'references':
        return <ClientReferenceSystem />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trust Center - Authera | Certifications, Security & Transparency</title>
        <meta name="description" content="Explore Authera's certifications, security compliance, client testimonials, and transparency reports. Verify our credentials and build confidence in our AI automation services." />
        <meta name="keywords" content="trust center, certifications, security compliance, client testimonials, MSME registration, ISO certification, transparency report" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '600ms' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl"></div>
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Shield" size={16} />
              <span>Verified Trust & Transparency</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trust Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive verification of our credentials, certifications, and commitment to transparency. 
              Build confidence in our AI automation services through verified trust signals.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span>MSME Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-success" />
                <span>{visitorCount?.toLocaleString()}+ Verified Visitors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">9.8/10</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-warning" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">&lt;2hrs</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Security Compliance</div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="border-b border-border">
              <div className="flex overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab?.id
                        ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                    <span className="bg-muted text-muted-foreground px-2 py-0.5 rounded-full text-xs">
                      {tab?.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with a Trusted Partner?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our satisfied clients and experience the Authera difference. 
            Schedule a consultation to discuss your AI automation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              className="bg-white text-primary hover:bg-white/90"
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              iconSize={20}
              className="border-white text-white hover:bg-white/10"
            >
              Download Trust Report
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Layers" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">Authera</div>
                  <div className="text-sm text-white/70">AI Automation</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Trusted AI automation partner helping businesses transform and scale with intelligent solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Trust & Security</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>MSME Certified</li>
                <li>ISO 27001 Compliant</li>
                <li>GDPR Compliant</li>
                <li>Security Audits</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Verification</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Certificate Verification</li>
                <li>Client References</li>
                <li>Partnership Verification</li>
                <li>Compliance Reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>akashkumar.webdev@gmail.com</li>
                <li>+91 98765 43210</li>
                <li>Response Time: &lt;2 hours</li>
                <li>24/7 Emergency Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date()?.getFullYear()} Authera. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrustCenter;