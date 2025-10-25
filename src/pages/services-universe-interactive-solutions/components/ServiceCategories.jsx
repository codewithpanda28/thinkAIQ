"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";
import ServiceModal from "./ServiceModal";
import QuoteModal from "./QuoteModal";

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState("automation");
  const [selectedServiceKey, setSelectedServiceKey] = useState(null);
  const [quoteServiceKey, setQuoteServiceKey] = useState(null);

  const categories = [
    { id: "automation", name: "AI Automation", icon: "Bot", description: "Intelligent process automation that learns and adapts" },
    { id: "development", name: "Custom Development", icon: "Code", description: "Tailored software solutions for unique business needs" },
  ];

  const services = {
    automation: [
      {
        key: "workflow-automation",
        image: "https://blog.n8n.io/content/images/size/w800/2024/10/ai-workflow-automationA--1-.png",
        name: "Workflow Automation",
        description: "Automate repetitive tasks and business processes with AI-powered workflows that adapt to your needs.",
        features: ["Custom workflow design", "AI decision making", "Real-time monitoring", "Error handling"],
        pricing: { setup: 25000, monthly: 5000 },
        timeline: "2-4 weeks",
        video: "https://www.youtube.com/embed/tgbNymZ7vqY",
        docLink: [
          { title: "Workflow Guide (PDF)", url: "https://example.com/workflow-guide.pdf" },
        ],
      },
      {
        key: "document-processing",
        image: "https://blog.n8n.io/content/images/size/w800/2024/10/ai-workflow-automationA--1-.png",
        name: "Document Processing",
        description: "Intelligent document extraction, processing, and management using advanced OCR and NLP.",
        features: ["OCR technology", "Data extraction", "Automated filing", "Compliance tracking"],
        pricing: { setup: 35000, monthly: 8000 },
        timeline: "3-5 weeks",
        video: "https://www.youtube.com/embed/ysz5S6PUM-U",
        docLink: [
          { title: "Doc Processing Manual (PDF)", url: "https://example.com/doc-processing.pdf" },
        ],
      },
    ],
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(price);

  return (
    <section className="py-20 bg-[#ffffff] text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mt-6">
        {/* Title */}
       
        <div className="text-left mb-16 ">
          <h2 className="text-5xl font-extrabold mb-4 text-black text-center tracking-wide hero-reveal animate">
            Our Intelligent Service Ecosystem
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Experience next-gen AI automation and intelligent systems built for your business growth.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-500 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/5  hover:text-black hover:bg-white/10 hover:shadow-md text-black"
              }`}
            >
              <Icon name={cat.icon} size={22} />
              <div className="text-left">
                <div className="font-semibold">{cat.name}</div>
                <div className="text-sm opacity-80">{cat.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {services[activeCategory]?.map((service) => (
    <motion.div
      key={service.key}
      whileHover={{ scale: 1.05 }}
      className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-200 transition-transform duration-300"
    >
      {/* Service Image */}
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-56 object-cover rounded-2xl mb-6 border border-gray-100 shadow-sm"
      />

      {/* Service Title */}
      <h3 className="text-2xl sm:text-[22px] font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 uppercase tracking-wider drop-shadow-md">
  {service.name}
</h3>


      {/* Service Description (2 lines max) */}
      <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-2">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-2 mb-6">
        {service.features.map((f, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-gray-700 font-medium text-sm"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 bg-cyan-500 rounded-full text-white text-xs font-bold">
              ✔
            </span>{" "}
            {f}
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={() => setSelectedServiceKey(service.key)}
          className="flex-1 bg-white/50 border border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white transition-transform duration-300"
        >
          Learn More
        </Button>
        <Button
          onClick={() => setQuoteServiceKey(service.key)}
          className="flex-1 bg-cyan-500 text-white hover:bg-cyan-600 transition-transform duration-300"
        >
          Get Quote
        </Button>
      </div>
    </motion.div>
  ))}
</div>



        {/* Modals */}
        <AnimatePresence>
          {selectedServiceKey && <ServiceModal serviceKey={selectedServiceKey} onClose={() => setSelectedServiceKey(null)} />}
          {quoteServiceKey && <QuoteModal serviceKey={quoteServiceKey} onClose={() => setQuoteServiceKey(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceCategories;
