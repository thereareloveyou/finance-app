import { RefObject, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  callback: () => void,
  exceptionsRefs?: RefObject<any>[]
) => {
  const handleOutisdeClick = (e: MouseEvent) => {
    if (
      exceptionsRefs?.some((exception) => exception.current.contains(e.target))
    ) {
      return;
    }

    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutisdeClick);

    return () => {
      document.removeEventListener("mousedown", handleOutisdeClick);
    };
  }, [ref]);
};
