import { User } from '../type/api'

export async function getUsers() {
  const output = await fetch(import.meta.env.VITE_API_URL)

  // Type the response of API with typescript
  const data: User[] = await output.json()

  return data
}
