import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Discovery & Analysis',
      duration: '1-2 weeks',
      icon: 'Search',
      color: 'from-blue-500 to-indigo-600',
      description: 'We dive deep into your current processes to uncover opportunities where AI can save time, reduce errors, and enhance productivity.',
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
      color: 'from-purple-500 to-pink-600',
      description: 'Crafting a tailored solution architecture that aligns perfectly with your business goals and operational needs.',
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
      color: 'from-green-500 to-emerald-600',
      description: 'Agile, iterative development ensuring high-quality, reliable automation that fits seamlessly into your operations.',
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
      color: 'from-orange-500 to-red-600',
      description: 'Seamless deployment with thorough team training, ensuring your staff can fully leverage the new system.',
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
      color: 'from-cyan-500 to-blue-600',
      description: 'Continuous improvement and monitoring to keep your processes efficient and future-ready.',
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
    <section className="py-20 bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Workflow" size={16} />
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Implementation Process
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A step-by-step methodology designed to deliver real results, minimize risks, and keep you informed at every stage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActivePhase(idx)}
                className={`cursor-pointer transition-all duration-300 ${
                  activePhase === idx ? 'scale-105' : ''
                }`}
              >
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    activePhase === idx
                      ? 'bg-primary dark:bg-accent text-white border-primary dark:border-accent shadow-lg'
                      : 'bg-card dark:bg-card border-border hover:border-primary/50 dark:hover:border-accent/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activePhase === idx ? 'bg-white/20' : `bg-gradient-to-br ${phase.color}`
                      }`}
                    >
                      <Icon
                        name={phase.icon}
                        size={24}
                        className={activePhase === idx ? 'text-white' : 'text-white'}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3
                          className={`font-semibold text-base lg:text-lg ${
                            activePhase === idx ? 'text-white' : 'text-foreground'
                          }`}
                        >
                          Phase {idx + 1}: {phase.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded ${
                            activePhase === idx ? 'bg-white/20 text-white' : 'bg-muted dark:bg-muted text-muted-foreground'
                          }`}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          activePhase === idx ? 'text-white/80' : 'text-muted-foreground'
                        }`}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phase Details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card dark:bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-lg sticky top-8"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${phases[activePhase].color} rounded-xl flex items-center justify-center`}>
                  <Icon
                    name={phases[activePhase].icon}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {phases[activePhase].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Duration: {phases[activePhase].duration}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{phases[activePhase].description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="CheckSquare" size={16} className="mr-2 text-primary dark:text-accent" /> Key Activities
                  </h4>
                  <ul className="space-y-2">
                    {phases[activePhase].activities.map((act, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="ArrowRight" size={14} className="mt-0.5 text-primary dark:text-accent flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Package" size={16} className="mr-2 text-success" /> Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {phases[activePhase].deliverables.map((del, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={14} className="mt-0.5 text-success flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium text-foreground">
                  Phase {activePhase + 1} of {phases.length}
                </span>
              </div>
              <div className="w-full bg-muted dark:bg-muted rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-card dark:bg-card border border-border rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit.icon} size={24} className="text-primary dark:text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
