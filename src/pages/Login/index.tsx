import { FC, useState } from "react";
import { Layout } from "../../components/Layout";

import "./styles.scss";

const Login: FC = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
      
  }
  
  return (
    <Layout>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={() => {}} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={() => {}} />
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
