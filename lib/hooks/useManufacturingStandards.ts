import {useQuery} from '@tanstack/react-query'
import {client} from '@/lib/sanity/client'
import {ALL_MANUFACTURING_STANDARDS_QUERY} from '@/lib/sanity/queries'
import type {ManufacturingStandard} from '@/lib/sanity/types'

export function useManufacturingStandards() {
  return useQuery({
    queryKey: ['manufacturingStandards'],
    queryFn: async () => {
      const standards = await client.fetch<ManufacturingStandard[]>(
        ALL_MANUFACTURING_STANDARDS_QUERY
      )
      return standards
    },
    staleTime: 1000 * 60 * 10,
  })
}
