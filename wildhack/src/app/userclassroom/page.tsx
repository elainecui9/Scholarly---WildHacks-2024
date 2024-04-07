"use client"
import Header from "../frontpage/header";
import Footer from "../footer";
import Classes from "./classes";
import AddClassModal from "../components/AddClassModal";
import {useState} from "react";

export default function Classroom() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAddClass = () => {
    // Implement the logic to actually add a folder
    console.log("Adding a new class...");
  };

  return (
    <section className= "bg-white h-full">
        <Header></Header>
        <div className="flex flex-row  justify-between p-8">
          <h1 className="text-2xl font-bold">Welcome to Your Classes</h1>
          <button onClick={handleOpenModal} className="text-sm font-semibold py-2 px-4 rounded-full bg-red-900 text-white">Create New Classroom</button>
        </div>
        <AddClassModal isOpen={isModalOpen} onClose={handleCloseModal} onAdd={handleAddClass} />

        <div className="p-4">
          <Classes></Classes>
        </div>
    <Footer></Footer>
    </section>
  )
}