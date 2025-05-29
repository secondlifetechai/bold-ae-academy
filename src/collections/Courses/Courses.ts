import type { CollectionConfig } from 'payload'
import { TextBlock } from './Blocks/TextBlock'
import { FinishBlock } from './Blocks/FinishBlock'
import { QuizBlock } from './Blocks/QuizBlock'
import { VideoBlock } from './Blocks/VideoBlock'

export const Courses: CollectionConfig = {
  slug: 'courses',
  access: {
    read: () => {
      return true
    },
    create: ({ req: { user } }) => {
      return user?.collection === 'users'
    },
    update: ({ req: { user } }) => {
      return user?.collection === 'users'
    },
    delete: ({ req: { user } }) => {
      return user?.collection === 'users'
    },
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'dowload',
      label: 'Download',
      type: 'relationship',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      required: true,
    },
    {
      name: 'curriculum',
      label: 'Curriculum',
      type: 'blocks',
      required: false,
      blocks: [TextBlock, VideoBlock, QuizBlock, FinishBlock],
    },
  ],
}
