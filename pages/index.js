import React from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import {dummy} from "../forDev/dummy"
import {useSelector} from 'react-redux';



const Home = () => {
 const {isLoggedIn} = useSelector(state => state.user);
 const {mainPosts} = useSelector(state => state.post);
 
  return (
    <div>
      {isLoggedIn && <PostForm/>}
      {mainPosts.map( data => <PostCard key={data} postCardData={data} />)}
    </div>
  );
};

export default Home;
