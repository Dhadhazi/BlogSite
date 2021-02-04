import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 Page does not exist" />
      <div>The big empty!!!</div>
    </Layout>
  );
};

export default NotFoundPage;
