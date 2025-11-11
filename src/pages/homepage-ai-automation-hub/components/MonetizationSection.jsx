import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MonetizationSection = () => {
  const earningMethods = [
    {
      id: 1,
      name: "AI Automation Services",
      description: "Custom AI automation solutions for businesses",
      icon: "Bot",
      color: "from-blue-500 to-indigo-600",
      features: ["Workflow automation", "Process optimization", "Custom integrations"],
      revenue: "₹25,000 - ₹5,00,000/month"
    },
    {
      id: 2,
      name: "Custom Software Development",
      description: "Tailored software solutions for unique needs",
      icon: "Code",
      color: "from-purple-500 to-pink-600",
      features: ["Web applications", "Mobile apps", "Enterprise solutions"],
      revenue: "₹1,00,000 - ₹50,00,000/project"
    },
    {
      id: 3,
      name: "AI Consulting & Strategy",
      description: "Strategic guidance for AI adoption",
      icon: "Brain",
      color: "from-green-500 to-emerald-600",
      features: ["AI readiness assessment", "Roadmap development", "Implementation guidance"],
      revenue: "₹50,000 - ₹10,00,000/project"
    },
    {
      id: 4,
      name: "Training & Workshops",
      description: "AI and automation training programs",
      icon: "GraduationCap",
      color: "from-orange-500 to-red-600",
      features: ["Team training", "Workshops", "Certification programs"],
      revenue: "₹25,000 - ₹2,00,000/session"
    },
    {
      id: 5,
      name: "SaaS Products",
      description: "Software-as-a-Service solutions",
      icon: "Cloud",
      color: "from-cyan-500 to-blue-600",
      features: ["Subscription-based", "Scalable platform", "Multi-tenant architecture"],
      revenue: "₹5,000 - ₹50,000/month per client"
    },
    {
      id: 6,
      name: "API Services",
      description: "RESTful and GraphQL API development",
      icon: "Zap",
      color: "from-yellow-500 to-orange-600",
      features: ["API development", "Integration services", "API maintenance"],
      revenue: "₹15,000 - ₹1,00,000/month"
    },
    {
      id: 7,
      name: "Maintenance & Support",
      description: "Ongoing support and maintenance services",
      icon: "Settings",
      color: "from-indigo-500 to-purple-600",
      features: ["24/7 support", "System updates", "Performance optimization"],
      revenue: "₹10,000 - ₹2,00,000/month"
    },
    {
      id: 8,
      name: "Data Analytics & Insights",
      description: "Business intelligence and analytics solutions",
      icon: "BarChart",
      color: "from-pink-500 to-rose-600",
      features: ["Data visualization", "Predictive analytics", "Business insights"],
      revenue: "₹30,000 - ₹3,00,000/month"
    },
    {
      id: 9,
      name: "Affiliate Marketing",
      description: "Earn commissions from referrals",
      icon: "Users",
      color: "from-teal-500 to-cyan-600",
      features: ["Referral programs", "Partner commissions", "Lead generation"],
      revenue: "10-30% commission per referral"
    },
    {
      id: 10,
      name: "Google AdSense",
      description: "Monetize website traffic with ads",
      icon: "DollarSign",
      color: "from-emerald-500 to-green-600",
      features: ["Display ads", "Video ads", "Native advertising"],
      revenue: "₹500 - ₹50,000/month (based on traffic)"
    },
    {
      id: 11,
      name: "Sponsored Content",
      description: "Partner with brands for sponsored posts",
      icon: "FileText",
      color: "from-violet-500 to-purple-600",
      features: ["Blog posts", "Case studies", "Product reviews"],
      revenue: "₹10,000 - ₹1,00,000/post"
    },
    {
      id: 12,
      name: "Premium Content",
      description: "Sell premium content and resources",
      icon: "Lock",
      color: "from-amber-500 to-yellow-600",
      features: ["E-books", "Templates", "Video courses"],
      revenue: "₹500 - ₹10,000 per item"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="DollarSign" size={16} />
            <span>Revenue Streams</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Generate Revenue
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer multiple ways to help businesses while building sustainable revenue streams. 
            From one-time projects to recurring services, we provide value at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {earningMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card dark:bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={method.icon} size={24} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{method.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              
              <div className="mb-4">
                <div className="text-xs font-semibold text-primary dark:text-accent mb-2">Revenue Range:</div>
                <div className="text-sm font-bold text-foreground">{method.revenue}</div>
              </div>
              
              <ul className="space-y-2">
                {method.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-2xl p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a one-time project or ongoing support, we have a solution that fits your budget and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:akashkumar.webdev@gmail.com?subject=Project%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary dark:bg-accent text-white rounded-lg hover:bg-primary/90 dark:hover:bg-accent/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Get a Quote
            </a>
            <a
              href="https://wa.me/918252472186?text=Hi,%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary dark:border-accent text-primary dark:text-accent rounded-lg hover:bg-primary/10 dark:hover:bg-accent/10 transition-colors duration-200"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MonetizationSection;
