import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {ALL_CATEGORIES_QUERY, CATEGORY_TREE_QUERY} from '@/lib/sanity/queries'
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

// Top-level categories with subcategories nested — used by the products page and the mega menu
export function useCategoryTree() {
  return useQuery({
    queryKey: ['categories', 'tree'],
    queryFn: async () => {
      const categories = await client.fetch<Category[]>(CATEGORY_TREE_QUERY)
      return categories
    },
    staleTime: 1000 * 60 * 10,
  })
}
