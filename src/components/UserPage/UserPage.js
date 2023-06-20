import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import UserCard from "../UserCard/UserCard";
import styles from "./UserPage.module.css";

const UserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .getUsers()
        .then((data) => {
          const user = data.find((u) => u.id === Number(userId));
          setUser(user);
      })
        .catch((error) => console.error("Error getting users:", error));

    api
      .getPosts()
        .then((data) => setPosts(data.filter((post) => post.userId === Number(userId))))
        .catch((error) => console.error("Error getting posts:", error));

    api
      .getComments() 
        .then((data) => setComments(data))
        .catch((error) => console.error("Error getting comments:", error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <UserCard user={user} posts={posts} comments={comments} />
    </div>
  );
};

export default UserPage;