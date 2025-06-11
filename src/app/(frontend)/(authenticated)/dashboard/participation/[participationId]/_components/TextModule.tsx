'use client'

import { useEffect, useState } from 'react'
import { markProgress } from '../_actions/markProgress'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import NextButton from './NextButton'
import { RichText } from '@/components/RichText'
import DownloadButton from '../../../course/[courseId]/_components/DownloadButton'

export default function TextModule({
  module,
  participation,
  onCompleted,
}: {
  module: any
  participation: any
  onCompleted: (nextIndex: number) => void
}) {
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadMedia = participation?.course?.download

  async function handleNextModule() {
    setLoading(true)
    try {
      const updatedParticipation = await markProgress(participation)
      if (updatedParticipation && updatedParticipation.progress) {
        onCompleted(updatedParticipation.progress)
      } else {
        console.error('Failed to update participation progress')
      }
    } catch (error) {
      console.error('Error marking progress:', error)
    } finally {
      setLoading(false)
    }
  }

  function handleCurrent() {
    const lnt = module?.topics?.length - 1
    if (current < lnt) {
      setCurrent(current + 1)
    }
  }

  function handleNextCurrent() {
    const lnt = module?.topics?.length - 1
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  if (!isClient) {
    return (
      <section className="overflow-hidden bg-[#1c316a] pb-3">
        <div className="flex flex-col gap-3 justify-center items-center pt-5">
          <div className="text-gray-300 font-semibold text-3xl border-b-2 border-b-gray-300 pb-2">
            LOADING...
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="overflow-hidden bg-[#1c316a] pb-3">
      <div className="flex flex-col gap-3 justify-center items-center pt-5">
        <div className="text-gray-300 font-semibold text-3xl border-b-2 border-b-gray-300 pb-2">
          {module.title}
        </div>

        <Tabs defaultValue="content" className="">
          <TabsList className="self-center bg-[#002157]">
            <TabsTrigger value="content" className="cursor-pointer">
              Contenu
            </TabsTrigger>
            <TabsTrigger value="download" className="cursor-pointer">
              Télécharger
            </TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            {module?.topics?.map((tp: any, i: number) => {
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-3 bg-[#002157] py-6 px-8 mx-6 md:mx-36 text-gray-300 pb-14 mt-3 ${current == i ? '' : 'hidden'}`}
                >
                  <div className="font-medium text-xl mb-3 text-center">{tp.topic}</div>

                  <div>
                    <RichText data={tp?.content} />
                  </div>
                </div>
              )
            })}

            <div className="flex justify-center gap-24 items-center">
              <Button
                onClick={handleNextCurrent}
                className="py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] hover:bg-[#0021578f] mt-2 cursor-pointer"
              >
                Précédente
              </Button>

              <Button
                onClick={handleCurrent}
                className="py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#002157] hover:bg-[#0021578f] mt-2 cursor-pointer"
              >
                Suivant
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="download">
            <div
              className={`flex justify-center items-center bg-[#002157] py-6 px-96 text-gray-300 pb-14 mt-3 h-72 mx-auto`}
            >
              <div className="font-medium text-xl mb-3 text-center">
                {downloadMedia?.url && (
                  <DownloadButton
                    url={`${process.env.BASE_URL}${downloadMedia.url}`} // or your production Payload URL
                    fileName={downloadMedia.filename || 'download.pdf'}
                  />
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="flex justify-between mt-10">
        <div></div>
        <NextButton loading={loading} text="Section suivante" onClick={handleNextModule} />
      </div>
    </section>
  )
}
