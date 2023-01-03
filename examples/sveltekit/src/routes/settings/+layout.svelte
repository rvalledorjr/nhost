<script>
  import { nhost } from '$src/utils/client'

  export let data

  nhost.auth.client.start({ initialSession: data.session })

  const user = nhost.auth.getUser()
</script>

<div class="flex flex-row">
  <aside class="flex-grow-0 w-72 p-4">
    <nav aria-label="Secondary navigation">
      <ul>
        <li><a href="/settings/general">General</a></li>
        <li>
          <button
            on:click={async () => {
              try {
                await nhost.auth.signOut()
              } catch (error) {
                console.log(error)
              }
            }}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main class="flex-auto p-4">
    <h1>Hello, {user?.displayName}</h1>
    <slot />
  </main>
</div>
