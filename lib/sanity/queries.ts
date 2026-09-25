// Category Queries
export const ALL_CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  _id,
  name,
  slug,
  description,
  image,
  order,
  parent-> {
    _id,
    name,
    slug
  }
}`

// Top-level categories with their subcategories nested, for the mega menu and products page
export const CATEGORY_TREE_QUERY = `*[_type == "category" && !defined(parent)] | order(order asc) {
  _id,
  name,
  slug,
  description,
  image,
  order,
  "subcategories": *[_type == "category" && references(^._id)] | order(order asc) {
    _id,
    name,
    slug,
    description,
    image,
    order
  }
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

// Manufacturing Standards Query
export const ALL_MANUFACTURING_STANDARDS_QUERY = `*[_type == "manufacturingStandard"] | order(order asc) {
  _id,
  code,
  description,
  specSheet {
    asset-> {
      _id,
      url,
      originalFilename
    }
  },
  order
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
