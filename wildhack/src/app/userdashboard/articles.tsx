"use client"
import { MdArticle } from "react-icons/md";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbuttonarticle from "./editbuttonarticle";

export default function Articles({article, key})
{

    return (
        <section className="flex justify-between items-center gap-x-6 py-5">
        <div className="flex gap-x-4 items-center">
            <MdArticle style={{ color: 'black', width: '32px', height: '32px' }} />
            <p className="text-md font-semibold leading-6 text-gray-900">
                <a href={article.href}>
                    {article.title}
                </a>
            </p>
        </div>
        <div className="flex-grow text-center">
            <h1 className="text-sm text-gray-500">{article.date}</h1>
        </div>
        <div className="flex items-center gap-x-4">
            <Editbuttonarticle></Editbuttonarticle>
            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </div>
    </section>
    )
}