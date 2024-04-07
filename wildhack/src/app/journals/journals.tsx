"use client"
import Journalcard from "./journalcard";
import Back from "../components/back";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Journals() {
  const [results, setResults] = useState<any[]>([])
  const query = useSearchParams().get('search')
  async function search() {
    const res = await fetch(`https://doaj.org/api/search/articles/${query}`)
    const data = await res.json()
    setResults(data.results)
  }
  useEffect(() => {
    search()
  },[])
  return (
    <section className= "bg-white p-8">
      <Back backpage="/frontpage"></Back>
      <ul className="flex flex-col space-y-2">
        {results.map((article: any) => (
          <Journalcard
            key={article.id}
            title={article.bibjson.title}
            abstract={article.bibjson.abstract}
            id={article.id}
          />
        ))}
      </ul>
    </section>
  )
}