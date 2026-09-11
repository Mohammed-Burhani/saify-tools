// Category Queries
export const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  icon,
  order
}`

// Brand Queries
export const ALL_BRANDS_QUERY = `*[_type == "brand"] | order(order asc) {
  _id,
  name,
  slug,
  logo,
  description,
  categories[]-> {
    _id,
    name,
    slug
  },
  website,
  featured,
  order
}`

export const BRANDS_BY_CATEGORY_QUERY = `*[_type == "brand" && references($categoryId)] | order(order asc) {
  _id,
  name,
  slug,
  logo,
  description,
  categories[]-> {
    _id,
    name,
    slug
  },
  website,
  featured,
  order
}`

export const FEATURED_BRANDS_QUERY = `*[_type == "brand" && featured == true] | order(order asc) {
  _id,
  name,
  slug,
  logo,
  description,
  categories[]-> {
    _id,
    name,
    slug
  },
  website,
  order
}`

export const BRAND_BY_SLUG_QUERY = `*[_type == "brand" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  logo,
  description,
  categories[]-> {
    _id,
    name,
    slug
  },
  website,
  featured,
  order
}`

// Product Queries
export const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  sku,
  description,
  images,
  brand-> {
    _id,
    name,
    slug,
    logo
  },
  categories[]-> {
    _id,
    name,
    slug
  },
  specifications,
  featured,
  inStock
}`

export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && references($categoryId)] | order(_createdAt desc) {
  _id,
  name,
  slug,
  sku,
  description,
  images,
  brand-> {
    _id,
    name,
    slug,
    logo
  },
  categories[]-> {
    _id,
    name,
    slug
  },
  specifications,
  featured,
  inStock
}`

export const PRODUCTS_BY_BRAND_QUERY = `*[_type == "product" && references($brandId)] | order(_createdAt desc) {
  _id,
  name,
  slug,
  sku,
  description,
  images,
  brand-> {
    _id,
    name,
    slug,
    logo
  },
  categories[]-> {
    _id,
    name,
    slug
  },
  specifications,
  featured,
  inStock
}`

export const FEATURED_PRODUCTS_QUERY = `*[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
  _id,
  name,
  slug,
  sku,
  description,
  images,
  brand-> {
    _id,
    name,
    slug,
    logo
  },
  categories[]-> {
    _id,
    name,
    slug
  },
  specifications,
  featured,
  inStock
}`

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  sku,
  description,
  images,
  brand-> {
    _id,
    name,
    slug,
    logo
  },
  categories[]-> {
    _id,
    name,
    slug
  },
  specifications,
  featured,
  inStock
}`

// Site Settings Query
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  title,
  description,
  email,
  phone,
  address,
  logo,
  socialMedia
}`
