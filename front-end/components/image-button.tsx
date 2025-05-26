"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageButtonProps {
  href: string
  imageSrc: string
  className?: string
}

export function ImageButton({ href, imageSrc, className }: ImageButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative block w-full h-40 overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105",
        className,
      )}
    >
      <Image src={imageSrc || "/placeholder.svg"} alt="" layout="fill" objectFit="cover" className="rounded-lg" />
    </Link>
  )
}

