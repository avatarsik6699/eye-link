import { useMutation } from '@tanstack/vue-query'
import http from '@/shared/api/http'

namespace CreateLinkTypes {
  export type Response = {
    status: string
    data: {
      id: number
      url: string
      hash: string
    }
  }

  export type Payload = {
    url: string
  }
}

function getKey() {
  return ['link-create'] as const
}

function mutation() {
  return useMutation({
    mutationKey: getKey(),
    mutationFn: async (params: CreateLinkTypes.Payload) => {
      const { data: { data } } = await endpoint(params)

      return data
    },
  })
}

function endpoint(args: CreateLinkTypes.Payload) {
  return http<CreateLinkTypes.Response>('/link', {
    method: 'POST',
    data: {
      url: args.url,
    },
  })
}

export const useCreate = Object.assign(mutation, { getKey, endpoint })
