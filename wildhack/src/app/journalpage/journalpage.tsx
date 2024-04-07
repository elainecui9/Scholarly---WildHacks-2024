"use client"
import Back from "../components/back";

export default function Journal() {

  return (
    <section className="px-32 pt-8 flex justify-between">
      <Back backpage="/journals"></Back>
        <div >
            <h1 className="font-bold text-3xl pb-2">JOURNAL TITLE</h1>
            <h1 className="italic text-lg pb-8">Journal Author</h1>
            <h1>Generated Text.......</h1>
        </div>
        <div>
            <button className="text-white bg-black rounded-full px-4 py-2">
                See Actual Journal
            </button>
        </div>
    </section>
    
  )
}
