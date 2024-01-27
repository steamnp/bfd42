import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'

import { IGithubUserName } from '../type/api'
import { containerClass } from './style'

function App() {
  const [user, setUser] = useState<IGithubUserName>()
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    getUsers()
      .then((data) => setUser(data))
      .catch((error) => setError(error))
  }, [])

  // ?: optional chaining operator

  return (
    <div>
      {error ? (
        <div className="text-red-700">{error?.message}</div>
      ) : (
        <div className={containerClass}>
          <img className="rounded-full" src={user?.avatar_url} />
          <h2 className="text-blue-700 font-bold">{user?.name?.toUpperCase()}</h2>
        </div>
      )}
    </div>
  )
}

export default App
