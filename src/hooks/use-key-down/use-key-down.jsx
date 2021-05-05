import {useEffect} from "react";

export const useKeyDown = (handler) => {
  useEffect(() => {
    document.addEventListener(`keydown`, handler);

    return () => {
      document.removeEventListener(`keydown`, handler);
    };
  }, [handler]);
};

