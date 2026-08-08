import { Separator } from "@workspace/ui/components/separator"

export const metadata = {
  title: "Terms of Service - Student Academic Records System",
  description: "The terms and conditions for using Student Academic Records System platform.",
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: "By accessing and using Student Academic Records System (the \"Service\"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our Service.",
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: "You must be at least 13 years old to use this Service. By registering an account, you represent and warrant that you meet this age requirement and have the legal capacity to enter into this agreement.",
  },
  {
    id: "accounts",
    title: "3. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    id: "use",
    title: "4. Acceptable Use",
    body: "You agree not to use the Service to: (a) violate any laws or regulations; (b) infringe on the rights of others; (c) distribute spam, malware, or harmful content; (d) attempt to gain unauthorized access to our systems; (e) interfere with the proper functioning of the Service; or (f) use automated scripts or bots without our permission.",
  },
  {
    id: "content",
    title: "5. User Content",
    body: "You retain ownership of content you submit to the Service. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content within the Service. You are responsible for ensuring your content does not violate any laws or third-party rights.",
  },
  {
    id: "intellectual",
    title: "6. Intellectual Property",
    body: "Student Academic Records System, including its logo, design, software, and content, is the intellectual property of Student Academic Records System Inc. You may not copy, modify, distribute, or create derivative works from our Service without prior written consent.",
  },
  {
    id: "termination",
    title: "7. Termination",
    body: "We reserve the right to terminate or suspend your access to the Service at any time, with or without cause or notice. Upon termination, all licenses and rights granted to you will immediately cease. You may delete your account at any time through the Service settings.",
  },
  {
    id: "disclaimer",
    title: "8. Disclaimer of Warranties",
    body: "The Service is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free.",
  },
  {
    id: "liability",
    title: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, Student Academic Records System Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.",
  },
  {
    id: "changes",
    title: "10. Changes to Terms",
    body: "We may update these Terms of Service from time to time. We will notify users of significant changes. Your continued use of the Service after changes are posted constitutes your acceptance of the new terms.",
  },
]

export default function TermsPage() {
  return (
    <article>
      <header className="mb-12 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-muted-foreground">
          Last updated: August 8, 2026
        </p>
      </header>

      <Separator className="mb-10" />

      <nav className="mb-12 rounded-lg border bg-card p-6">
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
          Table of Contents
        </h2>
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-8">
            <h2 className="mb-3 text-xl font-semibold">{section.title}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <Separator className="my-10" />

      <footer className="text-center text-sm text-muted-foreground">
        <p>
          Questions about these terms? Contact us at{" "}
          <a
            href="mailto:legal@sars.com"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            legal@sars.com
          </a>
        </p>
        <p className="mt-4">
          <a href="/auth" className="underline-offset-2 hover:underline">
            Back to login
          </a>
        </p>
      </footer>
    </article>
  )
}
