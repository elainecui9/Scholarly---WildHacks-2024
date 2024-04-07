"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";
import Dashboard from "./dashboard";
import {useState, useEffect} from "react";


const fold = [
  {
    name: 'Biology',
    datecreated: '2023-01-23',
    href:"#",
    articles: [{
        name: 'B1',
        datecreated: '2023-01-23',
        href:"#",
      },
      {
        name: 'B2',
        datecreated: '2023-01-23',
        href:"#",
      },
      {
        name: 'B3',
        datecreated: '2023-01-23',
        href:"#",
      }
    ]
  },
  {
    name: 'Humanities',
    datecreated: '2023-01-23',
    href:"#",
    articles: [{
      name: 'H1',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'H2',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'H3',
      datecreated: '2023-01-23',
      href:"#",
    }
  ]
  },
  {
    name: 'CS 150',
    datecreated: '2023-01-23',
    href:"#",
    articles: [{
      name: 'CS1',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'CS2',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'CS3',
      datecreated: '2023-01-23',
      href:"#",
    }
  ]
  },

]


const art = [
    {
      name: 'What is life',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'Psychology of CS',
      datecreated: '2023-01-23',
      href:"#",
    },
    {
      name: 'Does water expire',
      datecreated: '2023-01-23',
      href:"#",
    },
   
  
  ]
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
    console.log(data);
    setarticles(data.articles);
    console.log(articles);
    setfolders(data.folders);
    console.log(folders);
  }

const [path, setPath] = useState<string>("Home > ");
const [infolder, setinfolder] = useState<boolean>(false);
const [rerender, setrerender] = useState<boolean>(false);

  useEffect(() => {
    getData()
  setrerender(false);
  setinfolder(false);
  setPath("Home > ");
  console.log(articles);
}, [rerender]);



  return (
    <section className="bg-white">
      <Header></Header>
      <Dashboard name="Chris" setrerender = {setrerender} infolder= {infolder} setinfolder = {setinfolder} path = {path} setPath = {setPath} folders = {folders} setfolders = {setfolders} setarticles = {setarticles} articles = {articles}></Dashboard>
      <Footer></Footer>
    </section>
    
  )
}

