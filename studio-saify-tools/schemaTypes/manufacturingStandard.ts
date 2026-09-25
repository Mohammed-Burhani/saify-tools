import {defineField, defineType} from 'sanity'
import type {Rule} from 'sanity'

export default defineType({
  name: 'manufacturingStandard',
  title: 'Manufacturing Standard / Grade',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Standard / Grade Code',
      type: 'string',
      description: 'e.g. IS 1367, ASTM A193 B7, Grade 8.8',
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Optional short note about this standard or grade.',
    }),
    defineField({
      name: 'specSheet',
      title: 'Spec Sheet (PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Optional downloadable specification sheet or certificate.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'description',
      hasSpec: 'specSheet.asset',
    },
    prepare({title, subtitle, hasSpec}: {title: string; subtitle?: string; hasSpec?: unknown}) {
      return {
        title,
        subtitle: hasSpec ? `${subtitle ?? ''} · PDF attached`.trim() : subtitle,
      }
    },
  },
})
