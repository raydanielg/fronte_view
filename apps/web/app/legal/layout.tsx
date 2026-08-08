export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-svh bg-muted/30">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {children}
      </div>
    </div>
  )
}
