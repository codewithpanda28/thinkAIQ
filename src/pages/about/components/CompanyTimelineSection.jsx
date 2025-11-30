import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2025);

  const timelineData = [
    {
      year: 2023,
      title: "The Early Builder Phase",
      description:
        "Before everything began, Akash Kumar was deeply involved in full-stack web development. He worked on multiple freelance and personal projects to understand how real products are built — from frontend design to backend logic.",
      achievements: [
        "Built several full-stack web applications",
        "Improved technical skills in React, Next.js & Node.js",
        "Experimented with modern UI/UX and design systems",
        "Laid the foundation for something bigger — automation",
      ],
      icon: "Laptop",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      year: 2024,
      title: "When Vision Met Direction",
      description:
        "In 2024, Akash met Aditya — both shared a dream of building something meaningful. They decided to merge creativity with technology, focusing on AI Agent Automation and digital growth for MSMEs and startups.",
      achievements: [
        "Founded a shared vision of AI-driven development",
        "Started building automation tools and smart web systems",
        "Worked on real-world AI + Web projects for small businesses",
        "Formed the base of a company built on innovation and trust",
      ],
      icon: "Users",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      year: 2025,
      title: "The Growth of Intelligence",
      description:
        "Now in 2025, Akash and Aditya are building advanced AI Agent Automation systems that help MSMEs grow smarter. From creative web design to AI-powered digital workflows — they’re turning imagination into automation.",
      achievements: [
        "Developed custom AI agents for business workflows",
        "Expanded into global projects and collaborations",
        "Helping brands with creative design + AI web solutions",
        "Preparing to launch their in-house AI automation platform",
      ],
      icon: "Brain",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
  ];

  const activeData = timelineData.find((item) => item.year === activeYear);

  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Clock" size={16} />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            From Code to Intelligence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            What started as solo coding sessions turned into a shared dream — a mission by Akash and Aditya 
            to bring the power of AI and automation to real businesses.  
            This is how it all evolved.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground mb-6">Timeline</h3>
              <div className="space-y-2">
                {timelineData.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                      activeYear === item.year
                        ? `${item.bgColor} dark:bg-accent/20 ${item.borderColor} dark:border-accent/30 ${item.color} dark:text-accent`
                        : 'bg-muted/30 dark:bg-muted border-border text-muted-foreground dark:text-muted-foreground hover:bg-muted/50 dark:hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeYear === item.year ? item.bgColor : 'bg-muted dark:bg-muted'
                        }`}
                      >
                        <Icon
                          name={item.icon}
                          size={16}
                          className={activeYear === item.year ? item.color : 'text-muted-foreground dark:text-muted-foreground'}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{item.year}</div>
                        <div className="text-xs sm:text-sm opacity-80">{item.title}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-2">
            <div className="bg-card dark:bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-brand-md">
              {/* Year Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${activeData.bgColor} dark:bg-accent/20`}>
                  <Icon name={activeData.icon} size={20} className={`${activeData.color} dark:text-accent`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground dark:text-foreground">{activeData.year}</div>
                  <div className="text-base sm:text-lg font-semibold text-primary dark:text-accent">{activeData.title}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground mb-8">{activeData.description}</p>

              {/* Achievements */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground mb-4 flex items-center">
                  <Icon name="Target" size={20} className="mr-2 text-primary dark:text-accent" />
                  Key Milestones
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeData.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 sm:p-4 bg-muted/30 dark:bg-muted rounded-lg border border-border"
                    >
                      <div className="w-6 h-6 bg-success/20 dark:bg-success/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={14} className="text-success" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground mb-2">
                  <span>Journey Progress</span>
                  <span>{Math.round(((activeData.year - 2023) / (2025 - 2023)) * 100)}%</span>
                </div>
                <div className="progress-bar h-2 bg-muted dark:bg-muted rounded-full overflow-hidden">
                  <div
                    className="progress-fill bg-primary dark:bg-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeData.year - 2023) / (2025 - 2023)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimelineSection;
