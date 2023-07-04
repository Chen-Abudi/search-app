import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import UserCard from "../UserCard/UserCard";
import styles from "./UserPage.module.css";

const UserPage = () => {
  const { userId } = useParams(); // This hook is used to retrieve the userId parameter from the URL
  const {users, posts, comments} = useAppDataContext();

  const user = userData.find((u) => u.id === Number(userId));
  const filteredPosts = postsData.filter(
    (post) => post.userId === Number(userId)
  );

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
