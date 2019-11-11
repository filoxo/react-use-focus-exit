import React from "react";

import { useFocusExit } from "react-use-focus-exit.esm";
import Button from "./Button";
import styles from "./DemoMenu.css";

/* 
  This Demo Menu component is based on the WAI ARIA Authoring Practices Menu Button example https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html
  It is *NOT* complete, but should be a good start. 
*/

export function DemoMenu({ id, children }) {
  const menuId = id + "-menu";

  const menuContainerRef = React.useRef();
  const menuRef = React.useRef();
  const menuItemsRef = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  /* 
    useFocusExit gives you the ability to bind the onBlur handler manually. The only use case I can think of using this is to compose any additional logic you might need to add with this library's `onBlur`.
  */
  const onBlur = useFocusExit(menuContainerRef, focusIsWithin => {
    setIsOpen(focusIsWithin);
  });

  React.useEffect(() => {
    // If menu is open, transfer focus to it
    if (isOpen) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  React.useEffect(() => {
    // If we have a ref to the menu, get all menuitems so we can control focus through them
    if (menuRef.current) {
      menuItemsRef.current = Array.from(
        menuRef.current.querySelectorAll('[role="menuitem"]')
      );
    }
  }, [menuRef]);

  // Get index, can wrap around the array of menuitems
  const getWrapIndex = i =>
    ((i % menuItemsRef.current.length) + menuItemsRef.current.length) %
    menuItemsRef.current.length;

  // Find which menuitem is already focused
  const getCurrentItemIndex = () =>
    menuItemsRef.current.indexOf(document.activeElement);

  const navigateMenuItems = e => {
    switch (e.key) {
      case "ArrowUp": {
        // Move focus "up" to the previous menuitem
        e.preventDefault();
        const currentItemIndex = Math.max(getCurrentItemIndex(), 0);
        menuItemsRef.current[getWrapIndex(currentItemIndex - 1)].focus();
        break;
      }
      case "ArrowDown": {
        // Move focus "down" to the next menuitem
        e.preventDefault();
        const currentItemIndex = getCurrentItemIndex();
        menuItemsRef.current[getWrapIndex(currentItemIndex + 1)].focus();
        break;
      }
    }
  };

  return (
    <span
      ref={menuContainerRef}
      className={styles.DemoMenuContainer}
      onBlur={onBlur}
      onKeyDown={navigateMenuItems}
    >
      <Button
        id={id}
        type="button"
        aria-haspopup="true"
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu Options
      </Button>
      <div
        id={menuId}
        role="menu"
        aria-labelledby={id}
        className={styles.DemoMenu}
        ref={menuRef}
        style={{ visibility: isOpen ? null : "hidden" }}
      >
        <span className={styles.DemoMenuArrow} aria-hidden="true"></span>
        {children}
      </div>
    </span>
  );
}
