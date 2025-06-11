'use server'
import { getPayload } from 'payload'
import React, { Fragment, Suspense } from 'react'
import configPromise from '@payload-config'
import { Participation } from '@/payload-types'
import Link from 'next/link'
import { getUser } from '../_actions/getUser'
import { LockIcon, ScreenShareIcon } from 'lucide-react'
import ParticipationButton from './_components/ParticipationButton'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const page = async () => {
  const payload = await getPayload({ config: configPromise })

  // get the user
  const user = await getUser()

  // get courses
  let courses: any[] = []

  try {
    const coursesRes = await payload.find({
      collection: 'courses',
      limit: 10,
      overrideAccess: false,
      user: user,
      sort: 'createdAt',
    })
    courses = coursesRes.docs
  } catch (e) {
    console.log(e)
  }

  let participations: Participation[] | null = null

  try {
    const participationRes = await payload.find({
      collection: 'participation',
      where: {
        customer: {
          equals: user?.id,
        },
      },
      overrideAccess: false,
      user: user,
    })

    participations = participationRes.docs
  } catch (e) {
    console.log(e)
  }

  return (
    <section className="overflow-hidden bg-[#1c316a] pt-16 md:pt-12 pb-32 text-gray-300">
      <div className="px-8 max-w-7xl pt-6 md:pt-12 mx-auto">
        <div className="text-xl">
          Welcome <span className="text-gray-400">{user?.email}</span>
        </div>
        {participations && participations.length > 0 && (
          <div className="text-sm text-gray-400 mt-6">Your Courses</div>
        )}
        <div className="grid grid-cols-3 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            {participations?.map((participation) => {
              return <ParticipationButton participation={participation} key={participation.id} />
            })}
          </Suspense>
        </div>
        <div className="text-sm mt-6">All Courses</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            {courses?.map((course) => {
              //const imgy = course?.image?.url
              return (
                <Fragment key={course.id}>
                  {course?.curriculum?.length > 0 ? (
                    <Link
                      href={`/dashboard/course/${course.id}`}
                      className="flex flex-col gap-3 justify-center items-center"
                    >
                      <span className="text-gray-300 font-medium">
                        {course.status == 'AVAILABLE' ? 'DISPONIBLE' : 'BIENTÔT DISPONIBLE'}
                      </span>
                      <div className="bg-[#002157] p-6 px-16">
                        <img
                          src="/photos/c1.png"
                          alt={`${course.title} thumbnail`}
                          className="w-lg"
                        />
                        <div className="flex justify-between items-center mt-10">
                          <span className="text-gray-300 font-medium">{course.title}</span>
                          <ScreenShareIcon className="text-gray-300 font-light" size={40} />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div className="flex flex-col gap-3 justify-center items-center cursor-pointer">
                          <span className="text-gray-300 font-medium">
                            {course.status == 'AVAILABLE' ? 'DISPONIBLE' : 'BIENTÔT DISPONIBLE'}
                          </span>
                          <div className="bg-[#002157] p-6 px-16">
                            <img
                              src="/photos/c1.png"
                              alt={`${course.title} thumbnail`}
                              className="w-lg"
                            />
                            <div className="flex justify-between items-center mt-10">
                              <span className="text-gray-300 font-medium">{course.title}</span>
                              <LockIcon className="text-gray-300 font-light" size={40} />
                            </div>
                          </div>
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-[#002157] text-gray-200 border border-gray-800">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex justify-center">
                            <div className="flex flex-col justify-center items-center gap-3">
                              <LockIcon className="text-gray-300 font-light" size={40} />
                              BIENTÔT DISPONIBLE
                            </div>
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-gray-300">
                            Ce cours sera bientôt disponible. Restez connectés pour en savoir plus!
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-[#1c316a] text-gray-300">
                            OK
                          </AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </Fragment>
              )
            })}
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default page
