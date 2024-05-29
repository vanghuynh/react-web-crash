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
