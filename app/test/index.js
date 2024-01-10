'use client'

export default function Test() {
  return (
    <main className="container mx-auto">
      <section className="my-24 md:my-32 flex flex-col md:flex-row h-[100vh] bg-zinc-50/30 gap-8">
        <div className="h-full p-8 md:w-1/2 bg-zinc-500">
        </div>
        <div className="h-full p-8 md:w-1/2 bg-zinc-700">
        </div>
      </section>
      <section className="my-24 md:my-32 flex flex-col md:flex-row h-[100vh] bg-green-500 gap-8"></section>
      <section className="my-24 md:my-32 flex flex-col md:flex-row h-[100vh] bg-blue-500 gap-8"></section>
    </main>
  )
}
