'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, ReactElement, useState } from 'react'
import SubmitButton from '../../_components/SubmitButton'
import { login, LoginResponse } from '../_actions/login'
import Link from 'next/link'

export default function LoginForm(): ReactElement {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result: LoginResponse = await login({ email, password })

    setIsPending(false)

    if (result.success) {
      // Redirect manually after successful login
      router.push('/dashboard')
    } else {
      // Display the error message
      setError(result.error || 'Login failed')
    }
  }

  return (
    <div className="flex gap-8 min-h-full flex-col justify-center items-center text-gray-300 pt-18">
      <div className="text-2xl">Connectez-vous</div>
      <div className="w-full mx-auto sm:max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input className="w-full textInput" name="email" id="email" type="email" />
          </div>
          <div className="flex flex-col gap-2 mb-8">
            <label htmlFor="password">Mot de passes</label>
            <input className="w-full textInput" name="password" id="password" type="password" />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <div className="flex justify-center">
            <SubmitButton loading={isPending} text="Se connecter" />
          </div>
        </form>
      </div>
    </div>
  )
}
