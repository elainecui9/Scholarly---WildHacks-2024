"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Classes from "./classes";
import AddClassModal from "../components/AddClassModal";
import {useState} from "react";
import JoinClassModal from "../components/joinclass";

export default function Classroom() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isjoinModalOpen, setjoinModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAddClass = () => {
    // Implement the logic to actually add a folder
    console.log("Adding a join class...");
  };

  const handlejoinOpenModal = () => setjoinModalOpen(true);
  const handlejoinCloseModal = () => setjoinModalOpen(false);
  const handlejoinAddClass = () => {
    // Implement the logic to actually add a folder
    console.log("Adding a join class...");
  };

  return (
    <section className= "bg-white h-full">
        <Header></Header>
        <div className="flex flex-row  justify-between p-8">
          <h1 className="text-2xl font-bold">Welcome to Your Classes</h1>
          <div>
          <button onClick={handlejoinOpenModal} className="mr-4 text-sm min-h-12 max-h-12 font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Join Classroom</button>
          <button onClick={handleOpenModal} className="text-sm min-h-12 max-h-12 font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create join Classroom</button>
          </div>
          
        </div>
        <AddClassModal isOpen={isModalOpen} onClose={handleCloseModal} onAdd={handleAddClass} />
        <JoinClassModal isOpen={isjoinModalOpen} onClose={handlejoinCloseModal} onAdd={handlejoinOpenModal} />
        <div className="p-4">
          <Classes></Classes>
        </div>
    <Footer></Footer>
    </section>
  )
}