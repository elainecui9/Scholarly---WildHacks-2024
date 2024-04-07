"use client"
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import Header from "@/app/frontpage/header";
import Loading from "@/app/components/loadingpage";
import Back from "@/app/components/back";
import Footer from "@/app/footer";
import { motion } from "framer-motion"


export default function Article({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState(null);

  async function search() {
    const res = await fetch(`http://localhost:4000/article/${params.slug}`, {
      method: "GET",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      setArticle(data);
    }
  }

  useEffect(() => {
    search();
  }, []);

  if (!article) {
    return <Loading />; // or any other loading state
  }

  return (
    <section className="h-full bg-white">
      <Header />
      <section className='flex flex-row items-center justify-between pt-24 '>
        <div className='px-32'>
          <Back backpage='/userdashboard' />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-3xl pt-4 pb-2">{article.title}</h1>
            <h1 className="italic text-lg pb-8">Authors: {article.authors}</h1>
            <h1>{article.content}</h1>
          </motion.div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
