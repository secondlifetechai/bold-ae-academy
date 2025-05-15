import React, { ReactElement } from 'react'
import SignupForm from './_components/SignupForm'
import Header from '../(marketing)/_components/Header'
import Footer from '../(marketing)/_components/Footer'

export default async function Page(): Promise<ReactElement> {
  return (
    <div className="h-[calc(100vh-3rem)] bg-[#1c316a]">
      <Header />
      <SignupForm />
      <Footer />
    </div>
  )
}
