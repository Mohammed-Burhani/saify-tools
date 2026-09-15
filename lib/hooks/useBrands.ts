import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {
  ALL_BRANDS_QUERY,
  BRANDS_BY_CATEGORY_QUERY,
  FEATURED_BRANDS_QUERY,
  BRAND_BY_SLUG_QUERY,
} from '@/lib/sanity/queries'
import type {Brand} from '@/lib/sanity/types'

export function useAllBrands() {
  return useQuery({
    queryKey: ['brands'],
    queryFn: async () => {
      const brands = await client.fetch<Brand[]>(ALL_BRANDS_QUERY)
      return brands
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

// Alias for backward compatibility
export const useBrands = useAllBrands

export function useBrandsByCategory(categoryId: string | null) {
  return useQuery({
    queryKey: ['brands', 'category', categoryId],
    queryFn: async () => {
      if (!categoryId) {
        return client.fetch<Brand[]>(ALL_BRANDS_QUERY)
      }
      const brands = await client.fetch<Brand[]>(BRANDS_BY_CATEGORY_QUERY, {categoryId})
      return brands
    },
    staleTime: 1000 * 60 * 5,
    enabled: true,
  })
}

export function useFeaturedBrands() {
  return useQuery({
    queryKey: ['brands', 'featured'],
    queryFn: async () => {
      const brands = await client.fetch<Brand[]>(FEATURED_BRANDS_QUERY)
      return brands
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useBrandBySlug(slug: string) {
  return useQuery({
    queryKey: ['brand', slug],
    queryFn: async () => {
      const brand = await client.fetch<Brand>(BRAND_BY_SLUG_QUERY, {slug})
      return brand
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!slug,
  })
}
