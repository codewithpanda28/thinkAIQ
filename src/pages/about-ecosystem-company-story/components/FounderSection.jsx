import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FounderSection = () => {
  const [activeFounder, setActiveFounder] = useState(0);

  const founders = [
    {
      id: 1,
      name: "Akash Kumar",
      role: "Co-Founder & CEO",
      email: "akashkumar.webdev@gmail.com",
      image: "./../public/assets/images/akash.jpg",
      expertise: ["AI Agents", "Automation", "Full Stack Development", "Web & Graphics Design"],
      experience: "2+ Years",
      bio: `Akash Kumar is the driving force behind Authera’s vision of making intelligent automation accessible to every business. 
He specializes in AI agent systems and process automation, helping organizations reduce manual workloads and scale efficiently.

With a solid foundation in full-stack development, Akash blends creativity and technology — designing intuitive web interfaces and 
building systems that truly think for themselves. 

As an MSME-certified entrepreneur, he also leads creative direction for Authera’s design and branding, ensuring technology always 
feels human-centered and visually engaging.`,
      achievements: [
        "Developed 50+ automation workflows for SMEs",
        "Created intelligent AI agent solutions for business automation",
        "MSME-certified business founder",
        "Expert in Full Stack & Visual Design"
      ],
      quote: "True innovation happens when technology not only works—but feels human.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/codewithpanda28",
        twitter: "https://x.com/codematrixpro",
        github: "https://github.com/codewithpanda28"
      }
    },
    {
      id: 2,
      name: "Aditya Sharma",
      role: "Co-Founder & CTO",
      email: "aditya@authera.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Machine Learning", "System Architecture", "Product Development"],
      experience: "6+ Years",
      bio: `Aditya is the technical visionary behind Authera's cutting-edge automation solutions. With a deep background in machine learning and system architecture, he ensures that every solution we deliver is not just functional, but future-ready.

His approach to technology is rooted in understanding business needs first, then crafting elegant technical solutions that scale. Aditya's leadership in product development has been instrumental in Authera's reputation for delivering robust, scalable automation systems.`,
      achievements: [
        "Architected 50+ scalable automation systems",
        "Expert in 10+ programming languages",
        "Holds 3 technology patents",
        "Mentored 20+ junior developers"
      ],
      quote: "Great technology should be invisible to the user but transformative to the business. That’s the standard we hold ourselves to.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/adityasharma",
        twitter: "https://twitter.com/adityasharma",
        github: "https://github.com/adityasharma"
      }
    }
  ];

  const currentFounder = founders?.[activeFounder];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary leaders driving Authera’s mission to transform businesses 
            through intelligent automation and AI-powered innovation.
          </p>
        </div>

        {/* Founder Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border border-border rounded-lg p-2 shadow-brand-sm">
            {founders?.map((founder, index) => (
              <button
                key={founder?.id}
                onClick={() => setActiveFounder(index)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeFounder === index
                    ? 'bg-primary text-primary-foreground shadow-brand-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {founder?.name}
              </button>
            ))}
          </div>
        </div>

        {/* Founder Profile */}
        <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 shadow-brand-md">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image & Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <Image
                  src={currentFounder?.image}
                  alt={currentFounder?.name}
                  className="w-48 h-48 object-cover rounded-2xl shadow-brand-lg mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-brand-md">
                  <Icon name="Award" size={20} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {currentFounder?.name}
              </h3>
              <p className="text-lg text-primary font-medium mb-4">
                {currentFounder?.role}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Mail"
                  iconPosition="left"
                  className="text-sm"
                >
                  {currentFounder?.email}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Calendar"
                  iconPosition="left"
                  className="text-sm"
                >
                  Schedule Meeting
                </Button>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {currentFounder?.expertise?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 justify-center lg:justify-start">
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Icon name="Linkedin" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Icon name="Github" size={18} />
                </Button>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="space-y-8">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <Icon name="Quote" size={24} className="text-primary mb-3" />
                <p className="text-foreground font-medium italic text-lg">
                  "{currentFounder?.quote}"
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="User" size={20} className="mr-2 text-primary" />
                  About {currentFounder?.name?.split(' ')?.[0]}
                </h4>
                <div className="text-muted-foreground space-y-3">
                  {currentFounder?.bio?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Trophy" size={20} className="mr-2 text-primary" />
                  Key Achievements
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentFounder?.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                    <div className="text-lg font-semibold text-foreground">
                      {currentFounder?.experience}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
