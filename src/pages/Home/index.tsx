import { getAuth } from "firebase/auth";
import { FC, useState } from "react";
import { Layout } from "../../components/Layout";
import { signOutUser } from "../../utils";

import "./styles.scss";

export const Home: FC = (props) => {
  const auth = getAuth();
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  const handleLogout = async (e: any) => {
    e.preventDefault();
    console.log({ auth });
    await signOutUser(auth);
    setisLoggedIn(false);
  };

  return (
    <Layout>
      <div className="home-page">
        <h1>Home page</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </Layout>
  );
};
