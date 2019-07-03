import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>react-project</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
      </Head>
      <Layout>
        Hello world!
      </Layout>
    </>
  )
}

export default Home
