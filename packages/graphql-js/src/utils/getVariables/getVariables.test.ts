import { expect, test } from 'vitest'
import getVariables from './getVariables'

test('should return an empty object if no variables are passed', () => {
  expect(
    getVariables({ field: { name: 'authors', type: 'authors' } }),
  ).toStrictEqual({})
})

test('should return the variables if some variables are passed', () => {
  expect(
    getVariables({
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            name: {
              _eq: 'John Doe',
            },
          },
        },
      },
    }),
  ).toMatchObject({
    where: {
      name: {
        _eq: 'John Doe',
      },
    },
  })
})

test('should return dynamic variable names if there are nested selections', () => {
  expect(
    getVariables({
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            name: {
              _eq: 'John Doe',
            },
          },
        },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                title: {
                  _eq: 'Test Post',
                },
              },
            },
          },
        },
      },
    }),
  ).toMatchObject({
    authorsWhere: {
      name: {
        _eq: 'John Doe',
      },
    },
    authorsPostsWhere: {
      title: {
        _eq: 'Test Post',
      },
    },
  })

  console.log(
    getVariables({
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            name: {
              _eq: 'John Doe',
            },
          },
        },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                title: {
                  _eq: 'Test Post',
                },
              },
            },
            select: {
              author: {
                select: {
                  posts: {
                    variables: {
                      where: {
                        title: {
                          _eq: 'Nested Test Post',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
  )

  expect(
    getVariables({
      field: { name: 'authors', type: 'authors' },
      args: {
        variables: {
          where: {
            name: {
              _eq: 'John Doe',
            },
          },
        },
        select: {
          id: true,
          posts: {
            variables: {
              where: {
                title: {
                  _eq: 'Test Post',
                },
              },
            },
            select: {
              author: {
                select: {
                  posts: {
                    variables: {
                      where: {
                        title: {
                          _eq: 'Nested Test Post',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }),
  ).toMatchObject({
    authorsWhere: {
      name: {
        _eq: 'John Doe',
      },
    },
    authorsPostsWhere: {
      title: {
        _eq: 'Test Post',
      },
    },
    authorsPostsAuthorPostsWhere: {
      title: {
        _eq: 'Nested Test Post',
      },
    },
  })
})
