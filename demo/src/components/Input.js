import React from "react";

import styles from "./Input.css";

export default function Input(props) {
  return <input {...props} className={styles.Input} />;
}
