import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home Page" />
      <div>Hello World</div>
    </Layout>
  );
};

export default IndexPage;
