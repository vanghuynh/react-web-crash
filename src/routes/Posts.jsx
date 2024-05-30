import "./Posts.css";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <main>
      <Outlet />
      <PostList />
    </main>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const responseData = await response.json();
  return responseData.posts;
}
