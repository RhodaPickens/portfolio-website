'use client'

import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Reviews from "@/components/Reviews"
import Projects from "@/components/Projects"
import Navbar from "@/components/Navbar"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [id, setId] = useState(0)
  const compsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver( // keeps track of what is visible and highlights it in navbar
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting
          if(intersecting) {
            setId(entry.target.id)  
          }
        })
      },
      { threshold: 0.3 },
    )

    const compsArr = Array.from(compsRef.current.children)
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })
  }, [])

  return (
  <>
    <Navbar id={id} />
    <div ref={compsRef}>  
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Reviews />
    </div>
  </>
  )
}

