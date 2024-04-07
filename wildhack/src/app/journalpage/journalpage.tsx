"use client"
import Back from "../components/back";
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion"
import Loading from "../components/loadingpage";



export default function Journal() {
  const [article, setArticle] = useState(null);
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
    return(
      <Loading></Loading>
    )
  }

  const handleSave = async() => {
    const res = await fetch("http://localhost:4000/article/save",{
      method: "POST",
      credentials: 'include',
      headers: {
      'Content-Type' : 'application/json'
      },
      body :{
        title: name,
        content: article.article_summary,
        url: url,
        authors: authors,
      },
    })
    router.push("/userdashboard");
  }
  if (article == null){
    return(

    )
  }
  console.log(article)
  return (
    <section className="p-8 h-full bg-white">
      <Back backpage="/journals"></Back>
        <section className="pt-8 pl-32 flex justify-between px-32">
            <div >
          <h1 className="font-bold text-3xl pb-2">{name}</h1>
          <h1 className="italic text-lg pb-8">{authors}</h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
                <p className="whitespace-pre-line">{article.article_summary}</p>
                </motion.div>
            </div>
            <div className="pl-32">
                <button className="text-white bg-red-900 rounded-full px-4 py-4 mb-4">
                    See Article
                </button>
                <button onClick={handleSave} className="text-white bg-red-900 rounded-full px-4 py-2">
                    Save Summary
                </button>
            </div>
        </section>
    </section>
    
    
  )
}
