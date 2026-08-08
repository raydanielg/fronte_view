export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/50 p-6">
      {children}
    </div>
  )
}
