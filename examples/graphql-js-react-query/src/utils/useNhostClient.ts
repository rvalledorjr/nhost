import { useNhostClient as useInternalNhostClient } from '@nhost/react'
import { Mutation, Query } from '../__generated__/nhost.generated'

export default function useNhostClient() {
  return useInternalNhostClient<Query, Mutation>()
}
