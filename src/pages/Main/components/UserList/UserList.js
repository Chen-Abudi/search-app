import React, { useState } from "react";
import UserCard from "../../../../components/UserCard/UserCard";
import SearchBar from "../../components/UserList/components/SearchBar/SearchBar";
import styles from "./UserList.module.css";
import { useAppDataContext } from "../../../../contexts/AppContext";

const UserList = () => {
  const { users, posts, comments } = useAppDataContext();
  const [searchQuery, setSearchQuery] = useState("");

  // Updates the search query state when the search bar value changes
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the users based on the search query
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
