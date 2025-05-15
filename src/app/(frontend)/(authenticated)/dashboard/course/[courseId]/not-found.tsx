import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import React from 'react'

const NotFound = () => {
  return (
    <section className="overflow-hidden bg-[#1c316a] pt-16 md:pt-16 pb-32 text-gray-300 ">
      <div className="px-8 max-w-7xl pt-6 md:pt-12 mx-auto">
        <div className="flex flex-col justify-center items-center mt-8 gap-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Uh-oh! Page not found 🕵️‍♂️</h1>
          <p className="text-gray-400 mb-6">
            Looks like you took a wrong turn. But no worries — you can head back to safer ground!
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#002157] text-white font-semibold rounded hover:bg-[#002157a8] transition"
          >
            <HiArrowLeft className="text-lg" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
