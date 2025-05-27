import { Course, Participation } from '@/payload-types'
import axios from 'axios'
import { useState } from 'react'
import NextButton from './NextButton'

export default function FinishModule({ participation }: { participation: Participation }) {
  const [loading, setLoading] = useState(false)

  async function handlePrint() {
    setLoading(true)
    try {
      const course: Course = participation.course as Course

      const resp = await axios.get(`/printCertificate/${participation.id}`, {
        responseType: 'blob', // THIS is very important, because we need Blob object in order to download PDF
      })
      const url = window.URL.createObjectURL(resp.data)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `Certificate_${course.title.replace(' ', '_')}.pdf`)
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      console.error('Error printing certificate:', error)
    }
    setLoading(false)
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Congratulations!</h1>
      <p>You have completed the course.</p>
      <NextButton text="Download Certificate" onClick={handlePrint} loading={loading} />
    </div>
  )
}
