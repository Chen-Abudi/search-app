import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserCard.module.css";

const UserCard = ({ user, posts, comments }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardContact}>
        <h3 className={styles.cardName}>
          <Link className={styles.cardNameLink} to={`/users/${user.id}`}> 
            {user.name}
          </Link>
        </h3>
        <div className={styles.cardHeaderInfo}>
          <p className={styles.cardEmail}>{user.email}</p>
          <p className={styles.cardPhone}>{user.phone}</p>
        </div>
      </div>
      <div>
        <div>
          <h4 className={styles.cardTitles}>Posts</h4>
          {posts.map((post) => (
            <details key={post.id}>
              <summary>{post.title}</summary>
              <p>{post.body}</p>
              <div className={styles.cardComments}>
                <h5 className={styles.cardTitles}>Comments</h5>
                {comments
                  .filter((comment) => comment.postId === post.id)
                  .map((comment) => (
                    <details
                      key={comment.id}
                      className={styles.cardCommentsBody}
                    >
                      <summary>{comment.email}</summary>
                      <p>{comment.body}</p>
                    </details>
                  ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </li>
  );
};

export default UserCard;
