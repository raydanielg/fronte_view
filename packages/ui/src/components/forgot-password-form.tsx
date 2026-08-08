"use client"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { useState } from "react"
import { Spinner } from "@workspace/ui/components/spinner"

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <a href="/auth" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
                Back
              </a>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Forgot password?</h1>
                <p className="text-sm text-balance text-muted-foreground">
                  Enter your email and we&apos;ll send you a link to reset your password
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <HugeiconsIcon icon={Mail01Icon} className="size-4 text-muted-foreground" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="email"
                    type="email"
                    placeholder="juma@gmail.com"
                    required
                  />
                </InputGroup>
                <FieldDescription>
                  We&apos;ll send a reset link to this email address.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner className="size-4" />
                      Sending...
                    </>
                  ) : (
                    "Send reset link"
                  )}
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Remember your password?{" "}
                <a href="/auth">Back to login</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/auth-image.jpg"
              alt="Student Academic Records System"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-3 p-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md ring-1 ring-white/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="m17 14 3 3v5h-4v-3h-4v3H8v-5l3-3" />
                    <path d="M12 3 4 9l5 4 3-2 3 2 5-4-8-6z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">
                  Student Academic Records System
                </span>
              </div>
              <blockquote className="text-lg font-medium text-white/90">
                "Lost access? We'll help you get back on track."
              </blockquote>
              <p className="text-sm text-white/60">
                Reset your password and regain access to your records.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <a href="/legal/terms">Terms of Service</a> and <a href="/legal/privacy">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
