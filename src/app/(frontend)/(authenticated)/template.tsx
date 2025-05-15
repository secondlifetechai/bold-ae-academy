import { redirect } from 'next/navigation'
import React, { FC, ReactNode } from 'react'
import { getUser } from './_actions/getUser'
import Navbar from './_components/Navbar'
import Footer from '../(marketing)/_components/Footer'

interface LayoutProps {
  children: ReactNode
}

const Template: FC<LayoutProps> = async ({ children }) => {
  const user = await getUser()
  if (!user) {
    redirect('/login')
    return null
  }
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Template
