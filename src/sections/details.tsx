

export default function Details() {
  const details = [
    {
      icon: "/icons/proteccion.svg",
      title: "Atencion Integral",
      description: "Ofrecemos diagnósticos completos y tratamientos personalizados para cuidar tu sonrisa con la mejor tecnología.",
      link: "VIEW MORE"
    },
    {
      icon: "/icons/proteccion.svg",
      title: "Estetica Dental",
      description: "Blanqueamiento, carillas y ortodoncia estética para devolverte la confianza al sonreír.",
      link: "VIEW MORE"
    },
    {
      icon: "/icons/proteccion.svg",
      title: "Profesionales Expertos",
      description: "Nuestro equipo de especialistas garantiza un servicio seguro, confiable y de calidad para toda tu familia.",
      link: "VIEW MORE"
    }
  ]

  return (
    <section className=" bg-white max-w-6xl mx-auto -mt-10">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-3 ">
          {details.map((detail, index) => {
          
            return (
              <div
                key={index}
                className="text-center pt-10 pb-10 px-12 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 flex flex-col items-center gap-2"
              >
                {/* Icon */}
                <img src={detail.icon} alt={detail.title} className="size-20"/>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary ">
                  {detail.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600  leading-relaxed text-xs md:text-sm">
                  {detail.description}
                </p>

                {/* Link */}
                <button className="text-secondary font-medium hover:text-secondary transition-colors">
                  {detail.link}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
