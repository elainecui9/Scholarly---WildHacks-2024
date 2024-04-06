"use client"

import Journals from "./journals";
export default function Front() {

  return (
    <section>
        <div className="m-4 flex flex-col gap-2">
            <h1 className="flex justify-center font-bold">Front</h1>
            <Journals></Journals>
            <div>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder =" Search"
                  className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button className="rounded-full bg-red-900 py-2 px-4 text-white">
                  Search
                </button>
              </div>
            </div>
        </div>
    </section>
  )
}