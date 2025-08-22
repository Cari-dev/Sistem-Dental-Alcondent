/* eslint-disable @next/next/no-img-element */
"use client";
import * as React from "react"
import { motion } from "framer-motion"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/button"
import { Input } from "@/components/input"

type FormValues = {
  fullName: string
  email: string
  phone: string
  department: string
  date: string
  time: string
}

// Lista dinámica de servicios
const departments = [
  "Odontología General",
  "Ortodoncia",
  "Estética Dental",
  "Endodoncia",
  "Prostodoncia e Implantes",
  "Odontopediatría"
]

export function AppointmentSection() {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    alert("¡Cita enviada! Revisar consola para datos.")
  }

  const today = new Date().toISOString().split("T")[0] // Fecha mínima

  return (
    <>
      {/* Call to Action */}
      <section className="py-20  text-white text-center relative bg-cover bg-center object-cover" style={{backgroundImage: "url('/images/dentist.webp')", backgroundAttachment: "fixed"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 ">
          <h3 className="text-lg mb-4">¿Necesitas una cita con un especialista?</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Agenda tu cita de forma rápida y sencilla
          </h2>
          <p className="text-xl mb-8">
            Llámanos al: <span className="font-bold">(0080) 123-453-789</span>
          </p>
          <Button
            label="AGENDAR CITA"
            variant="outline-primary"
            onClick={() => alert("Cita agendada")}
          />
        </div>
      </section>

      {/* Formulario de Cita */}
      <section className="py-20  bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}

                    >
              <img
                src="/images/booking.webp"
                alt="Make an appointment"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{amount: 0.1, once: true}}
            >
              <h2 className="text-3xl font-bold text-[#103e4c] mb-6">
                Agendar Cita
              </h2>
              <p className="text-gray-600 mb-8">
                Selecciona tu especialista y horario, completa tus datos y envía tu solicitud.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre y Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Nombre completo"
                    {...register("fullName", { required: true })}
                  />
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i
                    })}
                  />
                </div>

                {/* Teléfono y Departamento */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    {...register("phone", { required: true, maxLength: 9 })}
                  />
                  <select
                    {...register("department", { required: true })}
                    className="w-full h-12 pl-3 pr-4 border text-gray-400  border-secondary rounded-md focus:border-secondary focus:outline-none bg-white"
                  >
                    <option value="">Selecciona Servicio</option>
                    {departments.map((dep, idx) => (
                      <option key={idx} value={dep}>
                        {dep}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fecha y Hora */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="date"
                    min={today}
                    {...register("date", { required: true })}
                  />
                  <Input
                    type="time"
                    {...register("time", { required: true })}
                  />
                </div>

                {/* Submit */}
                <Button label="ENVIAR CITA" variant="color-primary" onClick={() => alert("Cita enviada")}/>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
