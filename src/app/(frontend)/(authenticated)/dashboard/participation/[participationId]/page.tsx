import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getUser } from '../../../_actions/getUser'
import { Participation } from '@/payload-types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import CourseViewer from './_components/CourseViewer'

export default async function ParticipationPage({ params }: any) {
  const payload = await getPayload({ config: configPromise })

  const { participationId } = await params

  let participation: any | null = null

  // get the user
  const user = await getUser()

  try {
    const res: Participation = await payload.findByID({
      collection: 'participation',
      id: participationId,
      overrideAccess: false,
      user: user,
    })

    participation = res

    console.log('participation', participation)
  } catch (err) {
    console.error('Failed to fetch course:', err)
    return notFound()
  }

  if (!participation) return notFound()

  return (
    <section className="overflow-hidden bg-[#1c316a] pt-16 md:pt-12 pb-16 text-gray-300">
      <div className="px-8 max-w-7xl pt-6 md:pt-12 mx-auto">
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-white transition"
          >
            <HiArrowLeft className="text-lg" />
            Retour au tableau de bord
          </Link>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center pt-6">
          <strong className="text-slate-300 text-xl">{participation.course.title}</strong>
          <CourseViewer participation={participation} />
        </div>
      </div>
    </section>
  )
}
