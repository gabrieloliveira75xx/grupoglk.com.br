import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contato() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Entre em Contato</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fale Conosco</CardTitle>
                <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve.</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>Outras formas de entrar em contato conosco.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-[#0056b3] mr-2" />
                    <span>contato@grupoglk.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-[#0056b3] mr-2" />
                    <span>+55 (19) 3490-0145</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-[#0056b3] mr-2" />
                    <span>Av. Paulista, 1000 - São Paulo, SP</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

