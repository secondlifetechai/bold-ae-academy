'use client'

import React, { useState } from 'react'
import { HiPencilAlt, HiVideoCamera } from 'react-icons/hi'
import { ChevronDown, ChevronUp } from 'lucide-react'

export const ChooseBlock = ({ course }: any) => {
  const [currentIndex, setCurrentIndex] = useState(-1)

  function handleIndex(ind: number) {
    setCurrentIndex(ind)
  }

  return (
    <div className="flex flex-col gap-5 w-3xl md:w-full mt-3">
      {course?.curriculum?.map((block: any, idx: number) => {
        if (block.blockType === 'text') {
          return (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`flex justify-between w-1/2 mx-auto text-gray-300 text-2xl ${course?.curriculum && idx == course?.curriculum?.length - 1 ? '' : 'border-0 border-b-2 border-b-gray-400 py-3'}`}
              >
                <div>{block.title}</div>
                {currentIndex === idx ? (
                  <strong className="cursor-pointer" onClick={() => handleIndex(-1)}>
                    <ChevronUp className="font-bold text-gray-200" size={30} />
                  </strong>
                ) : (
                  <strong className="cursor-pointer" onClick={() => handleIndex(idx)}>
                    <ChevronDown className="font-bold text-gray-200" size={30} />
                  </strong>
                )}
              </div>
              <div
                className={`flex flex-col gap-6 justify-center bg-[#002157] w-1/2 mx-auto px-10 py-10 ${currentIndex === idx ? '' : 'hidden'}`}
              >
                {block.topics.map((topic: any, i: number) => {
                  return (
                    <div key={i} className="font-medium text-xl">
                      {topic.topic}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }

        if (block.blockType === 'video') {
          return (
            <div key={idx} className="p-4 border border-gray-700 bg-gray-900 mt-8">
              <div className="text-teal-400 font-medium flex items-center gap-2">
                <HiVideoCamera className="text-xl" />
                Video: {block.title}
              </div>
              <div className="text-sm text-gray-400">Duration: {block.duration} min</div>
            </div>
          )
        }

        if (block.blockType === 'quiz') {
          return (
            <div key={idx} className="p-4 border border-gray-700 bg-gray-900">
              <div className="text-yellow-400 font-medium flex items-center gap-2">
                <HiPencilAlt className="text-xl" />
                Quiz: {block.title}
              </div>
              <div className="text-sm text-gray-400">Questions: {block.questions?.length || 0}</div>
            </div>
          )
        }
      })}
    </div>
  )
}
