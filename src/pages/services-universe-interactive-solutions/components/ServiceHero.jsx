"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ConsultationWidget = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("whatsapp");

  // WhatsApp Redirect
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/918252472186?text=Hi, I'm interested in booking a free consultation for AI automation solutions.`,
      "_blank"
    );
  };

  // Email Trigger — no backend, direct Gmail open
  const handleEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const datetime = e.target.datetime.value;

    const subject = encodeURIComponent("Free Consultation Booking Request");
    const body = encodeURIComponent(
      `Hi Akash,%0D%0A%0D%0AI’d like to book a free consultation.%0D%0A%0D%0AHere are my details:%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0APreferred Date/Time: ${datetime}%0D%0A%0D%0ARegards,%0D%0A${name}`
    );

    window.open(`mailto:akashkumar.webdev@gmail.com?subject=${subject}&body=${body}`);
    setOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={() => setOpen(!open)}
          variant="default"
          size="lg"
          className="bg-accent text-primary font-semibold shadow-lg hover:scale-105 transition-transform"
          iconName="Calendar"
          iconPosition="left"
        >
          Book Free Consultation
        </Button>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Widget Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="fixed bottom-24 right-8 z-50 w-96 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 text-white"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Book a Free Consultation</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-accent transition"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex mb-4 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setTab("whatsapp")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    tab === "whatsapp" ? "bg-accent text-primary" : "text-white/70"
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => setTab("email")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    tab === "email" ? "bg-accent text-primary" : "text-white/70"
                  }`}
                >
                  Book a Call
                </button>
              </div>

              {/* WhatsApp Section */}
              {tab === "whatsapp" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 text-center"
                >
                  <p className="text-white/80 text-sm">
                    Instantly chat with our automation specialist on WhatsApp.
                  </p>
                  <Button
                    variant="default"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium w-full"
                    iconName="MessageCircle"
                    onClick={handleWhatsApp}
                  >
                    Chat on WhatsApp
                  </Button>
                </motion.div>
              )}

              {/* Email Booking Section */}
              {tab === "email" && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                  onSubmit={handleEmail}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:ring-2 focus:ring-accent outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:ring-2 focus:ring-accent outline-none"
                  />
                  <input
                    type="datetime-local"
                    name="datetime"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:ring-2 focus:ring-accent outline-none"
                  />
                  <Button
                    variant="default"
                    className="bg-accent text-primary font-semibold w-full"
                    iconName="Send"
                    iconPosition="right"
                    type="submit"
                  >
                    Send Request
                  </Button>
                </motion.form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ConsultationWidget;
