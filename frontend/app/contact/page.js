"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  ClipboardDocumentIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const InputField = ({ icon: Icon, placeholder, type = "text", value, onChange }) => (
    <div className="relative group">
      <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="w-full pl-12 p-4 border border-zinc-700 rounded-xl bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 peer transition-all duration-300"
        required
      />
      <label className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-yellow-400">
        {placeholder}
      </label>
    </div>
  );

  const TextAreaField = ({ icon: Icon, placeholder, value, onChange }) => (
    <div className="relative group">
      <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
      <textarea
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={5}
        className="w-full pl-12 pt-5 pb-3 border border-zinc-700 rounded-xl bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 peer resize-none transition-all duration-300"
        required
      />
      <label className="absolute left-12 top-5 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-yellow-400">
        {placeholder}
      </label>
    </div>
  );

  return (
    <main className="relative bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
      {/* Golden Decorative Lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Hero Section */}
      <section className="relative py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text"
        >
          Let’s Connect
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Whether you’re looking to <span className="text-yellow-400 font-semibold">invest, sell, or collaborate</span>, GNK Associates
          provides trusted expertise and unmatched professionalism in real estate advisory.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="relative container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: PhoneIcon,
              title: "Phone",
              text: "+91 98765 43210",
            },
            {
              icon: EnvelopeIcon,
              title: "Email",
              text: "connectgnk@gmail.com",
            },
            {
              icon: MapPinIcon,
              title: "Office",
              text: "New Delhi, India",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-700 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              <info.icon className="w-7 h-7 mx-auto text-yellow-400 mb-3" />
              <h4 className="text-lg font-semibold text-yellow-300 mb-1">
                {info.title}
              </h4>
              <p className="text-gray-300">{info.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="relative bg-zinc-900/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-yellow-500/20 space-y-5 z-10"
        >
          <InputField
            icon={UserIcon}
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <InputField
            icon={EnvelopeIcon}
            placeholder="Email Address"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <InputField
            icon={PhoneIcon}
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <InputField
            icon={ClipboardDocumentIcon}
            placeholder="Asset of Interest (Hotel, Land, etc.)"
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
          />
          <TextAreaField
            icon={ChatBubbleOvalLeftIcon}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(234,179,8,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Status Message */}
          <div className="text-center text-sm mt-2">
            {status === "success" && (
              <p className="text-green-400">✅ Thank you! We’ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-400">❌ Something went wrong. Try again.</p>
            )}
          </div>
        </motion.form>
      </section>

      {/* CTA Section */}
      <section className="relative mt-24 py-20 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-black text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-5"
        ></motion.div>

        <div className="relative z-10 container mx-auto px-6">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            Visit Our Office
          </h2>
          <p className="text-white text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            Come meet our experts and discuss your next investment opportunity at GNK Associates.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block px-10 py-4 bg-black text-yellow-400 font-semibold rounded-full shadow-lg hover:-translate-y-1 hover:shadow-yellow-500/40 transition-all duration-300"
          >
            View on Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}




