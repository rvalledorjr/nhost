import { useNhostClient } from '@nhost/react'
import { useQuery } from '@tanstack/react-query'
import type { Query } from '../__generated__/nhost.generated'

export default function Authors() {
  const client = useNhostClient<Query>()
  const { data: authors, status } = useQuery(['authors'], () =>
    client.graphql.query.authors({
      select: {
        id: true,
        name: true,
        posts: true
      }
    })
  )

  if (status === 'loading') {
    return <span>Authors are loading...</span>
  }

  return (
    <div className="font-sans">
      <ul>
        {authors?.map((author) => (
          <li key={author.id}>
            {author.name} (Number of posts: {author.posts.length})
          </li>
        ))}
      </ul>
    </div>
  )
}
