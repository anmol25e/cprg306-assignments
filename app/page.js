import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 items-center sm:items-start bg-[var(--background)] min-h-screen text-[var(--foreground)]">
      <h1 className="text-2xl w-full h-12 flex items-center px-4 bg-[var(--foreground)] text-[var(--background)]">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <nav className="flex flex-col w-full px-4 py-2 space-y-1">
        <Link className="hover:underline" href="/week-2">Week 2</Link>
        <Link className="hover:underline" href="/week-3">Week 3</Link>
        <Link className="hover:underline" href="/week-4">Week 4</Link>
        <Link className="hover:underline" href="/week-5">Week 5</Link>
        <Link className="hover:underline" href="/week-6">Week 6</Link>
        <Link className="hover:underline" href="/week-7">Week 7</Link>
        <Link className="hover:underline" href="/week-8">Week 8</Link>
        <Link className="hover:underline" href="/week-9">Week 9</Link>
        <Link className="hover:underline" href="/week-10">Week 10</Link>
      </nav>
    </main>
  );
}
