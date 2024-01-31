import { useEffect, useState } from "react";
import { getUsers } from "../api/api";

import { IGithubUserName } from "../type/api";

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
        <div>{error?.message}</div>
      ) : (
        <div>
          <img src={user?.avatar_url} />
          <h2 className="text-blue-700 font-bold text-2xl">
            {user?.name.toUpperCase()}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;
