import { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import styled from "styled-components";

import { IGithubUserName } from "../type/api";
import { Container, Heading, Image, Link } from "../style/style";

const Error = styled.div`
  color: red;
`;

function App() {
  // How to type useState hook with typescript
  const [user, setUser] = useState<IGithubUserName>();
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    // If you are using then method, use catch function to catch the error
    getUsers()
      .then((data) => setUser(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {error ? <Error>{error?.message}</Error> : <img src={user?.avatar_url} />}
    </div>
  );
}

export default App;
