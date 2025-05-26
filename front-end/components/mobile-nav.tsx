"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, User, MessageSquare, X, Home, Truck, Car, Music, Info } from "lucide-react"
import { SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { AccessibilityMenu } from "./accessibility-menu"

const navItems = [
  {
    title: "Início",
    href: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Transportes e Logística",
    href: "/transportes-logistica",
    icon: <Truck className="h-5 w-5" />,
  },
  {
    title: "Locação de Veículos",
    href: "/locacao-veiculos",
    icon: <Car className="h-5 w-5" />,
  },
  {
    title: "Produções e Eventos",
    href: "/producoes-eventos",
    icon: <Music className="h-5 w-5" />,
  },
  {
    title: "Sobre Nós",
    href: "/sobre-nos",
    icon: <Info className="h-5 w-5" />,
  },
]

export function MobileNav() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (title: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(title) ? prevOpenItems.filter((item) => item !== title) : [...prevOpenItems, title],
    )
  }

  return (
    <SheetContent side="left" className="w-[80%] max-w-[300px] p-0">
      <div className="flex flex-col h-full">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Grupo GLK Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <nav className="py-6">
            {navItems.map((item) => (
              <SheetClose key={item.href} asChild>
                <Link
                  href={item.href}
                  className="flex items-center w-full p-3 text-left border-b text-sm font-medium hover:bg-gray-100"
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t">
          <div className="p-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-left text-sm font-normal"
              onClick={() => {
                // Implement language change logic here
              }}
            >
              <Globe className="mr-2 h-4 w-4" />
              <span>Português (BR)</span>
            </Button>
          </div>

          <div className="grid grid-cols-3 border-t">
            <SheetClose asChild>
              <Link
                href="/carreiras"
                className="flex flex-col items-center justify-center gap-1 p-3 text-gray-600 hover:bg-gray-100"
              >
                <User className="h-4 w-4" />
                <span className="text-xs">Carreiras</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/contato"
                className="flex flex-col items-center justify-center gap-1 p-3 text-gray-600 hover:bg-gray-100"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">Contato</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <AccessibilityMenu isMobile={true} />
            </SheetClose>
          </div>
        </div>
      </div>
    </SheetContent>
  )
}

