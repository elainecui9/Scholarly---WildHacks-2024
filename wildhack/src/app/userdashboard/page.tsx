"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Folders from "./folders";
import Dashboard from "./dashboard";
import {useState, useEffect} from "react";


const folders = [
  {
    name: 'Biology',
    datecreated: '2023-01-23',
    href:"/userdashboard",
    articles: [{
        name: 'Hi',
        datecreated: '2023-01-23',
        href:"#",
      },
      {
        name: 'Hi1',
        datecreated: '2023-01-23',
        href:"#",
      },
      {
        name: 'Hi2',
        datecreated: '2023-01-23',
        href:"#",
      }
    ]
  },
  {
    name: 'Humanities',
    datecreated: '2023-01-23',
    href:"#",
  },
  {
    name: 'CS 150',
    datecreated: '2023-01-23',
    href:"#",
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
  name: string,
  datecreated: string,
  href:string,
}[]
>([]);
useEffect(() => {
  setarticles(art);
}, [articles]);



  return (
    <Dashboard name="Chris" folders = {folders} setarticles = {setarticles} articles = {articles}></Dashboard>
  )
}

