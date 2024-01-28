import { useEffect, useState } from "react";
import { getUsers } from "../api/api";

import { IGithubUserName } from "../type/api";
import { Container, Error, Heading, Image } from "../style/style";

function App() {
  const [user, setUser] = useState<IGithubUserName>();
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    getUsers()
      .then((data) => setUser(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {error ? (
        <Error>{error?.message}</Error>
      ) : (
        <Container>
          <Image src={user?.avatar_url} />
          <Heading>{user?.login.toUpperCase()}</Heading>
        </Container>
      )}
    </div>
  );
}

export default App;
