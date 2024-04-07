"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbutton from "../userdashboard/editbuttonfolder";
import Drive from "../userdashboard/drive";
import Classcard from "./classcard";

const classes = [
  {
    name: 'SOCIOL 308',
    datecreated: '2023-01-23',
    href:"/class",
    owner: "Chris",
  },
  {
    name: 'COMP_SCI 211',
    datecreated: '2023-01-23',
    href:"/class",
    owner: "Hajo",
  },
  {
    name: 'DSGN 208',
    datecreated: '2023-01-23',
    href:"/class",
    owner: "Elaine",
  },
  {
    name: 'BIOL 150',
    datecreated: '2023-01-23',
    href:"/class",
    owner: "Chris",
  },
 

]

export default function Classes(){
    return (
        <div className="flex flex-wrap gap-4 justify-center">
        {classes.map((class0) => (
            <Classcard class= {class0}></Classcard>
        ))}
    </div>
    )
}