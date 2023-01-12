import { useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from '../utils/queryClient'
import useNhostClient from '../utils/useNhostClient'
import CreateAuthorForm, { CreateAuthorFormValues } from './CreateAuthorForm'

function useInsertAuthorsOneMutation() {
  const client = useNhostClient()
  const mutation = useMutation(
    (args: Parameters<typeof client.graphql.mutation.insertAuthorsOne>[0]) =>
      client.graphql.mutation.insertAuthorsOne(args)
  )

  // Note: This is a temporary workaround to allow dynamic typing for the
  // mutateAsync function
  return {
    ...mutation,
    mutateAsync: mutation.mutateAsync as typeof client.graphql.mutation.insertAuthorsOne
  }
}

export default function Authors() {
  const client = useNhostClient()
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

  const { mutateAsync, status: mutationStatus, error } = useInsertAuthorsOneMutation()

  if (status === 'loading') {
    return <span>Loading authors...</span>
  }

  if (status === 'error') {
    return <span>Authors could not be fetched.</span>
  }

  async function handleSubmit({ name, age }: CreateAuthorFormValues) {
    await mutateAsync({
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
  }

  return (
    <div className="font-sans">
      <CreateAuthorForm onSubmit={handleSubmit} />

      {mutationStatus === 'loading' && <span>Adding author...</span>}
      {mutationStatus === 'error' && (
        <span>{(error as Error)?.message || 'An unknown error occurred.'}</span>
      )}

      <ul>
        {authors?.map((author) => (
          <li key={author.id}>
            {author.name} (Age: {author.age})<br />
            {author.posts.length === 0 && <span>This author doesn&apos;t have any posts.</span>}
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
