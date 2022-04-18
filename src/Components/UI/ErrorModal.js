import React from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <>
      <div onClick={props.closeModalHandler} className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.closeModalHandler}>OK</Button>
        </footer>
      </Card>
    </>
  );
}
