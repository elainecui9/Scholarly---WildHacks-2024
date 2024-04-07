"use client"
import Link from "next/link";

function truncateText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

export default function Journalcard(props: any) {
  if (!props.abstract) {
    return
  }
  const truncatedAbstract = truncateText(props.abstract, 400); // Adjust 100 to your preferred max length
  let path ="";
  const authors = props.author.map((author)=>(
    path+ author.name+ ", " 
  ))
  return (
    <section className="p-6 border-2 border-red-900 rounded-lg flex flex-cols justify-between items-center shadow-md shadow-red-900 mb-2 gap-4">
      <div className="max-w-screen-lg">
        <h1 className="font-bold pb-2">{props.title}</h1>
        <p className="italic pb-2">{authors}</p>
        <p>{truncatedAbstract}</p>
      </div>
      <div className="transition-transform duration-300 transform hover:scale-105">
        <Link href={`/journaledit?id=${props.id}`} className="inline-block text-white bg-red-900 rounded-full  px-4 py-2 font-semibold rounded-xl shadow-md shadow-gray-600">
            See More
        </Link>
      </div>
    </section>
  );
}
