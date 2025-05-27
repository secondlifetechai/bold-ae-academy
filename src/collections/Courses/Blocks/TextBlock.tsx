import { ContentWithMedia } from '@/blocks/ContentWithMedia/config'
import { TableOfContents } from '@/blocks/TableOfContents/config'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'text',
  labels: {
    singular: 'Text',
    plural: 'Texts',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'topics',
      label: 'Topics',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'topic',
          label: 'Topic',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              BlocksFeature({
                blocks: [ContentWithMedia, TableOfContents],
              }),
              FixedToolbarFeature(),
            ],
          }),
          required: true,
        },
        {
          name: 'blocks',
          type: 'blocks',
          blocks: [ContentWithMedia, TableOfContents],
        },
      ],
    },
  ],
}
