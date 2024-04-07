"use client"

import Journals from "../journals/journals";
import Error from "../components/error";
import {useState, useEffect} from "react";
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Back from "../components/back";
import Link from "next/link";
export default function Front() {
  const [showError, setShowError] = useState(false);

  const handleSearchClick = () => {
    //setShowError(true);
  };
  useEffect(() => {
  }, [showError]);


  return (
    <section>
        <div className="m-4 flex flex-col gap-2">
        <div className="pt-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center pb-24">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Understand Research Fast
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Quickly understand academic journals for your own studying and research needs while also organizing your documents for groups, classes, and individual use
                </p>
              </div>
            </div>
          </div>
        
            <div>
              <div className="relative mt-2 flex items-center m-8">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder ="Type in article for searching..."
                  className="block w-full rounded-md max-x-32 border-0 py-1.5 pl-4 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
                />
                <div className="flex text-white">
                  
                  <Link href= "/journals" onClick={handleSearchClick} className="ml-2 font-semibold rounded-full bg-black py-2 px-8 text-white transition-transform duration-300 transform hover:scale-105 rounded-xl shadow-md shadow-gray-400">
                    <div className="flex">
                    <MagnifyingGlassIcon style={{ color: 'white' , width: '24px', height: '24px'}}></MagnifyingGlassIcon>
                    <h1 className="pl-2">Search</h1>
                    </div>
                  </Link>
                </div>
                
                {showError && <Error message="ERRORR MESSAGEEE YAAA......"  />} 
              </div>
            </div>
        </div>
    </section>
  )
}