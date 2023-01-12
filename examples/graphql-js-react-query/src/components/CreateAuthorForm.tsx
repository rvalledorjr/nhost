import { FormEvent } from 'react'

export interface CreateAuthorFormValues {
  name: string
  age: number
}

export interface CreateAuthorFormProps {
  onSubmit: (values: CreateAuthorFormValues) => Promise<void>
}

export default function CreateAuthorForm({ onSubmit }: CreateAuthorFormProps) {
  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!(event.target instanceof HTMLFormElement)) {
      return
    }

    const nameInput = event.target.children.namedItem('name') as HTMLInputElement
    const ageInput = event.target.children.namedItem('age') as HTMLInputElement

    const name = nameInput.value
    const age = parseInt(ageInput.value, 10)

    await onSubmit({ name, age })

    event.target.reset()
    nameInput.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="name" name="name" placeholder="Name" aria-label="Name" />
      <input id="age" name="age" placeholder="Age" aria-label="Age" type="number" />

      <button type="submit">Add</button>
    </form>
  )
}
