import {useEffect} from "react";
import {PREVENT_SCROLL_CLASS} from "../../const";

export const usePreventPageScroll = () => {
  useEffect(() => {
    document.body.classList.add(PREVENT_SCROLL_CLASS);

    return () => {
      document.body.classList.remove(PREVENT_SCROLL_CLASS);
    };
  }, []);
};
