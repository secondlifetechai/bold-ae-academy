import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const courses = [
  {
    id: '1',
    name: 'Marché local',
  },
  {
    id: '2',
    name: "Processus d'achat",
  },
  {
    id: '3',
    name: 'Fiscalité Fiscalité',
  },
  {
    id: '4',
    name: 'Zones clés',
  },
  {
    id: '5',
    name: 'Vente à distance',
  },
  {
    id: '6',
    name: 'Outils pro suivi client',
  },
]

const CourseMenu = () => {
  return (
    <section className="overflow-hidden bg-[#1c316a] mt-2 pb-3">
      <div className="flex flex-col gap-3 justify-center items-center pt-10">
        <div className="text-gray-300 font-bold text-3xl">Notions du cours</div>
        <div className="flex flex-col gap-5 w-3xl md:w-full">
          {courses.map((course, i) => (
            <div
              key={course.id}
              className={`flex justify-between w-1/2 mx-auto text-gray-300 text-2xl ${i == courses.length - 1 ? '' : 'border-0 border-b-2 border-b-gray-400 py-3'}`}
            >
              <div>{course.name}</div>
              <strong>
                <ChevronDown className="font-bold text-gray-200" size={30} />
              </strong>
            </div>
          ))}
        </div>
        <Link
          href="/#contact"
          className="inline-flex justify-center items-center py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] mt-4"
        >
          Commencer
        </Link>
      </div>
    </section>
  )
}

export default CourseMenu
