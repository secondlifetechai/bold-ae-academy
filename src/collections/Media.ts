import path from 'path'
import type { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    mimeTypes: ['image/*', 'application/pdf'], // Allow images and PDFs
  },
}
