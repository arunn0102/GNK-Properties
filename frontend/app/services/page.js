// "use client";
// import { motion } from "framer-motion";
// import {
//   Building2,
//   Briefcase,
//   SunMedium,
//   Users2,
//   FileCheck2,
//   Handshake,
//   ShieldCheck,
//   LineChart,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";

// export default function ServicesPage() {
//   const services = [
//     {
//       icon: <Briefcase className="w-8 h-8 text-slate-900" />,
//       title: "Hospitality & Hotel Sales",
//       desc: "We handle premium transactions for hotels, resorts, and hospitality portfolios with complete confidentiality. GNK Associates bridges luxury assets and credible investors through a refined, data-driven, and off-market network.",
//       image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       icon: <Building2 className="w-8 h-8 text-slate-900" />,
//       title: "Land & Commercial Asset Transactions",
//       desc: "Our team provides valuation, legal coordination, and strategic advisory for urban lands, mixed-use developments, and commercial assets — ensuring every deal is transparent, compliant, and value-optimized.",
//       image:
//         "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       icon: <SunMedium className="w-8 h-8 text-slate-900" />,
//       title: "Renewable Energy Projects",
//       desc: "Empowering India’s energy transition through advisory and acquisitions in solar, wind, and renewable assets. We connect institutional investors with sustainable, long-term yield opportunities.",
//       image:
//         "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       icon: <Users2 className="w-8 h-8 text-slate-900" />,
//       title: "Investment & Buyer Representation",
//       desc: "We represent investors worldwide — sourcing off-market assets, structuring negotiations, and ensuring meticulous due diligence to maximize returns and mitigate risk.",
//       image:
//         "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       icon: <FileCheck2 className="w-8 h-8 text-slate-900" />,
//       title: "End-to-End Deal Facilitation",
//       desc: "From LOI to closing, GNK Associates manages the full transaction process with precision — coordinating legal, financial, and operational aspects to ensure smooth deal execution.",
//       image:
//         "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       icon: <Handshake className="w-8 h-8 text-slate-900" />,
//       title: "Strategic Partnerships & Joint Ventures",
//       desc: "We build synergies between developers, brands, and investors — facilitating long-term collaborations and JV structures that enhance asset value and accelerate growth.",
//       image:
//         "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
//     },
//   ];

//   return (
//     <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="relative text-center py-28">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>

//         <div className="relative z-10 container mx-auto px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
//           >
//             Our <span className="text-red-800">Expert Services</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//             className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//           >
//             At <strong>GNK Associates</strong>, we blend market intelligence,
//             professionalism, and discretion to deliver high-value real estate and
//             investment advisory services across India’s most dynamic asset classes.
//           </motion.p>
//         </div>
//       </section>

//       {/* DIVIDER */}
//       <div className="h-1 w-40 mx-auto bg-gradient-to-r from-amber-600 to-slate-700 rounded-full mb-16"></div>

//       {/* SERVICES GRID */}
//      <section className="relative container mx-auto px-6 pb-28">
//   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
//     {services.map((service, i) => (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: i * 0.1 }}
//         className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-lg hover:shadow-amber-400/30 transition-all duration-700"
//       >
//         {/* Decorative Glow Border */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

//         {/* Image Section */}
//         <div className="h-56 overflow-hidden relative">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
//         </div>

//         {/* Content Section */}
//         <div className="relative p-8 text-center z-10">
//           <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
//             {service.icon}
//           </div>

//           <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors duration-500">
//             {service.title}
//           </h3>

//           <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
//             {service.desc}
//           </p>
//         </div>

//         {/* Hover Shine Effect */}
//         <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transition duration-700"></div>
//       </motion.div>
//     ))}
//   </div>
// </section>


//       {/* WHY CHOOSE US */}
//       <section className="relative bg-gradient-to-b from-slate-50 to-white py-28 text-center">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-5xl font-bold mb-8 text-slate-900"
//           >
//             Why Partner with{" "}
//             <span className="text-amber-600">GNK Associates?</span>
//           </motion.h2>

//           <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
//             We bring together <strong>integrity, insight, and innovation</strong> —
//             ensuring every transaction adds measurable value and builds enduring trust.
//           </p>

//           <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//             {[
//               {
//                 icon: <ShieldCheck className="w-7 h-7" />,
//                 title: "Trusted Expertise",
//                 desc: "Led by a senior team with decades of combined experience across hospitality, land, and industrial transactions — we execute with precision and discretion.",
//               },
//               {
//                 icon: <LineChart className="w-7 h-7" />,
//                 title: "Data-Driven Insights",
//                 desc: "We analyze real-time market intelligence and asset performance to help clients identify high-yield, risk-balanced investments.",
//               },
//               {
//                 icon: <TrendingUp className="w-7 h-7" />,
//                 title: "Result-Oriented Approach",
//                 desc: "Our goal is simple — deliver measurable outcomes, seamless transactions, and lasting partnerships built on trust and excellence.",
//               },
//             ].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: i * 0.1 }}
//                 className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl border border-amber-100 transition-all duration-300"
//               >
//                 <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-amber-600 text-white shadow-md">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-slate-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="relative py-28 bg-amber-700 text-white text-center overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523293836414-9d6e2f86e69a?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
//         <div className="relative z-10">
//           <motion.h3
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             Ready to Discover <span className="text-amber-300">Real Value?</span>
//           </motion.h3>

