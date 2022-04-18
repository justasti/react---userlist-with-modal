import styles from "./UsersList.module.css";
import React from "react";
import Card from "../UI/Card";

export default function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user, id) => {
          return (
            <li key={id}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
