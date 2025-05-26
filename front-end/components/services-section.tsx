"use client"

import { Truck, Car, Music } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: <Truck className="h-12 w-12 text-primary" />,
    title: "Transportes e Logística",
    description: "Soluções eficientes para o transporte de cargas e gestão logística.",
    video: "/homepage/transportes-logistica.mp4", // Vídeo em MP4 no diretório raiz
    href: "/transportes-logistica",
  },
  {
    icon: <Car className="h-12 w-12 text-primary" />,
    title: "Locação de Veículos",
    description: "Frota diversificada e moderna para atender diferentes necessidades de mobilidade.",
    video: "/homepage/locacao-veiculos.mp4", // Vídeo em MP4 no diretório raiz
    href: "/locacao-veiculos",
  },
  {
    icon: <Music className="h-12 w-12 text-primary" />,
    title: "Produções e Eventos",
    description: "Planejamento e execução de eventos de forma profissional e memorável.",
    video: "/homepage/producoes-eventos.mp4", // Vídeo em MP4 no diretório raiz
    href: "/producoes-eventos",
  },
]

export function ServicesSection() {
  return (
    <section id="nossos-servicos" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
              <Card className="h-full hover-lift">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-center text-muted-foreground">{service.description}</p>
                  <video
                    className="rounded-lg object-cover w-full h-48"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={service.video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
