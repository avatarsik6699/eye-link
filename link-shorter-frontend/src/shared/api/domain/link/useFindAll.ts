import { useQuery } from '@tanstack/vue-query'
import http from '@/shared/api/http'
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/shared/constants'

namespace FindAllLinksTypes {
  export type Response = {
    status: string
    data: {
      items: Array<{
        id: number
        url: string
        hash: string
        created_at: string
        updated_at: string
      }>
      pagination_metadata: {
        current_page: number
        total_pages: number
        total_items: number
        has_next: boolean
        has_prev: boolean
        next_page: number
      }
    }
  }

  export type Payload = {
    limit?: number
    page?: number
  }
}

function getKey(args: FindAllLinksTypes.Payload = {}) {
  return ['link-find-all', args.limit, args.page] as const
}

function query<FormattedResponse = FindAllLinksTypes.Response>(
  params: {
    qp?: FindAllLinksTypes.Payload
    select?: (response: FindAllLinksTypes.Response) => FormattedResponse
  } = { qp: {} },
) {
  return useQuery({
    select: params.select,
    queryKey: getKey(params.qp),
    queryFn: async ({ queryKey: [,limit = DEFAULT_LIMIT, page = DEFAULT_PAGE] }) => {
      const { data } = await endpoint({ limit, page })

      return data
    },
  })
}

function endpoint(args: FindAllLinksTypes.Payload) {
  return http<FindAllLinksTypes.Response>('/link', {
    method: 'GET',
    params: {
      limit: args.limit,
      page: args.page,
    },
  })
}

export const useFindAll = Object.assign(query, { getKey, endpoint })
