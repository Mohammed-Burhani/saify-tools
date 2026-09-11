import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {
  ALL_PRODUCTS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  PRODUCTS_BY_BRAND_QUERY,
  FEATURED_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
} from '@/lib/sanity/queries'
import type {Product} from '@/lib/sanity/types'

export function useAllProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const products = await client.fetch<Product[]>(ALL_PRODUCTS_QUERY)
      return products
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useProductsByCategory(categoryId: string) {
  return useQuery({
    queryKey: ['products', 'category', categoryId],
    queryFn: async () => {
      const products = await client.fetch<Product[]>(PRODUCTS_BY_CATEGORY_QUERY, {categoryId})
      return products
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!categoryId,
  })
}

export function useProductsByBrand(brandId: string) {
  return useQuery({
    queryKey: ['products', 'brand', brandId],
    queryFn: async () => {
      const products = await client.fetch<Product[]>(PRODUCTS_BY_BRAND_QUERY, {brandId})
      return products
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!brandId,
  })
}

export function useFeaturedProducts() {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const products = await client.fetch<Product[]>(FEATURED_PRODUCTS_QUERY)
      return products
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}

export function useProductBySlug(slug: string) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const product = await client.fetch<Product>(PRODUCT_BY_SLUG_QUERY, {slug})
      return product
    },
    staleTime: 1000 * 60 * 10,
    enabled: !!slug,
  })
}
