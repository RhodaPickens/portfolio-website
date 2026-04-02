"use client"
import Heading from "./sub/Heading"
import Image from "next/image"
import { reviewsData, arrowIcons } from "@/assets"
import { useState, useRef, useEffect } from "react"
import { animate, motion } from "framer-motion"

const Reviews = () => {
    const [index, setIndex] = useState(0) // initialized to zero so carousel will show 1st review in array
    const [direction, setDirection] = useState(false) // triggers navigation direction
    const prevIndex = useRef(0)
    const slides = useRef([]) // stores references to each slide in carousel

    const rightClickHandler = () => {
        animate(slides.current[index], { x: 0 }, { delay: 0.3 })
        animate(slides.current[prevIndex.current], {
            scale: index === 0 ? 1 : 0.4,
            rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
        })
    }

    const leftClickHandler = () => {
        animate(slides.current[index], { scale:1, rotate: 0 }, { delay: 0.2 })
        animate(slides.current[prevIndex.current], { x: "100%" })
    }

    useEffect(() => {
        direction ? leftClickHandler() : rightClickHandler()
        prevIndex.current = index
    }, [index])

    return (
    <div id="reviews" className='py-20 px-4 md:px-32 lg:px-48'>
        <Heading text={"Reviews"} />
        <div className='flex flex-col items-center justify-center'>
            <motion.div 
                initial={{opacity: 0, x: -200}} 
                whileInView={{opacity: 1, x: 0}} 
                viewport={{once: true}} 
                transition={{duration: 0.4}} 
                className='relative w-full max-w-[300px] md:max-w-[600px]
                min-h-[550px] md:min-h-[450px]
                flex items-center justify-center overflow-hidden'
            >
                {reviewsData.map((review, i) => (                
                    <motion.div 
                        initial={{x: "100%"}}
                        key={i}
                        className='absolute inset-0 flex flex-col items-center 
                        justify-center gap-y-7 lg:gap-y-4 border border-yellow-900
                         bg-zinc-50 p-6 lg:p-5 rounded-xl'
                         ref={(el) => slides.current.push(el)}
                    >
                        <Image 
                            src={review.image} 
                            alt="Reviews Image" 
                            width={130} height={130}
                            className='w-[130px] aspect-square rounded-full border border-yellow-900 p-4 object-contain' 
                        />
                        <h1 className='text-2xl md:text-xl text-center tracking-wider text-slate-800'>{review.name}</h1>
                        <p className='text-sm md:text-lg text-left font-light tracking-wide text-slate-800 first-letter:pl-2'>
                        {review.comment}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            <div className="flex gap-x-4 text-4xl text-yellow-900 mt-5">
                <button 
                    className={`${
                    index === 0 ? "opacity-30 pointer-events-none" : 
                    "opacity-100 pointer-events-auto"
                    } hover:scale-150 transition-all`}
                    onClick={() => {
                    setDirection(true)
                    setIndex(index - 1) // updates current index
                    }}
                >
                    {arrowIcons[0]}</button>
                <button
                    className={`${
                    index === reviewsData.length - 1 ? "opacity-30 pointer-events-none" : 
                    "opacity-100 pointer-events-auto"
                    } hover:scale-150 transition-all`}
                    onClick={() => {
                    setDirection(false)
                    setIndex(index + 1)
                    }}
                    >{arrowIcons[1]}</button>
            </div>
        </div>
    </div>
  )
}

export default Reviews