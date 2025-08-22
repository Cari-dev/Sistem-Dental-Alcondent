/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from "framer-motion"

type InfoItem = {
  icon: string
  title: string
  subtitle: string
}

const infoItems: InfoItem[] = [
  {
    icon: "/icons/proteccion.svg",
    title: "Protección Dental",
    subtitle: "Cuidado y prevención",
  },
  {
    icon: "/icons/estetica.svg",
    title: "Estética Dental",
    subtitle: "Sonrisas brillantes",
  },
  {
    icon: "/icons/endodoncia.svg",
    title: "Restauración Dental",
    subtitle: "Tratamientos de calidad",
  },
]

export function Toolbar() {
  return (
    <section className="relative w-full py-5 mx-auto font-sans bg-gray-100 -z-10">
      {/* Banner inferior */}
      <motion.article initial={{ opacity: 0 ,x: 30}} whileInView={{ opacity: 1 ,x: 0}} transition={{ duration: 0.5 }} className="absolute bottom-0 right-0 px-4 py-2 bg-secondary w-1/4">
        <div className="flex items-center gap-2 text-sm text-white">
          <img src="/icons/whatsapp.svg" alt="icon-whatsapp" className="size-7 fill-white"/>
          <span>Llamada al 123456789</span>
        </div>
      </motion.article>

      {/* Lista de items */}
      <section className="flex items-center gap-20 max-w-6xl px-4 mx-auto">
        {infoItems.map((item, index) => (
          <motion.article
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3">
              <img src={item.icon} alt={item.title} className="size-10" />
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-bold text-primary uppercase">
                {item.title}
              </span>
              <span className="text-gray-600 text-xs">{item.subtitle}</span>
            </div>
          </motion.article>
        ))}
      </section>
    </section>
  )
}
