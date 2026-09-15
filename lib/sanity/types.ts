export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  image?: any
  order?: number
}

export interface Brand {
  _id: string
  name: string
  slug: {
    current: string
  }
  logo: any
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
    asset: any
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
  logo?: any
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}
