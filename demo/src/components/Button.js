import React from "react";

import styles from "./Button.css";

export default function Button(props) {
  return <button {...props} className={styles.Button} />;
}
