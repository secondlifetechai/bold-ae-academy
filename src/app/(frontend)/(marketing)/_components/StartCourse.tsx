import Link from 'next/link'
import React from 'react'

function StartCourse() {
  return (
    <section className="pt-10 overflow-hidden bg-[#1c316a] md:pt-0 mt-2 pb-8">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pt-6 md:pt-16 flex justify-center">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="">
            <Link
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] w-72"
            >
              Commencez votre cours
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <img src="/photos/p2.png" alt="" className="w-xl" />
            <Link
              href="/about"
              className="inline-flex justify-center items-center py-3 px-5 rounded-lg bg-[#002157] w-52"
            >
              <strong className="text-slate-300 text-xl">EN SAVOIR PLUS</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartCourse
