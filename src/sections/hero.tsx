"use client"; 

import { Button } from "../components/button"

export default function Hero() {
  return (
    <section
      className="relative min-h-[650px] flex items-center bg-cover bg-center object-cover"
      
    >
        <video
        className="absolute inset-0 w-full h-full object-cover -z-20 blur-xs"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
 
      >
        {/* Prefer modern codecs first */}
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
        {/* Fallback text for very old browsers */}
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block bg-secondary text-white px-4 py-2 rounded mb-6 text-sm font-medium">
          Tu salud bucal en manos de expertos
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
          Transformamos sonrisas  
            <br />
          mejoramos vidas.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
          Tu sonrisa es tu mejor accesorio. En Alcondent, te ofrecemos una experiencia dental de primera clase, con tratamientos personalizados y tecnología de punta.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
      <Button label="¡OBTENGA UNA CITA!" variant="outline-primary" onClick={() => alert("color!")}/>
          <Button label="MAS DETALLES" variant="color-secondary" onClick={() => alert("Outline!")}/>
    
          </div>
        </div>
      </div>
    </section>
  )
}