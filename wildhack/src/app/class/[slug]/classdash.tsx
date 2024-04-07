"use client"

import Folders from "../../userdashboard/folders";
import {useEffect, useState} from "react";
import Back from "../../components/back";
import AddFolderModal from '../../components/AddFolderModal';
import Students from "./students";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";




export default function Dashboard({students, setrerender, infolder, setinfolder, name, articles, setarticles, folders, setfolders, path, setPath}) {
  const handleClick = () => {
    setrerender(true);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [showfolders, setshowfolders] = useState(true);
  const handleshowfoldersfalse =() => setshowfolders(false);
  const handleshowfolderstrue =() => setshowfolders(true);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAddFolder = (colorData) => {
    
  };

  return (
    <section className= "bg-white h-full">
        <div className="flex flex-row justify-between p-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Welcome to Classroom</h1>
            <h1 className="pt-2">{path}</h1>
            {infolder &&
            <div onClick={handleClick}>
              <Back backpage="/class"></Back>
              </div>}
          </div>
          
          <button onClick={handleOpenModal} className="text-sm max-h-12 font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Folder</button>
        </div>
        <AddFolderModal isOpen={isModalOpen} onClose={handleCloseModal} onAdd={handleAddFolder} />
        <div className="border-b border-gray-200 dark:border-gray-700">
  <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 p-4">
    <li className="me-2">
      <button
        onClick={handleshowfolderstrue}
        className={`inline-flex items-center justify-center p-4 border-b-2 ${
          showfolders ? 'border-red-900 text-red-900' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
        } rounded-t-lg dark:hover:text-gray-300 group`}
      >
        <MdSpaceDashboard className="mr-1" style={{ width: "24px", height: "24px" }} />
        Dashboard
      </button>
    </li>
    <li className="me-2">
      <button
        onClick={handleshowfoldersfalse}
        className={`inline-flex items-center justify-center p-4 ${
          !showfolders ? 'border-red-900 text-red-900' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
        } border-b-2 rounded-t-lg dark:hover:text-gray-300 group`}
        aria-current="page"
      >
        <FaUserGroup className="mr-1" style={{ width: "24px", height: "24px" }} />
        Group Members
      </button>
    </li>
  </ul>
</div>

        <div className="p-4">
            {showfolders && 
          <Folders setinfolder= {setinfolder} path = {path} setPath = {setPath} folders = {folders} setfolders={setfolders} articles = {articles} setarticles ={setarticles}></Folders>
            }
            {!showfolders &&
            <Students students = {students}></Students>
            }
        </div>
    </section>
  )
}

