import React, { useState } from "react";
import axios from "axios";
import TopHeader from "./TopHeader";
import "./NewPost.css";

const NewPost = () => {
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    if (message && message.length > 0) {
      axios
        .post("http://localhost:8080/posts", {
          user_id: 1,
          message: message,
        })
        .then(() => {
          setMessage();
          document.getElementById("new-post-form").reset();
        });
    }

    event.preventDefault();
  };

  return (
    <>
      <TopHeader />
      <main>
        <div className="container">
          <form id="new-post-form" onSubmit={handleSubmit}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(event) => setMessage(event.target.value?.trim())}
              required
              autoFocus
            />
            <button type="submit">Post-it now</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default NewPost;
