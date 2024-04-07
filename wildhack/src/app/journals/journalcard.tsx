"use client"
import Link from "next/link";
export default function Journalcard() {

  return (
    <section className="p-6 border-2 border-red-900 rounded-lg flex flex-cols justify-between items-center shadow-md shadow-red-900 mb-2">
        <div>
            <h1 className="font-bold">JOURNAL TITLE</h1>
            <h1 className="italic">Journal Author</h1>
            <h1>Journal Abstract......</h1>
        </div>
        <div className=" transition-transform duration-300 transform hover:scale-105 ">
            <Link href="/journaledit" className="text-white bg-red-900 rounded-full px-4 py-2 font-semibold rounded-xl shadow-md shadow-gray-600">
                See More
            </Link>
        </div>
    </section>
  )
}