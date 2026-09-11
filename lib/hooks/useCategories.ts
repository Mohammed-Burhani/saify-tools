import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {ALL_CATEGORIES_QUERY} from '@/lib/sanity/queries'
import type {Category} from '@/lib/sanity/types'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await client.fetch<Category[]>(ALL_CATEGORIES_QUERY)
      return categories
    },
    staleTime: 1000 * 60 * 10, // 10 minutes - categories don't change often
  })
}
