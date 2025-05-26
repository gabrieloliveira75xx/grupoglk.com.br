'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Music, Users, Tv, ExternalLink } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProducoesEventos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Produções e Eventos</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
            <Image
              src="/producoes-eventos/foto1.png"
              alt="Equipe profissional do Grupo GLK"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
            />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-6 w-6 text-[#0056b3]" />
                  Produção Técnica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oferecemos soluções completas de produção técnica para garantir o sucesso do seu evento.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Sonorização profissional</li>
                  <li>Iluminação cênica</li>
                  <li>Estruturas de palco</li>
                  <li>Equipamentos audiovisuais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-[#0056b3]" />
                  Gestão de Convidados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Cuidamos de todo o processo de gestão de convidados para tornar seu evento memorável.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Sistema de credenciamento</li>
                  <li>Controle de acesso</li>
                  <li>Recepção e acolhimento</li>
                  <li>Gerenciamento de lista de convidados</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tv className="h-6 w-6 text-[#0056b3]" />
                  Locação de Equipamentos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Disponibilizamos uma ampla gama de equipamentos para atender às necessidades do seu evento.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Projetores e telões</li>
                  <li>Sistemas de tradução simultânea</li>
                  <li>Mobiliário para eventos</li>
                  <li>Geradores e estruturas temporárias</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Entre em Contato</CardTitle>
                <CardDescription>
                  Tem alguma dúvida sobre nossos serviços de produções e eventos? Preencha o formulário abaixo e
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
            onClick={() => window.open("https://www.eventosglk.com", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Ir para o site de produções e eventos
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

