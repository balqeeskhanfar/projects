import React from "react";
import Link from "next/link";

export default function Header(){
    return <header className="p-5 bg-blue-400">
        <Link href="/" className="px-2 py-1 font-bold bg-white text-blue-500 rounded-lg m-3">Home</Link>
        <Link href={'projects'} className="px-2 py-1 font-bold bg-white text-blue-500 rounded-lg m-3">projects</Link>
    </header>

}