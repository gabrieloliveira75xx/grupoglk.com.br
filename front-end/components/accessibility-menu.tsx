"use client"

import { useState, useEffect } from "react"
import { Plus, Minus, Moon, Eye, ChevronLeft, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface AccessibilityMenuProps {
  isMobile?: boolean
}

export function AccessibilityMenu({ isMobile = false }: AccessibilityMenuProps) {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  // Update font size
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  // Update contrast
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("contrast-mode")
    } else {
      document.documentElement.classList.remove("contrast-mode")
    }
  }, [highContrast])

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 10, 130))
  }

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 10, 90))
  }

  const toggleContrast = () => {
    setHighContrast((prev) => !prev)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {isMobile ? (
          <button className="flex flex-col items-center justify-center gap-1 p-3 text-gray-600 hover:bg-gray-100 w-full">
            <Eye className="h-4 w-4" />
            <span className="text-xs">Acessibilidade</span>
          </button>
        ) : (
          <Button
            variant="ghost"
            className="p-0 text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-1"
          >
            <Eye className="w-4 h-4" />
            <span>ACESSIBILIDADE</span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side={isMobile ? "left" : "right"} className="w-[80%] sm:w-[385px] max-w-[385px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Acessibilidade</h2>

        </div>
        {isMobile && (
          <button
            className="mb-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Voltar
          </button>
        )}
        <div className="space-y-6 py-4">
          <button
            onClick={increaseFontSize}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div>
              <h3 className="text-base font-medium">Aumentar Textos</h3>
              <p className="text-sm text-gray-500">Aumenta o tamanho das fontes</p>
            </div>
            <Plus className="h-5 w-5 text-[#0464CB]" />
          </button>

          <button
            onClick={decreaseFontSize}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div>
              <h3 className="text-base font-medium">Diminuir Textos</h3>
              <p className="text-sm text-gray-500">Diminui o tamanho das fontes</p>
            </div>
            <Minus className="h-5 w-5 text-[#0464CB]" />
          </button>

          <button
            onClick={toggleContrast}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div>
              <h3 className="text-base font-medium">Contraste</h3>
              <p className="text-sm text-gray-500">Contraste para daltônicos</p>
            </div>
            <div className="flex items-center">
              <span className={`mr-2 text-sm ${highContrast ? "text-[#0464CB]" : "text-gray-500"}`}>
                {highContrast ? "Ativado" : "Desativado"}
              </span>
              <Moon className="h-5 w-5 text-[#0464CB]" />
            </div>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}