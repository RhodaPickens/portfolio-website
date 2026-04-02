'use client'
import React from 'react'
import Heading from './sub/Heading'
import Image from 'next/image'
import {downloadIcon, arrowLeftIcon} from '@/assets'

const About = () => {
    return (
    <div id="about" className='min-h-screen py-20 px-4 md:px-32 lg:px-48 flex flex-col items-center justify-center'>
            <Heading text={"About Me"} />
            <div className='w-full flex items-center justify-between md:justify-center'>
                <Image 
                src={'/about-lg.png'} 
                alt="About Image" 
                width={400} 
                height={400} 
                className="hidden md:block md:w-[300px] lg:w-[200px]"
                />
                <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-left shadow-md">
                    <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">{arrowLeftIcon}</span>
                    <p className="text-lg text-slate-800 first-letter:pl-3 mb-6">
                        Hi, I’m Rhoda, a <strong>Senior Software Engineering student</strong> who spent 7 years as a freelance web developer
                        before diving into full-stack engineering. I work with technologies 
                        like <strong>Java (Spring Boot), Python, SQL, React/Next.js and Angular</strong>. 
                    </p>
                    <p className="text-lg text-slate-800">
                        I have certifications in <strong>AWS Cloud, ITIL and Project Management</strong>. 
                        My true passion lies in the act of coding itself - I love the process of taking a complex problem 
                        and translating it into a clean, functional project that actually works for the user.
                    </p>
                    <a href="/rhoda-pickens-resume.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border
                     border-gray-300 bg-emerald-700 px-3 py-2 font-semibold text-white hover:bg-emerald-800 transition-colors">
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About