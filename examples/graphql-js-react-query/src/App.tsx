import { NhostProvider } from '@nhost/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Authors from './components/Authors'
import { nhost } from './utils/nhost'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NhostProvider nhost={nhost}>
        <Authors />
      </NhostProvider>
    </QueryClientProvider>
  )
}

export default App
