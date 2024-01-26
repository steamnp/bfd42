import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'
import { Container, Heading, Image, Link } from '../style/style'
import { User } from '../type/api'

function App() {
  // How to type useState hook with typescript
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  }, [])

  return (
    <div>
      {users.map((user) => {
        return (
          <Container key={user.id}>
            <Heading>{user.login.toUpperCase()}</Heading>
            <Image src={user.avatar_url} alt="" />
            <Link href={user.html_url} target="_blank">
              View Profile
            </Link>
          </Container>
        )
      })}
    </div>
  )
}

export default App
