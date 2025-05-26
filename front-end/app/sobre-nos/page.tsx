'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { History, Users, Target } from "lucide-react"
import Image from "next/image";
import { ImageButton } from "@/components/image-button"

export default function SobreNos() {
  const sections = [
    { 
      Icon: History, 
      title: "Nossa História", 
      description: [
        "O Grupo GLK nasceu da visão empreendedora de seus fundadores, que identificaram a necessidade de soluções integradas em logística, mobilidade e eventos no mercado brasileiro.",
        "Desde nossa fundação, temos crescido consistentemente, expandindo nossa atuação e conquistando a confiança de clientes em todo o país."
      ],
      image: "/sobre-nos/foto1.avif"
    },
    {
      Icon: Users,
      title: "Nossa Equipe",
      description: [
        "Contamos com uma equipe altamente qualificada e comprometida, formada por profissionais experientes em suas áreas de atuação.",
        "Investimos constantemente no desenvolvimento e bem-estar de nossos colaboradores, pois acreditamos que são eles que fazem a diferença em nossos serviços."
      ],
      image: "/sobre-nos/foto2.avif"
    },
    {
      Icon: Target,
      title: "Missão e Valores",
      description: [
        "Nossa missão é oferecer soluções integradas em logística, mobilidade e eventos, superando as expectativas de nossos clientes e contribuindo para o desenvolvimento do país."
      ],
      list: [
        "Excelência em serviços",
        "Inovação constante",
        "Responsabilidade socioambiental",
        "Valorização das pessoas"
      ],
      image: "/sobre-nos/foto3.jpg"
    }
  ];

  return (
    <main>
      <Header />
      <section className="py-20 pt-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Sobre Nós</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map(({ Icon, title, description, list, image }, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                <Icon className="h-12 w-12 text-[#0056b3] mb-4" />
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <div className="flex-grow">
                  {description.map((text, i) => (
                    <p key={i} className="text-gray-600 mb-4">{text}</p>
                  ))}
                  {list && (
                    <ul className="list-disc list-inside text-gray-600 mb-6">
                      {list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative w-full h-48 mt-auto">
                  <Image
                    src={image}
                    alt={`Imagem ilustrativa sobre ${title}`}
                    fill
                    quality={50}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
