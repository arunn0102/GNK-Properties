"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden text-white py-28">
      {/* Background Image */}
<div
  className="absolute inset-0 bg-[url('/contactbg.jpg')] bg-cover bg-center brightness-75 scale-105 animate-slow-zoom"
></div>


      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-black/90"></div> */}

      {/* Animated Gradient Waves */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute -top-10 left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] animate-spin-slow"></div>
      </div>

      {/* Floating Light Blob */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-400/20 rounded-full blur-3xl animate-pulse-slower"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          Let’s Build Something <span className="text-slate-300">Extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Partner with <span className="font-semibold text-white">GNK Associates</span> your trusted ally in high-value
          real estate and asset investments. We combine expertise, discretion, and
          a national off-market network to help you close the deals that matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/contact"
            className="relative px-10 py-3.5 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="relative px-10 py-3.5 border border-white/80 text-white font-semibold rounded-xl hover:bg-white hover:text-slate-900 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-300"
        >
          {[
            {
  icon: <Phone size={26} className="text-slate-300" />,
  title: "+91 7770006827, 8130141878",
  subtitle: "Call Us Anytime",
},

            {
              icon: <Mail size={26} className="text-slate-300" />,
              title: "gnkpropertiesindia@gmail.com",
              subtitle: "Email Our Team",
            },
            {
              icon: <MapPin size={26} className="text-slate-300" />,
              title: "Pan India",
              subtitle: "Off-Market Asset Network",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg border border-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 mb-3 bg-white/10 rounded-full group-hover:bg-white/20 transition">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Glow Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent blur-2xl"></div>
    </section>
  );
}
