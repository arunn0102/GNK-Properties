// "use client";
// import Link from "next/link";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Building2, Landmark, Globe2 } from "lucide-react";

// export default function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-yellow-300 py-20"
//     >
//       {/* Background Layer */}
//       <motion.div
//   style={{
//     y: y1,
//     backgroundImage: "url('/hero.jpg')",
//   }}
//   className="absolute inset-0 bg-cover bg-center opacity-30 brightness-95 contrast-110 saturate-125"
// ></motion.div>


//       <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-slate-100/90 backdrop-blur-sm"></div>

//       <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="md:w-1/2 text-center md:text-left"
//         >
//           <motion.h1
//             style={{ y: y2 }}
//             className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 tracking-tight"
//           >
//             Connecting{" "}
//             <span className="text-slate-700">Genuine Investors</span> <br />
//             with{" "}
//             <span className="text-slate-700">Genuine Opportunities</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0"
//           >
//             GNK Associates facilitates discreet, off-market real estate and asset
//             transactions specializing in hospitality, commercial, and renewable
//             energy assets across India.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
//           >
//             <Link
//               href="/contact"
//               className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//             >
//               Discuss an Opportunity
//             </Link>
//             <Link
//               href="/about"
//               className="px-8 py-3 border border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
//             >
//               Learn More
//             </Link>
//           </motion.div>

//           {/* Stats Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.7 }}
//             className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left"
//           >
//             {[
//               {
//                 icon: <Building2 className="w-6 h-6 text-slate-900" />,
//                 label: "Transactions",
//                 value: "100+",
//               },
//               {
//                 icon: <Landmark className="w-6 h-6 text-slate-900" />,
//                 label: "Years Experience",
//                 value: "10+",
//               },
//               {
//                 icon: <Globe2 className="w-6 h-6 text-slate-900" />,
//                 label: "Network Reach",
//                 value: "Pan-India",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white/60 backdrop-blur-xl rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="flex justify-center md:justify-start mb-2">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-slate-900">{item.value}</h3>
//                 <p className="text-sm text-gray-600">{item.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Right Image Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           style={{ y: y1 }}
//           className="md:w-1/2 flex justify-center relative"
//         >
//           {/* Background Glow */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.25 }}
//             transition={{ duration: 2, delay: 0.5 }}
//             className="absolute -bottom-10 -right-10 w-120 h-120 bg-slate-900 rounded-full blur-3xl"
//           ></motion.div>

//           <motion.img
//             src="/hero.jpg"
//             alt="Luxury real estate"
//             className="rounded-3xl shadow-2xl w-full max-w-md md:max-w-lg relative z-10"
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 120 }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, Globe2 } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-10"
    >
      {/* 🎥 Background Video Layer */}
      <motion.video
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90 contrast-110 saturate-125"
        src="/hero.mp4" // ✅ your video inside /public folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent backdrop-blur-[1px]"></div>

      {/* Foreground Content */}
      <div className="relative container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            style={{ y: y2 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-white tracking-tight"
          >
            Connecting{" "}
            <span className="text-yellow-400">Genuine Investors</span> <br />
            with{" "}
            <span className="text-yellow-400">Genuine Opportunities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-gray-200 max-w-xl mx-auto md:mx-0"
          >
            GNK Associates facilitates discreet, off-market real estate and asset
            transactions specializing in hospitality, commercial, and renewable
            energy assets across India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-yellow-400 text-black font-medium rounded-lg shadow-lg hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Discuss an Opportunity
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left"
          >
            {[
              {
                icon: <Building2 className="w-6 h-6 text-yellow-400" />,
                label: "Transactions",
                value: "100+",
              },
              {
                icon: <Landmark className="w-6 h-6 text-yellow-400" />,
                label: "Years Experience",
                value: "10+",
              },
              {
                icon: <Globe2 className="w-6 h-6 text-yellow-400" />,
                label: "Network Reach",
                value: "Pan-India",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl p-5 shadow-sm hover:shadow-yellow-400/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center md:justify-start mb-2">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-300">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side (optional placeholder image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ y: y1 }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Glow Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -bottom-10 -right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
