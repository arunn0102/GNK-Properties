"use client";
import { motion } from "framer-motion";
import {
  Building2,
  LandPlot,
  SunMedium,
  Users2,
  FileCheck2,
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Hospitality & Hotel Sales",
    desc: "We specialize in discreet, off-market hotel and resort transactions connecting verified owners with serious investors.",
  },
  {
    icon: <LandPlot className="w-10 h-10" />,
    title: "Land & Commercial Asset Transactions",
    desc: "From premium land parcels to commercial developments — we deliver advisory with transparency and due diligence.",
  },
  {
    icon: <SunMedium className="w-10 h-10" />,
    title: "Renewable Energy Projects",
    desc: "Enabling investments in solar, wind, and industrial energy assets across India’s fastest-growing renewable hubs.",
  },
  {
    icon: <Users2 className="w-10 h-10" />,
    title: "Investment & Buyer Representation",
    desc: "We represent institutional and HNI investors to identify, evaluate, and acquire high-value real estate opportunities.",
  },
  {
    icon: <FileCheck2 className="w-10 h-10" />,
    title: "End-to-End Deal Facilitation",
    desc: "From LOI to closing, we handle every aspect of the transaction with confidentiality and precision.",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] py-28 overflow-hidden">
      {/* Elegant parallax background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)]"></div>

      <div className="relative container mx-auto px-6">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What We <span className="text-yellow-200">Offer</span>
          </h2>
          <p className="text-yellow-500 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Strategic, confidential, and results-driven real estate advisory. We
            empower investors, owners, and developers with market intelligence
            and proven transaction expertise across India.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-10 border border-slate-100 hover:border-[#bfa86f]/30"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-2xl shadow-md group-hover:from-[#bfa86f] group-hover:to-yellow-700 transition-all duration-500"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-[#bfa86f] transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <a
            href="/contact"
           className="inline-block px-10 py-4 bg-gradient-to-r from-slate-900 to-slate-700 
text-white font-semibold rounded-xl shadow-lg 
hover:from-[#bfa86f] hover:to-[#d4c181] hover:text-black 
hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300"

          >
            Let’s Work Together
          </a>
          <p className="text-yellow-500 mt-4 text-lg">
            Connect with GNK Associates for tailored investment and asset
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


