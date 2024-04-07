"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbuttonfolder from "./editbuttonfolder";
import {useEffect} from "react";

export default function Drives({ folder, articles, setarticles, setfolders, key, path, setPath, setinfolder }) {
    const handleClick = () => {
        setarticles(folder.articles);
        setfolders(null);
        setPath(path + folder.name + " > ");
        setinfolder(true);
        console.log(articles);
    };

    return (
        <section className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex gap-x-4 items-center">
                <FaFolder style={{ color: folder.color, width: '32px', height: '32px' }} />
                <p onClick ={handleClick} className="text-md font-semibold leading-6 text-gray-900">
                    <a href={folder.href}>
                        {folder.name}
                    </a>
                </p>
            </div>
            <div className="flex-grow text-center">
                <h1 className="text-sm text-gray-500">{folder.date}</h1>
            </div>
            <div className="flex items-center gap-x-4">
                <Editbuttonfolder
                    id={folder._id}
                ></Editbuttonfolder>
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
        </section>
    );
}
