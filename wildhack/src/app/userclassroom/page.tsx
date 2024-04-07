"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Classes from "./classes";

export default function Classroom() {

  return (
    <section className= "bg-white h-full">
        <Header></Header>
        <div className="flex flex-row  justify-between p-8">
          <h1 className="text-2xl font-bold">Welcome to Your Classes</h1>
          <button className="text-sm font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Classroom</button>
        </div>
        <div className="p-4">
          <Classes></Classes>
        </div>
    <Footer></Footer>
    </section>
  )
}