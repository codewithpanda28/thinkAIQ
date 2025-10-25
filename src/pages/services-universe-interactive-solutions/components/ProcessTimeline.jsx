import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = ({ roiData }) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Discovery & Analysis',
      duration: '1-2 weeks',
      icon: 'Search',
      description:
        'We dive deep into your current processes to uncover opportunities where AI can save time, reduce errors, and enhance productivity.',
      activities: [
        'Map current business workflows and identify pain points',
        'Interview key stakeholders for insights',
        'Technical environment assessment',
        'Estimate potential ROI and cost savings',
        'Feasibility and risk analysis',
      ],
      deliverables: [
        'Comprehensive process analysis report',
        'Recommended automation roadmap',
        'Technical specifications and requirements',
        'Initial project timeline',
      ],
    },
    {
      title: 'Solution Design',
      duration: '1-2 weeks',
      icon: 'PenTool',
      description:
        'Crafting a tailored solution architecture that aligns perfectly with your business goals and operational needs.',
      activities: [
        'Design system architecture and workflows',
        'Create intuitive UI/UX mockups',
        'Plan database schema and integrations',
        'Define security and compliance protocols',
        'Prepare integration plan for existing tools',
      ],
      deliverables: [
        'Solution architecture blueprint',
        'UI/UX design files',
        'Integration and deployment plan',
        'Security and compliance documentation',
      ],
    },
    {
      title: 'Development & Testing',
      duration: '3-8 weeks',
      icon: 'Code',
      description:
        'Agile, iterative development ensuring high-quality, reliable automation that fits seamlessly into your operations.',
      activities: [
        'Sprint-based software development',
        'Automated and manual testing cycles',
        'Code reviews for quality assurance',
        'Optimize performance and resource usage',
        'Conduct security and vulnerability tests',
      ],
      deliverables: [
        'Working, tested automation software',
        'Detailed test reports and metrics',
        'Performance benchmarks',
        'Security audit summary',
      ],
    },
    {
      title: 'Deployment & Training',
      duration: '1-2 weeks',
      icon: 'Rocket',
      description:
        'Seamless deployment with thorough team training, ensuring your staff can fully leverage the new system.',
      activities: [
        'Production environment deployment',
        'Data migration and integrity checks',
        'Hands-on user training sessions',
        'Create step-by-step documentation',
        'Go-live monitoring and support',
      ],
      deliverables: [
        'Live, fully operational system',
        'User manuals and guides',
        'Training materials',
        'Ongoing support documentation',
      ],
    },
    {
      title: 'Support & Optimization',
      duration: 'Ongoing',
      icon: 'Settings',
      description:
        'Continuous improvement and monitoring to keep your processes efficient and future-ready.',
      activities: [
        '24/7 system monitoring',
        'Performance and efficiency optimization',
        'Feature enhancements based on feedback',
        'Regular updates and maintenance',
        'Technical support for any issues',
      ],
      deliverables: [
        'Monthly performance reports',
        'Efficiency analytics dashboards',
        'Update and release notes',
        'Support tickets and resolutions',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/70 to-gray-100/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Implementation Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A step-by-step methodology designed to deliver real results, minimize risks, and keep you informed at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-5">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhase(idx)}
                className={`cursor-pointer transition-transform duration-300 ${
                  activePhase === idx ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activePhase === idx
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-white border-gray-200 hover:border-primary/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activePhase === idx ? 'bg-white/20' : 'bg-primary/10'
                      }`}
                    >
                      <Icon
                        name={phase.icon}
                        size={24}
                        className={activePhase === idx ? 'text-white' : 'text-primary'}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3
                          className={`font-semibold text-sm lg:text-base ${
                            activePhase === idx ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          Phase {idx + 1}: {phase.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            activePhase === idx ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          activePhase === idx ? 'text-white/80' : 'text-gray-600'
                        }`}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md sticky top-8">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name={phases[activePhase].icon}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {phases[activePhase].title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Duration: {phases[activePhase].duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{phases[activePhase].description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="CheckSquare" size={16} className="mr-2 text-primary" /> Key Activities
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {phases[activePhase].activities.map((act, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="ArrowRight" size={14} className="mt-0.5 text-primary flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Icon name="Package" size={16} className="mr-2 text-success" /> Deliverables
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {phases[activePhase].deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Icon name="Check" size={14} className="mt-0.5 text-success flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Premium ROI Card */}
              {roiData && (
                <div className="mt-8 p-6 bg-primary/10 rounded-xl shadow-md transition-all duration-500">
                  <h4 className="font-semibold text-gray-900 mb-3">Projected ROI</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-lg font-bold text-primary">{roiData.monthlySavings}</div>
                      <div className="text-sm text-gray-500">Monthly Savings</div>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-lg font-bold text-success">{roiData.efficiencyGain}%</div>
                      <div className="text-sm text-gray-500">Efficiency Gain</div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Progress</span>
                <span className="text-sm font-medium text-gray-900">
                  Phase {activePhase + 1} of {phases.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Shield',
              title: 'Risk Mitigation',
              description: 'Structured approach minimizes project risks and ensures predictable outcomes.',
            },
            {
              icon: 'Eye',
              title: 'Full Transparency',
              description: 'Regular updates and clear milestones keep you informed throughout the process.',
            },
            {
              icon: 'Zap',
              title: 'Faster Delivery',
              description: 'Agile methodology and proven processes accelerate time-to-market.',
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
