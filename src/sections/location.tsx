import { MapIcon, Mail, PhoneCall, CalendarClock } from "lucide-react";

const ubication = [
  {
    image: "https://ext.same-assets.com/1892571673/6677889900.jpeg",
    direccion: "Av Luis Espinal Rio Seco, El Alto",
    horarios_semana: "Lunes a Viernes 08:00 - 18:00",
    horarios_sabado: "Sábado 08:00 - 12:00",
    horarios_domingo: "Domingo Cerrado",
    email: "contacto@alcondent.com",
    telefono: "+591 123 45678"
  }
];

export function Location() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Información de la clínica */}
        <div className="flex-1 flex flex-col justify-center gap-4 text-center lg:text-left">
      <h2 className="text-3xl font-bold text-start ">Ubicación</h2>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <MapIcon className="text-primary" />
            <p className="text-lg font-semibold">{ubication[0].direccion}</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <CalendarClock className="text-primary self-start" />
            <div className="text-sm text-gray-600">
              <p>{ubication[0].horarios_semana}</p>
              <p>{ubication[0].horarios_sabado}</p>
              <p>{ubication[0].horarios_domingo}</p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Mail className="text-primary" />
            <p className="text-sm text-gray-600">{ubication[0].email}</p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <PhoneCall className="text-primary" />
            <p className="text-sm text-gray-600">{ubication[0].telefono}</p>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7651.441715146007!2d-68.21253674636203!3d-16.48966627293143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf29c74819bd%3A0x988793a9da273b2d!2sClinica%20Dental%20Alcondent!5e0!3m2!1sen!2sbo!4v1755575596968!5m2!1sen!2sbo"
            width="600px"
            height="450"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
