"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface JobApplicationModalProps {
  jobTitle: string
}

export function JobApplicationModal({ jobTitle }: JobApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Ver Detalhes</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Candidatura para {jobTitle}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para se candidatar a esta vaga. Todos os campos são obrigatórios, exceto o
            LinkedIn.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
            <Input id="linkedin" type="url" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Por que você é ideal para esta vaga?</Label>
            <Textarea id="message" required />
          </div>
          <Button type="submit" className="w-full">
            Enviar Candidatura
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

