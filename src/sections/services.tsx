export default function MedicalServices() {
  const services = [
  {
    image: "images/odontopediatria.webp", // reemplaza por imagen de odontopediatría
    title: "Odontopediatría",
    description: "Atención especializada y amigable para el cuidado dental de niños y adolescentes.",
    link: "Ver mas"
  },
  {
    image: "images/curaciones.webp", // reemplaza por imagen de odontología general
    title: "Odontología General",
    description: "Limpieza, prevención y tratamientos básicos para mantener tu salud bucal en óptimas condiciones.",
    link: "Ver mas"
  },
  {
    image: "images/ortodoncia.webp", // reemplaza por imagen de ortodoncia
    title: "Ortodoncia",
    description: "Corrección de la posición dental con tratamientos modernos y estéticos para mejorar tu sonrisa.",
    link: "Ver mas"
  },
  {
    image: "images/implantes.webp", // reemplaza por imagen de prostodoncia e implantes
    title: "Implantes",
    description: "Restauración funcional y estética mediante prótesis dentales e implantes de última generación.",
    link: "Ver mas"
  },
  {
    image: "images/endodoncia.webp", // reemplaza por imagen de endodoncia
    title: "Endodoncia",
    description: "Tratamientos de conducto avanzados para salvar y conservar piezas dentales dañadas.",
    link: "Ver mas"
  },
  {
    image: "images/blanqueamiento.webp", // reemplaza por imagen de estética dental
    title: "Estética Dental",
    description: "Blanqueamiento, carillas y otros procedimientos para mejorar la apariencia de tu sonrisa.",
    link: "Ver mas"
  }
];


  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-7xl ">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-400 font-medium mb-4 tracking-wide uppercase">
           NUESTROS SERVICIOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Tratamientos Odontologicos 
          </h2>
         
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg h-60 overflow-hidden flex hover:shadow-xl transition-shadow duration-300">
             

              {/* Content */}
              <div className="pl-6 py-6 w-2/3">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-2 text-xs md:text-sm text-balance leading-relaxed ">
                  {service.description}
                </p>
                <button className="text-secondary font-medium transition-colors cursor-pointer">
                  {service.link}
                </button>
              </div>
               {/* Image */}
              <div className="h-full w-2/3 overflow-hidden" style={{clipPath:"circle(80% at 100% 51%)"}} >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
