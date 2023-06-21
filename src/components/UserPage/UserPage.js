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
    const fetchData = () => {
      Promise.all([api.getUsers(), api.getPosts(), api.getComments()])
        .then(([userData, postsData, commentsData]) => {
          const user = userData.find((u) => u.id === Number(userId));
          setUser(user);
          const filteredPosts = postsData.filter(
            (post) => post.userId === Number(userId)
          );
          setPosts(filteredPosts);
          setComments(commentsData);
        })
        .catch((error) => console.error("Error retrieving data:", error));
    };

    fetchData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.UserPage}>
      <UserCard user={user} posts={posts} comments={comments} />
    </div>
  );
};

export default UserPage;
