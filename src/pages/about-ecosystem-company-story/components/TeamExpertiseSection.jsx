import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamExpertiseSection = () => {
  const [activeCategory, setActiveCategory] = useState('leadership');

  const teamCategories = [
    { id: 'leadership', name: 'Leadership', icon: 'Crown' },
    { id: 'technical', name: 'Technical', icon: 'Code' },
    { id: 'consulting', name: 'Consulting', icon: 'Users' },
    { id: 'operations', name: 'Operations', icon: 'Settings' }
  ];

  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Akash Kumar",
        role: "Co-Founder & CEO",
        image: "./../public/assets/images/akash.jpg",
        expertise: ["AI Agent Automation", "Full-Stack Development", "MSME Digital Transformation"],
        experience: "2+ Years",
        description: "Started career with full-stack development projects, later focused on AI Agent Automation to transform business processes. Co-founded Authera with a vision to help MSMEs automate and scale effectively.",
        achievements: [
          "Led 100+ AI Automation Projects",
          "Onboarded 50+ MSME clients",
          "Speaker at 5+ Automation & Tech Conferences",
          "MSME Certified & Industry Recognized"
        ],
        phone: "918252472186",
        message: "Hi Akash, I am interested in your AI Agent Automation services."
      },
      {
        id: 2,
        name: "Aditya Sharma",
        role: "Co-Founder & CTO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        expertise: ["System Architecture", "AI/ML Solutions", "Product Development"],
        experience: "5+ Years",
        description: "Ensures technical excellence and builds scalable AI-driven solutions for MSMEs and startups.",
        achievements: ["50+ Automation Systems Built", "3 Patents in AI", "Mentored Technical Teams"],
        phone: "919876543210",
        message: "Hi Aditya, I am interested in your AI/ML & Full-Stack services."
      }
    ],
    technical: [
      {
        id: 3,
        name: "Priya Patel",
        role: "Senior AI Engineer",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
        expertise: ["Machine Learning", "Natural Language Processing", "AI Agent Development"],
        experience: "4+ Years",
        description: "Building AI models and intelligent agents to automate complex business tasks.",
        achievements: ["25+ AI Agents Deployed", "ML Research Publications", "AI Certifications"],
        phone: "919999999999",
        message: "Hi Priya, I am interested in your AI Agent Development services."
      },
      {
        id: 4,
        name: "Rahul Singh",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
        expertise: ["React", "Next.js", "Node.js", "Cloud Architecture"],
        experience: "3+ Years",
        description: "Develops seamless web platforms integrating AI automation for MSMEs and creative solutions.",
        achievements: ["40+ Web Applications Delivered", "Cloud Architecture Expert", "Open Source Contributions"],
        phone: "919888888888",
        message: "Hi Rahul, I am interested in your Full Stack & Cloud solutions."
      },
      {
        id: 5,
        name: "Sneha Gupta",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        expertise: ["Data Analytics", "Business Intelligence", "Automation Insights"],
        experience: "3+ Years",
        description: "Converts raw business data into actionable insights for smarter automation decisions.",
        achievements: ["30+ Analytics Projects", "BI Specialist", "Dashboard & Visualization Expert"],
        phone: "919777777777",
        message: "Hi Sneha, I am interested in your Data Analytics & BI services."
      }
    ],
    consulting: [
      {
        id: 6,
        name: "Vikram Mehta",
        role: "Business Consultant",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
        expertise: ["MSME Growth Strategy", "Process Automation Consulting", "Business Transformation"],
        experience: "7+ Years",
        description: "Guides businesses in integrating automation and AI for optimized operations.",
        achievements: ["60+ Business Transformations", "Change Management Certified", "Strategy Advisor"],
        phone: "919666666666",
        message: "Hi Vikram, I am interested in your Business Consulting services."
      },
      {
        id: 7,
        name: "Anita Sharma",
        role: "Client Success Manager",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
        expertise: ["Client Relations", "Project Delivery", "Support & Training"],
        experience: "4+ Years",
        description: "Ensures client satisfaction and smooth adoption of AI-powered solutions.",
        achievements: ["98% Client Retention", "PMP Certified", "Training Specialist"],
        phone: "919555555555",
        message: "Hi Anita, I am interested in your Client Success services."
      }
    ],
    operations: [
      {
        id: 8,
        name: "Rajesh Kumar",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
        expertise: ["Process Management", "Quality Assurance", "Team Coordination"],
        experience: "5+ Years",
        description: "Keeps project delivery smooth and ensures operational excellence across teams.",
        achievements: ["Zero Defect Projects", "ISO Certified", "Process Optimization Expert"],
        phone: "919444444444",
        message: "Hi Rajesh, I am interested in your Operations services."
      },
      {
        id: 9,
        name: "Kavya Reddy",
        role: "HR & Culture Lead",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
        expertise: ["Talent Acquisition", "Team Development", "Culture Building"],
        experience: "4+ Years",
        description: "Builds a high-performance culture supporting innovation and AI adoption.",
        achievements: ["25+ Key Hires", "Culture Champion", "Learning & Development Programs"],
        phone: "919333333333",
        message: "Hi Kavya, I am interested in your HR & Culture services."
      }
    ]
  };

  const currentMembers = teamMembers[activeCategory] || [];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Expert Team Driving Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the professionals combining AI, full-stack expertise, and MSME-focused solutions
            to create transformative experiences for businesses worldwide.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-brand-sm'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentMembers.map((member) => (
            <div
              key={member.id}
              className="bg-background border border-border rounded-2xl p-6 shadow-brand-md hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-xl mx-auto shadow-brand-sm group-hover:shadow-brand-md transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-brand-sm">
                  <Icon name="Star" size={14} />
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  <Icon name="Clock" size={12} />
                  <span>{member.experience}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm text-center mb-4 line-clamp-3">{member.description}</p>

              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium">{skill}</span>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {member.achievements.slice(0, 2).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="CheckCircle" size={12} className="text-success flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Connect Button */}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                onClick={() =>
                  window.open(
                    `https://wa.me/${member.phone}?text=${encodeURIComponent(member.message)}`,
                    "_blank"
                  )
                }
              >
                Connect
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExpertiseSection;
