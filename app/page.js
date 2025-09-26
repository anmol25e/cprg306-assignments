import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col gap-[2px] row-start-2 items-center sm:items-start bg-gray-300 min-h-screen">
        <h1 className="text-2xl w-full h-12 bg-blue-500">CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-1">Week 1</Link>
        <Link href="/week-2">Week 2</Link>
        <Link href="/week-3">Week 3</Link>
        <Link href="/week-4">Week 4</Link>
        <Link href="/week-5">Week 5</Link>
        <Link href="/week-6">Week 6</Link>
        <Link href="/week-7">Week 7</Link>
        <Link href="/week-8">Week 8</Link>
        <Link href="/week-9">Week 9</Link>
        <Link href="/week-10">Week 10</Link>
      </main>
  );
}