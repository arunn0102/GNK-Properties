"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Home, Info, Briefcase, Building2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/services", label: "Services", icon: Briefcase },
    // { href: "/assets", label: "Assets", icon: Building2 },
  ];

  return (
    <header className="sticky top-0 z-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4c0000] via-[#7a0000] to-[#b30000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_1px,transparent_1px)] [background-size:30px_30px] animate-[movePattern_15s_linear_infinite] opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent animate-[shimmer_8s_infinite_linear]"></div>
      </div>

      {/* Header Content */}
      <div className="relative container mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-yellow-400/20 shadow-[0_2px_10px_rgba(255,200,0,0.2)]">
        {/* Logo */}
<Link href="/" className="flex items-center gap-2 group relative z-50">
  <div className="relative flex items-center justify-center" style={{ width: "200px", height: "60px" }}>
    <Image
      src="/logo.png"
      alt="GNK Associates Logo"
      width={260}
      height={60}
      className="object-contain brightness-125 saturate-150 scale-125 -translate-y-[2px] group-hover:scale-[1.3] transition-transform duration-300"
      quality={100}
      priority
    />
  </div>
</Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 font-medium">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="relative flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition duration-300 group"
            >
              <Icon size={18} className="text-yellow-400 group-hover:scale-110 transition" />
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 flex items-center gap-2 px-6 py-2.5 rounded-full bg-yellow-200 text-black font-semibold shadow-md hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} />
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 hover:text-yellow-300 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-t border-yellow-400/20 backdrop-blur-xl shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-5 py-6 text-gray-200 font-medium">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-lg hover:text-yellow-400 transition duration-300"
                >
                  <Icon size={20} className="text-yellow-400" />
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 mt-4 px-8 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
              >
                <Phone size={20} />
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animations */}
      <style jsx global>{`
        @keyframes movePattern {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        @keyframes shimmer {
          0% {
            opacity: 0.05;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.2;
            transform: translateX(100%);
          }
          100% {
            opacity: 0.05;
            transform: translateX(-100%);
          }
        }
      `}</style>
    </header>
  );
}
