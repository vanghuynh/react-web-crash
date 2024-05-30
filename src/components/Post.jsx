/* eslint-disable react/prop-types */
import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <Link to={`/${props.id}`}>
      <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </li>
    </Link>
  );
}
export default Post;
