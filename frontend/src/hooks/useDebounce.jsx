import React, { useCallback, useRef } from "react";

const useDebounce = (callBack, delay) => {
  const timerRef = useRef();

  const debounceFunction = useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => callBack(...args), delay);
    },
    [callBack, delay]
  );

  return debounceFunction;
};

export default useDebounce;
