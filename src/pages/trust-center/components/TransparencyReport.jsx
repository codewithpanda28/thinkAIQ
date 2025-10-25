import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransparencyReport = () => {
  const [activeSection, setActiveSection] = useState('business-practices');

  const sections = [
    {
      id: 'business-practices',
      title: 'Business Practices',
      icon: 'Building',
      content: {
        title: 'Ethical Business Standards',
        description: 'Our commitment to transparent and ethical business operations',
        items: [
          'Zero tolerance policy for corruption and bribery',
          'Fair pricing with no hidden charges or fees',
          'Transparent project timelines and milestone tracking',
          'Open communication channels throughout project lifecycle',
          'Regular client feedback collection and implementation',
          'Ethical AI development practices and responsible automation'
        ]
      }
    },
    {
      id: 'data-handling',
      title: 'Data Handling',
      icon: 'Shield',
      content: {
        title: 'Data Protection & Privacy',
        description: 'How we protect and handle your sensitive business data',
        items: [
          'End-to-end encryption for all data transmissions',
          'Secure cloud storage with regular backup protocols',
          'GDPR compliant data processing and storage',
          'Limited access controls with role-based permissions',
          'Regular security audits and vulnerability assessments',
          'Data retention policies with automatic purging'
        ]
      }
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      icon: 'CheckCircle',
      content: {
        title: 'Quality Control Processes',
        description: 'Our systematic approach to ensuring project quality',
        items: [
          'Multi-stage code review process with senior developers',
          'Automated testing suites for all deliverables',
          'User acceptance testing with client involvement',
          'Performance benchmarking against industry standards',
          'Documentation standards for all project components',
          'Post-deployment monitoring and support protocols'
        ]
      }
    },
    {
      id: 'financial-transparency',
      title: 'Financial Transparency',
      icon: 'DollarSign',
      content: {
        title: 'Financial Operations',
        description: 'Transparent financial practices and accountability',
        items: [
          'Detailed project cost breakdowns provided upfront',
          'No surprise charges or scope creep without approval',
          'Flexible payment terms based on project milestones',
          'Regular financial reporting for ongoing projects',
          'GST compliance and proper invoicing procedures',
          'Refund policies clearly outlined in agreements'
        ]
      }
    }
  ];

  const currentSection = sections?.find(section => section?.id === activeSection);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {sections?.map((section) => (
            <button
              key={section?.id}
              onClick={() => setActiveSection(section?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeSection === section?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={section?.icon} size={16} />
              <span>{section?.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {currentSection?.content?.title}
          </h3>
          <p className="text-muted-foreground">
            {currentSection?.content?.description}
          </p>
        </div>

        <div className="space-y-3">
          {currentSection?.content?.items?.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-success" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Last updated: December 2024
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              iconSize={14}
            >
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparencyReport;