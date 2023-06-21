import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import UserCard from "../UserCard/UserCard";
import styles from "./UserPage.module.css";

const UserPage = () => {
  const { userId } = useParams(); // This hook is used to retrieve the userId parameter from the URL
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      Promise.all([api.getUsers(), api.getPosts(), api.getComments()])
        .then(([userData, postsData, commentsData]) => {
          // Finds the user data corresponding to the provided userId.
          const user = userData.find((u) => u.id === Number(userId));
          setUser(user);
          // Filter the posts data to only include posts by user with provided userId.
          const filteredPosts = postsData.filter(
            (post) => post.userId === Number(userId)
          );
          setPosts(filteredPosts);
          setComments(commentsData);
        })
        .catch((error) => console.error("Error retrieving data:", error));
    };

    fetchData(); // Calling this func when the component mounts or when the userId changes.
  }, [userId]);

  // If user state is null then this msg is displayed
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
