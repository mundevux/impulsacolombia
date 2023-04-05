import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-shark-800">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-amber-400 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-amber-400 group active:text-amber-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-amber-400 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-shark-800 border border-current">
                <Link to="/">Go Home</Link>
                </span>
            </a>
            </button>
        </main>
    )
}



