import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'
import { QuizBlock } from './QuizBlock'

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
          editor: lexicalEditor({}),
          required: true,
        },
      ],
    },
    {
      name: 'quizes',
      label: 'Quizes',
      type: 'blocks',
      required: false,
      blocks: [QuizBlock],
    },
  ],
}
