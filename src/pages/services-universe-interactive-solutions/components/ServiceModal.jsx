"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, Linkedin, FileText, Code, Users, CalendarCheck, Shield } from "lucide-react";

const allServiceDetails = {
  "workflow-automation": {
    name: "AI HR — Workflow Automation",
    description:
      "Our AI-powered HR workflow system helps businesses streamline hiring, onboarding, and employee management. Tasks that once took hours are now automated, freeing up HR teams to focus on strategic decisions.",
    features: [
      "AI-assisted candidate screening",
      "Automated interview scheduling",
      "Smart onboarding process",
      "Real-time HR analytics dashboards",
      "Error-free task handling",
      "Customizable workflow templates"
    ],
    pricing: { setup: 95000, monthly: 18000 },
    timeline: "6-8 weeks",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    docLink: [
      { title: "Product Overview (PDF)", url: "https://example.com/AI_HR_Product_Overview.pdf" },
      { title: "User Manual (DOCX)", url: "https://example.com/AI_HR_User_Manual.docx" },
      { title: "API Documentation (PDF)", url: "https://example.com/AI_HR_API_Documentation.pdf" },
    ],
    benefits: [
      "Cut HR operational costs by up to 50%",
      "Enhance candidate experience with timely updates",
      "Ensure compliance with HR regulations",
      "Speed up hiring process with AI assistance"
    ],
    useCases: [
      "Automated resume shortlisting",
      "Task assignment for onboarding",
      "Leave requests and approvals",
      "Performance review automation"
    ]
  },
  "document-processing": {
    name: "AI HR — Document Processing",
    description:
      "Handle large volumes of HR documents effortlessly. Using advanced OCR and NLP, our system extracts data from resumes, compliance forms, and employee records accurately and quickly.",
    features: [
      "Resume parsing with AI",
      "Automated record filing",
      "Compliance monitoring",
      "Secure cloud-based storage",
      "Version control & audit trails",
      "Advanced OCR & NLP"
    ],
    pricing: { setup: 70000, monthly: 15000 },
    timeline: "4-6 weeks",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    docLink: [
      { title: "Document Processing Guide (PDF)", url: "https://example.com/doc-processing.pdf" },
    ],
    benefits: [
      "Save 10-20 hours per week for HR teams",
      "Minimize manual errors",
      "Quick access to employee documents",
      "Maintain regulatory compliance"
    ],
    useCases: [
      "Resume parsing & database entry",
      "Policy and compliance documents",
      "Employee record digitization",
      "Digital signature workflows"
    ]
  },
};

const ServiceModal = ({ serviceKey, onClose }) => {
  if (!serviceKey) return null;
  const service = allServiceDetails[serviceKey];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-6xl h-[85%] bg-white/90 text-gray-900 rounded-2xl shadow-2xl overflow-y-auto p-6 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-700 hover:text-red-500 text-3xl transition"
          >
            <X />
          </button>

          <div className="flex flex-col md:flex-row gap-6 h-full">
            {/* Video Section */}
            <div className="md:w-1/2 flex items-center justify-center bg-gray-200 rounded-xl p-2">
              <iframe
                width="100%"
                height="100%"
                src={service.video}
                title={service.name}
                allowFullScreen
                className="rounded-xl border border-gray-300"
              ></iframe>
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 overflow-y-auto flex flex-col gap-4 pr-4 mt-4">
              {/* Service Name & Description */}
              <div className="mb-4 p-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-600">
                  {service.name}
                </h2>
                <p className="mt-3 text-gray-800 text-base md:text-[17px] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Code /> Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition transform hover:scale-105"
                    >
                      <span className="inline-flex items-center justify-center w-12 h-8  rounded-full text-black text-[20px] font-bold">
                        {idx + 1}{')'}
                      </span>
                      <span className="text-gray-900 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Users /> Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {service.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <CalendarCheck /> Use Cases
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-800">
                  {service.useCases.map((u, idx) => (
                    <li key={idx}>{u}</li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Timeline */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Shield /> Pricing & Timeline
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 p-5 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="text-white font-medium uppercase mb-1">Monthly</div>
                    <div className="text-white text-2xl font-bold">₹{service.pricing.monthly.toLocaleString()}</div>
                    <p className="text-white text-sm mt-1">Recurring subscription</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-5 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
                    <div className="text-2xl md:text-3xl mb-2">💰</div>
                    <div className="text-white font-medium uppercase mb-1">Setup</div>
                    <div className="text-white text-2xl font-bold">₹{service.pricing.setup.toLocaleString()}</div>
                    <p className="text-white text-sm mt-1">One-time deployment cost</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-5 rounded-xl shadow-lg hover:scale-105 transition transform text-center">
                    <div className="text-3xl mb-2">⏱</div>
                    <div className="text-white font-medium uppercase mb-1">Timeline</div>
                    <div className="text-white text-2xl font-bold">{service.timeline}</div>
                    <p className="text-white text-sm mt-1">Estimated completion time</p>
                  </div>
                </div>
              </div>

              {/* Documentation */}
              {service.docLink && (
                <div className="p-4">
                  <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                    <FileText /> Documentation
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.docLink.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300 transition transform hover:scale-105"
                      >
                        <FileText className="text-cyan-600 w-6 h-6" />
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-medium">{doc.title}</span>
                          <span className="text-gray-500 text-sm">{doc.url.split(".").pop().toUpperCase()}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Buttons */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                  <Phone /> Contact Us
                </h3>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <a
                    href={`https://wa.me/918252472186?text=Hi, I'm interested in ${service.name} service. Please provide more details.`}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition text-white font-medium"
                  >
                    <Phone />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:akashkumar.webdev@gmail.com?subject=Inquiry about ${service.name} service`}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-white font-medium"
                  >
                    <Mail />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/codewithpanda28/"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-800 rounded-lg hover:bg-blue-900 transition text-white font-medium"
                  >
                    <Linkedin />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;
