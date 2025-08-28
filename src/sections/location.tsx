"use client";
import { MapIcon, Mail, PhoneCall, CalendarClock } from "lucide-react";
import { motion } from "framer-motion";

const ubication = {
  direccion: "Av Luis Espinal Rio Seco, El Alto",
  horarios: {
    semana: "Lunes a Viernes 08:00 - 18:00",
    sabado: "Sábado 08:00 - 12:00",
    domingo: "Domingo Cerrado",
  },
  email: "contacto@alcondent.com",
  telefono: "+591 12345678", // sin espacio extra para WhatsApp
  mapsUrl: "https://goo.gl/maps/7d28hG9yZ6fPp2XZ8", // link directo a Maps
};

function InfoItem({
  icon: Icon,
  children,
  href,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Wrapper
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={`flex items-center justify-center lg:justify-start gap-4 
        ${href ? "hover:text-primary cursor-pointer transition-colors" : ""}`}
      >
        <Icon className="text-secondary" />
        <div className="text-sm text-gray-600">{children}</div>
      </Wrapper>

      {/* Animación de línea */}
      <motion.hr
        className="w-1/2 border-t-2 border-secondary mt-2"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}

export function Location() {
  return (
    <section className="mx-auto max-w-6xl pl-10 pr-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Información de la clínica */}
        <div className="flex-1 flex flex-col justify-center gap-4 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-start text-primary">Ubicación</h2>

          <InfoItem icon={MapIcon} href={ubication.mapsUrl}>
            {ubication.direccion}
          </InfoItem>

          <InfoItem icon={CalendarClock}>
            <p>{ubication.horarios.semana}</p>
            <hr className="border-gray-300 my-1"/>
            <p>{ubication.horarios.sabado}</p>
            <hr className="border-gray-300 my-1"/>
            <p>{ubication.horarios.domingo}</p>
          </InfoItem>

          <InfoItem icon={Mail} href={`mailto:${ubication.email}`}>
            {ubication.email}
          </InfoItem>

          <InfoItem
            icon={PhoneCall}
            href={`https://wa.me/${ubication.telefono.replace(/[^0-9]/g, "")}`}
          >
            {ubication.telefono}
          </InfoItem>
        </div>

        {/* Mapa */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7651.441715146007!2d-68.21253674636203!3d-16.48966627293143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf29c74819bd%3A0x988793a9da273b2d!2sClinica%20Dental%20Alcondent!5e0!3m2!1sen!2sbo!4v1755575596968!5m2!1sen!2sbo"
            width="600"
            height="350"
            className="border-0 rounded-lg w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
