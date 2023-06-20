import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import UserCard from "../UserCard/UserCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./UserList.module.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    api
      .getUsers()
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error getting users", error));

    api
      .getPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error getting posts", error));

    api
      .getComments()
      .then((data) => setComments(data))
      .catch((error) => console.error("Error getting comments", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.userListContainer}>
      <SearchBar onSearch={handleSearch} />
      <ul className={styles.userList}>
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            posts={posts.filter((post) => post.userId === user.id)}
            comments={comments}
          />
        ))}
      </ul>
    </section>
  );
};

export default UserList;
