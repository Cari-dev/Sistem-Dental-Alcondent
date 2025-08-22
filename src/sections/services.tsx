"use client"
import { Plus } from "lucide-react"
import { motion } from "framer-motion"

/* eslint-disable @next/next/no-img-element */
export default function MedicalServices() {
  const services = [
    {
      image: "images/odontopediatria.webp",
      title: "Odontopediatría",
      description: "Atención especializada y amigable para el cuidado dental de niños y adolescentes.",
      link: "Ver más"
    },
    {
      image: "images/curaciones.webp",
      title: "Odontología General",
      description: "Limpieza, prevención y tratamientos básicos para mantener tu salud bucal en óptimas condiciones.",
      link: "Ver más"
    },
    {
      image: "images/ortodoncia.webp",
      title: "Ortodoncia",
      description: "Corrección de la posición dental con tratamientos modernos y estéticos para mejorar tu sonrisa.",
      link: "Ver más"
    },
    {
      image: "images/implantes.webp",
      title: "Implantes",
      description: "Restauración funcional y estética mediante prótesis dentales e implantes de última generación.",
      link: "Ver más"
    },
    {
      image: "images/endodoncia.webp",
      title: "Endodoncia",
      description: "Tratamientos de conducto avanzados para salvar y conservar piezas dentales dañadas.",
      link: "Ver más"
    },
    {
      image: "images/blanqueamiento.webp",
      title: "Estética Dental",
      description: "Blanqueamiento, carillas y otros procedimientos para mejorar la apariencia de tu sonrisa.",
      link: "Ver más"
    }
  ];

  // Variantes de animación
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-6xl ">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 font-medium mb-4 tracking-wide uppercase">
            NUESTROS SERVICIOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Tratamientos Odontológicos
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg h-60 overflow-hidden flex hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // se activa al 20% de visibilidad
              transition={{ delay: index * 0.15 }} // efecto "stagger"
            >
              {/* Content */}
              <div className="pl-6 py-6 w-2/3">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2 text-xs md:text-sm text-balance leading-relaxed ">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-secondary font-medium transition-colors cursor-pointer text-xs bg-secondary/10 hover:bg-secondary/20 px-4 py-2 rounded border border-secondary">
                  {service.link} <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Image */}
              <div className="h-full w-full overflow-hidden" style={{ clipPath: "circle(100% at 100% 50%)" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
