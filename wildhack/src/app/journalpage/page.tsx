"use client"
import Header from "../frontpage/header";
import Journal from "./journalpage";

export default function JournalPage() {

  return (
    <section className= "h-screen bg-white">
        <div>
            <Header></Header>
        </div>
        <div>
            <Journal></Journal>
        </div>
    </section>
  )
}
