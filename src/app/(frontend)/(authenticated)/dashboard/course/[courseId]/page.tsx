import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'
import { getUser } from '../../../_actions/getUser'
import { Course, Participation } from '@/payload-types'
import { notFound } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import ParticipationButton from '../../_components/ParticipationButton'
import StartCourseButton from './_components/StartCourseButton'

interface CoursePageProps {
  params: { courseId: string }
}

const CoursePage = async ({ params }: any) => {
  const payload = await getPayload({ config: configPromise })

  const { courseId } = await params

  let course: Course | null = null

  // get the user
  const user = await getUser()

  try {
    const res: Course = await payload.findByID({
      collection: 'courses',
      id: courseId,
      overrideAccess: false,
      user: user,
    })

    course = res
  } catch (err) {
    console.error('Failed to fetch course:', err)
    return notFound()
  }

  // check if participation exists
  const participationResult = await payload.find({
    collection: 'participation',
    where: {
      course: {
        equals: courseId,
      },
      customer: {
        equals: user?.id,
      },
    },
    overrideAccess: false,
    user: user,
  })

  const participation: Participation | undefined = participationResult.docs[0]

  if (!course) return notFound()

  return (
    <section className="overflow-hidden bg-[#1c316a] pt-16 md:pt-12 pb-16 text-gray-300">
      <div className="px-8 max-w-7xl pt-6 md:pt-12 mx-auto">
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition"
          >
            <HiArrowLeft className="text-lg" />
            Back to Dashboard
          </Link>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center pt-10">
          <strong className="text-slate-300 text-xl">{course.title}</strong>
          <div className="flex flex-col gap-5 w-3xl md:w-full mt-3">
            {course?.curriculum?.map((block, idx) => {
              if (block.blockType === 'text') {
                return (
                  <div
                    key={idx}
                    className={`flex justify-between w-1/2 mx-auto text-gray-300 text-2xl ${course?.curriculum && idx == course?.curriculum?.length - 1 ? '' : 'border-0 border-b-2 border-b-gray-400 py-3'}`}
                  >
                    <div>{block.title}</div>
                    <strong>
                      <ChevronDown className="font-bold text-gray-200" size={30} />
                    </strong>
                  </div>
                )
              }
            })}
          </div>
        </div>

        <div className="flex justify-center items-center mt-3">
          {participation ? (
            <div className="w-72">
              <ParticipationButton participation={participation} />
            </div>
          ) : (
            <StartCourseButton courseId={course.id} />
          )}
        </div>
      </div>
    </section>
  )
}

export default CoursePage
