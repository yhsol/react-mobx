import { KeyboardEvent } from "react";

function onEnterPress(cb: any) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      cb();
    }
  };
}

export default onEnterPress;
