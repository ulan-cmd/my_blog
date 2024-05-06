import React from "react";
import styles from "./../../styles/button.module.css";

const Button = ({ text, className }) => {
  return (
    <button className={`${styles.btn} ${styles[className]}`}>{text}</button>
  );
};

export default Button;
