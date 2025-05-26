"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Seu nome completo"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="seu@email.com"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(00) 00000-0000"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Select onValueChange={handleSubjectChange} value={formData.subject}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o assunto" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Informações Gerais</SelectItem>
              <SelectItem value="support">Suporte Técnico</SelectItem>
              <SelectItem value="sales">Vendas</SelectItem>
              <SelectItem value="partnership">Parcerias</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Sua mensagem aqui"
            rows={4}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0056b3] to-[#007bff] hover:from-[#004494] hover:to-[#0056b3] transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar Mensagem"
          )}
        </Button>
      </form>
    </div>
  )
}

