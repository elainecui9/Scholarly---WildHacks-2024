"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Dashboard from "./classdash";
import {useState, useEffect} from "react";

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
async function getData(){
    const res = await fetch("http://localhost:4000/class6612bb18f35d55159e1a982a",{
        method:"GET",
        credentials: 'include',
        headers: {
            'Content-Type' : 'application/json'
        },
    })
    const data = await res.json();
    setarticles(data.articles);
    setfolders(data.folders);
}

const [path, setPath] = useState<string>("Home > ");
const [infolder, setinfolder] = useState<boolean>(false);
const [rerender, setrerender] = useState<boolean>(false);
const [students, setStudents]= useState();
async function getData(){
    const res = await fetch("http://localhost:4000/class/send", {
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type' : 'application/json'
        },
    })
    const data = await res.json();
    console.log(data);
    setarticles(data.articles);
    setfolders(data.folders);
    setStudents(data.students);
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

