import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="container grid min-h-dvh place-content-center place-items-center gap-4 py-4 md:gap-8 md:py-8">
      <div className="grid place-items-center gap-2">
        <h2 className="text-balance">Oops! Page not found</h2>
      </div>

      <Link href="/" className="rounded bg-primary px-4 py-2 text-background">
        GO HOME
      </Link>
    </main>
  );
}
