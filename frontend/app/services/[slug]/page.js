"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, gnk_contact } from "@/data/services";
import {
  MapPin,
  Info,
  KeyRound,
  Building2,
  ClipboardList,
  Phone,
  Mail,
} from "lucide-react";

export default async function ServiceDetails({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const { title, type, location, image, desc, details } = service;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-white"
    >
      {/* HERO SECTION */}
      <div className="relative h-[65vh] w-full overflow-hidden rounded-b-[4rem] shadow-lg">
        <motion.img
          src={image}
          alt={title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-10 md:px-20 text-white">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-3"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            {type} • {location}
          </motion.p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto -mt-20 px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl border border-amber-100 shadow-2xl rounded-3xl p-10 md:p-14"
        >
          {/* OVERVIEW */}
          <h2 className="text-3xl font-semibold text-amber-700 mb-4 flex items-center gap-2">
            <Info className="w-7 h-7 text-amber-700" /> Overview
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            {desc}
          </p>

          {/* KEY DETAILS */}
          {details && (
            <>
              <h3 className="text-2xl font-semibold text-amber-800 mb-5 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-amber-800" />
                Key Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {Object.entries(details)
                  .filter(([key]) => typeof details[key] === "string")
                  .map(([key, value]) => (
                    <div
                      key={key}
                      className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-sm"
                    >
                      <h4 className="text-sm uppercase tracking-wide text-amber-700 font-medium mb-1">
                        {key.replace(/_/g, " ")}
                      </h4>
                      <p className="text-gray-800 text-lg font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
              </div>

              {/* FEATURES / FACILITIES */}
              {details.facilities || details.features ? (
                <>
                  <h3 className="text-2xl font-semibold text-amber-800 mb-5 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-amber-800" />
                    {details.facilities ? "Facilities" : "Features"}
                  </h3>

                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {Object.entries(details.facilities || details.features).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-sm"
                        >
                          <h4 className="text-sm uppercase tracking-wide text-amber-700 font-medium mb-1">
                            {key.replace(/_/g, " ")}
                          </h4>
                          {Array.isArray(value) ? (
                            <ul className="list-disc pl-5 text-gray-800">
                              {value.map((v, i) => (
                                <li key={i}>{v}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-800">{value}</p>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </>
              ) : null}
            </>
          )}

          {/* CONTACT CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 bg-gradient-to-r from-amber-600 to-amber-800 text-white p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">Interested in this Opportunity?</h3>
            <p className="text-amber-100 mb-6">
              Contact GNK Associates for more information or to schedule a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${gnk_contact.email}`}
                className="flex items-center gap-2 bg-white text-amber-700 px-5 py-2 rounded-full font-medium shadow-md hover:bg-amber-100 transition"
              >
                <Mail className="w-5 h-5" /> {gnk_contact.email}
              </a>
              <a
                href={`tel:${gnk_contact.phone_1}`}
                className="flex items-center gap-2 bg-white text-amber-700 px-5 py-2 rounded-full font-medium shadow-md hover:bg-amber-100 transition"
              >
                <Phone className="w-5 h-5" /> {gnk_contact.phone_1}
              </a>
            </div>
          </motion.div>

          {/* BACK BUTTON */}
          <div className="border-t border-amber-100 pt-10 mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-md"
            >
              ← Back to Services
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

