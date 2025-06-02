import React from 'react'

type DownloadButtonProps = {
  url: string
  fileName?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url, fileName = 'download.pdf' }) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()
  }

  return (
    <button
      onClick={handleDownload}
      className="py-2 px-6 text-xl font-bold text-center text-slate-300 rounded-lg bg-[#1c316a] hover:bg-[#607cadc7] mt-2 cursor-pointer"
    >
      Télécharger le cours (PDF)
    </button>
  )
}

export default DownloadButton