//           <p className="text-amber-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
//             Partner with <strong>GNK Associates</strong> — your trusted advisor for
//             discreet, data-backed, and high-value transactions across India’s top
//             investment opportunities.
//           </p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <a
//               href="/contact"
//               className="inline-block px-10 py-4 bg-white text-amber-800 text-lg font-semibold rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
//             >
//               Get in Touch
//             </a>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

// app/services/page.js
"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Link from "next/link";
import {
  // Building2,
  // Briefcase,
  // SunMedium,
  // Users2,
  // FileCheck2,
  // Handshake,
  // ShieldCheck,
  // LineChart,
  // TrendingUp,
  Award,
  Globe2,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";

export default function ServicesPage() {
  
const { data: session } = useSession();
const router = useRouter();




function handleViewDetails(slug) {
  if (!session) {
    toast.error("Please login first to view service details!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setTimeout(() => {
      router.push(`/login?next=/services/${slug}`);
    }, 1200);
  } else {
    router.push(`/services/${slug}`);
  }
}


  return (
    <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative text-center py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Our <span className="text-red-800">Expert Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            At <strong>GNK Associates</strong>, we blend market intelligence,
            professionalism, and discretion to deliver high-value real estate and
            investment advisory services across India’s most dynamic sectors.
          </motion.p>
        </div>
      </section>

      {/* COMPANY INTRO SECTION */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/servicesbg.jpg"
            alt="About GNK Associates"
            className="rounded-3xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Strategic. Reliable. Future-Ready.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At GNK Associates, we don’t just close deals we build legacies.
            Our advisory approach merges market data, human insight, and global
            connectivity to craft solutions tailored for long-term growth.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you’re a developer, investor, or hospitality group, we offer
            personalized strategies backed by decades of expertise in land
            acquisitions, asset management, and transaction facilitation.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white rounded-full shadow-md hover:shadow-lg hover:bg-amber-800 transition-all duration-300"
          >
            Learn More About Us →
          </Link>
        </motion.div>
      </section>

      {/* SERVICE HIGHLIGHT STRIP */}
      <section className="bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white py-14">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            { icon: <Globe2 className="w-8 h-8 mx-auto mb-3" />, label: "Pan-India Network", sub: "Active presence across 12+ cities" },
            { icon: <Award className="w-8 h-8 mx-auto mb-3" />, label: "15+ Years of Experience", sub: "Trusted by top developers & investors" },
            { icon: <Sparkles className="w-8 h-8 mx-auto mb-3" />, label: "400+ Successful Closures", sub: "Across hospitality, land & assets" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {item.icon}
              <h4 className="text-xl font-semibold mb-1">{item.label}</h4>
              <p className="text-amber-200">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative container mx-auto px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-slate-900"
        >
          What We <span className="text-red-800">Offer</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-lg hover:shadow-amber-400/30 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
              </div>

              <div className="relative p-8 text-center z-10">
                <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {service.desc}
                </p>
                <button
  onClick={() => handleViewDetails(service.slug)}
  className="inline-block px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  View Details →
</button>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-900 mb-10"
          >
            What Our <span className="text-red-800">Clients Say</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "GNK Associates handled our multi-crore hospitality transaction with unmatched professionalism. Every step felt secure and data-backed.",
                name: "Rohit Sharma",
                title: "Hotel Group Director",
              },
              {
                quote:
                  "Their insights into land valuation and development strategy helped us save months of due diligence.",
                name: "Meera Kapoor",
                title: "Real Estate Developer",
              },
              {
                quote:
                  "From valuation to closing, their attention to detail and market understanding exceeded expectations.",
                name: "Anand Patel",
                title: "Private Investor",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-md border border-amber-100"
              >
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{t.quote}”
                </p>
                <h4 className="text-lg font-semibold text-slate-900">
                  {t.name}
                </h4>
                <p className="text-red-600 text-sm">{t.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523293836414-9d6e2f86e69a?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Discover <span className="text-amber-300">Real Value?</span>
          </motion.h3>

          <p className="text-amber-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with <strong>GNK Associates</strong> your trusted advisor for
            discreet, data-backed, and high-value transactions across India’s top
            investment opportunities.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-amber-800 text-lg font-semibold rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
