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
import {
  Mail01Icon,
  LockPasswordIcon,
  ViewIcon,
  ViewOffIcon,
  ArrowLeft01Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons"
import { useState } from "react"
import { Spinner } from "@workspace/ui/components/spinner"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-sm text-balance text-muted-foreground">
                  Enter your email below to create your account
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
                  We&apos;ll use this to contact you. We will not share your email with anyone else.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <HugeiconsIcon icon={SmartPhone01Icon} className="size-4 text-muted-foreground" />
                  </InputGroupAddon>
                  <InputGroupInput
                    id="phone"
                    type="tel"
                    placeholder="+255 712 345 678"
                    required
                  />
                </InputGroup>
                <FieldDescription>
                  Enter your phone number with country code.
                </FieldDescription>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <HugeiconsIcon icon={LockPasswordIcon} className="size-4 text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        required
                      />
                      <InputGroupAddon align="inline-end">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <HugeiconsIcon
                            icon={showPassword ? ViewOffIcon : ViewIcon}
                            className="size-4"
                          />
                        </button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <HugeiconsIcon icon={LockPasswordIcon} className="size-4 text-muted-foreground" />
                      </InputGroupAddon>
                      <InputGroupInput
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        required
                      />
                      <InputGroupAddon align="inline-end">
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <HugeiconsIcon
                            icon={showConfirmPassword ? ViewOffIcon : ViewIcon}
                            className="size-4"
                          />
                        </button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner className="size-4" />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Already have an account? <a href="/auth">Sign in</a>
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
                "Every student deserves a clear path to success."
              </blockquote>
              <p className="text-sm text-white/60">
                Create your account and start managing your records today.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="/legal/terms">Terms of Service</a>{" "}
        and <a href="/legal/privacy">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
