/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Post from "./Post";
import classes from "./PostList.module.css";

import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  function addPostHandler(post) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts &&
            posts.map((post) => (
              <Post
                key={post.body}
                id={post.id}
                author={post.author}
                body={post.body}
              />
            ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default PostList;
