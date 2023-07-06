import React from "react";
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import styles from "./UserPage.module.css";
import { useAppDataContext } from "../../contexts/AppContext";

const UserPage = () => {
  const { userId } = useParams(); // This hook is used to retrieve the userId parameter from the URL
  const { users, posts, comments } = useAppDataContext();

  const user = users.find((u) => u.id === Number(userId));
  const filteredPosts = posts.filter((post) => post.userId === Number(userId));

  // If user state is null then this msg is displayed
  if (!user) {
    return <div>Error, user not found</div>;
  }

  return (
    <div className={styles.UserPage}>
      <UserCard user={user} posts={filteredPosts} comments={comments} />
    </div>
  );
};

export default UserPage;
