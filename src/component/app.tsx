import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'
import styled from 'styled-components'

import { User } from '../type/api'
import { Container, Heading, Image, Link } from '../style/style'

const Error = styled.div`
  color: red;
`

function App() {
  // How to type useState hook with typescript
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    // If you are using then method, use catch function to catch the error
    getUsers()
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
  }, [])

  return (
    <div>
      {error ? (
        <Error>{error?.message}</Error>
      ) : (
        users.map((user) => {
          return (
            <Container key={user.id}>
              <Heading>{user.login.toUpperCase()}</Heading>
              <Image src={user.avatar_url} alt="" />
              <Link href={user.html_url} target="_blank">
                View Profile
              </Link>
            </Container>
          )
        })
      )}
    </div>
  )
}

export default App
