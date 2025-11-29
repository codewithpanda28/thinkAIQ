import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const TeamExpertiseSection = () => {
  const [activeCategory, setActiveCategory] = useState("leadership");

  const teamCategories = [
    { id: "leadership", name: "Leadership", icon: "Crown" },
    { id: "technical", name: "Technical", icon: "Code" },
    { id: "consulting", name: "Consulting", icon: "Users" },
    { id: "operations", name: "Operations", icon: "Settings" },
  ];

  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Akash Kumar",
        role: "Co-Founder & CEO",
        image: "./../public/assets/images/akashbgremove1.png",
        expertise: [
          "AI Agent Automation",
          "Full-Stack Development",
          "MSME Digital Transformation",
        ],
        experience: "3+ Years",
        description:
          "Started career with full-stack development projects, later focused on AI Agent Automation to transform business processes. Co-founded thinkAIQ with a vision to help MSMEs automate and scale effectively.",
        achievements: [
          "+ AI Automation Projects",
          "Onboarded 5+ MSME clients",
          "Speaker at 5+ Automation & Tech Conferences",
          "MSME Certified & Industry Recognized",
        ],
        phone: "918252472186",
        message:
          "Hi Akash, I am interested in your AI Agent Automation services.",
      },
      {
        id: 2,
        name: "Aditya Raj",
        role: "Co-Founder & Business Development",
        image: "./../public/assets/teamMembers/aditya1.jpg",

        expertise: [
          "AI Automation & Workflow Planning",
          "Sales & Business Development",
        ],

        experience: "2+ Years",

        description:
          "Co-founder of ThinkAIQ, leading sales, business development and AI automation strategy for client projects.",

        achievements: [
          "Closed multiple AI automation deals",
          "Developed voice & WhatsApp automation flows",
          "Improved client operations using AI solutions",
        ],

        phone: "919508949406",

        message:
          "Hi Aditya, I am interested in your business development & AI automation services.",
      },
    ],
    technical: [
      {
        id: 3,
        name: "Akash Kumar",
        role: "Co-Founder & CEO",
        image: "./../public/assets/images/akashbgremove1.png",
        expertise: ["AI Agent Automation", "Full-Stack Development", "MSME Digital Transformation"],
        experience: "2+ Years",
        description: "Started career with full-stack development projects, later focused on AI Agent Automation to transform business processes. Co-founded thinkAIQ with a vision to help MSMEs automate and scale effectively.",
        achievements: [
          "+ AI Automation Projects",
          "Onboarded 5+ MSME clients",
          "Speaker at 5+ Automation & Tech Conferences",
          "MSME Certified & Industry Recognized"
        ],
        phone: "918252472186",
        message: "Hi Akash, I am interested in your AI Agent Automation services."
      },
    ],
    consulting: [
      {
        id: 4,
        name: "Aditya Raj",
        role: "Co-Founder & Business Development",
        image: "./../public/assets/teamMembers/aditya1.jpg",

        expertise: [
          "AI Automation & Workflow Planning",
          "Sales & Business Development",
        ],

        experience: "2+ Years",

        description:
          "Co-founder of ThinkAIQ, leading sales, business development and AI automation strategy for client projects.",

        achievements: [
          "Closed multiple AI automation deals",
          "Developed voice & WhatsApp automation flows",
          "Improved client operations using AI solutions",
        ],

        phone: "919508949406",

        message:
          "Hi Aditya, I am interested in your business development & AI automation services.",
      },
      {
  id: 4,
  name: "Md Kaif",
  role: "AI & Video Content Specialist",
  image: "./../public/assets/teamMembers/Md Kaif(ai content).jpg",
  expertise: [
    "Gen-AI Content Creation",
    "Video Editing & Creative Direction",
    "Political Campaign Content",
    "Business & Marketing Content"
  ],
  experience: "3+ Years",
  description: "Specialist in AI-powered content creation and professional video editing, delivering high-impact ads for political campaigns, businesses, and social media.",
  achievements: [
    "Created 100+ video campaigns",
    "Worked with political leaders and local to mid-level businesses",
    "Expert in AI-driven content, voiceovers, motion graphics, and storytelling"
  ],
  skills: [
    "Runway, Pika, Sora-style prompting",
    "ElevenLabs",
    "Scriptwriting & Automation",
    "Reels, Shorts, UGC-style ads",
    "Documentary & Story-based video editing"
  ],
  services: [
    "Product advertisements",
    "UGC-style reviews & ads",
    "Documentary-style promotional videos",
    "Political campaign videos",
    "Social media ads (Reels/Shorts)",
    "Business promotional content",
    "AI-generated videos with voiceovers"
  ],
  phone: "916201152965",
  message: "Hi Kaif, I need AI-powered creative & video content."
}

    ],
    operations: [
      // {
      //   id: 6,
      //   name: "Rajesh Kumar",
      //   role: "Operations Manager",
      //   image:
      //     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      //   expertise: [
      //     "Process Management",
      //     "Quality Assurance",
      //     "Team Coordination",
      //   ],
      //   experience: "5+ Years",
      //   description:
      //     "Keeps project delivery smooth and ensures operational excellence across teams.",
      //   achievements: [
      //     "Zero Defect Projects",
      //     "ISO Certified",
      //     "Process Optimization Expert",
      //   ],
      //   phone: "919444444444",
      //   message: "Hi Rajesh, I am interested in your Operations services.",
      // },
      
    ],
  };

  const currentMembers = teamMembers[activeCategory] || [];

  return (
    <section className="py-20 bg-muted/30" id="team-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Expert Team Driving Innovation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Meet the professionals combining AI, full-stack expertise, and
            MSME-focused solutions to create transformative experiences for
            businesses worldwide.
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
                  ? "bg-primary text-primary-foreground shadow-brand-sm"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
                <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary dark:text-accent font-medium text-sm mb-2">
                  {member.role}
                </p>
                <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  <Icon name="Clock" size={12} />
                  <span>{member.experience}</span>
                </div>
              </div>

              <p className="text-muted-foreground dark:text-muted-foreground text-sm text-center mb-4 line-clamp-3">
                {member.description}
              </p>

              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                {member.achievements.slice(0, 2).map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-xs text-muted-foreground"
                  >
                    <Icon
                      name="CheckCircle"
                      size={12}
                      className="text-success flex-shrink-0"
                    />
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
                    `https://wa.me/${member.phone}?text=${encodeURIComponent(
                      member.message
                    )}`,
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
