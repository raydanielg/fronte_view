"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"

export function AuthBackButton() {
  const pathname = usePathname()

  if (pathname === "/auth") return null

  return (
    <Link
      href="/auth"
      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
      Back
    </Link>
  )
}
