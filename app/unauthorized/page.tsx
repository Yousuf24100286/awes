import Link from "next/link"

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="space-y-4">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unauthorized</h1>
          <p className="text-muted-foreground">
            You don&apos;t have permission to access this page. Please contact support for assistance.
          </p>
          <Link
            href="/about-us"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage