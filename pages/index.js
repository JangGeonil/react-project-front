import React from "react";
import Head from "next/head";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import {dummy} from "../dummy"



const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm/>}
      {dummy.mainPosts.map( data => <PostCard key={data} postCardData={data} />)}
    </div>
  );
};

export default Home;
