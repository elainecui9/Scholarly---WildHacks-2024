"use client"
import Link from "next/link";
export default function Journalcard(props: any) {

  return (
    <section className="p-6 border-2 border-red-900 rounded-lg flex flex-cols justify-between items-center shadow-md shadow-red-900 mb-2">
        <div>
        <h1 className="font-bold">{props.title}</h1>
        <h1 className="italic">{props.title}</h1>
        <p>{props.abstract}</p>
        </div>
        <div className=" transition-transform duration-300 transform hover:scale-105 ">
            <Link href={`/journaledit?id=${props.id}`} className="text-white bg-red-900 rounded-full px-4 py-2 font-semibold rounded-xl shadow-md shadow-gray-600">
                See More
            </Link>
        </div>
    </section>
  )
}