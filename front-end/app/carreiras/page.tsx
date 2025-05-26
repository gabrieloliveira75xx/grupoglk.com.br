import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Lightbulb, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { JobApplicationModal } from "@/components/job-application-modal"

export default function Carreiras() {
  const jobOpenings = [
    { title: "Gerente de Logística", department: "Logística", location: "São Paulo, SP" },
    { title: "Motorista de Caminhão", department: "Transportes", location: "Rio de Janeiro, RJ" },
    { title: "Coordenador de Eventos", department: "Eventos", location: "Belo Horizonte, MG" },
    { title: "Analista de Recursos Humanos", department: "RH", location: "São Paulo, SP" },
  ]

  const benefits = [
    "Plano de saúde e odontológico",
    "Vale-refeição e vale-transporte",
    "Seguro de vida",
    "Programa de participação nos resultados",
    "Oportunidades de crescimento e desenvolvimento",
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Carreiras no Grupo GLK</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card> 
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-6 w-6 text-[#0056b3] mr-2" />
                  Oportunidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore nossas vagas em diversas áreas e faça parte de uma equipe inovadora e dinâmica.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-[#0056b3] mr-2" />
                  Cultura
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Valorizamos a diversidade, o trabalho em equipe e o desenvolvimento contínuo de nossos colaboradores.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-[#0056b3] mr-2" />
                  Inovação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Buscamos constantemente soluções criativas para os desafios do mercado de logística e eventos.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Por que trabalhar com a gente?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Nos areditamos que nosso sucesso está diretamente ligado ao talento e dedicação de nossa
                  equipe. Oferecemos um ambiente de trabalho estimulante, onde você pode crescer profissionalmente e
                  fazer a diferença.
                </p>
                <p className="text-gray-600 mb-4">
                  Valorizamos a inovação, o trabalho em equipe e o compromisso com a excelência. Se você está em busca
                  de desafios e oportunidades de desenvolvimento, somos o lugar certo para você.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[#0056b3] mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Vagas em Aberto</h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">
                    {job.department} | {job.location}
                  </p>
                </div>
                <JobApplicationModal jobTitle={job.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

