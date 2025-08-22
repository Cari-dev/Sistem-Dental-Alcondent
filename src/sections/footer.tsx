import { Facebook, Twitter, Instagram, Linkedin, ArrowBigRightDash, Activity } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    "Tratamientos",
    "Ubicación",
    "Servicios",
    "Contacto"
  ]

  const services = [
    "Ortodoncia",
    "Prótesis e Implantes",
    "Endodoncia",
    "Estética Dental",
  ]

  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">

          {/* Sobre Alcondent */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Alcondent</h3>
            <p className="text-white/80 mb-4 leading-relaxed text-sm">
            En Clínica  Alcondent nos especializamos en brindar atención odontológica integral a pacientes de todas las edades. Contamos con un equipo de profesionales altamente capacitados, tecnología de última generación y un ambiente seguro y acogedor.
            </p>
            <div className="flex space-x-3 mt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-30">
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="flex items-center gap-4 text-white/80 hover:text-secondary cursor-pointer transition-colors duration-300">
                    <ArrowBigRightDash className="w-4 h-4" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, idx) => (
                <li
                  key={idx}
                  className="flex max-w-max items-center gap-2 p-1 px-3 rounded hover:bg-secondary/20 cursor-pointer transition-colors duration-300"
                >
                  <Activity className="w-5 h-5 text-secondary" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 space-y-3 md:space-y-0">
            <div>
              Copyright © 2025 Clinica Alcondent - Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
