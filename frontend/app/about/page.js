// "use client";
// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Building2,
//   Briefcase,
//   SunMedium,
//   Users2,
//   FileCheck2,
//   LineChart,
//   Globe2,
//   Star,
//   HeartHandshake,
//   Target,
//   Lightbulb,
// } from "lucide-react";

// export default function AboutPage() {
//   const services = [
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: "Hospitality & Hotel Sales",
//       desc: "Confidential off-market hotel and resort transactions connecting genuine owners with verified investors across India and abroad.",
//     },
//     {
//       icon: <Building2 className="w-8 h-8" />,
//       title: "Land & Commercial Assets",
//       desc: "Facilitating acquisition and sales of premium land parcels and commercial properties through structured, transparent deal execution.",
//     },
//     {
//       icon: <SunMedium className="w-8 h-8" />,
//       title: "Renewable Energy Projects",
//       desc: "Advising on solar, hydro, and wind energy projects to accelerate sustainable investments and India's green transition.",
//     },
//     {
//       icon: <Users2 className="w-8 h-8" />,
//       title: "Investor Representation",
//       desc: "We represent institutional and private investors in identifying and securing high-yield, large-ticket opportunities.",
//     },
//     {
//       icon: <FileCheck2 className="w-8 h-8" />,
//       title: "Deal Structuring & Execution",
//       desc: "From valuations to closure — we ensure every transaction is strategic, compliant, and seamlessly executed.",
//     },
//     {
//       icon: <LineChart className="w-8 h-8" />,
//       title: "Market Research & Insights",
//       desc: "Delivering in-depth analysis, asset trends, and real-time insights to empower informed decision-making.",
//     },
//   ];

//   const coreValues = [
//     {
//       icon: <HeartHandshake className="w-8 h-8 text-red-700" />,
//       title: "Integrity & Trust",
//       desc: "We value relationships built on transparency, honesty, and ethical business conduct.",
//     },
//     {
//       icon: <Target className="w-8 h-8 text-red-700" />,
//       title: "Client-Centric Focus",
//       desc: "Every recommendation and negotiation is designed with our client's best interest at heart.",
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8 text-red-700" />,
//       title: "Strategic Innovation",
//       desc: "We leverage insights and creative strategies to unlock hidden potential in every deal.",
//     },
//   ];

//   const team = [
//     {
//       name: "Rohit Mehra",
//       role: "Founder & Managing Partner",
//       image:
//         "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
//       desc: "With 15+ years in real estate and hospitality, Rohit leads GNK with strategic foresight, integrity, and unmatched deal expertise.",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Director – Investment Advisory",
//       image:
//         "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
//       desc: "Specializing in investor relations and asset valuation, Priya ensures clients achieve maximum value and seamless deal execution.",
//     },
//     {
//       name: "Arjun Kapoor",
//       role: "Head – Asset Transactions",
//       image:
//         "https://images.unsplash.com/photo-1603415526853-7a2b2c59e9d9?auto=format&fit=crop&w=800&q=80",
//       desc: "An expert in land, hospitality, and industrial assets, Arjun brings deep market intelligence and negotiation acumen.",
//     },
//   ];

//   return (
//     <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
//         <div className="absolute inset-0 bg-[url('/aboutbg.jpg')] bg-cover bg-center"></div>
//         <div className="absolute inset-0 bg-slate-900/80"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 px-6"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
//             About <span className="text-[#ffcc00]">GNK Associates</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
//             GNK Associates is a boutique real estate and asset advisory firm offering
//             high-value consulting across hospitality, land, and renewable energy sectors.
//           </p>
//         </motion.div>
//       </section>

//       {/* INTRODUCTION */}
//       <div className="relative container mx-auto px-6 py-24">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-gray-700 text-lg text-center leading-relaxed max-w-4xl mx-auto mb-16"
//         >
//           <strong>GNK Associates</strong> stands at the intersection of opportunity and
//           strategy. We guide investors, developers, and institutions through every stage
//           of acquisition and divestment — ensuring precision, confidentiality, and
//           profitability in every transaction.
//         </motion.p>

