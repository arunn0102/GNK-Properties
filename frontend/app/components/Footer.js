"use client";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#2a0000] via-[#530000] to-[#8b0000] text-gray-300">
      {/* ✨ Background Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(191,168,111,0.08),transparent_70%)]"></div>

      {/* 🔹 Main Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-16 z-10">
        
        {/* 1️⃣ Logo + About Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 max-w-3xl">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative w-52 h-52 md:w-48 md:h-48">
              <Image
                src="/logo.png"
                alt="GNK Associates Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(191,168,111,0.3)] group-hover:scale-105 transition-transform duration-300"
                quality={75}
              />
            </div>
          </Link>

          {/* Text beside logo */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
            <span className="text-[#bfa86f] font-semibold">GNK Associates</span> is an independent real estate 
            and asset advisory firm specializing in hospitality, land, industrial, and renewable 
            energy sectors across India. We connect genuine investors with exclusive off-market 
            opportunities.
          </p>
        </div>

        {/* 2️⃣ Connect + Contact Section */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
          <h3 className="text-white text-2xl font-semibold tracking-wide relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 md:after:left-auto md:after:right-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-12 after:h-[2px] after:bg-[#bfa86f]">
            Connect With Us
          </h3>

          {/* Social Icons */}
          <div className="flex space-x-5">
            {[
              { icon: Twitter, link: "https://twitter.com" },
              { icon: Linkedin, link: "https://linkedin.com" },
              { icon: Instagram, link: "https://instagram.com" },
            ].map(({ icon: Icon, link }, i) => (
              <Link
                key={i}
                href={link}
                target="_blank"
                className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-[#bfa86f] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-gray-400 space-y-3 w-full max-w-xs">

            {/* WhatsApp */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.16 13.663c-.269-.134-1.591-.784-1.838-.874-.247-.09-.427-.134-.607.134-.179.269-.697.874-.854 1.053-.157.179-.314.202-.583.067-.269-.134-1.136-.419-2.163-1.336-.799-.713-1.339-1.595-1.496-1.863-.157-.269-.017-.414.118-.548.121-.121.269-.314.403-.47.134-.157.179-.269.269-.449.09-.179.045-.336-.022-.47-.067-.134-.607-1.459-.832-2.003-.218-.523-.439-.452-.607-.461h-.52c-.179 0-.47.067-.716.336s-.94.918-.94 2.237.963 2.593 1.096 2.773c.134.179 1.89 2.885 4.584 4.045.641.276 1.14.441 1.529.563.642.205 1.225.176 1.688.107.514-.077 1.591-.65 1.816-1.278.224-.627.224-1.165.157-1.278-.067-.112-.247-.179-.516-.313zm-4.16 6.337h-.001C7.935 20 4 16.065 4 11.5S7.935 3 12.5 3 21 6.935 21 11.5 17.065 20 12 20zM12.5 2C7.253 2 3 6.253 3 11.5c0 1.985.654 3.823 1.757 5.317L3 22l5.317-1.757C9.677 21.346 11.515 22 13.5 22c5.247 0 9.5-4.253 9.5-9.5S18.747 2 13.5 2z" />
              </svg>
              <Link
                href="https://wa.me/917770006827"
                target="_blank"
                className="hover:text-white transition"
              >
                +91 77700 06827
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Phone size={18} className="text-[#bfa86f]" />
              <Link href="tel:+918130141878" className="hover:text-white transition">
                +91 81301 41878
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <MapPin size={18} className="text-[#bfa86f]" />
              <span>New Delhi, India</span>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-3">
              <Mail size={18} className="text-[#bfa86f]" />
              <Link href="connectgnk@gmail.com" className="hover:text-white transition">
                connectgnk@gmail.com
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 🔸 Footer Bottom */}
      <div className="relative border-t border-white/10 mt-10 py-6 text-center text-sm text-gray-400 z-10">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">GNK Associates</span> Crafted with precision &
          passion.
        </p>
      </div>

      {/* ✨ Ambient Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#bfa86f]/15 blur-3xl rounded-full"></div>
    </footer>
  );
}
