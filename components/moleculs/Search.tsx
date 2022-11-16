"use client"

import React, { SyntheticEvent, useRef } from "react"

const Search: React.FC = () => {
    const inputRefs = useRef<HTMLInputElement | any>(null)

    const SearchHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        console.log(inputRefs.current.value)
    }

    return (
        <form onSubmit={SearchHandler} className="flex flex-col md:flex-row w-full md:space-x-4 space-y-4 md:space-y-0">
            <input ref={inputRefs} type="text" className="w-full focus:outline-none text-md text-neutral-50 py-3 px-4 bg-neutral-10 rounded-xl" placeholder="Search product" />
            <button className="w-full flex items-center justify-center md:w-fit py-3 px-8 rounded-xl bg-primary-main hover:bg-primary-hover text-neutral-10 text-md font-semibold">
                Search
                <svg className="ml-2" width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.6888" cy="15.6888" r="11.9847" stroke="white" strokeWidth="3.28677" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24.0244 24.647L28.7231 29.3335" stroke="white" strokeWidth="3.28677" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    )
}

export default Search