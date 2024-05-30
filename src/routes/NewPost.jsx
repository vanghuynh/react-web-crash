/* eslint-disable react/prop-types */
import Model from "../components/Modal";
import classes from "./NewPost.module.css";

import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Model>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea name="body" id="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export default NewPost;

export async function action({ request }) {
  const data = await request.formData();
  const newPost = Object.fromEntries(data);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