//         {/* MISSION & VISION */}
//         <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
//           {[
//             {
//               icon: <ShieldCheck className="text-red-700 w-7 h-7" />,
//               title: "Our Mission",
//               text: "To empower clients through structured, ethical, and data-backed advisory that connects genuine opportunities with long-term value creation.",
//             },
//             {
//               icon: <Globe2 className="text-red-700 w-7 h-7" />,
//               title: "Our Vision",
//               text: "To redefine asset advisory in India by setting the benchmark for trust, market expertise, and global partnership standards.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="bg-gradient-to-br from-white to-slate-100 rounded-2xl shadow-lg border border-red-600 hover:shadow-2xl hover:scale-[1.02] transition-all p-10"
//             >
//               <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
//                 {item.icon} {item.title}
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-center">{item.text}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CORE VALUES */}
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-14 text-slate-900"
//         >
//           Our Core Values
//         </motion.h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
//           {coreValues.map((value, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="bg-white rounded-2xl shadow-md border border-red-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 p-8 text-center"
//             >
//               <div className="mx-auto mb-4 flex justify-center">{value.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-slate-900">
//                 {value.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* WHAT WE OFFER */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-14 text-slate-900"
//         >
//           What We Offer
//         </motion.h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: i * 0.1 }}
//               className="group bg-white rounded-2xl shadow-md border border-red-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 text-center"
//             >
//               <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-800 to-red-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3 text-slate-900">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* TEAM SECTION */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-12 text-slate-900"
//         >
//           Meet Our Leadership
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {team.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: i * 0.1 }}
//               className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-red-100"
//             >
//               <div className="h-64 w-full overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-slate-900 mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-slate-700 font-medium mb-3">{member.role}</p>
//                 <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* COMMITMENT SECTION */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mt-28 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white rounded-2xl py-16 px-8 shadow-2xl"
//         >
//           <h3 className="text-3xl font-semibold mb-4">Our Commitment</h3>
//           <p className="text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
//             At <strong>GNK Associates</strong>, we don’t just close transactions — we
//             build enduring partnerships grounded in integrity and results. Every project
//             we undertake reflects our promise of excellence and value creation.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block mt-4 px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
//           >
//             Get in Touch
//           </a>
//         </motion.div>
//       </div>
//     </main>
//   );
// }


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
  HeartHandshake,
  Target,
  Lightbulb,
} from "lucide-react";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1 },
    }),
  };

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Hospitality & Hotel Sales",
      desc: "Confidential off-market hotel and resort transactions connecting genuine owners with verified investors across India and abroad.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Land & Commercial Assets",
      desc: "Facilitating acquisition and sales of premium land parcels and commercial properties through structured, transparent deal execution.",
    },
    {
      icon: <SunMedium className="w-8 h-8" />,
      title: "Renewable Energy Projects",
      desc: "Advising on solar, hydro, and wind energy projects to accelerate sustainable investments and India's green transition.",
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Investor Representation",
      desc: "We represent institutional and private investors in identifying and securing high-yield, large-ticket opportunities.",
    },
    {
      icon: <FileCheck2 className="w-8 h-8" />,
      title: "Deal Structuring & Execution",
      desc: "From valuations to closure — we ensure every transaction is strategic, compliant, and seamlessly executed.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Market Research & Insights",
      desc: "Delivering in-depth analysis, asset trends, and real-time insights to empower informed decision-making.",
    },
  ];

  const coreValues = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-red-700" />,
      title: "Integrity & Trust",
      desc: "We value relationships built on transparency, honesty, and ethical business conduct.",
    },
    {
      icon: <Target className="w-8 h-8 text-red-700" />,
      title: "Client-Centric Focus",
      desc: "Every recommendation and negotiation is designed with our client's best interest at heart.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-700" />,
      title: "Strategic Innovation",
      desc: "We leverage insights and creative strategies to unlock hidden potential in every deal.",
    },
  ];

  const team = [
    {
      name: "Nishchay Kumar",
      role: "Founder",
      image:
        "/founder.jpg",
      // desc: "With 15+ years in real estate and hospitality, Rohit leads GNK with strategic foresight, integrity, and unmatched deal expertise.",
    },
    {
      name: "Pranav Khadia",
      role: "Co-Founder",
      image:
        "/co-founder.jpg",
      // desc: "Specializing in investor relations and asset valuation, Priya ensures clients achieve maximum value and seamless deal execution.",
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
  {/* Background with Parallax Zoom */}
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: 1.6 }}
    transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
    className="absolute inset-0 bg-[url('/aboutbg.jpg')] bg-cover bg-center brightness-[0.7]"
  ></motion.div>

  {/* Elegant Black Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

  {/* Subtle gold shimmer animation */}
  <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,215,0,0.05)15%,transparent 20%)] animate-pulse opacity-60"></div>

  {/* Curved Gold Gradient Bottom Edge */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#d4af37] to-transparent rounded-t-[100%] shadow-[0_-10px_40px_rgba(212,175,55,0.4)]"></div>

  {/* Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative z-10 px-6 max-w-4xl"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
      <span className="text-[#ffcc00]">GNK Associates</span>
      <br />
      <span className="text-white font-light">
        Where Genuine Investments Meet Genuine Opportunities
      </span>
    </h1>
    <p className="max-w-2xl mx-auto text-gray-200 text-base sm:text-lg leading-relaxed">
      An independent real estate and asset advisory firm specializing in off-market hospitality, land,
      industrial, and renewable energy transactions across India built on trust, transparency, and
      excellence.
    </p>
  </motion.div>
</section>


      {/* INTRODUCTION */}
      <section className="relative container mx-auto px-5 sm:px-10 py-20 sm:py-28">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 border-l-4 border-[#b8860b] shadow-[0_5px_30px_rgba(0,0,0,0.05)] rounded-2xl p-10 sm:p-14 max-w-5xl mx-auto mb-24"
>
  {/* Decorative gold shine background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.15),transparent_70%)] rounded-2xl pointer-events-none"></div>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900"
  >
    <span className="bg-gradient-to-r from-[#ffcc00] to-[#b8860b] bg-clip-text text-transparent">
      Who We Are
    </span>
  </motion.h2>

  <div className="relative text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
    <p>
      <strong className="text-slate-900 font-semibold">GNK Associates</strong> is an independent real estate 
      and asset advisory firm specializing in{" "}
      <span className="text-[#b30000] font-medium">
        off-market hospitality, land, industrial, and renewable energy
      </span>{" "}
      transactions across India.
    </p>

    <p>
      We connect{" "}
      <span className="font-semibold text-slate-900">verified property owners</span> with{" "}
      <span className="text-[#b30000] font-medium">serious buyers and investors</span> through a 
      confidential, professional, and data-driven approach. Our focus is on{" "}
      <em>high-value assets</em> hotels, resorts, commercial land, solar plants, and industrial properties
      offering end-to-end transaction support from{" "}
      <span className="font-semibold text-slate-900">sourcing to closure</span>.
    </p>

    <p>
      Over the years, <strong>GNK Associates</strong> has built a strong network of{" "}
      <span className="text-[#b30000] font-medium">owners, developers, institutional investors,</span> and{" "}
      <span className="text-[#b30000] font-medium">HNI clients</span> across major Indian cities and emerging markets. 
      Each deal is handled discreetly, emphasizing{" "}
      <strong>transparency, due diligence,</strong> and{" "}
      <strong>value creation</strong> for both parties.
    </p>

    <p>
      Our role extends beyond traditional brokerage we act as{" "}
      <span className="text-[#b30000] font-semibold">trusted intermediaries</span> who simplify complex transactions, 
      structure win-win deals, and ensure seamless execution. Whether it’s the{" "}
      <em>sale of a 5-star hotel</em>, acquisition of a renewable energy project, or divestment of an 
      industrial unit, we bring{" "}
      <strong>market intelligence, negotiation expertise,</strong> and{" "}
      <strong>confidentiality</strong> to every engagement.
    </p>
  </div>

  {/* Decorative bottom shimmer line */}
  <div className="mt-10 h-[3px] w-32 mx-auto bg-gradient-to-r from-[#ffcc00] via-[#b30000] to-[#ffcc00] rounded-full animate-pulse"></div>
</motion.div>


        {/* MISSION & VISION */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-24">
          {[
            {
              icon: <ShieldCheck className="text-red-700 w-7 h-7" />,
              title: "Our Mission",
              text: "To bridge genuine opportunities between sellers and investors through professionalism, trust, and results-driven advisory.",
            },
            {
              icon: <Globe2 className="text-red-700 w-7 h-7" />,
              title: "Our Vision",
              text: "To be India’s most trusted name in large-ticket asset transactions, known for integrity, discretion, and consistent value delivery.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-white to-slate-300 rounded-2xl shadow-lg border border-red-600 hover:shadow-2xl hover:scale-[1.02] transition-all p-10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-3 text-slate-900">
                {item.icon} {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CORE VALUES */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-slate-900"
        >
          Our Core Values
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
          {coreValues.map((value, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-white to-slate-300 rounded-2xl shadow-md border border-red-500 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* WHAT WE OFFER */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-slate-900"
        >
          What We Offer
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-28">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-white rounded-2xl shadow-md border border-red-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 text-center"
            >
              <div className="mx-auto mb-5 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-800 to-red-600 text-white rounded-xl group-hover:scale-110 transition-transform duration-300">
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-slate-900"
        >
          Meet Our Leadership
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-30 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-red-100"
            >
              <div className="relative w-full h-80 overflow-hidden rounded-2xl">
  <img
    src={member.image}
    alt={member.name}
    className="h-full w-full object-contain rounded-2xl transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-28 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000] text-white rounded-2xl py-16 px-8 shadow-2xl"
        >
          <h3 className="text-3xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong>GNK Associates</strong> – Connecting Genuine Investors with Genuine
            Opportunities. We don’t just close transactions — we build enduring partnerships
            grounded in integrity and results. Every project we undertake reflects our
            promise of excellence and value creation.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
}
