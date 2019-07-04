import React from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import {dummy} from "../forDev/dummy"
import {useSelector} from 'react-redux';



const Home = () => {
//  const {isLoggedIn} = userSelector(state => state.user);
  return (
    <div>
      {dummy.isLoggedIn && <PostForm/>}
      {dummy.mainPosts.map( data => <PostCard key={data} postCardData={data} />)}
    </div>
  );
};

export default Home;
