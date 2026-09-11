import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  icon?: string
  order?: number
}

export interface Brand {
  _id: string
  name: string
  slug: {
    current: string
  }
  logo: SanityImageSource
  description?: string
  categories: Category[]
  website?: string
  featured: boolean
  order?: number
}

export interface Product {
  _id: string
  name: string
  slug: {
    current: string
  }
  sku?: string
  description?: any[]
  images?: Array<{
    _key: string
    asset: SanityImageSource
    alt?: string
  }>
  brand: Brand
  categories: Category[]
  specifications?: Array<{
    label: string
    value: string
  }>
  featured: boolean
  inStock: boolean
}

export interface SiteSettings {
  title: string
  description?: string
  email?: string
  phone?: string
  address?: string
  logo?: SanityImageSource
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}
