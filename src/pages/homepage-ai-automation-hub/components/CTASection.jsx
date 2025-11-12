"use client";
import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak directly with our experts",
      action: "tel:+918252472186", // ✅ Real call action
      display: "+91 82524 72186",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Quick chat for instant support",
      action:
        "https://wa.me/918252472186?text=Hi%2C%20I'm%20interested%20in%20your%20automation%20services.%20Please%20share%20more%20details.",
      display: "Start Chat",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Detailed project discussions",
      action: "mailto:akashkumar.webdev@gmail.com?subject=Project%20Inquiry",
      display: "akashkumar.webdev@gmail.com",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: "Calendar",
      title: "Book Meeting",
      description: "Schedule a consultation",
      action: "https://cal.com/akashkumar-webdev", // ✅ Replace with your real link
      display: "Choose Time Slot",
      color: "from-orange-500 to-red-600",
    },
  ];

  const urgencyLevels = [
    {
      level: "Standard",
      timeline: "24-48 hours",
      description: "Regular consultation and project planning",
      icon: "Clock",
      color: "text-muted-foreground",
    },
    {
      level: "Priority",
      timeline: "4-8 hours",
      description: "Urgent business requirements",
      icon: "Zap",
      color: "text-warning",
    },
    {
      level: "Emergency",
      timeline: "1-2 hours",
      description: "Critical system issues or immediate needs",
      icon: "AlertTriangle",
      color: "text-error",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Rocket" size={16} />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business?
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join 300+ businesses that have transformed their operations through
            intelligent automation. Let’s build tomorrow’s business — today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Choose Your Preferred Way to Connect
            </h3>

            <div className="grid gap-4">
              {contactMethods?.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon name={method.icon} size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-primary font-medium">{method.display}</p>
                    </div>

                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Stay Updated with AI Insights
            </h3>

            <div className="bg-card border border-border rounded-xl p-8 shadow-brand-lg">
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Get Weekly AI Automation Insights
                    </h4>
                    <p className="text-muted-foreground text-sm mb-6">
                      Join 5,000+ business leaders receiving our insights on AI
                      trends, case studies, and real-world automation strategies.
                    </p>
                  </div>

                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    required
                    className="mb-4"
                  />

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isLoading}
                    iconName="Send"
                    iconPosition="right"
                    className="w-full premium-button"
                    disabled={!email}
                  >
                    Subscribe to Newsletter
                  </Button>

                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Icon name="Shield" size={14} />
                    <span>We respect your privacy. Unsubscribe anytime.</span>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="CheckCircle" size={32} className="text-success" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Successfully Subscribed!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for joining our community. You'll receive your
                    first insights within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Free Resources */}
            <div className="bg-gradient-to-r from-accent/10 to-success/10 rounded-xl p-6 border border-accent/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Free Resources Available
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Download" size={16} className="text-accent" />
                  <span className="text-sm text-foreground">
                    AI Readiness Assessment Checklist
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={16} className="text-accent" />
                  <span className="text-sm text-foreground">
                    ROI Calculator for Automation Projects
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BookOpen" size={16} className="text-accent" />
                  <span className="text-sm text-foreground">
                    Complete Guide to Business Process Automation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-brand-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Response Time Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand that business needs can’t wait. Choose your urgency
              level and get support when you need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {urgencyLevels?.map((level, index) => (
              <div
                key={index}
                className="text-center p-6 bg-muted/30 rounded-xl"
              >
                <Icon
                  name={level.icon}
                  size={32}
                  className={`mx-auto mb-4 ${level.color}`}
                />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {level.level}
                </h4>
                <div className="text-2xl font-bold text-primary mb-2">
                  {level.timeline}
                </div>
                <p className="text-sm text-muted-foreground">
                  {level.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="premium-button"
              onClick={() => (window.location.href = "tel:+918252472186")}
            >
              Get Immediate Support
            </Button>
          </div>
        </div>

        {/* Trust Signals */}
        {/* <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm font-medium text-foreground">
                MSME Certified
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Clock" size={20} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                24/7 Support
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Users" size={20} className="text-secondary" />
              <span className="text-sm font-medium text-foreground">
                8+ Clients
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="text-sm font-medium text-foreground">
                99.9% Uptime
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
