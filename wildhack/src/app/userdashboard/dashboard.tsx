"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";


export default function Dashboard(props: {name, folders, articles, setarticles}) {

  return (
    <section className= "bg-white h-full">
        <Header></Header>
        <div className="flex flex-row  justify-between p-8">
          <h1 className="text-2xl font-bold">Welcome to {props.name}'s Dashboard</h1>
          <button className="text-sm font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Folder</button>
        </div>
        <div className="p-4">
          <Folders folders = {props.folders} articles = {props.articles} setarticles ={props.setarticles}></Folders>
        </div>
    <Footer></Footer>
    </section>
  )
}

