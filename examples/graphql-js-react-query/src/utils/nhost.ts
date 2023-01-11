import { NhostClient } from '@nhost/react'
import { generatedSchema } from '../__generated__/nhost.generated'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN || 'localhost',
  region: import.meta.env.VITE_NHOST_REGION,
  generatedSchema
})

export { nhost }
