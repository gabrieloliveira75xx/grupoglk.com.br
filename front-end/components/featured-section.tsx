"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function FeaturedSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/homepage/equip1.jpg"
              alt="Equipe profissional do Grupo GLK"
              width={2400}
              height={1600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Por que Escolher o Grupo GLK?</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span>
                  <strong>Experiência:</strong> Anos de atuação consolidada no mercado.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span>
                  <strong>Inovação:</strong> Utilizamos tecnologia de ponta para otimizar processos.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span>
                  <strong>Compromisso:</strong> Foco total na satisfação e nos resultados de nossos clientes.
                </span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

