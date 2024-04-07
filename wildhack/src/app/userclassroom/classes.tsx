"use client"
import { FaFolder } from "react-icons/fa";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbutton from "../userdashboard/editbuttonfolder";
import Drive from "../userdashboard/drive";
import Classcard from "./classcard";
import {useState, useEffect} from "react";



export default function Classes(){
  const [classes, setClasses] = useState();

  async function sendClass(){
    const res = await fetch("http://localhost:4000/class//user/classes", {
      method:"GET",
      credentials: 'include',
      headers: {
        'Content-Type' : 'application/json'
      },
    })
    const data = await res.json();
    setClasses(data);
  }
  useEffect(()=>{
    sendClass();
    
  },[]);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
        {classes.map((class0) => (
            <Classcard class= {class0}></Classcard>
        ))}
    </div>
    )
}