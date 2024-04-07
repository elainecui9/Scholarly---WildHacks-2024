"use client"
import Header from "../frontpage/header";
import Journals from "./journals";
import Footer from "../footer";

export default function AllJournals() {

  return (
    <section className= "h-full bg-white">
        <div>
            <Header></Header>
        </div>
        <div>
            <Journals></Journals>
        </div>
        <div>
           <Footer></Footer>
        </div>
    </section>
  )
}