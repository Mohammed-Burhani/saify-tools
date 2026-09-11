import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: 'm6p12k52',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-01-01', // use current date (YYYY-MM-DD) to target the latest API version
})

// Helper function to generate image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
