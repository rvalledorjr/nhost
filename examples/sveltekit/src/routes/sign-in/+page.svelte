<script lang="ts">
  import { nhost } from '$src/utils/client'

  let error: string | null = null

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    if (event.target instanceof HTMLFormElement) {
      const inputs = event.target.getElementsByTagName('input')

      const emailInput = inputs.namedItem('email')
      const passwordInput = inputs.namedItem('password')

      if (!emailInput?.value || !passwordInput?.value) {
        return
      }

      if (!nhost.auth.client.started) {
        nhost.auth.client.start()
      }

      const response = await nhost.auth.signIn({
        email: emailInput.value,
        password: passwordInput.value
      })

      if (response.error) {
        error = response.error.message

        return
      }
    }
  }
</script>

<h1 class="text-xl mb-4 font-medium">Sign In</h1>

{#if error}
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">{error}</span>
  </div>
{/if}

<form method="POST" action="/sign-in" class="grid grid-flow-row gap-2 max-w-sm w-full">
  <div class="grid grid-flow-row gap-1">
    <label for="email" class="opacity-70">Email</label>
    <input type="email" id="email" name="email" placeholder="Email" />
  </div>

  <div class="grid grid-flow-row gap-1">
    <label for="password" class="opacity-70">Password</label>
    <input type="password" id="password" name="password" placeholder="Password" />
  </div>

  <button type="submit">Sign In</button>
</form>
