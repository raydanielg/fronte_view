import { Separator } from "@workspace/ui/components/separator"

export const metadata = {
  title: "Privacy Policy - Student Academic Records System",
  description: "How Student Academic Records System collects, uses, and protects your data.",
}

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: "This Privacy Policy explains how Student Academic Records System Inc. (\"we\", \"us\", \"our\") collects, uses, and protects your personal information when you use our Service. We are committed to safeguarding your privacy and being transparent about our data practices.",
  },
  {
    id: "collection",
    title: "2. Information We Collect",
    body: "We collect the following types of information: (a) Account information: name, email address, and password; (b) Usage data: IP address, browser type, device information, and interaction logs; (c) Content: any content you voluntarily submit to the Service; (d) Cookies: we use cookies and similar technologies to improve your experience.",
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    body: "We use your information to: (a) provide and maintain the Service; (b) authenticate your identity and secure your account; (c) communicate with you about updates and support; (d) analyze and improve the Service; (e) comply with legal obligations; and (f) prevent fraud and abuse.",
  },
  {
    id: "sharing",
    title: "4. Information Sharing",
    body: "We do not sell your personal data. We may share your information with: (a) service providers who help us operate the Service (under strict confidentiality agreements); (b) legal authorities when required by law; and (c) business successors in the event of a merger or acquisition.",
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking",
    body: "We use cookies for authentication, preference storage, and analytics. You can control cookies through your browser settings. Disabling cookies may affect some features of the Service.",
  },
  {
    id: "security",
    title: "6. Data Security",
    body: "We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "rights",
    title: "7. Your Rights",
    body: "You have the right to: (a) access your personal data; (b) correct inaccurate information; (c) request deletion of your data; (d) export your data; (e) opt-out of marketing communications; and (f) withdraw consent for data processing. To exercise these rights, contact us at privacy@sars.com.",
  },
  {
    id: "retention",
    title: "8. Data Retention",
    body: "We retain your personal information for as long as your account is active or as needed to provide the Service. We may retain certain data after account deletion to comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    body: "Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such data, please contact us immediately and we will delete it.",
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of significant changes. Your continued use of the Service after changes are posted constitutes your acceptance of the updated policy.",
  },
]

export default function PrivacyPage() {
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
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Privacy Policy
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
          Questions about your privacy? Contact us at{" "}
          <a
            href="mailto:privacy@sars.com"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            privacy@sars.com
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
