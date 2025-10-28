"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  SunMedium,
  Users2,
  FileCheck2,
  Handshake,
  ShieldCheck,
  LineChart,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-slate-900" />,
      title: "Hospitality & Hotel Sales",
      desc: "We specialize in facilitating premium transactions for hotels, resorts, and hospitality assets across India, connecting property owners with serious institutional and private investors through a trusted off-market network.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <Building2 className="w-8 h-8 text-slate-900" />,
      title: "Land & Commercial Asset Transactions",
      desc: "From urban development land to commercial complexes, we provide strategic advisory, valuation, and transaction management — ensuring every deal is transparent, compliant, and value-driven.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <SunMedium className="w-8 h-8 text-slate-900" />,
      title: "Renewable Energy Projects",
      desc: "Empowering India’s green transition by enabling acquisitions, investments, and sales of solar and renewable energy projects. We connect investors with sustainable, high-yield opportunities.",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <Users2 className="w-8 h-8 text-slate-900" />,
      title: "Investment & Buyer Representation",
      desc: "Representing investors worldwide, we source exclusive off-market assets, negotiate on their behalf, and ensure due diligence and profitability throughout the acquisition process.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-slate-900" />,
      title: "End-to-End Deal Facilitation",
      desc: "From mandate signing to closing, we manage the entire transaction lifecycle — handling negotiations, compliance, and legal coordination to ensure seamless execution.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: <Handshake className="w-8 h-8 text-slate-900" />,
      title: "Strategic Partnerships",
      desc: "We foster collaborations between developers, investors, and brands to form strategic alliances, joint ventures, and partnerships that create sustainable growth and mutual success.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_0%,transparent_70%)]"></div>

      {/* HERO SECTION */}
      <section className="relative text-center py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Our <span className="text-slate-700">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            At <strong>GNK Associates</strong>, we deliver bespoke real estate and
            asset advisory solutions tailored for large-scale investors, corporates,
            and developers — combining <strong>market intelligence</strong>,
            <strong> transparency</strong>, and <strong>strategic execution</strong>.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <div className="mx-auto mb-5 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-xl shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-slate-900"
          >
            Why Choose <span className="text-slate-700">GNK Associates?</span>
          </motion.h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
            We are more than advisors — we are <strong>strategic partners</strong> in
            your investment journey. Our commitment to{" "}
            <span className="text-slate-900 font-medium">
              excellence, ethics, and execution
            </span>{" "}
            ensures that every transaction adds value, strengthens relationships, and
            drives long-term success.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7" />,
                title: "Trusted Expertise",
                desc: "Led by a team of seasoned professionals, we bring proven market experience and executional excellence to every transaction.",
              },
              {
                icon: <LineChart className="w-7 h-7" />,
                title: "Data-Driven Insights",
                desc: "We combine real-time analytics and market research to help clients identify high-yield, risk-optimized opportunities.",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                title: "Result-Oriented Approach",
                desc: "Our success is measured by your success — every deal is driven by measurable outcomes, trust, and client satisfaction.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-slate-900 text-white shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-slate-700 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523293836414-9d6e2f86e69a?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Explore New Opportunities?
          </motion.h3>

          <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with <strong>GNK Associates</strong> for data-backed insights,
            confidential deal flow, and seamless execution across India's most
            promising asset classes.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-slate-900 text-lg font-semibold rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


