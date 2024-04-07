"use client"

import Folders from "./folders";
import {useEffect} from "react";
import Back from "../components/back";

export default function Dashboard({setrerender, infolder, setinfolder, name, articles, setarticles, folders, setfolders, path, setPath}) {
  const handleClick = () => {
    setrerender(true);
  };
  return (
    <section className= "bg-white h-full">
        <div className="flex flex-row justify-between p-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Welcome to {name}'s Dashboard</h1>
            <h1 className="pt-2">{path}</h1>
            {infolder &&
            <div onClick={handleClick}>
              <Back backpage="/userdashboard"></Back>
              </div>}
          </div>
          <button className="text-sm font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Folder</button>
        </div>
        <div className="p-4">
          <Folders setinfolder= {setinfolder} path = {path} setPath = {setPath} folders = {folders} setfolders={setfolders} articles = {articles} setarticles ={setarticles}></Folders>
        </div>
    </section>
  )
}

