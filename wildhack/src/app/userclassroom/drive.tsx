"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbutton from "./editbutton";

export default function Drives(props:{folder})
{
    return (
            <li key={props.folder.name} className="relative flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <FaFolder style={{ color: 'black' , width: '32px', height: '32px'}} />
                <div className="min-w-0 flex-auto">
                <p className="text-md font-semibold leading-6 text-gray-900">
                    <a href={props.folder.href}>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {props.folder.name}
                    </a>
                </p>
                </div>
            </div>
            <div>
                <h1 className="text-sm text-gray-500">{props.folder.datecreated}</h1>
            </div> 
            <div className="flex shrink-0 items-center gap-x-4 " >
                <Editbutton></Editbutton>
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
            </li>
    )
}