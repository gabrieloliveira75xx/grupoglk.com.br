"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    company: "Tech Solutions Ltda.",
    image: "/pessoa1.png",
    text: "O Grupo GLK superou todas as nossas expectativas. Seu serviço de logística é incomparável.",
  },
  {
    name: "Maria Santos",
    company: "Eventos Espetaculares S.A.",
    image: "/pessoa2.png",
    text: "A equipe de produção de eventos do Grupo GLK é simplesmente fantástica. Profissionalismo do início ao fim.",
  },
  {
    name: "Carlos Ferreira",
    company: "Transportadora Rápida",
    image: "/pessoa3.png",
    text: "A frota de veículos do Grupo GLK é moderna e bem mantida. Excelente serviço de locação.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover-lift">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
               <div className="relative w-1 h-1 rounded-full overflow-hidden mr-4"></div>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

