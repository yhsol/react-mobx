import { KeyboardEvent } from "react";

function useEnter(cb: any) {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      cb();
    }
  };
}

export default useEnter;
