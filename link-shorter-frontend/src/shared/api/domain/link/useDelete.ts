import { useMutation } from '@tanstack/vue-query'
import http from '@/shared/api/http'

namespace DeleteLinkTypes {
  // TODO: need to fix on server side
  export type RawResponse = {
    status: string
    data: {
      ID: number
      CreatedAt: string
      UpdatedAt: string
      DeletedAt: string
      url: string
      hash: string
    }
  }

  export type Response = {
    id: number
    createdAt: string
    updatedAt: string
    deletedAt: string
    url: string
    hash: string
  }

  export type Payload = {
    linkId: number
  }
}

function getKey() {
  return ['link-delete'] as const
}

function mutation() {
  return useMutation({
    mutationKey: getKey(),
    mutationFn: async (params: DeleteLinkTypes.Payload): Promise<DeleteLinkTypes.Response> => {
      const { data: { data } } = await endpoint(params)

      return {
        id: data.ID,
        createdAt: data.CreatedAt,
        updatedAt: data.UpdatedAt,
        deletedAt: data.DeletedAt,
        url: data.url,
        hash: data.hash,
      }
    },
  })
}

function endpoint(args: DeleteLinkTypes.Payload) {
  return http<DeleteLinkTypes.RawResponse>(`/link/${args.linkId}`, {
    method: 'DELETE',
  })
}

export const useDelete = Object.assign(mutation, { getKey, endpoint })
