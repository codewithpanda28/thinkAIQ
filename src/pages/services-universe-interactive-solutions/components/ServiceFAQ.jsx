import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    { id: 'general', name: 'General', icon: 'HelpCircle' },
    { id: 'automation', name: 'AI Automation', icon: 'Bot' },
    { id: 'development', name: 'Development', icon: 'Code' },
    { id: 'pricing', name: 'Pricing', icon: 'DollarSign' },
    { id: 'support', name: 'Support', icon: 'Headphones' }
  ];

  const faqs = {
    general: [
      {
        question: 'What makes thinkAIQ unique?',
        answer: `thinkAIQ doesn't just automate tasks — we rethink how businesses operate. We combine deep industry knowledge with advanced AI solutions, delivering custom workflows that grow with your business and maximize ROI.`
      },
      {
        question: 'How secure is our data?',
        answer: `Data security is our top priority. We use enterprise-grade encryption, secure APIs, and conduct regular audits. Your data stays under your control, fully compliant with industry standards.`
      },
      {
        question: 'Can you integrate with our current tools?',
        answer: `Absolutely. We seamlessly connect with CRMs, ERPs, accounting software, or custom tools to create a unified workflow without disrupting your operations.`
      },
      {
        question: 'Which industries do you serve?',
        answer: `We serve all industries — from healthcare, finance, and retail to logistics, education, and technology. Solutions are customized to fit industry-specific needs and compliance standards.`
      }
    ],
    automation: [
      {
        question: 'Which processes can be automated?',
        answer: `Repetitive, rule-based processes are ideal — like data entry, invoices, customer responses, inventory, reports, emails, and approvals. We analyze your workflows to identify optimal automation opportunities.`
      },
      {
        question: 'How long does automation implementation take?',
        answer: `Simple workflows: 2-4 weeks. Complex multi-system automation: 6-12 weeks. We provide clear timelines and updates throughout the process.`
      },
      {
        question: 'Will automation replace employees?',
        answer: `No. Our solutions enhance human productivity by automating repetitive tasks, allowing teams to focus on strategic, creative, and relationship-driven work.`
      },
      {
        question: 'What if our processes change after automation?',
        answer: `Our systems are flexible and adaptable. We train your team for minor adjustments and provide ongoing support for major changes.`
      }
    ],
    development: [
      {
        question: 'Do we get source code and documentation?',
        answer: `Yes. You receive full source code ownership, detailed documentation, deployment guides, and maintenance instructions.`
      },
      {
        question: 'What technologies do you use?',
        answer: `We use React, Node.js, Python, cloud platforms (AWS, Azure), databases (MongoDB, PostgreSQL), and AI/ML frameworks, choosing the best stack for your needs.`
      },
      {
        question: 'Can solutions scale as our business grows?',
        answer: `Absolutely. Cloud-native, microservices architecture ensures your system scales seamlessly from startup to enterprise.`
      },
      {
        question: 'Do you provide mobile apps?',
        answer: `Yes, native and cross-platform apps for iOS and Android, fully integrated with your web applications.`
      }
    ],
    pricing: [
      {
        question: 'How is pricing structured?',
        answer: `We follow transparent, value-based pricing: one-time setup/development fee plus optional monthly maintenance. No hidden costs.`
      },
      {
        question: 'Do you offer payment plans?',
        answer: `Yes. Milestone payments, monthly installments, or extended terms for larger projects can be arranged to suit your budget.`
      },
      {
        question: 'What does the monthly maintenance include?',
        answer: `System monitoring, updates, bug fixes, security patches, performance optimization, backups, and technical support — customized per agreement.`
      },
      {
        question: 'Can I get a custom quote?',
        answer: `Absolutely. We provide detailed, no-obligation quotes based on your business needs after a free consultation.`
      }
    ],
    support: [
      {
        question: 'What post-implementation support is provided?',
        answer: `24/7 system monitoring, technical support, user training, performance checks, and feature enhancements. Support levels are customizable.`
      },
      {
        question: 'How quickly do you respond to requests?',
        answer: `Critical: 1-2 hours, high: 4-8 hours, standard: 24 hours. Emergency support options are also available.`
      },
      {
        question: 'Do you train our team?',
        answer: `Yes. We provide user manuals, video tutorials, hands-on sessions, and ongoing support to ensure team proficiency.`
      },
      {
        question: 'Is on-site support available?',
        answer: `Yes, across India and internationally for enterprise clients. Remote support is standard for efficiency.`
      }
    ]
  };

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our services, processes, and support. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="space-y-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenFAQ(null);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-brand-sm'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
                }`}
              >
                <Icon name={category.icon} size={18} />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3 space-y-4">
            {faqs[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl shadow-brand-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-foreground pr-4">{faq.question}</h3>
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-muted-foreground flex-shrink-0"
                  />
                </button>
                <div className={`transition-all duration-300 ease-out ${
                  openFAQ === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="px-6 pb-4 border-t border-border">
                    <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}

          
          </div>
          
        </div>
          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
              <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our experts are here to help. Get personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="default" 
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+918252472186')}
                >
                  Call +91 8252472186
                </Button>
                <Button 
                  variant="outline"
                  iconName="Mail"
                  iconPosition="left"
                  onClick={() => window.open('mailto:akashkumar.webdev@gmail.com')}
                >
                  Email Support
                </Button>
              </div>
            </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
