import React, { ReactElement } from 'react'
import LoginForm from './_components/LoginForm'
import Header from '../(marketing)/_components/Header'
import Footer from '../(marketing)/_components/Footer'

export default async function page(): Promise<ReactElement> {
  return (
    <div className="h-[calc(100vh-2rem)] bg-[#1c316a]">
      <Header />
      <LoginForm></LoginForm>
      <Footer />
    </div>
  )
}
