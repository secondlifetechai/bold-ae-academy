import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ContentWithMedia: Block = {
  slug: 'contentWithMedia',
  interfaceName: 'ContentWithMedia',
  labels: {
    singular: 'Content with Media Block',
    plural: 'Content with Media Blocks',
  },
  fields: [
    {
      type: 'richText',
      name: 'content',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
    },
    {
      type: 'radio',
      name: 'textPosition',
      options: ['Left', 'Right'],
    },
  ],
}
