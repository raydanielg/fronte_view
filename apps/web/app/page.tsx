import Link from "next/link"
import { Button } from "@workspace/ui/components/button"

export default function HomePage() {
  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <img
        src="/auth-image.jpg"
        alt="Student Academic Records System"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold tracking-tight text-white">
            Student Academic Records System
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Manage your academic
            <br />
            records with ease.
          </h1>
          <p className="max-w-md text-lg text-white/70">
            The Student Academic Records System helps you track grades,
            enrollment, and performance — all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/auth/sign-up">Create account</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/auth">Log in</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
