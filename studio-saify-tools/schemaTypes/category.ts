import {defineField, defineType} from 'sanity'
import type {Rule} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: {type: 'category'},
      description: 'Leave empty for a top-level category. Set this to make it a subcategory.',
      options: {
        filter: ({document}) => ({
          filter: '_type == "category" && !defined(parent) && _id != $id',
          params: {id: document._id.replace('drafts.', '')},
        }),
      },
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image representing this category',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which the category should appear',
      validation: (Rule: Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      parentName: 'parent.name',
      media: 'image',
    },
    prepare({title, parentName, media}: {title: string; parentName?: string; media: any}) {
      return {
        title,
        subtitle: parentName ? `Subcategory of ${parentName}` : 'Top-level category',
        media,
      }
    },
  },
})
