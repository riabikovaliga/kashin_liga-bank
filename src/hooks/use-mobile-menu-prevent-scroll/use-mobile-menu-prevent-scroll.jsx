import {useEffect} from "react";
import {PREVENT_SCROLL_MOBILE_MENU_CLASS} from "../../const";

export const useMobileMenuPreventScroll = (isMenuOpened) => {
  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add(PREVENT_SCROLL_MOBILE_MENU_CLASS);
    } else {
      document.body.classList.remove(PREVENT_SCROLL_MOBILE_MENU_CLASS);
    }
  }, [isMenuOpened]);
};
