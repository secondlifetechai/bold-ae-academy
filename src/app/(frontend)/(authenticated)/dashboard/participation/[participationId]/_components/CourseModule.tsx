'use client'

import { Participation } from '@/payload-types'
import TextModule from './TextModule'

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
    case 'finish':
      return 'Finish Module'
    default:
      return <div>Unknown module type</div>
  }
}
