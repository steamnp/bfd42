import { useEffect, useState } from 'react'
import { getUsers } from '../api/api'
import { Container, Heading, Image, Link } from '../style/style'

// Promise
// Two resolve promises, there are two ways
// 1. async await (ES8)
// 2. then method (Es6)

function App() {
  const [users, setUsers] = useState([])

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

// [1,2,3,4,5].map((element,index) => {
//   return <div>hello</div>
// })
