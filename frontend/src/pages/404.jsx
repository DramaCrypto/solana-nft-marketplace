import React from "react";
import { Link } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";

export default function () {
  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div className="section-404-page relative">
        <div className="content">
          4<span className="tf-color">0</span>4
        </div>
        <h2>Oh no... We lost this page</h2>
        <p>
          We searched everywhere but couldn’t find what you’re looking for.
          <br />
          Let’s find a better place for you to go.
        </p>
        <Link to="/" className="tf-button w320 style-1 h50">
          Back to home
          <i className="icon-arrow-up-right2" />
        </Link>
      </div>
    </Layout>
  );
}
