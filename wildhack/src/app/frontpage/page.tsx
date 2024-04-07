"use client"
import Header from "./header";
import Front from "./frontpage";
import Footer from "../footer";

export default function FrontPage() {

  return (
    <section className= "h-full bg-white">
        <div>
            <Header></Header>
        </div>
        <div>
            <Front></Front>
        </div>
        <div>
           <Footer></Footer>
        </div>
    </section>
  )
}
