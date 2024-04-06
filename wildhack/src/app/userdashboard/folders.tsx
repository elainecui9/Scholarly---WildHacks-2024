"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Drive from "../userclassroom/drive";

const folders = [
  {
    name: 'Biology',
    datecreated: '2023-01-23',
    href:"#",
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

export default function Folders(){
    return (
        <ul role="list" className="divide-y divide-gray-100 p-8 border-2 rounded-lg">
        {folders.map((folder) => (
            <Drive folder = {folder}></Drive>
        ))}
    </ul>
    )
}