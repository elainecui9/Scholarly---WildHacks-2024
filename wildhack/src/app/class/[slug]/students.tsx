"use client"
import { IoMdPerson } from "react-icons/io";

export default function Students({students}){

    return (
        <h1 className="divide-y divide-gray-100 p-8 border-2 rounded-lg">
        {students != null &&
        students.map((student,index) => (
            <section className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex gap-x-4 items-center">
                <IoMdPerson style={{ color: 'black', width: '32px', height: '32px' }} />
                <p className="text-md font-semibold leading-6 text-gray-900">
                    {student}
                </p>
            </div>

        </section>
        ))
        }   
    </h1>
    )
}