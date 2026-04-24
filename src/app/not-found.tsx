import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-ink text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-ink-muted max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="bg-accent hover:bg-accent-hover mt-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}
