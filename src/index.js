import { useCallback, useRef } from "react";

export function useFocusExit(containerRef, callback) {
  const checkFocusExit = useCallback(
    event => {
      callback(containerRef.current.contains(event.relatedTarget));
    },
    [containerRef, callback]
  );
  return checkFocusExit;
}

export function FocusExit({ onFocusExit, elem: Elem = "div", ...props }) {
  const containerRef = useRef();
  const onBlur = useFocusExit(containerRef, onFocusExit);
  return <Elem {...props} onBlur={onBlur} ref={containerRef} />;
}
