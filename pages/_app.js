import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

const ReactProject = ({ Component }) => {
  return (
    <>
      <Head>
        <title>react-project</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        <Component style={{marginBottom:"30vh"}}/>
      </AppLayout>
    </>
  )
}

ReactProject.propTypes = {
  Component: PropTypes.elementType,
}


export default ReactProject;
