# POC

1. Start Nhost locally

```sh
nhost dev
```

2. Generate the schema

```sh
pnpm run generate
```

It generates `tests/schema.ts`

3. Run the tests

```
pnpm run test
```

4. Play a bit with the api inside `tests/index.test.ts`:

```ts
const res = await client.query
  .todos({
    select: { createdAt: true, contents: true, user: { displayName: true } }
  })
  .run()

res.map(({ createdAt, contents, user: { displayName } }) => {
  console.log(`${displayName} created the following todo at ${createdAt}: ${contents}`)
})
```

### to try

- required fields e.g. userId when inserting a todo
- subscriptions
- other todos in the code
