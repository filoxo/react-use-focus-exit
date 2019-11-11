import React from "react";

import styles from "./DemoMenuLink.css";

export function DemoMenuLink({ href, children }) {
  return (
    <a
      className={styles.DemoMenuAnchor}
      role="menuitem"
      href={href}
      tabIndex="-1"
    >
      {children}
    </a>
  );
}
