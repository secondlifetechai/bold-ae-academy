'use client'

import { useEffect, useState } from 'react'
import LoadingSection from './_components/LoadingSection'

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [isLoaded])

  if (!isLoaded) {
    return <LoadingSection />
  }
  return <>{children}</>
}
