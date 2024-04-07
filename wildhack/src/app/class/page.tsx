"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";
import Dashboard from "./classdash";
import {useState, useEffect} from "react";


const fold = [
  {
    name: 'CS',
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
    name: 'Social',
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
  const students = ["David Wu", "Chirs Heo", "Elaine Cui", "John Adams"]

export default function ClassDashboard() {
  const [articles, setarticles] = useState<
{
  name: string,
  datecreated: string,
  href:string,
}[]
>([]);
const [folders, setfolders] = useState<
{
  name: string,
  datecreated: string,
  href:string,
  articles: [{
    name: string,
    datecreated: string,
    href:string,
  }];
}[]
>([]);

const [path, setPath] = useState<string>("Home > ");
const [infolder, setinfolder] = useState<boolean>(false);
const [rerender, setrerender] = useState<boolean>(false);
async function getData(){
    const res = await fetch("http://localhost:4000/class/send", {
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type' : 'application/json'
        },
    })
    const data = await res.json();
    setarticles(data.articles);
    setfolders(data.folders);
}

useEffect(() => {
  getData();
  setrerender(false);
  setinfolder(false);
  setPath("Home > ");
  console.log(articles);
}, [rerender]);



  return (
    <section className="bg-white">
      <Header></Header>
    <Dashboard students = {students} name="Chris" setrerender = {setrerender} infolder= {infolder} setinfolder = {setinfolder} path = {path} setPath = {setPath} folders = {folders} setfolders = {setfolders} setarticles = {setarticles} articles = {articles}></Dashboard>

      <Footer></Footer>
    </section>
    
  )
}

