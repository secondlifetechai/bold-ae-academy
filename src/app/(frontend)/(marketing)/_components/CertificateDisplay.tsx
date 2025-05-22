import { LockIcon, ScreenShareIcon } from 'lucide-react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React, { Fragment, Suspense } from 'react'
import Link from 'next/link'
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

const CertificateDisplay = async () => {
  const payload = await getPayload({ config: configPromise })

  let courses: any[] = []

  try {
    const coursesRes = await payload.find({
      collection: 'courses',
      limit: 10,
      overrideAccess: false,
      sort: 'createdAt',
    })
    courses = coursesRes.docs
  } catch (e) {
    console.log(e)
  }

  return (
    <section className="overflow-hidden bg-[#1c316a] mt-2 pb-28">
      <div className="px-8 max-w-7xl pt-6 md:pt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {courses.map((course) => {
              const imgg = course?.image?.url
              return (
                <Fragment key={course.id}>
                  {course?.curriculum?.length > 0 ? (
                    <Link
                      href={`/dashboard/course/${course.id}`}
                      className="flex flex-col gap-3 justify-center items-center"
                    >
                      <span className="text-gray-300 font-medium">
                        {course.status == 'AVAILABLE' ? 'DISPONIBLE' : 'DISPONIBLE BIENTÔT'}
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
                            {course.status == 'AVAILABLE' ? 'DISPONIBLE' : 'DISPONIBLE BIENTÔT'}
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
                              DISPONIBLE BIENTÔT
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

export default CertificateDisplay
