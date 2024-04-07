"use client"
import Journalcard from "./journalcard";
import Back from "../components/back";

export default function Journals() {

  return (
    <section className= "bg-white p-8">
      <Back backpage="/frontpage"></Back>
        <Journalcard></Journalcard>
        <Journalcard></Journalcard>
        <Journalcard></Journalcard>
    </section>
  )
}