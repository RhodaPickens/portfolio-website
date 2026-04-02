"use client"
import Heading from "./sub/Heading"
import Image from "next/image"
import { skillsData } from '@/assets'
import { motion } from 'framer-motion'

const Skills = () => {
  const variants = {
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + i * 0.07, // staggered animation making each skill appear one after the other
        },
    }),
    hidden: {
        opacity: 0,
        y: 30,
    },
  }
  return (
    <div id="skills" 
        className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-32 lg:px-48 gap-y-10">
        <Heading text={"Skills"} />
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 w-full max-w-4xl mx-auto'>
            {skillsData.map((item, i) => (
                <motion.div 
                    custom={i}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.1 }}
                    viewport={{ margin: "50px", once: true }}
                    key={i}
                    className='flex items-center justify-center gap-x-2 rounded-xl border border-yellow-900 bg-zinc-200 
                    p-3 shadow-md shadow-yellow-800/40'>
                    <Image 
                        src={item.icon} 
                        alt="Skills Image" 
                        width={40} 
                        height={40} 
                        className='h-8 w-8 object-contain'
                    />
                    <p className='text-xs sm:text-sm font-medium text-slate-800 whitespace-nowrap'>{item.name}</p>
                </motion.div>
            ))}
            
        </div>
    </div>
  )
}

export default Skills