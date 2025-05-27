'use client'

import { Participation } from '@/payload-types'
import TextModule from './TextModule'
import VideoModule from './VideoModule'
import FinishModule from './FinishModule'
import QuizModule from './QuizModule'

interface ModuleProps {
  module: any
  participation: Participation
  onCompleted: (nextIndex: number) => void
}

export default function CourseModule({ module, participation, onCompleted }: ModuleProps) {
  console.log('CourseModule', module, participation)

  switch (module.blockType) {
    case 'text':
      return <TextModule participation={participation} module={module} onCompleted={onCompleted} />
    case 'video':
      return <VideoModule participation={participation} module={module} onCompleted={onCompleted} />
    case 'quiz':
      return <QuizModule participation={participation} module={module} onCompleted={onCompleted} />
    case 'finish':
      return <FinishModule participation={participation} />
    default:
      return <div>Unknown module type</div>
  }
}
