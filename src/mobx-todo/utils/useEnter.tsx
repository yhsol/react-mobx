import { KeyboardEvent } from "react";

function onPressEnter(cb: any) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      cb();
    }
  };
}

export default onPressEnter;
