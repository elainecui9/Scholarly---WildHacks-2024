"use client"
import Link from "next/link";
export default function Journalcard() {

  return (
    <section className="p-6 border-2 rounded-lg flex flex-cols justify-between items-center">
        <div>
            <h1 className="font-bold">JOURNAL TITLE</h1>
            <h1 className="italic">Journal Author</h1>
            <h1>Journal Abstract......</h1>
        </div>
        <div>
            <Link href="/journalpage"className="text-white bg-black rounded-full px-4 py-2 ">
                Generate Text
            </Link>
        </div>
    </section>
  )
}