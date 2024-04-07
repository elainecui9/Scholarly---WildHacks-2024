"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";
import Dashboard from "./dashboard";
import {useState, useEffect} from "react";

export default function UserDashboard() {
  const [articles, setarticles] = useState<
{
  title: string,
  date: string,
  href:string,
}[]
>([]);
const [folders, setfolders] = useState<
{
  name: string,
  date: string,
  href:string,
  articles: [{
    title: string,
    datecreated: string,
    href:string,
  }];
}[]
  >([]);
  
  async function getData() {
    const res = await fetch("http://localhost:4000/user/dashboard", {
      method: "GET",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()
    setarticles(data.articles);
    setfolders(data.folders);
  }

const [path, setPath] = useState<string>("Home > ");
const [infolder, setinfolder] = useState<boolean>(false);
const [rerender, setrerender] = useState<boolean>(false);

  useEffect(() => {
    getData()
  setrerender(false);
  setinfolder(false);
  setPath("Home > ");
}, [rerender]);



  return (
    <section className="bg-white">
      <Header></Header>
      <Dashboard setrerender = {setrerender} infolder= {infolder} setinfolder = {setinfolder} path = {path} setPath = {setPath} folders = {folders} setfolders = {setfolders} setarticles = {setarticles} articles = {articles}></Dashboard>
      <Footer></Footer>
    </section>
    
  )
}

