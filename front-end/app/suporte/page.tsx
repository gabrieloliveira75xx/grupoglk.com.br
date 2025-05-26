import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Suporte() {
  const faqs = [
    {
      question: "Como posso solicitar um orçamento para serviços de logística?",
      answer:
        "Para solicitar um orçamento, você pode preencher o formulário de contato em nossa página 'Fale Conosco' ou entrar em contato diretamente com nossa equipe de vendas através do telefone ou e-mail fornecidos no site.",
    },
    {
      question: "Quais são as opções de veículos disponíveis para locação?",
      answer:
        "Oferecemos uma ampla gama de veículos para locação, incluindo carros de passeio, utilitários, vans e caminhões. Para ver as opções específicas e disponibilidade, visite nossa página de 'Locação de Veículos' ou entre em contato com nossa equipe.",
    },
    {
      question: "Como funciona o processo de produção de eventos?",
      answer:
        "Nosso processo de produção de eventos começa com uma consulta inicial para entender suas necessidades. Em seguida, desenvolvemos um plano detalhado, cuidamos de todos os aspectos logísticos e técnicos, e garantimos a execução perfeita do evento no dia.",
    },
    {
      question: "Vocês oferecem serviços em todo o Brasil?",
      answer:
        "Sim, o Grupo GLK atua em todo o território nacional. Temos bases operacionais em várias cidades e podemos atender a projetos em qualquer região do Brasil.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Suporte</h1>
          <Tabs defaultValue="fale-conosco" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="fale-conosco">Fale Conosco</TabsTrigger>
              <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
              <TabsTrigger value="privacidade">Política de Privacidade</TabsTrigger>
            </TabsList>

            <TabsContent value="fale-conosco">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Entre em Contato</CardTitle>
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
                        <span>+55 (11) 1234-5678</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-6 w-6 text-[#0056b3] mr-2" />
                        <span>Av. Paulista, 1000 - São Paulo, SP</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                  <CardDescription>
                    Encontre respostas para as perguntas mais comuns sobre nossos serviços.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacidade">
              <Card>
                <CardHeader>
                  <CardTitle>Política de Privacidade</CardTitle>
                  <CardDescription>Saiba como tratamos e protegemos suas informações pessoais.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">1. Coleta de Informações</h3>
                    <p>
                      Coletamos informações pessoais quando você utiliza nossos serviços, preenche formulários em nosso
                      site ou interage conosco de outras formas. Essas informações podem incluir seu nome, endereço de
                      e-mail, número de telefone e outras informações relevantes para a prestação de nossos serviços.
                    </p>

                    <h3 className="text-lg font-semibold">2. Uso das Informações</h3>
                    <p>
                      Utilizamos suas informações pessoais para fornecer e melhorar nossos serviços, processar
                      transações, enviar comunicações relevantes e cumprir obrigações legais. Não compartilhamos suas
                      informações com terceiros, exceto quando necessário para a prestação de serviços ou conforme
                      exigido por lei.
                    </p>

                    <h3 className="text-lg font-semibold">3. Proteção de Dados</h3>
                    <p>
                      Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações
                      pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                    </p>

                    <h3 className="text-lg font-semibold">4. Seus Direitos</h3>
                    <p>
                      Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento.
                      Para exercer esses direitos ou fazer perguntas sobre nossa política de privacidade, entre em
                      contato conosco através dos canais fornecidos na seção "Fale Conosco".
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </main>
  )
}

