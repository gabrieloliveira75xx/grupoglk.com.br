"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-100">
      {/* Social Media */}
      <div className="container mx-auto px-4 py-8 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://twitter.com/GrupoGLK"
            className="p-2 rounded-full hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full hover:bg-[#0056b3] hover:text-white transition-colors"
          >
            <Youtube size={20} />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Contato</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-[#0056b3]" />
            <a href="mailto:contato@grupoglk.com" className="text-gray-600 hover:text-[#0056b3]">
              contato@grupoglk.com
            </a>
          </li>
          <li className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-[#0056b3]" />
            <a href="tel:+55(934900145" className="text-gray-600 hover:text-[#0056b3]">
              +55 (19) 3490-0145
            </a>
          </li>
          
        </ul>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/transportes-logistica" className="text-gray-600 hover:text-[#0056b3]">
                  Transportes e Logística
                </Link>
              </li>
              <li>
                <Link href="/locacao-veiculos" className="text-gray-600 hover:text-[#0056b3]">
                  Locação de Veículos
                </Link>
              </li>
              <li>
                <Link href="/producoes-eventos" className="text-gray-600 hover:text-[#0056b3]">
                  Produções e Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Sobre o Grupo GLK</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nos" className="text-gray-600 hover:text-[#0056b3]">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-600 hover:text-[#0056b3]">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/suporte#fale-conosco" className="text-gray-600 hover:text-[#0056b3]">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/suporte#privacidade" className="text-gray-600 hover:text-[#0056b3]">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 mb-4">Fique por dentro das novidades</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0056b3]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0056b3] text-white rounded-r-md hover:bg-[#003d82] transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <Link href="/termos" className="hover:text-[#0056b3]">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-[#0056b3]">
                Privacidade
              </Link>
              <Link href="/cookies" className="hover:text-[#0056b3]">
                Política de Cookies
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Grupo GLK. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-[#0056b3] text-white rounded-full shadow-lg hover:bg-[#003d82] transition-colors"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Voltar ao topo</span>
      </Button>
    </footer>
  )
}

