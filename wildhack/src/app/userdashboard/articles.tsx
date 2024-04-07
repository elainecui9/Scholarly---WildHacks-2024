"use client"
import { MdArticle } from "react-icons/md";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Editbuttonarticle from "./editbuttonarticle";
import Link from "next/link";

export default function Articles({ article }) {
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <section className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex gap-x-4 items-center hover:cursor-pointer">
                <MdArticle style={{ color: 'black', width: '32px', height: '32px' }} />
                <p className="text-md font-semibold leading-6 text-gray-900">
                    <Link href={`/articles/${article._id}`}>
                        {article.title}
                    </Link>
                </p>
            </div>
            <div className="flex-grow text-center">
                <h1 className="text-sm text-gray-500">{formattedDate}</h1>
            </div>
            <div className="flex items-center gap-x-4">
                <Editbuttonarticle></Editbuttonarticle>
                <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </div>
        </section>
    );
}

