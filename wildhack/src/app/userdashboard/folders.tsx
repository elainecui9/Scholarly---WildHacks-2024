"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Drive from "./drive";
import Articles from "./articles";

export default function Folders({folders, articles, setarticles, setfolders, setPath, path, setinfolder}){

    return (
        <h1 className="divide-y divide-gray-100 p-8 border-2 rounded-lg">
        {folders != null &&
        folders.map((folder,index) => (
            <Drive setinfolder = {setinfolder} path = {path} setPath = {setPath} key={index} folder = {folder} setfolders = {setfolders} setarticles = {setarticles} articles = {articles}></Drive>
        ))
        }   
        {articles != null &&
        articles.map((article,index) => (
            <Articles key={index} article = {article} ></Articles>
        ))
        }
    </h1>
    )
}