"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbuttonfolder from "./editbuttonfolder";
import {useEffect} from "react";

export default function Drives({ folder, articles, setarticles, setfolders, key, path, setPath, setinfolder }) {
    // Format the date
    const formattedDate = new Date(folder.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleClick = () => {
        setarticles(folder.articles);
        setfolders(null);
        setPath(path + folder.name + " > ");
        setinfolder(true);
        console.log(articles);
    };

    return (
        <section className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex gap-x-4 items-center hover:cursor-pointer" onClick={handleClick}>
                <FaFolder style={{ color: 'black', width: '32px', height: '32px' }} />
                <p className="text-md font-semibold leading-6 text-gray-900">
                    {folder.name}
                </p>
            </div>
            <div className="flex-grow text-center">
                <h1 className="text-sm text-gray-500">{formattedDate}</h1>
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