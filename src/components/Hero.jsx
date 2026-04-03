'use client'
import Image from 'next/image'
import {heroIcons, heroIcons2} from '@/assets'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({innerWidth: 0, innerHeight: 0 })
    const [mouseMove, setMouseMove] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e
        x.set(clientX)
        y.set(clientY)

        console.log(clientX, clientY, x, y)
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
        setMouseMove(true) // indicates mouse has entered Hero section

        console.log(innerWidth, innerHeight)
    }

    const {innerWidth, innerHeight} = windowOffset

    const xSpring = useSpring(x, { stiffness: 100, damping: 10 }) // adds spring-like property to animation
    const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

    const rotateY = useTransform(xSpring, [0, innerWidth], [-50, 50])
    const rotateX = useTransform(ySpring, [0, innerHeight], [50, -50])

    return (
        <div 
        id="home"
        className="h-screen grid place-items-center" 
        onMouseMove={handleMouseMove} 
        onMouseEnter={handleMouseEnter}
        >
            <div className="py-20">
                <div className='flex flex-col items-center justify-center gap-y-3 px-4'>
                    <motion.div 
                        className='flex items-center justify-center' 
                        style={{
                            rotateX: mouseMove ? rotateX : 0, 
                            rotateY: mouseMove ? rotateY : 0,
                            transition: '0.1s',
                            }}
                    >
                    <Image 
                        src={'/rhoda.png'} 
                        alt='Person Image' 
                        width={300} 
                        height={300} 
                        priority={true}
                        className='h-auto w-48 md:w-60 lg:w-[250px] mx-auto'
                    />
                    </motion.div>
                    <h1 className='text-center text-2xl font-bold tracking-wider text-slate-800 md:text-3xl lg:text-4xl'>
                        Hi, my name is Rhoda Pickens
                    </h1>
                    <p className='text-center text-base tracking-wider text-slate-800 md:text-lg lg:text-xl'>I am a Full Stack Software Engineer 👩‍💻<br />
                        - who loves coding and building beautiful websites</p>
                </div>
                <div className='mt-8 flex justify-center gap-x-10 text-2xl text-yellow-900 md:text-4xl'>
                    {heroIcons2.map((item, i) => (
                        <a href={item.link}
                        target="_blank"
                        key={i} 
                        className='rounded-lg hover:bg-emerald-700 hover:text-white transition-colors'>
                            {item.icon}
                        </a>
                    ))}
                    
                </div>
                <a href="https://www.linkedin.com/in/rhoda-pickens/" className="mx-auto mt-7 block w-max rounded-full bg-emerald-700 px-3 py-1 font-semibold capitalize tracking-wider
                 text-white hover:bg-emerald-800 transition-colors">Connect on LinkedIn</a>
            </div>
        </div>
    )
}

export default Hero