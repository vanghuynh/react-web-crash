/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Post from "./Post";
import classes from "./PostList.module.css";

import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsLoading(true);
    const response = await fetch("http://localhost:8080/posts");
    const responseData = await response.json();
    setPosts(responseData.posts);
    setIsLoading(false);
  }

  function addPostHandler(post) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((previousPosts) => {
      return [post, ...previousPosts];
    });
  }

  return (
    <>
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts &&
            posts.map((post) => (
              <Post key={post.body} author={post.author} body={post.body} />
            ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}
export default PostList;
