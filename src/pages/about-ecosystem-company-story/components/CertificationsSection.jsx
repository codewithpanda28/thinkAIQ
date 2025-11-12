import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      id: 1,
      name: "Graphics and Web Designer Assistant",
      issuer: "MSME Room Tool, Kolkata",
      date: "2020",
      type: "Vocational Certification",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?w=300&h=200&fit=crop",
      description:
        "Certified by MSME Room Tool, Kolkata for successfully completing practical training in Graphic and Web Design assistance, focusing on modern design tools and responsive website layouts.",
      verificationId: "MSME-KOL-2020-GWDA",
      status: "Verified",
      benefits: [
        "Hands-on experience in graphics and web design",
        "Knowledge of design software and tools",
        "Proficiency in responsive web design principles",
        "Certification recognized under MSME training programs",
      ],
    },
    {
      id: 2,
      name: "Entrepreneurship Skill Development Programme",
      issuer: "MSME, Government of India",
      date: "2021",
      type: "Entrepreneurship Development",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?w=300&h=200&fit=crop",
      description:
        "Completed Entrepreneurship Skill Development Programme organized by MSME, focusing on innovation, business planning, marketing strategies, and startup development.",
      verificationId: "MSME-ESDP-2021-00289",
      status: "Verified",
      benefits: [
        "Enhanced leadership and entrepreneurship skills",
        "Exposure to startup management techniques",
        "Understanding of financial and business planning",
        "Recognized by MSME for entrepreneurial training",
      ],
    },
    {
      id: 3,
      name: "Front End Development - HTML",
      issuer: "Olympus / GL Academy",
      date: "2023",
      type: "Online Course Certification",
      image: "./../../../assets/images/certificate/Screenshot 2025-11-12 122916.png",
      description:
        "Successfully completed the Front End Development - HTML course, covering HTML fundamentals, form creation, multimedia integration, and semantic markup for accessibility and SEO.",
      verificationId: "GLA-FE-HTML-2023-0123",
      status: "Verified",
      benefits: [
        "Strong foundation in HTML5 and web structure",
        "Understanding of semantic and accessible web design",
        "Practical knowledge of multimedia integration",
        "Certificate verified by GL Academy (Olympus platform)",
      ],
    },
    {
      id: 4,
      name: "The Ultimate 70+ Hour Front-End Web Development Course 2025",
      issuer: "Udemy",
      date: "2025",
      type: "Professional Online Certification",
      image: "./../../../assets/images/certificate/Screenshot 2025-11-12 122932.png",
      description:
        "Completed an in-depth 70+ hour course on Front-End Web Development taught by Supriyo Kundu on Udemy, mastering HTML, CSS, JavaScript, React, and Next.js through practical projects.",
      verificationId: "UDEMY-FEWD-2025-0327",
      status: "Verified",
      benefits: [
        "Comprehensive knowledge of modern front-end stack",
        "Hands-on experience with React and Next.js",
        "Industry-level project training and assignments",
        "Global recognition via Udemy certificate",
      ],
    },
  ];
  
  

  const awards = [
    {
      id: 1,
      name: "Best AI Innovation Award",
      issuer: "TechCrunch India",
      date: "2023",
      category: "Innovation",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?w=300&h=200&fit=crop",
      description: "Recognized for delivering innovative AI automation solutions that have transformed business processes for MSMEs.",
      achievement: "Selected as winner among 500+ startups"
    },
    // {
    //   id: 2,
    //   name: "Startup of the Year",
    //   issuer: "Indian Startup Awards",
    //   date: "2022",
    //   category: "Business Excellence",
    //   image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=300&h=200&fit=crop",
    //   description: "Awarded for exceptional growth and promise in the AI automation sector.",
    //   achievement: "Chosen from 1000+ competing startups"
    // },
    // {
    //   id: 3,
    //   name: "Excellence in Client Service",
    //   issuer: "Business Today",
    //   date: "2023",
    //   category: "Service Quality",
    //   image: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?w=300&h=200&fit=crop",
    //   description: "Honored for maintaining a client satisfaction rate above 98% through consistent service excellence.",
    //   achievement: "Benchmark recognition in the industry"
    // },
    // {
    //   id: 4,
    //   name: "Digital Transformation Leader",
    //   issuer: "CIO Magazine India",
    //   date: "2024",
    //   category: "Leadership",
    //   image: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?w=300&h=200&fit=crop",
    //   description: "Acknowledged as a leading company driving digital transformation and AI-powered business automation.",
    //   achievement: "Ranked in top 10 companies nationwide"
    // }
  ];

  const partnerships = [
    {
      id: 1,
      name: "Microsoft Partner",
      type: "Technology Alliance",
      logo: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?w=200&h=100&fit=crop",
      description: "Strategic partnership to deliver Azure cloud-based solutions and AI-enabled business services.",
      benefits: ["Azure credits and resources", "Technical support", "Co-selling opportunities"]
    },
    // {
    //   id: 2,
    //   name: "Salesforce Partner",
    //   type: "Implementation Partner",
    //   logo: "https://images.pexels.com/photos/7688047/pexels-photo-7688047.jpeg?w=200&h=100&fit=crop",
    //   description: "Certified Salesforce partner providing end-to-end CRM implementation and customization services.",
    //   benefits: ["Implementation expertise", "Custom development", "Integration services"]
    // },
    // {
    //   id: 3,
    //   name: "HubSpot Partner",
    //   type: "Solutions Partner",
    //   logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?w=200&h=100&fit=crop",
    //   description: "Authorized HubSpot partner enabling marketing automation and CRM solutions for SMEs.",
    //   benefits: ["Marketing automation", "CRM deployment", "Training & support"]
    // },
    // {
    //   id: 4,
    //   name: "Zapier Partner",
    //   type: "Integration Partner",
    //   logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=200&h=100&fit=crop",
    //   description: "Official Zapier partner providing workflow automation and app integration solutions.",
    //   benefits: ["Automated workflows", "Seamless app integrations", "Custom integration solutions"]
    // }
  ];

  const tabs = [
    { id: 'certifications', name: 'Certifications', icon: 'Award', count: certifications.length },
    { id: 'awards', name: 'Awards', icon: 'Trophy', count: awards.length },
    { id: 'partnerships', name: 'Partnerships', icon: 'Handshake', count: partnerships.length }
  ];

  return (
    <section className="py-20 bg-background">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trust & Recognition</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Certifications & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our credibility is backed by industry certifications, awards, and strategic partnerships with leading technology providers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-brand-sm'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map(cert => (
                <div key={cert.id} className="bg-background border border-border rounded-2xl overflow-hidden shadow-brand-md hover:shadow-brand-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${cert.status === 'Active' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{cert.date}</div>
                        <div className="text-xs text-muted-foreground">{cert.type}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                    <div className="bg-muted/30 rounded-lg p-3 mb-4">
                      <div className="text-xs text-muted-foreground mb-1">Verification ID</div>
                      <div className="text-sm font-mono text-foreground">{cert.verificationId}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">Key Benefits:</div>
                      {cert.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Icon name="CheckCircle" size={12} className="text-success" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" fullWidth iconName="ExternalLink" iconPosition="right" className="mt-4">
                      Verify Certificate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'awards' && (
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map(award => (
                <div key={award.id} className="bg-background border border-border rounded-2xl overflow-hidden shadow-brand-md hover:shadow-brand-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image src={award.image} alt={award.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center">
                        <Icon name="Trophy" size={20} className="text-warning" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{award.name}</h3>
                        <p className="text-sm text-muted-foreground">{award.issuer}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{award.date}</div>
                        <div className="text-xs text-muted-foreground">{award.category}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{award.description}</p>
                    <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Star" size={16} className="text-warning" />
                        <span className="text-sm font-medium text-foreground">{award.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'partnerships' && (
            <div className="grid md:grid-cols-2 gap-8">
              {partnerships.map(partner => (
                <div key={partner.id} className="bg-background border border-border rounded-2xl p-6 shadow-brand-md hover:shadow-brand-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-muted/50 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{partner.name}</h3>
                      <p className="text-sm text-primary font-medium">{partner.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Partnership Benefits:</div>
                    {partner.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="CheckCircle" size={12} className="text-success" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
