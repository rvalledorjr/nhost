import { useNhostClient } from '@nhost/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { FormEvent } from 'react'
import { queryClient } from '../utils/queryClient'
import type {
  AuthorsPayload,
  InsertAuthorsOneArgs,
  Mutation,
  Query
} from '../__generated__/nhost.generated'

export default function Authors() {
  const client = useNhostClient<Query, Mutation>()
  const { data: authors, status } = useQuery(['authors'], () =>
    client.graphql.query.authors({
      select: {
        id: true,
        name: true,
        age: true,
        posts: {
          select: {
            id: true,
            title: true
          }
        }
      }
    })
  )

  const {
    mutateAsync,
    status: mutationStatus,
    error
  } = useMutation<AuthorsPayload<InsertAuthorsOneArgs>, unknown, InsertAuthorsOneArgs>(
    client.graphql.mutation.insertAuthorsOne
  )

  if (status === 'loading') {
    return <span>Loading authors...</span>
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!(event.target instanceof HTMLFormElement)) {
      return
    }

    const nameInput = event.target.children.namedItem('name') as HTMLInputElement
    const ageInput = event.target.children.namedItem('age') as HTMLInputElement

    const name = nameInput.value
    const age = parseInt(ageInput.value, 10)

    const insertedAuthor = await mutateAsync({
      variables: {
        object: {
          name,
          age
        }
      },
      select: {
        id: true
      }
    })

    await queryClient.invalidateQueries(['authors'])

    event.target.reset()
    nameInput.focus()
  }

  return (
    <div className="font-sans">
      <form onSubmit={handleSubmit}>
        <input id="name" name="name" placeholder="Name" aria-label="Name" />
        <input id="age" name="age" placeholder="Age" aria-label="Age" type="number" />

        <button type="submit">Add</button>
      </form>

      {mutationStatus === 'loading' && <span>Adding author...</span>}
      {mutationStatus === 'error' && (
        <span>{(error as Error)?.message || 'An unknown error occurred.'}</span>
      )}

      <ul>
        {authors?.map((author) => (
          <li key={author.id}>
            {author.name} (Age: {author.age})<br />
            {author.posts.length === 0 && <span>No posts are available for this author.</span>}
            {author.posts.length > 0 && (
              <ul>
                {author.posts.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
