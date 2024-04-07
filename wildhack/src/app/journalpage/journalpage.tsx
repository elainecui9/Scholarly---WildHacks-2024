"use client"
import Back from "../components/back";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import { useSearchParams } from "next/navigation";


export default function Journal() {
  const [article, setArticle] = useState();
  const router = useRouter();

  const url = decodeURIComponent(useSearchParams().get('url') as string);
  const complexity = useSearchParams().get('complexity');
  const mode = useSearchParams().get('mode');
  const name = decodeURIComponent(useSearchParams().get('name') as string);
  const authors = decodeURIComponent(useSearchParams().get('authors') as string);

  const handleUrl = async () => {
    const res = await fetch('http://127.0.0.1:8000/article_summary', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url,
        complexity: complexity,
        mode: mode
      })
    })
    const data = await res.json()
    setArticle(data);
  }
  useEffect(() => {
    handleUrl();
  }, [])

  if (!article) {
    return
  }
  console.log(article)
  return (
    <section className="p-8">
      <Back backpage="/journals"></Back>
        <section className="pt-8 pl-32 flex justify-between px-32">
            <div >
          <h1 className="font-bold text-3xl pb-2">{name}</h1>
          <h1 className="italic text-lg pb-8">{authors}</h1>
                <p className="whitespace-pre-line">{article.article_summary}</p>
            </div>
            <div>
                <button className="text-white bg-black rounded-full px-4 py-2">
                    See Actual Journal
                </button>
            </div>
        </section>
    </section>
    
    
  )
}
