import { NhostProvider } from '@nhost/react'
import { QueryClientProvider } from '@tanstack/react-query'
import Authors from './components/Authors'
import { nhost } from './utils/nhost'
import { queryClient } from './utils/queryClient'

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
