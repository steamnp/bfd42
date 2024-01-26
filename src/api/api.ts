import { User } from '../type/api'

export async function getUsers() {
  // Use try and catch block to hangle error in async await function
  try {
    const output = await fetch(import.meta.env.VITE_API_URL)
    const data: User[] = await output.json()

    return data
  } catch (error) {
    if (error instanceof Error) {
      // If the error is an instance of Error, you can access its properties
      throw new Error(error.message)
    } else {
      // If it's not an instance of Error, you can handle it accordingly
      throw new Error('An unknown error occurred')
    }
  }
}
