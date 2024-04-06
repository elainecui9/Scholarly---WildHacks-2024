"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";


export default function Dashboard() {

  return (
    <section className= "bg-white h-full">
        <Header></Header>
        <div className="flex flex-row  justify-between p-8">
          <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
          <button className="text-sm font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Folder</button>
        </div>
        <div className="p-4">
          <Folders></Folders>
        </div>
    <Footer></Footer>
    </section>
  )
}

