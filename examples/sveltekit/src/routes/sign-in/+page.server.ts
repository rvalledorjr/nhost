import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
  'sign-in': async (event) => {
    console.log(event)
  }
}
