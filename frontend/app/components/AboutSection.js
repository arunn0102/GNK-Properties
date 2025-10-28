"use client";
import { Building2, Handshake, ShieldCheck, Users2, Globe2, TrendingUp, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-linear-to-b from-white to-slate-50 py-24 overflow-hidden">
      {/* ✅ Fixed Background */}
<div
  className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover brightness-90 contrast-110 saturate-125"
  style={{
    backgroundImage: "url('/bg1.jpg')",
    imageRendering: "high-quality",
  }}
></div>

  {/* ✅ Gradient Overlay for Readability */}
  <div className="absolute inset-0 bg-linear-to-b from-white/70 via-white/60 to-slate-50/90"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-8 text-slate-900 tracking-tight"
        >
          About <span className="text-slate-700">GNK Associates</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16 text-lg"
        >
          GNK Associates is an independent <strong>real estate and asset advisory firm</strong> specializing in 
          <span className="text-slate-800 font-medium"> off-market hospitality, land, industrial, and renewable energy assets</span> across India. 
          We connect verified property owners and serious investors through data-driven insights and trusted relationships — 
          ensuring confidentiality, transparency, and value creation at every step.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-10 mb-20"
        >
          {[
            { num: "15+", label: "Years of Expertise" },
            { num: "200+", label: "High-Value Transactions" },
            { num: "50+", label: "Cities Across India" },
            { num: "100%", label: "Client Confidentiality" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm rounded-2xl px-8 py-6 hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-slate-900">{stat.num}</h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-10"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
              <ShieldCheck className="text-slate-700 w-7 h-7" /> Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower investors and property owners with <strong>trusted insights, confidential transactions,</strong> 
              and transparent processes — ensuring every deal drives mutual growth and success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-10"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
              <Building2 className="text-slate-700 w-7 h-7" /> Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be India’s most respected name in large-scale real estate transactions — 
              where <strong>integrity meets opportunity</strong> and every partnership creates long-term value.
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-20 bg-white/90 border border-slate-100 rounded-2xl shadow-sm p-10 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
            <Users2 className="text-slate-700 w-7 h-7" /> Our Philosophy
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At GNK Associates, we believe that great deals are built on <strong>trust, discretion, and expertise</strong>. 
            Our approach combines data intelligence, deep market understanding, and ethical advisory practices 
            — helping clients make informed decisions that create sustainable value.
          </p>
        </motion.div>

        {/* 🌟 Why Choose Us Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-slate-900 mb-10">
            Why Choose GNK Associates
          </h3>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe2 size={40} className="text-slate-700 mx-auto mb-4" />,
                title: "Pan-India Network",
                desc: "We maintain exclusive access to premium assets and verified buyers across major Indian markets.",
              },
              {
                icon: <BriefcaseBusiness size={40} className="text-slate-700 mx-auto mb-4" />,
                title: "Professional Advisory",
                desc: "Our team combines financial insight and legal due diligence to ensure seamless deal closures.",
              },
              {
                icon: <TrendingUp size={40} className="text-slate-700 mx-auto mb-4" />,
                title: "Result-Oriented",
                desc: "Every engagement is focused on delivering measurable outcomes and mutual success.",
              },
            ].map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="bg-white border rounded-2xl shadow-md hover:shadow-lg transition p-8"
              >
                {item.icon}
                <h4 className="text-xl font-semibold mb-2 text-slate-900">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌟 Core Values */}
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-slate-900 mb-8">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900 text-white rounded-xl shadow-lg"
            >
              <Handshake size={40} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-slate-200">
                We operate with complete transparency, honesty, and confidentiality
                in every transaction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Users2 size={40} className="mx-auto mb-4 text-slate-900" />
              <h4 className="text-xl font-semibold mb-2 text-slate-900">Collaboration</h4>
              <p className="text-gray-600">
                We nurture lasting relationships through teamwork, respect, and shared goals.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900 text-white rounded-xl shadow-lg"
            >
              <ShieldCheck size={40} className="mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-slate-200">
                We strive for unmatched precision and dedication in every advisory engagement.
              </p>
            </motion.div>
          </div>
        </div>

        {/* 🌟 Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-24 max-w-5xl mx-auto bg-white rounded-2xl shadow-md border p-10"
        >
          <h3 className="text-3xl font-semibold mb-6 text-slate-900">Leadership</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            GNK Associates is led by a team of experienced professionals with deep roots in 
            real estate, finance, and legal advisory. Our leadership’s vision is to redefine 
            large-ticket asset transactions through integrity, discretion, and client-first execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
