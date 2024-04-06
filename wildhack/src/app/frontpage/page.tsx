"use client"
import Header from "./header";
import Front from "./frontpage";

export default function FrontPage() {

  return (
    <section className= "h-screen bg-white">
        <div>
            <Header></Header>
        </div>
        <div>
            <Front></Front>
        </div>
    </section>
  )
}
