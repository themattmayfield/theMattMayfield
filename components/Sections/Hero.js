import ChevronDown from '../UI/ChevronDown'
import React, { useState } from 'react';
import { motion } from "framer-motion"

export default function Hero(props) {

    const hypeText = [
        {
            text: 'Hero of the Web',
            id: 0
        },
        {
            text: 'Digital Architect',
            id: 1
        },
        {
            text: 'React Connoisseur',
            id: 1
        }
    ]
    const [currentHypeText, setcurrentHypeText] = useState(0)

    const hypeTextHandler = () => {
        setInterval(() => {
            hypeText[hypeText.length - 1].id === currentHypeText 
            ? setcurrentHypeText(0) 
            : setcurrentHypeText(currentHypeText + 1)
        }, 2500);
    }
    hypeTextHandler()

    return (
        <>
            <div className="bg-transparent h-screen pt-16 px-8 lg:px-24 container mx-auto flex flex-col justify-between">
                <div></div>

                <div className="space-y-2">
                    <h1 className="text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin">Hello 👋🏿 ,</h1>
                    <h1 className="text-matt-textdark dark:text-matt-textlight text-5xl lg:text-7xl font-thin pb-4">I'm <span className="text-yellow-900 font-light">Matthew</span></h1>
                    <p className="text-matt-textdark dark:text-matt-textlight text-base lg:text-xl font-extralight pb-10 ">{hypeText[currentHypeText].text}</p>
                    <button className="rounded-full bg-yellow-900 py-2 px-6 text-white font-light focus:outline-none">About Me</button>
                </div>

                <div className="w-full flex justify-center h-12">
                    <ChevronDown class="w-6 h-6 cursor-pointer text-yellow-900" />
                </div>
            </div>
        </>
    );
}