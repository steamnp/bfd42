// GET REQUEST (R)
export async function getUsers() {
  // ERROR HANDLING
  const output = await fetch(import.meta.env.VITE_API_URL)
  const data = await output.json()

  return data
}

// POST REQUEST (C)
// DELETE REQUEST (D)
// UPDATE REQUEST (U)

// CRUD operation on api
