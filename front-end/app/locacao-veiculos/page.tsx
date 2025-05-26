'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Car, Truck, ExternalLink } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LocacaoVeiculos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Locação de Veículos</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-6 w-6 text-[#0056b3]" />
                  Locação de veículos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oferecemos uma ampla gama de veículos de passeio para atender às suas necessidades de mobilidade, seja
                  para uso pessoal ou corporativo.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Modelos compactos a executivos</li>
                  <li>Opções com e sem motorista</li>
                  <li>Locações de curta e longa duração</li>
                  <li>Manutenção e seguro inclusos</li>
                </ul>
              </CardContent>
            </Card>
            <div>
            <video
  src="locacao-veiculos/locar1.mp4"
  width={900}
  height={600}
  className="rounded-lg shadow-lg"
  autoPlay
  loop
  muted
/>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
            <Image
              src="/locacao-veiculos/entrega-de-chave.png"
              alt="entrega-de-chave"
              width={900}
              height={600}
              className="rounded-lg shadow-lg"
            />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-[#0056b3]" />
                  Venda de veículos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Temos uma variedade de veículos usados à venda, ideais para empresas e pessoas que necessitam de transporte de carga, mudanças ou outras necessidades profissionais.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Vans e furgões usados</li>
                  <li>Picapes e caminhões leves à venda</li>
                  <li>Adaptações para necessidades específicas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Entre em Contato</CardTitle>
                <CardDescription>
                  Tem alguma dúvida sobre nossos serviços de locação ou venda de veículos? Preencha o formulário abaixo e
                  entraremos em contato com você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          <Button
            className="w-full md:w-auto mt-8 bg-[#0056b3] hover:bg-[#004494] text-white"
            onClick={() => window.open("https://www.alugueumcarro.com", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ir para o site de aluguel de veículos
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

