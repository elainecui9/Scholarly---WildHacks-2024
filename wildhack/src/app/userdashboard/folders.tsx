"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Drive from "./drive";
import Articles from "./articles";

export default function Folders(props:{folders, articles, setarticles}){
    return (
        <ul role="list" key ="" className="divide-y divide-gray-100 p-8 border-2 rounded-lg">
        {props.folders.map((folder) => (
            <Drive folder = {folder} setarticles = {props.setarticles} articles = {props.articles}></Drive>
        ))}
        {props.articles.map((article) => (
            <Articles article = {article} ></Articles>
        ))}
    </ul>
    )
}