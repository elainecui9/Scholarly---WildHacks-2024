"use client"
import Header from "../frontpage/header";
import Profile from "./profile";
import Footer from "../footer";

export default function Userprofile() {

  return (
    <section className= "bg-white">
        <Header></Header>
        <Profile name="PLACERHOLDER NAME" email="PLACEHOLDER EMAIL"></Profile>
        <Footer></Footer>
    </section>
  )
}