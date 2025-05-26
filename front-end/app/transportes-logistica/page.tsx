'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TransportesLogistica() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Transportes e Logística</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="/transportes-logistica/caminhao.jpg"
                alt="Caminhão Mercedes"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-[#0056b3]" />
                  Transporte de Cargas para o Setor Sucroenergético
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oferecemos soluções logísticas especializadas para o setor sucroenergético, com frota de caminhões adequados para transporte de carga pesada e outras necessidades operacionais específicas.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Transporte especializado para indústrias sucroalcooleiras</li>  
                  <li>Suporte contínuo e soluções personalizadas para as demandas de sua operação</li>
                  <li>Monitoramento e gestão logística em tempo real</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Entre em Contato</CardTitle>
                <CardDescription>
                  Se você representa uma usina ou empresa do setor sucroenergético e precisa de suporte logístico ou caminhões para suas operações, entre em contato conosco. Preencha o formulário abaixo e nossa equipe entrará em contato para oferecer soluções personalizadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
