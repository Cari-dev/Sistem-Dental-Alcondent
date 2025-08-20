/* eslint-disable @next/next/no-img-element */
type InfoItem = {
  icon: string
  title: string
  subtitle: string
}

const infoItems: InfoItem[] = [
  {
    icon: "/icons/proteccion.svg",
    title: "Clínica Número 1",
    subtitle: "En La Paz, Bolivia",
  },
  {
    icon: "/icons/estetica.svg",
    title: "Clínica Número 1",
    subtitle: "En La Paz, Bolivia",
  },
  {
    icon: "/icons/reparacion.svg",
    title: "Clínica Número 1",
    subtitle: "En La Paz, Bolivia",
  },
]

export function Toolbar() {
  return (
    <section className="relative w-full py-7 mx-auto font-sans bg-gray-100 -z-10">
      {/* Banner inferior */}
      <article className="absolute bottom-0 right-0 px-4 py-2 bg-secondary w-1/4">
        <div className="flex items-center gap-2 text-sm text-white ">
          <img src="/icons/phone.svg" alt="icon-phone" className="size-5 fill-white" />
          <span>Llamada al 123456789</span>
        </div>
      </article>

      {/* Lista de items */}
      <section className="flex items-center gap-20 max-w-6xl px-4 mx-auto">
        {infoItems.map((item, index) => (
          <article
            key={index}
            className="flex items-center gap-2"
          >
            <div className="p-3">
              <img src={item.icon} alt={item.title} className="size-10" />
            </div>
            <div className="flex flex-col text-xs">
              <span>{item.title}</span>
              <span>{item.subtitle}</span>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
