"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";

const QuoteModal = ({ serviceKey, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inquiry sent for ${serviceKey}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="relative w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl"><X /></button>
          <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 rounded bg-gray-800 border border-gray-700" required />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 rounded bg-gray-800 border border-gray-700" required />
            <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 rounded bg-gray-800 border border-gray-700" rows={4} />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 transition py-2 rounded">Send Inquiry</button>
          </form>
          <div className="flex gap-2 mt-4 flex-wrap">
            <a href={`https://wa.me/918252472186?text=Hi, I'm interested in ${serviceKey}`} target="_blank" className="flex-1 text-center py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"><Phone className="inline mr-1" /> WhatsApp</a>
            <a href={`mailto:akashkumar.webdev@gmail.com?subject=Inquiry about ${serviceKey}`} className="flex-1 text-center py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"><Mail className="inline mr-1" /> Email</a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;
