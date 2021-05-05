import {useEffect} from "react";

export const useInputFocusOnOpen = (inputRef) => {
  useEffect(() => {
    inputRef.current.focus();
  }, []);
};
