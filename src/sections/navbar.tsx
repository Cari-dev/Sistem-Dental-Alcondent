"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface ContactItem {
  icon: string;
  text: string;
}

interface SocialItem {
  icon: string;
  href: string;
  alt: string;
  size?: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Tratamientos", href: "/Tratamientos" },
  { label: "Ubicacion", href: "/Ubicacion" },
  { label: "Contacto", href: "/Contacto" },
];

const contactItems: ContactItem[] = [
  { icon: "/icons/ubication.svg", text: "123. Av. Luis Espinal Rio Seco" },
  { icon: "/icons/time.svg", text: "Lunes a Viernes 8:00 - 21:00 | Sábado 8:00 - 13:00" },
];

const socialItems: SocialItem[] = [
  { icon: "/icons/instagram.svg", href: "#", alt: "instagram-icon", size: "size-5" },
  { icon: "/icons/face.svg", href: "#", alt: "facebook-icon", size: "size-5" },
  { icon: "/icons/tiktok.svg", href: "#", alt: "tiktok-icon", size: "size-4" },
];

const Navbar: React.FC = () => {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <div className="w-full bg-primary sticky top-0 z-20">
      {/* Topbar */}
      <div className="flex justify-between max-w-6xl mx-auto px-4 h-12 items-center text-white font-sans">
        {/* Contacto */}
        <div className="flex gap-5 text-xs">
          {contactItems.map((item, index) => (
            <a key={index} href="#" className="flex gap-2 items-center hover:scale-105 transition">
              <img src={item.icon} className="size-4 " alt={item.text} />
              {item.text}
            </a>
          ))}
        </div>

        {/* Redes sociales + Cita */}
        <div className="flex gap-5 items-center">
          {socialItems.map((item, index) => (
            <a key={index} href={item.href}>
              <img src={item.icon} className={`${item.size} hover:scale-110 transition`} alt={item.alt} />
            </a>
          ))}
          <a
            href="#"
            className="bg-secondary text-xs text-white px-3 py-4 font-medium tracking-widest hover:text-primary hover:bg-white transition"
          >
            ¡OBTENGA UNA CITA!
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="bg-white shadow-md text-emerald-900 py-5">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold">
            <img src="/images/alcondent-logo.png" className="size-12" alt="alcondent-logo" />
            <span className="ml-2">Alcondent</span>
          </Link>

          {/* Links con animación */}
          <div className="flex space-x-6 relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={item.href}
                  className="transition font-bold tracking-wider relative px-1 z-20"
                >
                  {item.label}
                </Link>

                {/* Animación underline con Framer Motion */}
                {hovered === item.href && (
                  <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 rounded-md bg-secondary/55 z-10"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
