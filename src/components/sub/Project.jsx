'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const Project = ({data, index}) => {
  const [show, setShow] = useState(false)  // sets whether back of card is visible

  return (
    <motion.div 
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className='relative w-[350px] sm:w-full h-max border border-yellow-900 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2x1'>
        <Image 
          src={data.url}
          alt="Project Image"
          width={400}
          height={400}
          className='rounded-lg opacity-90'/>
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: show ? 1 : 0 }} 
          className='absolute top-0 w-full h-full flex flex-col 
          items-center justify-center gap-y-2 p-6 bg-white/95 not-last:rounded-lg'>
          <h2 className='text-lg font-bold tracking-wide text-slate-800'>{data.name}</h2>
          <p className='text-justify text-slate-800 first-letter:pl-2'>{data.desc}</p>
          {data.demoUrl && (    // conditional rendering of demo url
            <a href={data.demoUrl} target="_blank"
            className="border border-yellow-900 rounded-xl px-2 py-1 text-sm font-medium
                    tracking-wider text-slate-800">
            View Prototype
          </a>
          )}
            
        </motion.div>
      </motion.div>
  )
}

export default Project