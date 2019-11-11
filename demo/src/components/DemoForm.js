import React, { useState, useEffect } from "react";

import { FocusExit } from "react-use-focus-exit.esm";
import Button from "./Button";
import Input from "./Input";
import DemoFormBanner from "./DemoFormBanner";
import styles from "./DemoForm.css";

export default function DemoForm() {
  const [formContainsFocus, setFormContainsFocus] = useState(false);

  useEffect(() => {
    const timer = formContainsFocus
      ? setTimeout(() => setFormContainsFocus(!formContainsFocus), 4000)
      : null;
    return () => clearTimeout(timer);
  }, [formContainsFocus]);

  return (
    <FocusExit
      elem="form"
      onSubmit={e => e.preventDefault()}
      onFocusExit={focusIsWithin => {
        setFormContainsFocus(!focusIsWithin);
      }}
      className={styles.DemoForm}
    >
      {formContainsFocus && (
        <DemoFormBanner>
          <p>
            Focus has left the form. Maybe do something like save the form
            state, or notify the user that the form still requires additional
            interaction.{" "}
          </p>
          <p>This banner will close 4s after displaying.</p>
        </DemoFormBanner>
      )}
      <label style={{ display: "flex" }}>
        Email:{" "}
        <Input
          type="text"
          placeholder="email@domain.com"
          style={{ marginLeft: 8 }}
        />
      </label>
      <p tabIndex="0">Custom tabbable thing</p>
      <Button type="submit">Submit</Button>
    </FocusExit>
  );
}
