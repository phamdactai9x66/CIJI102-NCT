import React from "react";

const useEventListener = ({ event, callBack }, element) => {
  React.useEffect(() => {
    const elementTarget = element ? element() : null;

    if (!elementTarget) return;

    elementTarget.addEventListener(event, callBack);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      elementTarget.removeEventListener(event, callBack);
    };
  }, []);
};

export default useEventListener;
