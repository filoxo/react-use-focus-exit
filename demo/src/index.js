import React from "react";
import ReactDOM from "react-dom";

import DemoForm from "./components/DemoForm";
import { DemoMenu } from "./components/DemoMenu";
import { DemoMenuLink } from "./components/DemoMenuLink";

const App = () => {
  return (
    <React.Fragment>
      <section>
        <h2>Example 1: Accessible Dropdown example</h2>
        <p>
          This <strong>incomplete</strong> Dropdown example is based on the{" "}
          <a href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html">
            WAI-ARIA Menu Button example
          </a>{" "}
          shows how you might use this component to handle closing the menu when
          focus leaves the trigger.
        </p>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0"
          }}
        >
          {/* DemoMenu is an example of using the useFocusExit hook */}
          <DemoMenu id="demo-options">
            <DemoMenuLink href="https://duckduckgo.com">
              duckduckgo
            </DemoMenuLink>
            <DemoMenuLink href="https://google.com">Google</DemoMenuLink>
            <DemoMenuLink href="https://bing.com">Bing</DemoMenuLink>
          </DemoMenu>
        </div>
        <h2>Example 2: Form container</h2>
        <p>
          For this example, try into and then out of the form to display a
          banner.
        </p>
        {/* DemoForm is an example of using the FocusExit component */}
        <DemoForm />
      </section>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
