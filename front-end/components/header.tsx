"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, User, MessageSquare, Globe, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { AccessibilityMenu } from "./accessibility-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top utility navigation */}
      <div className="hidden lg:block border-b">
        <div className="container">
          <div className="flex items-center justify-end py-2 space-x-4">
            <Link
              href="/carreiras"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <User className="w-4 h-4" />
              <span>CARREIRAS</span>
            </Link>
            <Link
              href="/contato"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CONTATO</span>
            </Link>
            <AccessibilityMenu />
            <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>PT_BR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="GRUPO GLK" width={120} height={40} className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="text-primary hover:text-primary/80 transition-colors flex items-center text-sm font-medium"
              >
                <Home className="w-4 h-4 mr-1" />
                <span>INÍCIO</span>
              </Link>
              <Link
                href="/transportes-logistica"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span>TRANSPORTES E LOGÍSTICA</span>
              </Link>
              <Link
                href="/locacao-veiculos"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span>LOCAÇÃO DE VEÍCULOS</span>
              </Link>
              <Link
                href="/producoes-eventos"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span>PRODUÇÕES E EVENTOS</span>
              </Link>
              <Link
                href="/sobre-nos"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <span>SOBRE NÓS</span>
              </Link>
            </nav>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <MobileNav />
          </Sheet>
        </div>
      </div>
    </header>
  )
}

