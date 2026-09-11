import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {SITE_SETTINGS_QUERY} from '@/lib/sanity/queries'
import type {SiteSettings} from '@/lib/sanity/types'

export function useSiteSettings() {
  return useQuery({
    queryKey: ['siteSettings'],
    queryFn: async () => {
      const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY)
      return settings
    },
    staleTime: 1000 * 60 * 60, // 1 hour - settings rarely change
  })
}
