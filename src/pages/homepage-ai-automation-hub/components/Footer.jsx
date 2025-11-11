"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "AI Process Automation", href: "/services-universe-interactive-solutions" },
        { name: "Custom Software Development", href: "/services-universe-interactive-solutions" },
        { name: "AI Consulting", href: "/services-universe-interactive-solutions" },
        { name: "SaaS Products", href: "/homepage-ai-automation-hub" },
        { name: "Training & Workshops", href: "/services-universe-interactive-solutions" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-ecosystem-company-story" },
        { name: "Our Team", href: "/about-ecosystem-company-story" },
        { name: "Success Stories", href: "/homepage-ai-automation-hub" },
        { name: "Case Studies", href: "/homepage-ai-automation-hub" },
        { name: "Careers", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Knowledge Hub", href: "/blog" },
        { name: "Industry Reports", href: "/blog" },
        { name: "Best Practices", href: "/blog" },
        { name: "Implementation Guides", href: "/blog" },
        { name: "API Documentation", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Support Center", href: "/contact-scheduling-multi-channel-engagement" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Help Center", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Technical Support", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Training & Onboarding", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Community Forum", href: "/contact-scheduling-multi-channel-engagement" },
        { name: "Status Page", href: "/contact-scheduling-multi-channel-engagement" },
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/company/thinkaiq" },
    { name: "Twitter", icon: "Twitter", href: "https://twitter.com/thinkaiq" },
    { name: "YouTube", icon: "Youtube", href: "https://youtube.com/@thinkaiq" },
    { name: "Instagram", icon: "Instagram", href: "https://instagram.com/thinkaiq" },
    { name: "Facebook", icon: "Facebook", href: "https://facebook.com/thinkaiq" },
  ];

  const contactInfo = [
    {
      icon: "Phone",
      title: "Call Us",
      details: ["+91 8252472186", "+91 9508949406"],
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["akashkumar.webdev@gmail.com", "thinkaiq@gmail.com"],
    },
  ];

  const earningMethods = [
    { name: "AI Automation Services", icon: "Bot" },
    { name: "Custom Software Development", icon: "Code" },
    { name: "AI Consulting", icon: "Brain" },
    { name: "Training & Workshops", icon: "GraduationCap" },
    { name: "SaaS Products", icon: "Cloud" },
    { name: "API Services", icon: "Zap" },
    { name: "Maintenance & Support", icon: "Settings" },
    { name: "Data Analytics", icon: "BarChart" },
    { name: "Affiliate Marketing", icon: "Users" },
    { name: "Google AdSense", icon: "DollarSign" },
    { name: "Sponsored Content", icon: "FileText" },
    { name: "Premium Content", icon: "Lock" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/10 to-secondary text-white dark:border-t dark:border-white/10 dark:from-secondary dark:via-secondary/85 dark:to-primary/85">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <Link to="/homepage-ai-automation-hub" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Zap" size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight">
                  thinkAIQ
                </span>
                <span className="text-sm text-white/80 font-medium -mt-1">
                  Intelligence that Works
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-white/80 leading-relaxed max-w-md text-sm sm:text-base">
              thinkAIQ helps organizations modernize their operations through advanced AI automation, 
              smart data analytics, and intelligent solutions. We build scalable digital ecosystems that 
              deliver measurable results and long-term value.
            </p>

            {/* Contact */}
            <div className="space-y-4">
              {contactInfo.map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Icon
                    name={contact.icon}
                    size={18}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <div>
                    <div className="font-medium text-white text-sm mb-1">
                      {contact.title}
                    </div>
                    {contact.details.map((d, idx) => (
                      <div key={idx} className="text-white/70 text-sm">
                        {d}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-white/80 dark:text-white/70 text-sm font-medium">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 dark:bg-white/5 hover:bg-accent/20 dark:hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors duration-300 group border border-white/10 dark:border-white/5"
                  >
                    <Icon
                      name={s.icon}
                      size={18}
                      className="text-white/80 dark:text-white/60 group-hover:text-accent dark:group-hover:text-accent transition-colors"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {footerSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-bold text-white mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-accent transition-colors duration-200 text-xs sm:text-sm flex items-center space-x-2 group"
                      >
                        <span>{link.name}</span>
                        <Icon name="ArrowRight" size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Earning Methods Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-white/10 dark:border-white/5"
        >
          <h3 className="text-xl font-bold text-white dark:text-white/90 mb-6 text-center">How We Earn</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {earningMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg p-4 text-center transition-all duration-300 cursor-pointer border border-white/10 dark:border-white/5"
              >
                <Icon name={method.icon} size={24} className="text-accent dark:text-accent mx-auto mb-2" />
                <p className="text-white/80 dark:text-white/70 text-xs font-medium">{method.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            <div className="text-white/70 dark:text-white/60 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} thinkAIQ. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-white/70 dark:text-white/60 hover:text-accent dark:hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/70 dark:text-white/60 hover:text-accent dark:hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy-policy#cookies" className="text-white/70 dark:text-white/60 hover:text-accent dark:hover:text-accent transition-colors">
                Cookie Policy
              </Link>
              <Link to="/privacy-policy#security" className="text-white/70 dark:text-white/60 hover:text-accent dark:hover:text-accent transition-colors">
                Security
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-white/5 rounded-lg px-3 py-1 border border-white/10 dark:border-white/5">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-white/80 dark:text-white/70 text-xs font-medium">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 dark:bg-white/5 rounded-lg px-3 py-1 border border-white/10 dark:border-white/5">
                <Icon name="Lock" size={16} className="text-accent" />
                <span className="text-white/80 dark:text-white/70 text-xs font-medium">SOC 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
