"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Briefcase,
  SunMedium,
  Users2,
  FileCheck2,
  LineChart,
  Globe2,
  Star,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Hospitality & Hotel Sales",
      desc: "Confidential, off-market hotel and resort transactions connecting genuine owners with verified investors across India and abroad.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Land & Commercial Assets",
      desc: "Facilitating sales and acquisitions of premium commercial and land assets with structured, transparent deal management.",
    },
    {
      icon: <SunMedium className="w-8 h-8" />,
      title: "Renewable Energy Projects",
      desc: "Advising on acquisition and sale of solar, hydro, and wind energy projects to accelerate India's green transition.",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Investor Representation",
      desc: "Representing domestic and global investors to identify and secure profitable large-ticket assets with precision.",
    },
    {
      icon: <FileCheck2 className="w-8 h-8" />,
      title: "Deal Structuring & Execution",
      desc: "From LOI to closure, we manage valuations, negotiations, and documentation for seamless deal completion.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Market Research & Insights",
      desc: "Providing data-driven reports, investment trends, and strategic insights to empower informed decisions.",
    },
  ];

  const team = [
    {
      name: "Rohit Mehra",
      role: "Founder & Managing Partner",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
      desc: "With 15+ years in real estate and hospitality, Rohit leads GNK with strategic foresight, integrity, and unmatched deal expertise.",
    },
    {
      name: "Priya Sharma",
      role: "Director – Investment Advisory",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      desc: "Specializing in investor relations and asset valuation, Priya ensures clients achieve maximum value and seamless deal execution.",
    },
    {
      name: "Arjun Kapoor",
      role: "Head – Asset Transactions",
      image:
        "https://images.unsplash.com/photo-1603415526853-7a2b2c59e9d9?auto=format&fit=crop&w=800&q=80",
      desc: "An expert in land, hospitality, and industrial assets, Arjun brings deep market intelligence and negotiation acumen.",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-slate-900/80"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-slate-300">GNK Associates</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            A trusted name in asset advisory — delivering discretion, transparency, and
            measurable value across hospitality, real estate, and renewable sectors.
          </p>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <div className="relative container mx-auto px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-lg text-center leading-relaxed max-w-4xl mx-auto mb-16"
        >
          <strong>GNK Associates</strong> is an independent asset and investment advisory
          firm specializing in <strong>off-market real estate, hospitality, and
          renewable energy transactions</strong> across India. Our mission is to create
          lasting value by aligning client goals with strategic market insights and
          executional excellence.
        </motion.p>

        {/* MISSION & VISION */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg border hover:shadow-2xl transition-all p-10"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
              <ShieldCheck className="text-slate-700 w-7 h-7" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-center">
              To connect genuine opportunities between sellers and investors through
              professionalism, confidentiality, and results-driven advisory — ensuring
              every transaction is strategic, secure, and rewarding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg border hover:shadow-2xl transition-all p-10"
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
              <Globe2 className="text-slate-700 w-7 h-7" /> Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-center">
              To become India’s most respected asset advisory brand — known for
              integrity, market intelligence, and consistent excellence in execution.
            </p>
          </motion.div>
        </div>

        {/* WHAT WE OFFER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-14 text-slate-900"
        >
          What We Offer
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-white rounded-2xl shadow-md border hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 text-center"
            >
              <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TEAM SECTION */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-slate-900"
        >
          Meet Our Leadership
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-slate-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMMITMENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl py-16 px-8 shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            At <strong>GNK Associates</strong>, we don’t just broker deals — we build
            partnerships based on trust, insight, and measurable outcomes. Our team is
            committed to delivering excellence, one transaction at a time.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </main>
  );
}

