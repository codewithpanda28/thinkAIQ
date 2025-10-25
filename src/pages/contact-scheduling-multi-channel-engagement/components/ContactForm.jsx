"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    deadline: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { value: "ai-automation", label: "AI Automation" },
    { value: "chatbot", label: "Chatbot Development" },
    { value: "website", label: "Website Development" },
    { value: "app", label: "Mobile App Development" },
    { value: "branding", label: "Branding & Marketing" },
    { value: "consultation", label: "Consultation" },
  ];

  const projectTypes = [
    { value: "new-project", label: "New Project" },
    { value: "redesign", label: "Redesign Existing Website" },
    { value: "ongoing-support", label: "Ongoing Support" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ Function to send via Email
  const sendViaEmail = async () => {
    setIsSubmitting(true);
    toast.loading("Sending via Email...", { id: "send" });

    try {
      await emailjs.send(
        "service_zsxojxm", // 🔧 Replace with your EmailJS service ID
        "template_hnc3vgm", // 🔧 Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          serviceType: formData.serviceType,
          budget: formData.budget,
          deadline: formData.deadline,
          projectType: formData.projectType,
          message: formData.message,
        },
        "XN-uXovtibIHNiM8g" // 🔧 Replace with your EmailJS public key
      );
      toast.success("Message sent successfully via Email!", { id: "send" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        budget: "",
        deadline: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send via Email. Try again.", { id: "send" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Function to send via WhatsApp
  const sendViaWhatsApp = () => {
    const encodedMessage = encodeURIComponent(
      `📩 *New Project Inquiry*\n\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}\n🧩 Service: ${formData.serviceType}\n💼 Project Type: ${formData.projectType}\n💰 Budget: ${formData.budget}\n🗓️ Deadline: ${formData.deadline}\n💬 Message: ${formData.message}`
    );

    window.open(`https://wa.me/918252472186?text=${encodedMessage}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const handleSubmit = (e, method) => {
    e.preventDefault();
    if (method === "email") {
      sendViaEmail();
    } else if (method === "whatsapp") {
      sendViaWhatsApp();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-blue-800 mb-3"
          >
            Let’s Build Your Next Big Idea 🚀
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Fill out the form and choose how you’d like to send your details — Email or WhatsApp.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+91 8252472186"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
            <Input
              label="Company / Organization"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            <Select
              label="Service Type"
              placeholder="Select your service"
              options={serviceTypes}
              value={formData.serviceType}
              onChange={(value) => handleInputChange("serviceType", value)}
            />
            <Select
              label="Project Type"
              placeholder="Select project type"
              options={projectTypes}
              value={formData.projectType}
              onChange={(value) => handleInputChange("projectType", value)}
            />
            <Input
              label="Estimated Budget (₹)"
              type="text"
              placeholder="e.g. 10,000 - 50,000"
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
            />
            <Input
              label="Deadline / Timeline"
              type="text"
              placeholder="e.g. 2 weeks / 1 month"
              value={formData.deadline}
              onChange={(e) => handleInputChange("deadline", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Project Details / Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe your project or inquiry..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
            />
          </div>

          {/* 🔘 Choice Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <Button
              onClick={(e) => handleSubmit(e, "email")}
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-10 py-3 font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              {isSubmitting ? "Sending..." : "Send via Email"}
            </Button>

            <Button
              onClick={(e) => handleSubmit(e, "whatsapp")}
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-10 py-3 font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto"
            >
              Send via WhatsApp 💬
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
