'use client'

import { useRef } from "react"
import { gsap } from "gsap-trial"
import { ScrollTrigger } from "gsap-trial/ScrollTrigger"

import useIsomorphicEffect from "@/helpers/isomorphicEffect"

export default function Home() {
  const container = useRef()

  useIsomorphicEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    // .home
    <main 
      ref={container} 
      className="relative w-full min-h-[4000px] overflow-visible border-2 border-dashed border-white-500" 
      style={{
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.07) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px), linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px", backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
    }}>
      {/* .header */}
      <div className="p-24 text-center bg-blue-400">
        {/* .title */}
        <h1>ScrollSmoother NextJS App Folder</h1>
        <p>Simple example for setting up GSAP ScrollSmoother in a NextJS App using the the experimental App folder</p>
      </div>
      <div className="hidden">
        <section className="w-[100vw] h-[100vh] will-change-transform grid grid-cols-12 gap-8">
          <div className="col-span-12 bg-purple-500 md:col-span-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget metus fermentum, rhoncus orci vitae, ullamcorper felis. Phasellus pharetra erat at ipsum varius, sed finibus diam bibendum. Nulla sed leo at augue ullamcorper placerat sed eu dui. Curabitur fermentum laoreet lectus id blandit. Etiam dolor mauris, imperdiet ac velit id, malesuada fermentum eros. Vivamus suscipit, libero non vestibulum malesuada, nunc dui hendrerit sem, feugiat lacinia sem lectus id neque. Sed augue turpis, varius eget augue sed, rutrum accumsan lectus.</p>
            <p>Ut accumsan volutpat turpis vel semper. Duis erat arcu, cursus non lorem vitae, tempus aliquet ante. Cras finibus arcu ac felis rutrum hendrerit. In hac habitasse platea dictumst. Ut non pretium felis. Nullam sed purus leo. Etiam in congue erat. Phasellus gravida nulla id velit consectetur dapibus. Cras lorem neque, ullamcorper in aliquam dictum, luctus in arcu. Nam nec orci at nibh ullamcorper vulputate et a diam. Aenean congue luctus porta. Nam interdum ullamcorper sodales. Aliquam tincidunt tempor mi ut consequat. Vivamus pharetra nibh quis mattis porta. Curabitur posuere malesuada nulla, ac dignissim massa posuere ut. Nam ut sodales magna, a mattis risus. </p>
            <p>Pellentesque id libero dui. Mauris dapibus nisi elit, et mattis augue suscipit et. Vivamus venenatis at nibh ac vestibulum. Nunc fermentum arcu sollicitudin sem mollis lobortis. Sed fringilla facilisis diam consectetur facilisis. Nam vitae molestie ligula, sit amet rhoncus tellus. Quisque ullamcorper justo libero, vitae pretium enim facilisis vel. Mauris congue tincidunt magna faucibus euismod. Pellentesque sodales euismod velit et pretium. Sed lacinia eget massa non tempus. Vestibulum blandit in orci sit amet consectetur. Etiam quam urna, pretium ut elementum eu, accumsan vel dui. </p>
          </div>
          <div className="col-span-12 bg-orange-400 md:col-span-6">
            <p> Nunc rutrum ut justo in ultricies. Suspendisse odio est, laoreet a leo eu, ultricies lobortis odio. Nullam ut ultricies orci, vel feugiat nunc. Pellentesque sollicitudin, mauris nec tempor mollis, magna arcu sagittis lectus, nec malesuada nisl orci non ligula. Suspendisse placerat magna tortor, ut commodo nisi blandit a. In rhoncus nisi lorem, at consectetur lectus ullamcorper sit amet. Aenean ornare maximus convallis. Etiam dignissim efficitur euismod. Ut blandit gravida risus, nec euismod erat ultricies sed.</p>
            <p> Maecenas maximus ut enim eget cursus. Phasellus condimentum tristique diam, ultricies ultrices erat tristique quis. Curabitur non erat eget felis vestibulum egestas rutrum quis purus. Maecenas eget orci ac augue rutrum tincidunt et sit amet sem. In lobortis congue faucibus. Vestibulum varius nisi quis lacus pretium faucibus. Integer ut dui porttitor, venenatis quam vitae, sollicitudin risus. Maecenas laoreet, lorem id imperdiet cursus, dui metus hendrerit ligula, et placerat augue lacus et est. Phasellus nec justo rutrum ex vestibulum aliquet quis eu quam. Maecenas viverra felis vitae malesuada hendrerit. Fusce lectus orci, lacinia sit amet felis eu, mattis scelerisque mauris. Cras tempus, dolor sed aliquet tincidunt, purus urna tempus risus, non tempus velit libero a nulla. Quisque ut tristique justo. Vivamus eleifend turpis vel congue vulputate.</p>
            <p> Maecenas in luctus orci, ac sollicitudin leo. Suspendisse vel elit non libero pharetra tempus. Pellentesque dapibus sagittis nunc, at interdum dui tempus quis. Aenean eleifend fringilla eros non porta. Sed sit amet tincidunt ante. Curabitur facilisis enim ac purus posuere, vulputate facilisis tortor suscipit. Proin tellus mi, efficitur ac consequat eget, fringilla id magna. Morbi mauris erat, vehicula quis gravida eleifend, ullamcorper a purus. Duis sed ante nulla. Proin pharetra augue a nisi vehicula tristique.</p>
          </div>
        </section>
      </div>
      <section className="w-24 h-24 absolute left-1/2 -translate-x-1/2 z-10 will-change-transform box-a top-[200px] bg-[#8d3dae] text-center" data-speed="0.5">
        <p className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">a</p>
      </section>
      <section className="w-24 h-24 absolute left-1/2 -translate-x-1/2 z-10 will-change-transform box-b bg-[#28a92b] top-[600px] text-center" data-speed="0.8">
        <p className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">b</p>
      </section>
      <section className="w-24 h-24 absolute left-1/2 -translate-x-1/2 z-10 will-change-transform box-c bg-[#e26c16] top-[1000px] text-center" data-speed="1.5">
        <p className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">c</p>
      </section>
      <section className="hidden w-24 h-24 absolute left-1/2 -translate-x-1/2 z-10 will-change-transform box-c bg-blue-400 top-[2000px] text-center" data-speed="1.5">
        <p className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">c</p>
      </section>
      
      <section className="w-full h-[500px] absolute top-[1600px] bg-teal-500" />
      <section className="w-full h-[500px] bg-rose-500 absolute top-[2400px]" />

      {/* .line */}
      <div className="hidden w-1 h-[4000px] absolute left-[400px] top-0 bg-[#777]"></div>
    </main>
  )
}
