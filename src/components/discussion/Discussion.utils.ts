import { RefObject } from "react";

export const scrollToDown = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.scrollTop = ref.current.scrollHeight;
  }
};
