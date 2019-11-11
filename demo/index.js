(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = global || self, factory(global.React, global.ReactDOM));
}(this, function (React$1, ReactDOM) { 'use strict';

  var React$1__default = 'default' in React$1 ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function e() {
    return (e = Object.assign || function (r) {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];

        for (var n in e) {
          Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
        }
      }

      return r;
    }).apply(this, arguments);
  }

  function n(r, t) {
    if (null == r) return {};

    var e,
        n,
        o = function (r, t) {
      if (null == r) return {};
      var e,
          n,
          o = {},
          c = Object.keys(r);

      for (n = 0; n < c.length; n++) {
        e = c[n], t.indexOf(e) >= 0 || (o[e] = r[e]);
      }

      return o;
    }(r, t);

    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(r);

      for (n = 0; n < c.length; n++) {
        e = c[n], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(r, e) && (o[e] = r[e]);
      }
    }

    return o;
  }

  function o(t, e) {
    return React$1.useCallback(function (r) {
      e(t.current.contains(r.relatedTarget));
    }, [t, e]);
  }

  function c(r) {
    var c = r.onFocusExit,
        u = r.elem,
        i = void 0 === u ? "div" : u,
        l = n(r, ["onFocusExit", "elem"]),
        a = React$1.useRef(),
        f = o(a, c);
    return React.createElement(i, e({}, l, {
      onBlur: f,
      ref: a
    }));
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".Button_Button__dhA4y {\n  border: 1px solid steelblue;\n  border-radius: 4px;\n  padding: 4px 8px;\n}";
  var styles = {"Button":"Button_Button__dhA4y"};
  styleInject(css);

  function Button(props) {
    return React$1__default.createElement("button", _extends({}, props, {
      className: styles.Button
    }));
  }

  var css$1 = ".Input_Input__35nej {\n  border: 1px solid steelblue;\n  border-radius: 4px;\n  padding: 4px 8px;\n  width: 100%;\n}";
  var styles$1 = {"Input":"Input_Input__35nej"};
  styleInject(css$1);

  function Input(props) {
    return React$1__default.createElement("input", _extends({}, props, {
      className: styles$1.Input
    }));
  }

  var css$2 = ".DemoFormBanner_DemoFormBanner__3jFa6 {\n  background: darkred;\n  color: white;\n  font-size: 0.8rem;\n  margin: 0 -.5rem .5rem;\n  padding: .25rem .5rem;\n}";
  var styles$2 = {"DemoFormBanner":"DemoFormBanner_DemoFormBanner__3jFa6"};
  styleInject(css$2);

  function DemoFormBaner(props) {
    return React$1__default.createElement("div", _extends({}, props, {
      className: styles$2.DemoFormBanner
    }));
  }

  var css$3 = ".DemoForm_DemoForm__lYE3Y {\n  border: 1px solid steelblue;\n  border-radius: 4px;\n  padding: .5rem .49rem; /* .49... subpixel rounding? */\n}";
  var styles$3 = {"DemoForm":"DemoForm_DemoForm__lYE3Y"};
  styleInject(css$3);

  function DemoForm() {
    var _useState = React$1.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        formContainsFocus = _useState2[0],
        setFormContainsFocus = _useState2[1];

    React$1.useEffect(function () {
      var timer = formContainsFocus ? setTimeout(function () {
        return setFormContainsFocus(!formContainsFocus);
      }, 4000) : null;
      return function () {
        return clearTimeout(timer);
      };
    }, [formContainsFocus]);
    return React$1__default.createElement(c, {
      elem: "form",
      onSubmit: function onSubmit(e) {
        return e.preventDefault();
      },
      onFocusExit: function onFocusExit(focusIsWithin) {
        setFormContainsFocus(!focusIsWithin);
      },
      className: styles$3.DemoForm
    }, formContainsFocus && React$1__default.createElement(DemoFormBaner, null, React$1__default.createElement("p", null, "Focus has left the form. Maybe do something like save the form state, or notify the user that the form still requires additional interaction.", " "), React$1__default.createElement("p", null, "This banner will close 4s after displaying.")), React$1__default.createElement("label", {
      style: {
        display: "flex"
      }
    }, "Email:", " ", React$1__default.createElement(Input, {
      type: "text",
      placeholder: "email@domain.com",
      style: {
        marginLeft: 8
      }
    })), React$1__default.createElement("p", {
      tabIndex: "0"
    }, "Custom tabbable thing"), React$1__default.createElement(Button, {
      type: "submit"
    }, "Submit"));
  }

  var css$4 = ".DemoMenu_DemoMenuContainer__14bB4 {\n  position: relative;\n}\n\n.DemoMenu_DemoMenu__3Q3SD {\n  background: white;\n  border: 1px solid steelblue;\n  border-radius: 4px;\n  box-shadow: \n    0 -3px 3px rgba(0,0,0,.1), \n    0 3px 3px rgba(0,0,0,.2);\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  left: 50%;\n  margin-bottom: 1rem;\n  min-width: 125px;\n  padding: 4px 0;    \n  position: absolute;\n  top: calc(100% + 5px);\n  transform: translateX(-50%);\n}\n\n.DemoMenu_DemoMenuArrow__WF8OF {\n  border-bottom: 5px solid steelblue;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  display: block;\n  height: 0;  \n  margin-top: -4px;\n  width: 0;\n  transform: translateY(-5px);\n}";
  var styles$4 = {"DemoMenuContainer":"DemoMenu_DemoMenuContainer__14bB4","DemoMenu":"DemoMenu_DemoMenu__3Q3SD","DemoMenuArrow":"DemoMenu_DemoMenuArrow__WF8OF"};
  styleInject(css$4);

  /* 
    This Demo Menu component is based on the WAI ARIA Authoring Practices Menu Button example https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html
    It is *NOT* complete, but should be a good start. 
  */

  function DemoMenu(_ref) {
    var id = _ref.id,
        children = _ref.children;
    var menuId = id + "-menu";
    var menuContainerRef = React$1__default.useRef();
    var menuRef = React$1__default.useRef();
    var menuItemsRef = React$1__default.useRef();

    var _React$useState = React$1__default.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isOpen = _React$useState2[0],
        setIsOpen = _React$useState2[1];
    /* 
      useFocusExit gives you the ability to bind the onBlur handler manually. The only use case I can think of using this is to compose any additional logic you might need to add with this library's `onBlur`.
    */


    var onBlur = o(menuContainerRef, function (focusIsWithin) {
      setIsOpen(focusIsWithin);
    });
    React$1__default.useEffect(function () {
      // If menu is open, transfer focus to it
      if (isOpen) {
        menuRef.current.focus();
      }
    }, [isOpen]);
    React$1__default.useEffect(function () {
      // If we have a ref to the menu, get all menuitems so we can control focus through them
      if (menuRef.current) {
        menuItemsRef.current = Array.from(menuRef.current.querySelectorAll('[role="menuitem"]'));
      }
    }, [menuRef]); // Get index, can wrap around the array of menuitems

    var getWrapIndex = function getWrapIndex(i) {
      return (i % menuItemsRef.current.length + menuItemsRef.current.length) % menuItemsRef.current.length;
    }; // Find which menuitem is already focused


    var getCurrentItemIndex = function getCurrentItemIndex() {
      return menuItemsRef.current.indexOf(document.activeElement);
    };

    var navigateMenuItems = function navigateMenuItems(e) {
      switch (e.key) {
        case "ArrowUp":
          {
            // Move focus "up" to the previous menuitem
            e.preventDefault();
            var currentItemIndex = Math.max(getCurrentItemIndex(), 0);
            menuItemsRef.current[getWrapIndex(currentItemIndex - 1)].focus();
            break;
          }

        case "ArrowDown":
          {
            // Move focus "down" to the next menuitem
            e.preventDefault();

            var _currentItemIndex = getCurrentItemIndex();

            menuItemsRef.current[getWrapIndex(_currentItemIndex + 1)].focus();
            break;
          }
      }
    };

    return React$1__default.createElement("span", {
      ref: menuContainerRef,
      className: styles$4.DemoMenuContainer,
      onBlur: onBlur,
      onKeyDown: navigateMenuItems
    }, React$1__default.createElement(Button, {
      id: id,
      type: "button",
      "aria-haspopup": "true",
      "aria-controls": menuId,
      "aria-expanded": isOpen,
      onClick: function onClick() {
        return setIsOpen(!isOpen);
      }
    }, "Menu Options"), React$1__default.createElement("div", {
      id: menuId,
      role: "menu",
      "aria-labelledby": id,
      className: styles$4.DemoMenu,
      ref: menuRef,
      style: {
        visibility: isOpen ? null : "hidden"
      }
    }, React$1__default.createElement("span", {
      className: styles$4.DemoMenuArrow,
      "aria-hidden": "true"
    }), children));
  }

  var css$5 = "\n.DemoMenuLink_DemoMenuAnchor__1C59W {\n  box-sizing: border-box;\n  color: steelblue;\n  display: block;\n  font-size: .8rem;\n  padding: 4px 8px;\n  text-decoration: none;\n  width: 100%;  \n}\n.DemoMenuLink_DemoMenuAnchor__1C59W:hover, \n.DemoMenuLink_DemoMenuAnchor__1C59W:focus {\n  background: rgba(70, 130, 180, .2);\n}\n\n.DemoMenuLink_DemoMenuAnchor__1C59W:visited {\n  color: darkslateblue;\n}";
  var styles$5 = {"DemoMenuAnchor":"DemoMenuLink_DemoMenuAnchor__1C59W"};
  styleInject(css$5);

  function DemoMenuLink(_ref) {
    var href = _ref.href,
        children = _ref.children;
    return React$1__default.createElement("a", {
      className: styles$5.DemoMenuAnchor,
      role: "menuitem",
      href: href,
      tabIndex: "-1"
    }, children);
  }

  var App = function App() {
    return React$1__default.createElement(React$1__default.Fragment, null, React$1__default.createElement("section", null, React$1__default.createElement("h2", null, "Example 1: Accessible Dropdown example"), React$1__default.createElement("p", null, "This ", React$1__default.createElement("strong", null, "incomplete"), " Dropdown example is based on the", " ", React$1__default.createElement("a", {
      href: "https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html"
    }, "WAI-ARIA Menu Button example"), " ", "shows how you might use this component to handle closing the menu when focus leaves the trigger.")), React$1__default.createElement("section", null, React$1__default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "1rem 0"
      }
    }, React$1__default.createElement(DemoMenu, {
      id: "demo-options"
    }, React$1__default.createElement(DemoMenuLink, {
      href: "https://duckduckgo.com"
    }, "duckduckgo"), React$1__default.createElement(DemoMenuLink, {
      href: "https://google.com"
    }, "Google"), React$1__default.createElement(DemoMenuLink, {
      href: "https://bing.com"
    }, "Bing"))), React$1__default.createElement("h2", null, "Example 2: Form container"), React$1__default.createElement("p", null, "For this example, try into and then out of the form to display a banner."), React$1__default.createElement(DemoForm, null)));
  };

  ReactDOM.render(React$1__default.createElement(App, null), document.getElementById("root"));

}));
