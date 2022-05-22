import { FC } from "react";
import { Layout } from "../../components/Layout";

import "./styles.scss";

const Home: FC = (props) => {
  return (
    <Layout>
      <div className="home-page">
        <h1>Home page</h1>
      </div>
    </Layout>
  );
};

export default Home;