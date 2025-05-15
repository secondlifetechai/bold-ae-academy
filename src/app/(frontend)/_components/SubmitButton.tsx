import React, { ReactElement } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function SubmitButton({
  loading,
  text,
}: {
  loading: boolean
  text: string
}): ReactElement {
  return (
    <button
      type="submit"
      className="inline-flex justify-center items-center px-6 text-xl font-bold text-center text-slate-300 rounded-full bg-[#002157] py-2 w-48 cursor-pointer"
      disabled={loading}
    >
      {text}{' '}
      <div className="h-full absolute top-0 left-2 flex items-center justify-center ">
        <AiOutlineLoading3Quarters className={`animate-spin ${loading ? 'block' : 'hidden'}`} />
      </div>
    </button>
  )
}
