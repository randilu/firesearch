import { getAuth } from "firebase/auth";

import { FC, useState } from "react";
import { Layout } from "../../components/Layout";
import { signInWithUserCredentials } from "../../utils";
import { Home } from "../Home";

const Login: FC = (props) => {
  const auth = getAuth();
  const [username, setUserName] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log({ auth, username, password });
    const user = await signInWithUserCredentials(auth, username, password);
    if (user) {
      setisLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <Layout>
        <h1>Please Log In</h1>
        <form onSubmit={handleLogin}>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
    </Layout>
  );
};

export default Login;
