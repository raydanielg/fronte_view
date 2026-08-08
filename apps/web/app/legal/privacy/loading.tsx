import { Skeleton } from "@workspace/ui/components/skeleton"
import { Separator } from "@workspace/ui/components/separator"

export default function PrivacyLoading() {
  return (
    <article>
      <header className="mb-12 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-12 rounded-xl" />
        <Skeleton className="mx-auto h-9 w-56" />
        <Skeleton className="mx-auto mt-3 h-4 w-40" />
      </header>

      <Separator className="mb-10" />

      <div className="mb-12 rounded-lg border bg-card p-6">
        <Skeleton className="mb-3 h-4 w-32" />
        <div className="grid gap-2 sm:grid-cols-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>

      <div className="space-y-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="mb-3 h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-3/4" />
          </div>
        ))}
      </div>
    </article>
  )
}
