import { Skeleton } from "@workspace/ui/components/skeleton"
import { Card, CardContent } from "@workspace/ui/components/card"

export function LoginFormSkeleton() {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex flex-col gap-6 p-6 md:p-8">
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-4 w-56" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-9 w-full" />
            </div>
            <Skeleton className="h-9 w-full" />
            <div className="flex justify-center">
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <div className="relative hidden bg-muted md:block">
            <Skeleton className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 flex flex-col justify-end gap-3 p-8">
              <div className="flex items-center gap-2">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-5 w-24" />
              </div>
              <Skeleton className="h-6 w-64" />
              <Skeleton className="h-4 w-56" />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center px-6">
        <Skeleton className="h-4 w-72" />
      </div>
    </div>
  )
}
