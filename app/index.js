'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap-trial'
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger'
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother'

import useIsomorphicEffect from "@/helpers/isomorphicEffect"

export default function ScrollSmootherComponent({ children }) {
  const smoother = useRef()
  const ctx = useRef()
  const pathname = usePathname()

  useIsomorphicEffect(() => {
    gsap.config({trialWarn: false})
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ctx.current = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      })
    })

    return () => ctx.current.revert()
  }, [pathname])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  )
}
