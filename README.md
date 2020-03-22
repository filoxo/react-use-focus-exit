# react-use-focus-exit

The purpose of this library is to provide a way to handle when focus *exits a specific container*. Visit the demo site for some use cases.

I created this as a very lightweight alternative to react-onclickoutside, which seems to do a lot more than necessary and caused performance problems for me.

See it in action at https://filoxo.github.io/react-use-focus-exit/

## Install

```sh
yarn add -S react-use-focus-exit
# or
npm i -S react-use-focus-exit
```

## Usage

### FocusExit component

```js
import React from 'react';
import { FocusExit } from "react-use-focus-exit";

export default function YourComponent(props) {
  return (
    <FocusExit
      onFocusExit={focusIsWithin => {
        if(focusIsWithin) {
          // Do something if focus is still inside the container
        } else {
          // Do something if focus has left the container
        }
      }}
      elem="span"
      {...props}
    />
  )
}
```

#### Props

| prop | default | description |
|---|---|---|
| onFocusExit | function | callback that is executed at every blur event within the container and called with result of checking if focus is within the container (eg. `focusIsWithin`) |
| elem | "div" | the wrapping element type; should always be a React element that renders an HTML node as event handlers are bound to this |

### useFocusExit hook

`useFocusExit` gives you the ability to bind the `onBlur` handler manually. The only use case I can think of for using this instead of the FocusExit component is to compose any additional logic you might need to add with this library's `onBlur`.

```js
import React, { useRef } from 'react';
import { useFocusExit } from 'react-use-focus-exit';

export default function YourComponent(props) {
  const containerRef = useRef()
  const onBlur = useFocusExit(containerRef, focusIsWithin => {
    if(focusIsWithin) {
      // Do something if focus is still inside the container
    } else {
      // Do something if focus has left the container
    }
  })
  return (
    <div ref={containerRef} onBlur={onBlur}>{/* more components */}</div>
  )
}
```

<small>Note: React `onBlur` and `onFocus` events bubble up, which is non-standard behavior but intentional from the library. See [issue#6410](https://github.com/facebook/react/issues/6410#issuecomment-207064994) for more info.</small>

#### Params

| param | description |
|---|---|
| containerRef | a React ref to the container which you want watch for when focus has exited it |
| callback | callback that is executed at every blur event within the container and called with result of checking if focus is within the container (eg. `focusIsWithin`) |
