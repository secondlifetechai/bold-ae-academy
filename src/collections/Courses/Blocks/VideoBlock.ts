import { Block } from 'payload'

export const VideoBlock: Block = {
  slug: 'video',
  labels: {
    singular: 'Video',
    plural: 'Videos',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      label: 'Dauer (in Minuten)',
      type: 'number',
      required: true,
    },
    {
      name: 'playerURL',
      label: 'Bunny Player URL',
      type: 'text',
      required: true,
    },
  ],
}
