import React, { useEffect, useState } from "react";
import axios from "axios";
import TopHeader from "./TopHeader";
import "./PostsFeed.css";

const PostsFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios.get(`http://localhost:8080/posts`).then((res) => {
        setPosts(res.data);
      });
    };

    fetchPosts();
  }, []);

  return (
    <>
      <TopHeader showNotifications={true} />
      <main>
        <div className="container">
          {!posts || posts.length === 0 ? (
            <h2>Oops, there are no posts to show yet!</h2>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Message</th>
                  <th>Timestamp</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.message}</td>
                    <td>{post.timestamp?.slice(0, 10)}</td>
                    <td>{post.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
};

export default PostsFeed;
