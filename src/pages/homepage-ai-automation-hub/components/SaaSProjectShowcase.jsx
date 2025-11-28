import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const SaaSProjectShowcase = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const saasProjects = [
    {
      id: 1,
      name: "WhatsApp Automation Catalog",
      tagline: "Industry‑Wise (Expanded + High‑ROI Pitch Automations)",
      description:
        "A comprehensive WhatsApp automation catalog with industry-specific workflows, AI-led customer engagement, smart follow-ups, lead qualification, booking bots, and high-ROI sales automations across multiple business niches.",
      icon: "MessageSquare",
      color: "from-green-500 to-emerald-600",
      image:
        "https://cdn.botpenguin.com/assets/website/whatsapp_bot_improves_customer_support_and_service_01_df56e82e62.webp",
      metrics: {
        businesses: "300+",
        satisfaction: "98%",
        response: "Instant Automation",
        uptime: "99.9%",
      },
      industries: [
        {
          name: "E-Commerce & D2C",
          coreAutomations: [
            "COD order confirmation & fraud prevention",
            "RTO prediction + smart NDR flows",
            "Upsell/cross-sell after purchase",
            "Abandoned cart auto recovery",
            "Order tracking automation",
            "Delivery feedback & rating",
            "Replacement/return bot",
            "Payment link recovery bot",
          ],
          advancedAutomations: [
            "AI product recommendation (behavior-based)",
            "AI size assistant for fashion stores",
            "Price-drop alerts automation",
            "VIP customer loyalty workflow",
            "Smart COD→Prepaid conversion bot",
            "Automated influencer follow-up bot",
            "WhatsApp affiliate tracking automation",
          ],
        },
        {
          name: "Healthcare, Clinics, Hospitals",
          coreAutomations: [
            "Appointment booking bot",
            "Automated reminders (visit, tests)",
            "E-prescription delivery",
            "Lab reports auto-share bot",
            "Doctor availability updates",
          ],
          advancedAutomations: [
            "AI medical triage bot (symptom → department)",
            "Follow-up medication reminders",
            "Health package cross-sell",
            "Missed call → instant WhatsApp triage bot",
            "Patient feedback & NPS system",
            "Automated discharge instruction delivery",
          ],
        },
        {
          name: "Real Estate",
          coreAutomations: [
            "Property catalog bot",
            "Site visit booking automation",
            "Lead qualification bot (budget, location, timeline)",
            "Auto-agent assignment",
          ],
          advancedAutomations: [
            "Personalized property recommendations",
            "Real-time project update broadcast",
            "Price sheet delivery automation",
            "Investor segment nurturing",
            "Payment plan reminders for booked buyers",
          ],
        },
        {
          name: "Education, Coaching, EdTech",
          coreAutomations: [
            "Lead capture + pre-qualification bot",
            "Course catalog automation",
            "Demo class reminders",
            "Payment link automation",
            "Admission workflow bot",
          ],
          advancedAutomations: [
            "AI career counseling bot",
            "Parent-engagement updates",
            "Automated lead reactivation",
            "Test result delivery",
            "EMI follow-up bot",
            "Auto-certified completion bot",
          ],
        },
        {
          name: "Salon, Spa, Beauty Clinics",
          coreAutomations: ["Appointment booking bot", "Reminder & re-engagement", "Service catalog"],
          advancedAutomations: [
            "Membership expiry alerts",
            "Service recommendation bot (hair/skin type)",
            "Review booster automation",
            "Prepaid voucher selling automation",
          ],
        },
        {
          name: "Restaurants, Cloud Kitchens, Cafes",
          coreAutomations: ["Menu bot", "Order taking automation", "Delivery partner tracking", "Feedback collection"],
          advancedAutomations: [
            "Loyalty points bot",
            "AI dish recommendation",
            "Automated upsell (add dessert/drink)",
            "Re-order reminder every 7 days",
            "Festival combo broadcast bot",
          ],
        },
        {
          name: "Finance, Insurance, Loans",
          coreAutomations: ["Loan eligibility bot", "Document collection bot", "EMI reminder automation"],
          advancedAutomations: [
            "AI investment advisor bot",
            "Insurance renewal bot",
            "Drop-off lead recovery bot",
            "KYC automation",
            "Policy comparison automation",
          ],
        },
        {
          name: "Agencies, SaaS, Service Providers",
          coreAutomations: ["Lead capture & routing", "Proposal sending", "Invoicing", "Support ticket creation"],
          advancedAutomations: [
            "Client onboarding workflow",
            "Contract renewal reminders",
            "Subscription renewal automation",
            "AI support agent with knowledge base",
            "Failed payment recovery bot",
          ],
        },
        {
          name: "Retail Stores",
          coreAutomations: ["Product catalog bot", "Order taking bot"],
          advancedAutomations: [
            "Loyalty program bot",
            "Festival sales automations",
            "Geo-targeted store offers",
            "Warranty registration bot",
          ],
        },
        {
          name: "Automobile, Car/Bike Showrooms",
          coreAutomations: ["Vehicle inquiry bot", "Test drive booking", "Service reminders"],
          advancedAutomations: [
            "Finance options wizard",
            "Exchange value estimation bot",
            "Insurance renewal reminders",
            "Post-service feedback & upsell automation",
          ],
        },
      ],
      topAutomations: [
        {
          industry: "Real Estate",
          automations: [
            "Auto Project Brochure sender (PDF instantly)",
            "Site-visit auto scheduling + reminders",
            "Lead budget detection via AI",
            "Auto follow-up every 48 hours",
            "Missed-call → WhatsApp auto-response",
            "Property comparison generator",
            "EMI calculator chatbot",
            "Hot/Warm/Cold lead auto tagging",
            "Sales team auto assignment",
            "Price-drop alert automation",
          ],
        },
        {
          industry: "E-Commerce",
          automations: [
            "Abandoned cart recovery (3-step)",
            "Order tracking bot",
            "Product recommendation AI",
            "COD confirmation automation",
            "Return/refund automation",
            "Broadcast sales campaigns",
            "Customer segmentation (new/repeat/whale)",
            "WhatsApp upsell flows",
            "Warranty registration bot",
            "Auto review collection",
          ],
        },
        {
          industry: "Healthcare/Clinics",
          automations: [
            "Appointment booking bot",
            "Auto reminders (appointment + medicine)",
            "Pre-consultation form filling",
            "Report sharing (PDF)",
            "Doctor availability alerts",
            "Queue status updates",
            "Payment collection automation",
            "Post-consultation follow-up",
            "Insurance documentation bot",
            "Lab-report notification",
          ],
        },
      ],
      additionalAdvancedAutomations: [
        "AI Emotional Tone Detection (customer mood → auto response)",
        "Smart Lead Conversion Predictor (AI probability score)",
        "Auto Sales Script Generator (agent ke liye)",
        "Multi-agent Routing (finance → sales → support)",
        "Auto Keyword Intent Detection (buying intent)",
        "Real-time Dashboard Summary via WhatsApp",
        "Custom PDF generator (agreement/invoice/certificate)",
        "WhatsApp-based CRM inside WhatsApp itself",
        "Voice-to-order automation",
        "AI Product Recommender based on chat behavior",
      ],
      realLifeAutomations: [
        "Missed-call → WhatsApp auto-reply + lead capture",
        "QR Scan → WhatsApp automation (offline stores)",
        "WhatsApp Ticketing System (support teams)",
        "Team performance tracking automation",
        "Internal task assignment bot",
        "Auto cold lead recovery bot",
        "Re-engagement bot (inactive 30 days)",
        "Birthday/anniversary campaigns",
        "High-value leads escalation automation",
        "Geo-based hyperlocal automation",
        "Inventory stock alerts",
        "Order delay apology bot",
        "Instant warranty PDF generator",
      ],
      features: [
        "Industry-wise automation workflows (17 niches)",
        "Lead capture + qualification bots",
        "Smart follow-ups & re-engagement",
        "AI recommendations & personalization",
        "Booking, reminders & notification bots",
        "Payment links, invoices & document automation",
        "High-ROI workflows for marketing & sales",
        "Customizable automation for every business",
      ],
      techStack: ["React", "Node.js", "WhatsApp API", "OpenAI", "n8n"],
      liveDemo: "",
      caseStudy: "/project-details/1",
      pricing: "Custom Pricing Based on Automations",
      category: "WhatsApp Automation",
    },
  ];

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleViewDetails = (project) =>
    navigate(`/saas-project/${project.id}`, { state: { project } });

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background dark:from-background dark:via-muted/20 dark:to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-accent/20 text-primary dark:text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Cloud" size={16} />
            <span>Our SaaS Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Live SaaS Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our live SaaS products, see real-time demos, and discover how we've helped businesses automate and scale.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {saasProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card dark:bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-muted dark:bg-muted">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}
                  >
                    <Icon name={project.icon} size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{project.name}</h3>
                  <p className="text-sm text-white/90 drop-shadow-md">{project.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-muted dark:bg-muted rounded-full text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-2 bg-muted/30 dark:bg-muted rounded-lg">
                      <div className="text-sm font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  className="text-xs bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services-universe-interactive-solutions?project=${project.id}`);
                  }}
                >
                  <Icon name="ArrowRight" size={14} className="mr-1" />
                  View Project Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card dark:bg-card border border-border rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${selectedProject.color} rounded-xl flex items-center justify-center`}
                      >
                        <Icon name={selectedProject.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{selectedProject.name}</h3>
                        <p className="text-muted-foreground">{selectedProject.tagline}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <Icon name="X" size={24} className="text-foreground" />
                    </button>
                  </div>

                  {/* Description & Features */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Description</h4>
                      <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {selectedProject.features.map((f, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm text-muted-foreground"
                          >
                            <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Industries */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Industries & Automations</h4>
                    {selectedProject.industries.map((ind, idx) => (
                      <div key={idx} className="mb-4 p-4 bg-muted/20 rounded-lg">
                        <h5 className="font-semibold text-foreground mb-2">{ind.name}</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <h6 className="text-sm font-medium text-foreground mb-1">Core Automations:</h6>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {ind.coreAutomations.map((c, i) => (
                                <li key={i}>{c}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-foreground mb-1">Advanced Automations:</h6>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                              {ind.advancedAutomations.map((a, i) => (
                                <li key={i}>{a}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted/30 dark:bg-muted rounded-full text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                {/* Contact Section */}
<div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
    Contact Me
  </h4>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    {/* Phone */}
    <a
      href="tel:+918252472186"
      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884l2-3A1 1 0 015 3h3a1 1 0 011 1v3a1 1 0 01-.293.707l-2 2a11.037 11.037 0 005.586 5.586l2-2A1 1 0 0114 12h3a1 1 0 011 1v3a1 1 0 01-1.116.993l-3-.5a16 16 0 01-14.881-14.881z" />
      </svg>
      +91 82524 72186
    </a>

    {/* Email */}
    <a
      href="mailto:akashkumar.webdev@gmail.com"
      className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.94 5.94A1 1 0 013 5h14a1 1 0 01.993.883L18 6v8a1 1 0 01-.883.993L17 15H3a1 1 0 01-.993-.883L2 14V6a1 1 0 01.94-.94zM3 6v.511l7 4.5 7-4.5V6H3z" />
      </svg>
      akashkumar.webdev@gmail.com
    </a>

    {/* Calendar / Booking */}
    <a
      href="https://cal.com/akash-kumar-x8dx1t/thinkaiq"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H8V3a1 1 0 00-1-1zM2 11v5a2 2 0 002 2h12a2 2 0 002-2v-5H2z" />
      </svg>
      Book a Meeting
    </a>
  </div>
</div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SaaSProjectShowcase;

