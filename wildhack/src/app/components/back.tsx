"use client"
import {
    ArrowLeftIcon,
  } from '@heroicons/react/24/outline'
import Link from "next/link";

export default function Back(props:{backpage:string}) {

  return (
    <section className='py-4'>
        <Link href={props.backpage}>
            <ArrowLeftIcon style={{color: "black", height: "32px", width: "32px"}}></ArrowLeftIcon>
        </Link>
    </section>
  )
}
